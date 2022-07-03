<script lang="ts">
  export let vote: Module.Ivote;
</script>

<div class="vote">
  <div class="vote-header">
    <button class="vote-header-button back">
      <img src="/images/icon/icon_back.svg" alt="backButton" />
    </button>
    <button class="vote-header-button menu">
      <img src="/images/icon/icon_menu.svg" alt="menuButton" />
    </button>
  </div>
  <div class="vote-content">
    <span class="vote-content-tag">라이프</span>
    <h3 class="vote-content-title">{vote?.title}</h3>
    <div class="vote-content-side agree">{vote?.agree_description}</div>
    <div class="vote-content-side opposite">{vote?.opposite_description}</div>
  </div>
  <div class="vote-info">
    <div class="vote-info-writer">
      <span class="vote-info-writer-image">
        <img src="/images/sample_user.svg" alt="sampleUser" />
      </span>
      <p class="vote-info-writer-nickname">UserName</p>
    </div>
    <div class="vote-info-count">
      <button class="vote-info-count-button vote-count">
        <img src="/images/icon/icon_vote_count.svg" alt="voteCount" />
        {vote?.vote_count}
      </button>
      <button class="vote-info-count-button like-count">
        <img src="/images/icon/icon_like_count.svg" alt="likeCount" />
        nnn
      </button>
      <button class="vote-info-count-button comment-count">
        <img src="/images/icon/icon_comment_count.svg" alt="commentCount" />
        mmm
      </button>
    </div>
  </div>
  <div class="nav">
    <button class="nav-home">
      <img src="/images/icon/icon_home.svg" alt="home" />
    </button>
  </div>
</div>

<style lang="scss">
  .vote {
    display: flex;
    flex-direction: column;
    height: 100%;
    &-header {
      display: flex;
      justify-content: space-between;
      padding-top: 4px;
      padding-left: 4px;
      &-button {
        width: 48px;
        height: 48px;
        padding: 0;
        border: none;
        background: #ffffff;
      }
    }
    &-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 38px 16px;
      &-tag {
        width: max-content;
        padding: 0 18px;
        height: 22px;
        text-align: center;
        border-radius: 20px;
        border: 1px solid rgba(85, 85, 85, 0.3);
        font-size: 12px;
        line-height: 22px;
        color: #555555;
        margin-bottom: 6px;
      }
      &-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 32px;
        font-weight: 500;
        line-height: 43px;
        color: #000000;
        word-break: keep-all;
        text-align: center;
        margin-bottom: 38px;
      }
      &-side {
        width: 100%;
        height: 132px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.06);
        border-radius: 15px;
        font-size: 20px;
        font-weight: 700;
        line-height: 29px;
        color: #222222;
        margin-bottom: 23px;
      }
    }
    &-info {
      display: flex;
      justify-content: space-between;
      padding: 0 18px 29px;
      &-writer {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        color: #555555;
      }
      &-count {
        display: flex;
        &-button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3px;
          padding: 0;
          font-size: 11px;
          width: 48px;
          height: 48px;
          border: none;
          background: #ffffff;
        }
      }
    }
  }
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.07);
    padding: 16px 0;
    &-home {
      border: none;
      background: #ffffff;
      padding: 0;
    }
  }
</style>
