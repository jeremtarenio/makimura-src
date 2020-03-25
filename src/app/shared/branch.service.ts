import { Injectable } from "@angular/core";

export class Branch {
  constructor(
    public name: string,
    public url: string,
    public imgUrl: string,
    public thumbUrl: string,
    public address: string,
    public googleMapEmbed: string,
    public googleMapLink: string,
    public email: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class BranchService {
  branches: Branch[] = [
    {
      name: "Angeles",
      url: "angeles",
      imgUrl: "assets/branches/angeles.jpg",
      thumbUrl: "assets/shop-1.jpg",
      address: "MarQuee Mall Space 0844, Level 1, F, Nepomuceno St, Angeles, 2009 Pampanga",
      googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.7290058021526!2d120.60946982920979!3d15.162955893755791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f207c2072df1%3A0x4058128120151108!2sMarQuee%20Mall!5e0!3m2!1sen!2sph!4v1585058780209!5m2!1sen!2sph",
      googleMapLink: "https://goo.gl/maps/4kADBvt8JStysy8MA",
      email: "angeles-support@makimura.com"
    },
    {
      name: "Clark",
      url: "clark",
      imgUrl: "assets/branches/clark.jpg",
      thumbUrl: "assets/shop-2.jpg",
      address: "Building 2060, Clark Parade Grounds, S. Osmeña, Clark Freeport, Mabalacat, Pampanga",
      googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.6461213073699!2d120.51989592922591!3d15.181147393643593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339692a913768c8b%3A0xc4f97cebc46d92ed!2sBuilding%202060%2C%20R.%20C.%20Santos%2C%20Clark%20Freeport%2C%20Mabalacat%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1584890391584!5m2!1sen!2sph",
      googleMapLink: "https://goo.gl/maps/1tT8Hhr7Qx1a9m696",
      email: "clark-support@makimura.com"
    },
    {
      name: "San Fernando",
      url: "sanfernando",
      imgUrl: "assets/branches/sfdo.jpg",
      thumbUrl: "assets/shop-3.jpg",
      address: "3M Bldg, McArthur Highway, San Agustin, San Fernando, Pampanga",
      googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.5560559555245!2d120.67123067614419!3d15.045543604628309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f71c0341439b%3A0xa766bfcc23bde528!2s3M%20Building!5e1!3m2!1sen!2sph!4v1585059174816!5m2!1sen!2sph",
      googleMapLink: "https://goo.gl/maps/dD4Yf29CE5F4fGg7A",
      email: "sfdo-support@makimura.com"
    }
  ];

  constructor() {}

  getBranches() {
    return this.branches.slice();
  }

  getBranchByName(name: string) {
    return this.branches.find(branch => {
      return branch.url === name;
    });
  }
}
