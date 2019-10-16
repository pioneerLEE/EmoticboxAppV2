//
//  MessagesViewController.swift
//  StickerBrowser MessagesExtension
//
//  Created by jaewon LEE on 16/10/2019.
//  Copyright © 2019 jaewon LEE. All rights reserved. sex
//

import UIKit
import Messages

class MessagesViewController: MSMessagesAppViewController {
    let imageNames = ["하트손가락"]
    var stickers = [MSSticker]()
    
    @IBOutlet weak var browser: MSStickerBrowserView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        for imageName in imageNames{
            if let url = Bundle.main.url(forResource: imageName, withExtension: "gif"){
                do{
                    let sticker = try MSSticker(contentsOfFileURL: url, localizedDescription: "\(imageName)_sticker")
                    stickers.append(sticker)
                }catch{
                    
                }
            }
        }
        
        browser.dataSource = self
    }
}


extension MessagesViewController: MSStickerBrowserViewDataSource {
    func numberOfStickers(in stickerBrowserView: MSStickerBrowserView) -> Int {
        return stickers.count
    }
    
    func stickerBrowserView(_ stickerBrowserView: MSStickerBrowserView, stickerAt index: Int) -> MSSticker {
        return stickers[index]
    }
}
