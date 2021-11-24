<template>
  <header id="header">
    <div class="container">
      <nav>
        <a href="#" class="logo">뷰.JS</a>
        <ul class="navList">
          <li class="active"><a href="#">영화</a></li>
          <li><a href="#">TV</a></li>
        </ul>
        <input type="text" placeholder="검색어를 입력하세요!" />
      </nav>
    </div>
  </header>
</template>
<style lang="scss">
#header {
  background: #000;
  font-size: 24px;
  font-family: 'GmarketSans';
  nav {
    display: flex;
    a {
      color: #fff;
      display: inline-block;
      padding: 10px 5px 3px;
      margin: 15px 5px 14px;
    }
    .navList {
      display: inline-block;
      li {
        display: inline-block;
        &.active a {
          border-bottom: 2px solid #fff;
        }
      }
    }
    input {
      margin-left: 30px;
      margin-top: 20px;
      width: 900px;
      height: 36px;
      border: 0;
      border-radius: 50px !important;
      padding: 0 20px;
      background-color: #282828;
      color: #fff;
    }
  }
}
</style>
