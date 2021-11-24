<template>
  <article
    class="posterWrap"
    :style="{ backgroundImage: 'url(img/banner_bg.jpg)' }"
  >
    <div class="container">
      <div class="poster_img">
        <img src="img/poster_img.jpg" alt="포스터" />
      </div>
      <div class="poster_txt">
        <h2>이터널스</h2>
        <strong>2021 • 157분 • 액션/모험/SF</strong>
        <span><em>★★★★☆</em> 5.7</span>
        <p>
          수 천년에 걸쳐 그 모습을 드러내지 않고 살아온 불멸의 히어로들이
          "어벤져스: 엔드게임" 이후 인류의 가장 오래된 적 '데비안츠'에 맞서기
          위해 다시 힘을 합치면서 벌어지는 이야기
        </p>
        <a href="view/Detail.vue">상세정보</a>
      </div>
    </div>
    <div class="number">
      <span>01</span>
    </div>
  </article>
</template>

<script>
// import { defineComponent } from '@vue/composition-api';

// export default defineComponent({
//   setup() {},
// });
</script>

<style>
/* 포스터 */
.posterWrap {
  padding: 100px 0;
  overflow: hidden;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.589);
  /* background-image: url(img/banner_bg.jpg); */
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  font-family: 'GmarketSans';
  position: relative;
}

.posterWrap .poster_img {
  margin-right: 50px;
  float: left;
}

.posterWrap .poster_img img {
  width: 420px;
}

.posterWrap .poster_txt h2 {
  font-family: 'GmarketSans';
  font-size: 80px;
  line-height: 80px;
  margin-bottom: 15px;
}

.posterWrap .poster_txt strong {
  display: block;
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 15px;
}

.posterWrap .poster_txt span {
  display: block;
  font-size: 20px;
  margin-bottom: 15px;
}

.posterWrap .poster_txt span em {
  color: #ffba07;
}

.posterWrap .poster_txt p {
  font-size: 24px;
  font-weight: 300;
  padding-bottom: 290px;
}
.posterWrap .poster_txt a {
  width: 192px;
  height: 57px;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 50px;
  color: #fff;
  font-size: 22px;
  font-weight: 300;
  padding: 15px 60px;
}
.posterWrap .number {
  position: absolute;
  right: 0;
  bottom: -18%;
}
.posterWrap .number span {
  font-size: 400px;
  font-weight: 700;
  opacity: 0.3;
}
</style>
