import { useEffect, useState, useRef } from "react";
import "./header.scss";
import { HalfMoon, SunLight } from "iconoir-react";
import logo from "@/assets/logo.svg";
const DEFAULT_VALUE = ["Home", "About", "Services", "Portfolio", "Contact"];

export default function Header() {
  const [dark, setDark] = useState(false);
  const header = useRef<HTMLDivElement>(null);
  const sectionTop = useRef<number[]>([]);
  // 切换dark模式
  useEffect(() => {
    document.documentElement.classList.toggle("dark"); // 切换html class名
  }, [dark]);
  // 顶部导航栏的阴影
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    sectionTop.current = DEFAULT_VALUE.map((value) => {
      // 第一次初始化的时候获取每一个section距离顶部的距离
      const element = document.querySelector<HTMLElement>(`#${value}`);
      return (element?.offsetTop as number) - 60;
    }) as number[];

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // 监听滚动条距离，一直显示头部  添加class名
  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop; // 滚动条距离顶部距离

    const currentSection = sectionTop.current.findLastIndex(
      (section) => section <= scrollTop // 从后往前找第一个小于当前高度的位置就是当前页面所在的位置
    );
    if (scrollTop > 0) {
      header.current?.classList.add("shadow"); // 滚动条动力就添加className

      document.querySelector(".active")?.classList.remove("active"); // Home下面的条，先移除

      document
        .querySelector(`[href='#${DEFAULT_VALUE[currentSection]}']`)
        ?.classList.add("active"); // 再添加
    } else {
      header.current?.classList.remove("shadow"); // 移除头部的阴影
    }
  }
  // 切换暗黑模式
  const switchDark = () => {
    setDark((dark) => !dark);
  };

  return (
    <div className="header" ref={header}>
      <h2 className="header-logo">
        <img src={logo} alt="logo" />
      </h2>
      <nav className="header-list">
        {DEFAULT_VALUE.map((nav) => (
          <a key={nav} href={`#${nav}`}>
            {nav}
          </a>
        ))}
        <a>
          {!dark ? (
            <HalfMoon width={20} height={20} onClick={switchDark} />
          ) : (
            <SunLight width={20} height={20} onClick={switchDark} />
          )}
        </a>
      </nav>
    </div>
  );
}
