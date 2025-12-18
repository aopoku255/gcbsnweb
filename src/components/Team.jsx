import adomakoImage from "../assets/1.jpg";
const people = [
  {
    name: "Adomako Ansah Nana",
    // role: "Co-Founder / CEO",
    imageUrl: adomakoImage,
  },
  {
    name: "Edward Ntim Gasu, PhD",
    // role: "Co-Founder / CTO",
    imageUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAMFBMVEXk5ueutLfn6eqrsbS2u77h4+S7wMLIzM7FycvZ3N3W2du/xMayt7rN0dOorrHd4OGhaypWAAAEOElEQVR4nO2c2ZrDIAhGG9Qsbnn/tx1tp0vStFUB9SL/1bQ3cz4QRMFeLqdOnTp16tSpU6d6FkBrgmMFLLUu2gXpRanrF90ILosz0novorz3g5zd2gsirLMchBg2Cp/lvLYnhIuTfsf2YPRSq6aIAE5+gPu3onQtI0bbb3Q3RKsbAYIyP+mi/NzGyQnGu2tpADj5VLrg5Kk63phsvCugqWtB9TVsjwBlzWSYjRcBK/KlR8YroKqFl7f2HoBjHQvCXIQXAOcagOAyEssO0FXAW0rpolZ2PiUReMJye7h48f0DTsyAa/Hiu8kye9jg8Lg3Oo3EC9UWpwEhf197E2eWxq6+KLuw4cGIxwu7CBvfSoAXxFUngMOvviHuclwrkMK9QVyVoCIx38DlYEThshWTgyHtuJvAx7OHAA1dEE+lT5RdBqYiARwZn9AcfBMdH0edTxYeXAFSdqo85OOoYRTR7hHFcQxBHYx2Ep3z+ZPv5GvI13t8DJ3nP5YKuvP9DXkztOHjuCUirF88S/2i6ezHcoVAdnxjumQjO3+IkQMvLEAqAzJdomqi8+/A1BFWloiP6/6FJgOyXfEC/nY3yvNdUJKUCDzRG0USwaxNLgI+y9hmJTAgbwdpxacYRjoCA3K3WAFpQPYm/4LrX7JPcaDK6CodfkQPji81PwWIe17+9v4FsQ2LSpN2pY0Qtr7WG2BJjPhqeEWdQr6u4KFyASvjxSDJIBRcR44vgEt6Hqw7/HcHTD6OMHb0vxPqFBMK2WI69gao3H6u/Y1OuJYj5HCZ5GdEIeTU+sEFrHr0h/uJ8GNT2z0U3CztEJ9W3M0W/rKdwF0FoLSbzShtkJRmdlq1duxONxwV9fjUjeBIraGuupLEh0dTcO9dxsxTfIbUlDKsObXoyVgfJbZZ5vYMyQ+jccuqqrs72GVxZrwG7a/8LKw0U8VwCf9ndSaUJOn1i4i73Lwo/hddYa3pWf602iGkH4KzWc0IoI3Nqfv2iGKQbC9V4KKn4dNTshxGlo0FwI0Iy20JpaEmXKeSJfdZXmq6YIFlJjLdU8HNmihWVrrG75aQwoZA7dlX+RF7rANX8tQoWWIYMZGSdgDCEYqp1MnhAMkMdyMsPd9l3RBg5IvOx2Td3t8SY7YJC14IogjzApmoU5kDmHNzTvQQIA9wTI9jukmcHMDUSy7CQd08QJsGSDenm6uUp/TQDi+p/dXIuf+yPxJhq7X3BPxqQboRoVIJ+Q2vQd57A/zSQyTo3uP1eUCB7oEMSv5DliEc4MTpeDyQcD4SqQ8DWj0svpuOPNw+tbzoIMmgnuVT66AabL1xbPU2pIUbayHXPkSaVi1HElsDrp3h7VYgVDmJZ0m+JmnStx002ryB7GbreOr193aaV6VH8i/Lr0O8l4kUWKgG10n1eKTZ1db71GPUkuRnIRh0nzPvMLtEXRfgH05tO6fRK+g7AAAAAElFTkSuQmCC",
  },
  {
    name: "Albert Doughan",
    // role: "Business Relations",
    imageUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAMFBMVEXk5ueutLfn6eqrsbS2u77h4+S7wMLIzM7FycvZ3N3W2du/xMayt7rN0dOorrHd4OGhaypWAAAEOElEQVR4nO2c2ZrDIAhGG9Qsbnn/tx1tp0vStFUB9SL/1bQ3cz4QRMFeLqdOnTp16tSpU6d6FkBrgmMFLLUu2gXpRanrF90ILosz0novorz3g5zd2gsirLMchBg2Cp/lvLYnhIuTfsf2YPRSq6aIAE5+gPu3onQtI0bbb3Q3RKsbAYIyP+mi/NzGyQnGu2tpADj5VLrg5Kk63phsvCugqWtB9TVsjwBlzWSYjRcBK/KlR8YroKqFl7f2HoBjHQvCXIQXAOcagOAyEssO0FXAW0rpolZ2PiUReMJye7h48f0DTsyAa/Hiu8kye9jg8Lg3Oo3EC9UWpwEhf197E2eWxq6+KLuw4cGIxwu7CBvfSoAXxFUngMOvviHuclwrkMK9QVyVoCIx38DlYEThshWTgyHtuJvAx7OHAA1dEE+lT5RdBqYiARwZn9AcfBMdH0edTxYeXAFSdqo85OOoYRTR7hHFcQxBHYx2Ep3z+ZPv5GvI13t8DJ3nP5YKuvP9DXkztOHjuCUirF88S/2i6ezHcoVAdnxjumQjO3+IkQMvLEAqAzJdomqi8+/A1BFWloiP6/6FJgOyXfEC/nY3yvNdUJKUCDzRG0USwaxNLgI+y9hmJTAgbwdpxacYRjoCA3K3WAFpQPYm/4LrX7JPcaDK6CodfkQPji81PwWIe17+9v4FsQ2LSpN2pY0Qtr7WG2BJjPhqeEWdQr6u4KFyASvjxSDJIBRcR44vgEt6Hqw7/HcHTD6OMHb0vxPqFBMK2WI69gao3H6u/Y1OuJYj5HCZ5GdEIeTU+sEFrHr0h/uJ8GNT2z0U3CztEJ9W3M0W/rKdwF0FoLSbzShtkJRmdlq1duxONxwV9fjUjeBIraGuupLEh0dTcO9dxsxTfIbUlDKsObXoyVgfJbZZ5vYMyQ+jccuqqrs72GVxZrwG7a/8LKw0U8VwCf9ndSaUJOn1i4i73Lwo/hddYa3pWf602iGkH4KzWc0IoI3Nqfv2iGKQbC9V4KKn4dNTshxGlo0FwI0Iy20JpaEmXKeSJfdZXmq6YIFlJjLdU8HNmihWVrrG75aQwoZA7dlX+RF7rANX8tQoWWIYMZGSdgDCEYqp1MnhAMkMdyMsPd9l3RBg5IvOx2Td3t8SY7YJC14IogjzApmoU5kDmHNzTvQQIA9wTI9jukmcHMDUSy7CQd08QJsGSDenm6uUp/TQDi+p/dXIuf+yPxJhq7X3BPxqQboRoVIJ+Q2vQd57A/zSQyTo3uP1eUCB7oEMSv5DliEc4MTpeDyQcD4SqQ8DWj0svpuOPNw+tbzoIMmgnuVT66AabL1xbPU2pIUbayHXPkSaVi1HElsDrp3h7VYgVDmJZ0m+JmnStx002ryB7GbreOr193aaV6VH8i/Lr0O8l4kUWKgG10n1eKTZ1db71GPUkuRnIRh0nzPvMLtEXRfgH05tO6fRK+g7AAAAAElFTkSuQmCC",
  },
  {
    name: "Emmanuel Boakye",
    // role: "Front-end Developer",
    imageUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAMFBMVEXk5ueutLfn6eqrsbS2u77h4+S7wMLIzM7FycvZ3N3W2du/xMayt7rN0dOorrHd4OGhaypWAAAEOElEQVR4nO2c2ZrDIAhGG9Qsbnn/tx1tp0vStFUB9SL/1bQ3cz4QRMFeLqdOnTp16tSpU6d6FkBrgmMFLLUu2gXpRanrF90ILosz0novorz3g5zd2gsirLMchBg2Cp/lvLYnhIuTfsf2YPRSq6aIAE5+gPu3onQtI0bbb3Q3RKsbAYIyP+mi/NzGyQnGu2tpADj5VLrg5Kk63phsvCugqWtB9TVsjwBlzWSYjRcBK/KlR8YroKqFl7f2HoBjHQvCXIQXAOcagOAyEssO0FXAW0rpolZ2PiUReMJye7h48f0DTsyAa/Hiu8kye9jg8Lg3Oo3EC9UWpwEhf197E2eWxq6+KLuw4cGIxwu7CBvfSoAXxFUngMOvviHuclwrkMK9QVyVoCIx38DlYEThshWTgyHtuJvAx7OHAA1dEE+lT5RdBqYiARwZn9AcfBMdH0edTxYeXAFSdqo85OOoYRTR7hHFcQxBHYx2Ep3z+ZPv5GvI13t8DJ3nP5YKuvP9DXkztOHjuCUirF88S/2i6ezHcoVAdnxjumQjO3+IkQMvLEAqAzJdomqi8+/A1BFWloiP6/6FJgOyXfEC/nY3yvNdUJKUCDzRG0USwaxNLgI+y9hmJTAgbwdpxacYRjoCA3K3WAFpQPYm/4LrX7JPcaDK6CodfkQPji81PwWIe17+9v4FsQ2LSpN2pY0Qtr7WG2BJjPhqeEWdQr6u4KFyASvjxSDJIBRcR44vgEt6Hqw7/HcHTD6OMHb0vxPqFBMK2WI69gao3H6u/Y1OuJYj5HCZ5GdEIeTU+sEFrHr0h/uJ8GNT2z0U3CztEJ9W3M0W/rKdwF0FoLSbzShtkJRmdlq1duxONxwV9fjUjeBIraGuupLEh0dTcO9dxsxTfIbUlDKsObXoyVgfJbZZ5vYMyQ+jccuqqrs72GVxZrwG7a/8LKw0U8VwCf9ndSaUJOn1i4i73Lwo/hddYa3pWf602iGkH4KzWc0IoI3Nqfv2iGKQbC9V4KKn4dNTshxGlo0FwI0Iy20JpaEmXKeSJfdZXmq6YIFlJjLdU8HNmihWVrrG75aQwoZA7dlX+RF7rANX8tQoWWIYMZGSdgDCEYqp1MnhAMkMdyMsPd9l3RBg5IvOx2Td3t8SY7YJC14IogjzApmoU5kDmHNzTvQQIA9wTI9jukmcHMDUSy7CQd08QJsGSDenm6uUp/TQDi+p/dXIuf+yPxJhq7X3BPxqQboRoVIJ+Q2vQd57A/zSQyTo3uP1eUCB7oEMSv5DliEc4MTpeDyQcD4SqQ8DWj0svpuOPNw+tbzoIMmgnuVT66AabL1xbPU2pIUbayHXPkSaVi1HElsDrp3h7VYgVDmJZ0m+JmnStx002ryB7GbreOr193aaV6VH8i/Lr0O8l4kUWKgG10n1eKTZ1db71GPUkuRnIRh0nzPvMLtEXRfgH05tO6fRK+g7AAAAAElFTkSuQmCC",
  },
  {
    name: "Prisca Nketiah Baah",
    // role: "Designer",
    imageUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAMFBMVEXk5ueutLfn6eqrsbS2u77h4+S7wMLIzM7FycvZ3N3W2du/xMayt7rN0dOorrHd4OGhaypWAAAEOElEQVR4nO2c2ZrDIAhGG9Qsbnn/tx1tp0vStFUB9SL/1bQ3cz4QRMFeLqdOnTp16tSpU6d6FkBrgmMFLLUu2gXpRanrF90ILosz0novorz3g5zd2gsirLMchBg2Cp/lvLYnhIuTfsf2YPRSq6aIAE5+gPu3onQtI0bbb3Q3RKsbAYIyP+mi/NzGyQnGu2tpADj5VLrg5Kk63phsvCugqWtB9TVsjwBlzWSYjRcBK/KlR8YroKqFl7f2HoBjHQvCXIQXAOcagOAyEssO0FXAW0rpolZ2PiUReMJye7h48f0DTsyAa/Hiu8kye9jg8Lg3Oo3EC9UWpwEhf197E2eWxq6+KLuw4cGIxwu7CBvfSoAXxFUngMOvviHuclwrkMK9QVyVoCIx38DlYEThshWTgyHtuJvAx7OHAA1dEE+lT5RdBqYiARwZn9AcfBMdH0edTxYeXAFSdqo85OOoYRTR7hHFcQxBHYx2Ep3z+ZPv5GvI13t8DJ3nP5YKuvP9DXkztOHjuCUirF88S/2i6ezHcoVAdnxjumQjO3+IkQMvLEAqAzJdomqi8+/A1BFWloiP6/6FJgOyXfEC/nY3yvNdUJKUCDzRG0USwaxNLgI+y9hmJTAgbwdpxacYRjoCA3K3WAFpQPYm/4LrX7JPcaDK6CodfkQPji81PwWIe17+9v4FsQ2LSpN2pY0Qtr7WG2BJjPhqeEWdQr6u4KFyASvjxSDJIBRcR44vgEt6Hqw7/HcHTD6OMHb0vxPqFBMK2WI69gao3H6u/Y1OuJYj5HCZ5GdEIeTU+sEFrHr0h/uJ8GNT2z0U3CztEJ9W3M0W/rKdwF0FoLSbzShtkJRmdlq1duxONxwV9fjUjeBIraGuupLEh0dTcO9dxsxTfIbUlDKsObXoyVgfJbZZ5vYMyQ+jccuqqrs72GVxZrwG7a/8LKw0U8VwCf9ndSaUJOn1i4i73Lwo/hddYa3pWf602iGkH4KzWc0IoI3Nqfv2iGKQbC9V4KKn4dNTshxGlo0FwI0Iy20JpaEmXKeSJfdZXmq6YIFlJjLdU8HNmihWVrrG75aQwoZA7dlX+RF7rANX8tQoWWIYMZGSdgDCEYqp1MnhAMkMdyMsPd9l3RBg5IvOx2Td3t8SY7YJC14IogjzApmoU5kDmHNzTvQQIA9wTI9jukmcHMDUSy7CQd08QJsGSDenm6uUp/TQDi+p/dXIuf+yPxJhq7X3BPxqQboRoVIJ+Q2vQd57A/zSQyTo3uP1eUCB7oEMSv5DliEc4MTpeDyQcD4SqQ8DWj0svpuOPNw+tbzoIMmgnuVT66AabL1xbPU2pIUbayHXPkSaVi1HElsDrp3h7VYgVDmJZ0m+JmnStx002ryB7GbreOr193aaV6VH8i/Lr0O8l4kUWKgG10n1eKTZ1db71GPUkuRnIRh0nzPvMLtEXRfgH05tO6fRK+g7AAAAAElFTkSuQmCC",
  },
];

export default function Team() {
  return (
    <div className="bg-[#262626] py-24 sm:py-32 relative isolate">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#680000] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            Discover the team which faciliates and supports our community
            activities
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-400">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
