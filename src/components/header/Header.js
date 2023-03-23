import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Around the world</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
            className="headerImg"
            src="https://ast.indus.travel/prod/tour/bannerimage/banner_5cd1aeed54c07_around-the-world.jpg"
            alt=""
        />
    </div>
  );
}
