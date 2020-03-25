import { Component, OnInit } from "@angular/core";
import { BranchService, Branch } from "../shared/branch.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-branch",
  templateUrl: "./branch.component.html",
  styleUrls: ["./branch.component.scss"]
})
export class BranchComponent implements OnInit {
  branch: Branch;
  constructor(
    private branchService: BranchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.branch = this.branchService.getBranchByName(param["params"].name);
    });
  }

  backroundImageStyle() {
    return {
      "background-image": 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.branch.imgUrl + ')',
      "background-position": "center center",
      "background-size": "cover",
      "background-repeat": "no-repeat"
    };
  }
}
