import { BgDesktopDark, BgDesktopLight, BgMobileDark, BgMobileLight, IconMoon, IconSun } from "../assets";
import { SIZES } from "../constants";
import { useWindowDimension } from "../hooks/useWinodwDimension";
import { useThemeStore } from "../store/theme";


export const TodoHeader = () => {

  const changeMode = useThemeStore(state => state.changeMode);
  const dark = useThemeStore(state => state.dark);

  const { width, height } = useWindowDimension();

  const image = () => {
    if (width > 375) {
      return dark
        ? BgDesktopDark
        : BgDesktopLight;
    }

    return dark
      ? BgMobileDark
      : BgMobileLight;
  }

  const icon = dark
    ? IconSun
    : IconMoon;


  return (
    <header>
      <img
        src={image()}
        alt="Header Background"
        className="absolute top-0 left-0 -z-10 w-full h-52 object-cover"
      />
      <div className="mt-11 flex justify-between">
        <h1
          className="text-3xl font-bold text-white"
          style={{ letterSpacing: 8 }}
        >
          TODO
        </h1>
        <button
          onClick={changeMode}
        >
          <img src={icon} alt="Mode Icon" className="w-5" />
        </button>
      </div>
    </header>
  );
};

