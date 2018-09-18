import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  visibleImages = []
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }
  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id);
  }
  constructor() { }
}

const IMAGES = [
  {"id":1, "Category": "glass","caption":"glasses","url":"assets/img/glass1.jpg"},
  {"id":2, "Category": "glass","caption":"glasses","url":"assets/img/glass2.jpg"},
  {"id":3, "Category": "glass","caption":"glasses","url":"assets/img/glass3.jpg"},
  {"id":4, "Category": "glass","caption":"glasses","url":"assets/img/glass4.jpg"},
  {"id":5, "Category": "metal","caption":"metals","url":"assets/img/metal1.jpg"},
  {"id":6, "Category": "metal","caption":"metals","url":"assets/img/metal2.jpg"},
  {"id":7, "Category": "metal","caption":"metals","url":"assets/img/metal3.jpg"},
  {"id":8, "Category": "metal","caption":"metals","url":"assets/img/metal4.jpg"}
]
