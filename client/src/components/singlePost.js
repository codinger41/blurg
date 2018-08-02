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
          
        <section id="related_posts" class="io-related_posts">
          <div class="container-fluid">
            <h2>Related Posts</h2>
            <div class="io-related_posts__content">
              <div class="io-related_posts__wrap">
                <div class="io-related_post">
                  <div class="io-rt_post">
                    <a href="#" class="io-rt_post__name">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </a>
                    <div class="io-rt_post__meta">
                      <div class="post-date">June 16, 2017</div>
                    </div>
                  </div>
                </div>
                <div class="io-related_post">
                  <div class="io-rt_post">
                    <a href="#" class="io-rt_post__name">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </a>
                    <div class="io-rt_post__meta">
                      <div class="post-date">June 16, 2017</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="io-comment_section">
          <div class="container-fluid">
            <h2 class="io-comment_section__title">Comments</h2>
            <div class="io-comment_list">
              <div class="io-comment">
                <div class="io-comment_info">
                  <div class="io-comment_author__thumb"></div>
                </div>
                <div class="io-comment_content">
                  <div class="io-comment_author__name"><a href="#">BackFlip Progression</a></div>
                  <div class="io-comment_meta">
                    <div class="io-comment_meta__date"> <a href="#">June 31, 2017 at 7:45 pm</a></div>
                    <div class="io-comment_meta__reply"><a href="#">Reply</a></div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum exercitationem accusantium quos illum excepturi, beatae vitae, obcaecati.</p>
                </div>
              </div>
              <div class="io-comment">
                <div class="io-comment_info">
                  <div class="io-comment_author__thumb"></div>
                </div>
                <div class="io-comment_content">
                  <div class="io-comment_author__name"><a href="#">BackFlip Progression</a></div>
                  <div class="io-comment_meta">
                    <div class="io-comment_meta__date"> <a href="#">June 31, 2017 at 7:45 pm</a></div>
                    <div class="io-comment_meta__reply"><a href="#">Reply</a></div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum exercitationem accusantium quos illum excepturi, beatae vitae, obcaecati.</p>
                </div>
              </div>
            </div>
            <div class="io-comment_form">
              <h3>Leave a comment</h3>
              <form class="io-contact_form">
                <div class="io-row">
                  <div class="col col--1-of-2 io-form__group">
                    <input type="text" placeholder="Name:" name="name" id="first-name" required="required" class="form_input"/>
                  </div>
                  <div class="col col--1-of-2 io-form__group">
                    <input type="text" placeholder="Email:" name="email" id="email" required="required" class="form_input"/>
                  </div>
                  <div class="col col--12-of-12 io-form__group">
                    <textarea rows="6" placeholder="Comment:" name="message" id="text_message" required="required" class="form_input"></textarea>
                  </div>
                  <div class="col col--12-of-12 io-form__group">
                    <input type="submit" value="Send Message" name="message" id="send_message" class="form_submit io-btn"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}