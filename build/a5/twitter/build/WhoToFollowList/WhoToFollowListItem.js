const WhoToFollowListItem = (who) => {
  return (`  
    <li class="list-group-item">                     
      <div class="row">
        <div class="col-3 col-xl-2 col-lg-3">
            <img src="${who.avatarIcon}" class="wd-image ml-0">
        </div>
        <div class="col-6 col-xl-7 col-lg-5">
            <b>${who.userName}</b>
            <i class="fa fa-check-circle"></i><br>
            @${who.handle}
        </div>
        <div class="col-3 col-xl-3 col-lg-4">
            <button class="btn btn-primary m-lg-2" style="border-radius: 50px;">
                Follow
            </button>
        </div>
      </div>
    </li>
  `);
}
export default WhoToFollowListItem;