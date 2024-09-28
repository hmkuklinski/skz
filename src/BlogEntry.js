export default function BlogEntry({title,date, sub, prev, imgsrc, article}){
    let blogTitle = title;
    let fullDate= date;
    let subTitle = sub;
    let imageSrc = imgsrc;
    let articleLink = article;
    return (
        <div className="blog-post">
            <div className="blog-box">
                <div className="blog-img">
                    <img src={imageSrc} alt="Blog Post"></img>
                </div>
                
                <div className="blog-text">
                    <span>{fullDate} | {subTitle}</span>
                    <a target="_blank" rel="noreferrer" href={articleLink} className="blog-title">{blogTitle}</a>
                    <div className="line"></div>
                    <p>{prev}</p>
                    <div className="blog-link">
                    <a href={articleLink} className="see-blog">Read Article <ion-icon name="arrow-forward-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    );

}