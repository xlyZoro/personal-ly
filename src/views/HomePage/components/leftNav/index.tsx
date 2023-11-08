import "./index.scss";
import avatar from "@/assets/image/avatar.jpg";
import { GithubOutlined,HomeOutlined,PictureOutlined,TagsOutlined,GlobalOutlined,FolderOpenOutlined } from "@ant-design/icons";
function leftNav() {
  return (
    <div className="leftNav">
      <div className="msg">
        <div className="color-line">
          <div className="msg-avatar">
            <img src={avatar} alt="" />
          </div>
          <p className="msg-name">LaiYang Xin</p>
          <div className="msg-website">
            <a className="website" href="">
              <GithubOutlined />
              <span className="website-name">github</span>
            </a>
            <a className="website" href="">
              <GithubOutlined />
              <span className="website-name">知乎</span>
            </a>
            <a className="website" href="">
              <GithubOutlined />
              <span className="website-name">1</span>
            </a>
          </div>
          <div className="msg-content">
            <ul className="content">
              <li>
                <span>文章</span>
                <span>12</span>
              </li>
              <li>
                <span>音乐</span>
                <span>32</span>
              </li>
              <li>
                <span>照片</span>
                <span>123</span>
              </li>
            </ul>
          </div>
          <div className="msg-item">
            <ul className="item">
              <li>
              <HomeOutlined />
                <span>主页</span>
              </li>
              <li>
              <FolderOpenOutlined />
                <span>归档</span>
              </li>
              <li>
              <TagsOutlined />
                <span>标签</span>
              </li>
              <li>
              <PictureOutlined />
                <span>相册</span>
              </li>
              <li>
              <GlobalOutlined />
                <span>思考</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default leftNav;
