import { Component, OnInit, SimpleChanges, Input, OnChanges } from '@angular/core'
import { IFollowerId } from '../../person-profile.model'
import { ConfigurationsService } from '../../../../../../../../../library/ws-widget/utils/src/public-api'

@Component({
  selector: 'ws-app-following-list',
  templateUrl: './following-list.component.html',
  styleUrls: ['./following-list.component.scss'],
})
export class FollowingListComponent implements OnInit, OnChanges {
  @Input() wid = ''
  @Input() name = ''
  @Input() following: IFollowerId[] = []
  @Input() currentUserfollowers: string[] = []

  followingCurrentDisplay: IFollowerId[] = []
  followingCount = 0
  pageSize = 0
  currentUserProfile = false

  // paginator
  nextFollowingDisable = false
  previousFollowingDisable = false
  pageDisplaySize = 4
  lastIndexFollowingArray = 4
  startIndexFollowingArray = 0
  isInitialized = false

  constructor(private configSvc: ConfigurationsService) { }

  ngOnInit() {
    if (this.wid) {
      this.fetchFollowing()
      // if (this.type === 'followers') { this.fetchFollowers() } else { this.fetchFollowing() }
    }
    if (this.configSvc.userProfile) {
      if (this.wid === this.configSvc.userProfile.userId) {
        this.currentUserProfile = true

      }
    }
    this.isInitialized = true

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.wid) {
      if ((changes.wid.currentValue !== changes.wid.previousValue) && (this.isInitialized)) {
        this.followingCurrentDisplay = []
        this.wid = changes.wid.currentValue
        this.fetchFollowing()
        if (this.configSvc.userProfile) {
          if (this.wid === this.configSvc.userProfile.userId) {
            this.currentUserProfile = true

          }
        }
      }
    }
  }
  fetchFollowing() {
    if (this.following.length > this.pageDisplaySize) {
      this.followingCurrentDisplay = this.following.slice(this.startIndexFollowingArray, this.lastIndexFollowingArray)
      this.previousFollowingDisable = true
    } else {
      this.followingCurrentDisplay = this.following
    }
  }
  fetchNextFollowing() {
    if (this.previousFollowingDisable) {
      this.previousFollowingDisable = false
    }
    this.followingCurrentDisplay = []
    this.startIndexFollowingArray += this.pageDisplaySize
    this.lastIndexFollowingArray += this.pageDisplaySize
    if (this.lastIndexFollowingArray >= this.following.length) {
      this.nextFollowingDisable = true
    }
    this.followingCurrentDisplay = this.following.slice(this.startIndexFollowingArray, this.lastIndexFollowingArray)
  }
  fetchPreviousFollowing() {
    if (this.nextFollowingDisable) {
      this.nextFollowingDisable = false
    }
    this.followingCurrentDisplay = []
    this.startIndexFollowingArray -= this.pageDisplaySize
    this.lastIndexFollowingArray -= this.pageDisplaySize
    if (this.startIndexFollowingArray <= 0) {
      this.startIndexFollowingArray = 0
      this.previousFollowingDisable = true
    }
    this.followingCurrentDisplay = this.following.slice(this.startIndexFollowingArray, this.lastIndexFollowingArray)
  }
}
