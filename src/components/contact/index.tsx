import "./contact.scss";
export default function Contact() {
  return (
    <section className="contact" id="Contact">
      <h2 className="slideTop">
        <span>联系我们</span> 为孩子打造良好未来
      </h2>
      <form action="" method="POST">
        <div className="input-box">
          <input type="number" placeholder="请输入您的电话号码" />
          <input type="number" placeholder="输入您孩子的年龄" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="请输入您的电话号码" />
          <input type="number" placeholder="输入您孩子的年龄" />
        </div>
        <textarea name="detail" id="detail" cols={30} rows={15}></textarea>
        <button type="submit" className="btn">
          <a href="#">发送信息</a>
        </button>
      </form>
    </section>
  );
}
