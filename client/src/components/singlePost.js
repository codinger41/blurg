import React from 'react'

export default class SinglePost extends React.Component {
  render() {
    return (
      <div id="wrapper" class="io-page_wrapper">
        <article id="single" class="io-single_article">
          <div class="io-single_top">
            <div class="io-single_thumbnail"></div>
            <div class="io-article_categories cat">
              <ul class="post-categories">
                <li><a href="">culture</a></li>
                <li><a href="">home</a></li>
              </ul>
            </div>
            <h2 class="io-single_article__title">Welcome! I want to tell you a little about myself</h2>
            <div class="io-single_article__date"><span>April 14, 2014 7:05 a.m.</span></div>
          </div>
          <div class="io-single_middle">
            <div class="container-fluid">
              <div class="io-single__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ut, doloremque quaerat hic, omnis aut iste quod, cum molestias inventore vitae quae autem dolorem magni aspernatur amet dicta distinctio aperiam. Perferendis ea vel repellendus provident ipsa quam fuga, at illo, velit, aliquam dolore voluptatibus doloribus. Dolorum totam ut optio. Nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ut, doloremque quaerat hic, omnis aut iste quod, cum molestias inventore vitae quae autem dolorem magni aspernatur amet dicta distinctio aperiam. Perferendis ea vel repellendus provident ipsa quam fuga, at illo, velit, aliquam dolore voluptatibus doloribus. Dolorum totam ut optio. Nisi.</p>
                <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nostrum, veritatis consequatur nam laborum. Explicabo enim, debitis quia, repudiandae quis illum quod quo facilis blanditiis quidem totam nisi mollitia temporibus.</blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, in ab accusamus officiis, corporis amet possimus nostrum atque magni! Blanditiis doloribus fuga excepturi a. Corrupti repellendus consequuntur similique praesentium tempore? ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nostrum, veritatis consequatur nam laborum. Explicabo enim, debitis quia, repudiandae quis illum quod quo facilis blanditiis quidem totam nisi mollitia temporibus.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}