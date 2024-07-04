import { FormattedMessage } from "react-intl";
import FadeIn from "@/components/FadeIn";
import { AllPostsData } from "@/types";
import Date from "@/components/Date";
import Link from "next/link";

const BlogComponent = ({ allPostsData }: { allPostsData: AllPostsData[] }) => {
  return (
    <FadeIn>
      <section id="blog" className="section">
        <div className="blog-container">
          <h1>
            <FormattedMessage id="blog.title.1" />
            <span>
              <FormattedMessage id="blog.title.2" />
            </span>
          </h1>
          <div className="card">
            {allPostsData
              .filter(({ featured }: { featured: boolean }) => featured == true)
              .map(({ id, date, title, description }: AllPostsData) => (
                <ol className="blog_posts" key={id}>
                  <li className="post-card">
                    <div className="post-card__content">
                      <h2 className="post-card__title">
                        <Link href={`/posts/${id}`}>
                          <a className="post-card__link">{title}</a>
                        </Link>
                      </h2>
                      <small className="post-card__details">
                        <Date dateString={date} />
                      </small>
                      <p className="post-card__description">{description}</p>
                    </div>
                  </li>
                </ol>
              ))}
            {/*</div>*/}
          </div>
          <Link href="/posts" passHref>
            <a className="see-all">
              <span>
                <FormattedMessage id="blog.see.more" /> →
              </span>
            </a>
          </Link>
        </div>
      </section>
    </FadeIn>
  );
};

export default BlogComponent;
