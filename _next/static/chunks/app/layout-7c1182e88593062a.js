(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        9109: function (e, t, s) {
            Promise.resolve().then(s.t.bind(s, 2972, 23)), Promise.resolve().then(s.t.bind(s, 5506, 23)), Promise.resolve().then(s.t.bind(s, 2778, 23)), Promise.resolve().then(s.bind(s, 2021)), Promise.resolve().then(s.bind(s, 7795)), Promise.resolve().then(s.bind(s, 2513)), Promise.resolve().then(s.bind(s, 6878)), Promise.resolve().then(s.bind(s, 6214)), Promise.resolve().then(s.bind(s, 5160))
        },
        2021: function (e, t, s) {
            "use strict";
            s.d(t, {
                Footer: function () {
                    return o
                }
            });
            var r = s(7437),
                a = s(7648),
                n = s(4456);

            function o() {
                return (0, r.jsx)("footer", {
                    className: "w-full bg-card border-t",
                    children: (0, r.jsx)("div", {
                        className: "container mx-auto px-4 sm:px-8 md:px-12 py-8",
                        children: (0, r.jsxs)("div", {
                            className: "grid gap-8 text-center md:text-left",
                            children: [(0, r.jsxs)("div", {
                                className: "flex justify-center md:justify-start items-center gap-2",
                                children: [(0, r.jsx)(n.T, {
                                    className: "h-8 w-8"
                                }), (0, r.jsx)("span", {
                                    className: "text-lg font-bold",
                                    children: "Base Guard"
                                })]
                            }), (0, r.jsx)("p", {
                                className: "text-xs text-muted-foreground max-w-4xl mx-auto md:mx-0",
                                children: "Base Guard is a digital token created for entertainment and community engagement. It is not an investment contract, security, or a guarantee of profit. The value of digital assets can be highly volatile; please participate only with funds you can afford to lose. By using this platform, you acknowledge the inherent risks associated with digital tokens, including the potential for a total loss of your contribution."
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground",
                                children: [(0, r.jsxs)("p", {
                                    children: ["\xa9 ", new Date().getFullYear(), " Base Guard. All rights reserved."]
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-wrap justify-center gap-4 items-center",
                                    children: [(0, r.jsx)(a.default, {
                                        href: "https://x.com/baseguardev",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-primary",
                                        children: "Twitter"
                                    }), (0, r.jsx)(a.default, {
                                        href: "https://t.me/baseguardev",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-primary",
                                        children: "Telegram"
                                    }), ]
                                })]
                            })]
                        })
                    })
                })
            }
        },
        7795: function (e, t, s) {
            "use strict";
            s.d(t, {
                Header: function () {
                    return G
                }
            });
            var r = s(7437),
                a = s(7648),
                n = s(9376),
                o = s(2381),
                i = s(3448),
                d = s(2265),
                l = s(9027),
                c = s(7712);
            let u = () => (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, r.jsx)("path", {
                        d: "M18 6 6 18"
                    }), (0, r.jsx)("path", {
                        d: "m6 6 12 12"
                    })]
                }),
                m = l.fC,
                f = l.xz;
            l.x8;
            let x = l.h_,
                p = d.forwardRef((e, t) => {
                    let {
                        className: s,
                        ...a
                    } = e;
                    return (0, r.jsx)(l.aV, {
                        className: (0, i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", s),
                        ...a,
                        ref: t
                    })
                });
            p.displayName = l.aV.displayName;
            let h = (0, c.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
                    variants: {
                        side: {
                            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
                        }
                    },
                    defaultVariants: {
                        side: "right"
                    }
                }),
                g = d.forwardRef((e, t) => {
                    let {
                        side: s = "right",
                        className: a,
                        children: n,
                        ...o
                    } = e;
                    return (0, r.jsxs)(x, {
                        children: [(0, r.jsx)(p, {}), (0, r.jsxs)(l.VY, {
                            ref: t,
                            className: (0, i.cn)(h({
                                side: s
                            }), a),
                            ...o,
                            children: [n, (0, r.jsxs)(l.x8, {
                                className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                                children: [(0, r.jsx)(u, {}), (0, r.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close"
                                })]
                            })]
                        })]
                    })
                });
            g.displayName = l.VY.displayName, d.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, r.jsx)(l.Dx, {
                    ref: t,
                    className: (0, i.cn)("text-lg font-semibold text-foreground", s),
                    ...a
                })
            }).displayName = l.Dx.displayName, d.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, r.jsx)(l.dk, {
                    ref: t,
                    className: (0, i.cn)("text-sm text-muted-foreground", s),
                    ...a
                })
            }).displayName = l.dk.displayName;
            var v = s(4456),
                j = s(4156),
                b = s(542),
                w = s(9778),
                y = s(7797),
                N = s(85);
            let k = () => (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, r.jsx)("polyline", {
                        points: "20 6 9 17 4 12"
                    })
                }),
                _ = () => (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, r.jsx)("path", {
                        d: "m9 18 6-6-6-6"
                    })
                }),
                T = () => (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                    })
                }),
                C = N.fC,
                S = N.xz;
            N.ZA, N.Uv, N.Tr, N.Ee, d.forwardRef((e, t) => {
                let {
                    className: s,
                    inset: a,
                    children: n,
                    ...o
                } = e;
                return (0, r.jsxs)(N.fF, {
                    ref: t,
                    className: (0, i.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", a && "pl-8", s),
                    ...o,
                    children: [n, (0, r.jsx)(_, {
                        className: "ml-auto"
                    })]
                })
            }).displayName = N.fF.displayName, d.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, r.jsx)(N.tu, {
                    ref: t,
                    className: (0, i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", s),
                    ...a
                })
            }).displayName = N.tu.displayName;
            let R = d.forwardRef((e, t) => {
                let {
                    className: s,
                    sideOffset: a = 4,
                    ...n
                } = e;
                return (0, r.jsx)(N.Uv, {
                    children: (0, r.jsx)(N.VY, {
                        ref: t,
                        sideOffset: a,
                        className: (0, i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", s),
                        ...n
                    })
                })
            });
            R.displayName = N.VY.displayName;
            let B = d.forwardRef((e, t) => {
                let {
                    className: s,
                    inset: a,
                    ...n
                } = e;
                return (0, r.jsx)(N.ck, {
                    ref: t,
                    className: (0, i.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", a && "pl-8", s),
                    ...n
                })
            });
            B.displayName = N.ck.displayName, d.forwardRef((e, t) => {
                let {
                    className: s,
                    children: a,
                    checked: n,
                    ...o
                } = e;
                return (0, r.jsxs)(N.oC, {
                    ref: t,
                    className: (0, i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s),
                    checked: n,
                    ...o,
                    children: [(0, r.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, r.jsx)(N.wU, {
                            children: (0, r.jsx)(k, {})
                        })
                    }), a]
                })
            }).displayName = N.oC.displayName, d.forwardRef((e, t) => {
                let {
                    className: s,
                    children: a,
                    ...n
                } = e;
                return (0, r.jsxs)(N.Rk, {
                    ref: t,
                    className: (0, i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s),
                    ...n,
                    children: [(0, r.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, r.jsx)(N.wU, {
                            children: (0, r.jsx)(T, {
                                className: "h-2 w-2 fill-current"
                            })
                        })
                    }), a]
                })
            }).displayName = N.Rk.displayName;
            let z = d.forwardRef((e, t) => {
                let {
                    className: s,
                    inset: a,
                    ...n
                } = e;
                return (0, r.jsx)(N.__, {
                    ref: t,
                    className: (0, i.cn)("px-2 py-1.5 text-sm font-semibold", a && "pl-8", s),
                    ...n
                })
            });
            z.displayName = N.__.displayName;
            let A = d.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, r.jsx)(N.Z0, {
                    ref: t,
                    className: (0, i.cn)("-mx-1 my-1 h-px bg-muted", s),
                    ...a
                })
            });
            A.displayName = N.Z0.displayName;
            var D = s(875),
                E = s(7692),
                O = s(1804),
                F = s(4348);
            let P = e => "".concat(e.slice(0, 6), "...").concat(e.slice(-4));

            function L() {
                let {
                    address: e,
                    isConnected: t
                } = (0, j.m)(), {
                    connect: s,
                    connectors: a
                } = (0, b.$)(), {
                    disconnect: n
                } = (0, w.q)(), {
                    data: i
                } = (0, y.K)({
                    address: e
                });
                (0, F.aC)();
                let d = a.find(e => "io.metamask" === e.id);
                return t && e ? (0, r.jsxs)(C, {
                    children: [(0, r.jsx)(S, {
                        asChild: !0,
                        children: (0, r.jsxs)(o.z, {
                            variant: "outline",
                            className: "flex items-center gap-2",
                            children: [P(e), (0, r.jsx)(D.Z, {})]
                        })
                    }), (0, r.jsxs)(R, {
                        children: [(0, r.jsx)(z, {
                            children: i ? (0, r.jsxs)("span", {
                                children: [parseFloat(i.formatted).toFixed(4), " ", i.symbol]
                            }) : "Loading..."
                        }), (0, r.jsx)(A, {}), (0, r.jsxs)(B, {
                            onClick: () => {
                                n()
                            },
                            className: "text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer",
                            children: [(0, r.jsx)(E.Z, {
                                className: "mr-2 h-4 w-4"
                            }), (0, r.jsx)("span", {
                                children: "Disconnect"
                            })]
                        })]
                    })]
                }) : (0, r.jsx)(r.Fragment, {
                    children: d && (0, r.jsxs)(o.z, {
                        onClick: () => {
                            d && s({
                                connector: d
                            })
                        },
                        variant: "default",
                        children: [(0, r.jsx)(O.Z, {
                            className: "mr-2 h-4 w-4"
                        }), "Connect MetaMask"]
                    }, d.id)
                })
            }
            var I = s(5922);

            function M() {
                let {
                    setTheme: e,
                    theme: t
                } = (0, I.F)(), [s, a] = d.useState(!1);
                if (d.useEffect(() => {
                        a(!0)
                    }, []), !s) return (0, r.jsx)("div", {
                    className: "w-14 h-8 rounded-full bg-gray-200 animate-pulse"
                });
                let n = "dark" === t;
                return (0, r.jsxs)("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [(0, r.jsx)("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: n,
                        onChange: () => e(n ? "light" : "dark")
                    }), (0, r.jsx)("div", {
                        className: "w-14 h-8 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500 theme-toggle-knob"
                    })]
                })
            }
            let V = () => (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, r.jsx)("line", {
                        x1: "4",
                        x2: "20",
                        y1: "12",
                        y2: "12"
                    }), (0, r.jsx)("line", {
                        x1: "4",
                        x2: "20",
                        y1: "6",
                        y2: "6"
                    }), (0, r.jsx)("line", {
                        x1: "4",
                        x2: "20",
                        y1: "18",
                        y2: "18"
                    })]
                }),
                U = [{
                    href: "https://basescan.org/address/0xcomingsoon",
                    label: "BASESCAN"
                }, {
                    href: "https://dexscreener.com/base/0xcomingsoon",
                    label: "DEXSCREENER"
                }, {
                    href: "https://www.dextools.io/app/en/base/pair-explorer/0xcomingsoon?t=1768638146971",
                    label: "DEXTOOLS"
                }, ];

            function W(e) {
                let {
                    href: t,
                    label: s
                } = e, o = (0, n.usePathname)() === t;
                return (0, r.jsx)(a.default, {
                    href: t,
                    className: (0, i.cn)("text-sm font-medium transition-colors hover:text-primary", o ? "text-primary" : "text-muted-foreground"),
                    children: s
                })
            }

            function G() {
                return (0, r.jsx)("header", {
                    className: "sticky top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-sm",
                    children: (0, r.jsxs)("div", {
                        className: "container mx-auto flex h-16 items-center justify-between",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center gap-6",
                            children: [(0, r.jsxs)(a.default, {
                                href: "/",
                                className: "flex items-center gap-2",
                                children: [(0, r.jsx)(v.T, {
                                    className: "h-8 w-8"
                                }), (0, r.jsx)("span", {
                                    className: "font-bold",
                                    children: "Base Guard"
                                })]
                            }), (0, r.jsx)("nav", {
                                className: "hidden items-center gap-6 lg:flex",
                                children: U.map(e => (0, r.jsx)(W, {
                                    href: e.href,
                                    label: e.label
                                }, e.href))
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center gap-2 lg:hidden",
                            children: [(0, r.jsx)(L, {}), (0, r.jsx)(M, {}), (0, r.jsxs)(m, {
                                children: [(0, r.jsx)(f, {
                                    asChild: !0,
                                    children: (0, r.jsxs)(o.z, {
                                        variant: "outline",
                                        size: "icon",
                                        children: [(0, r.jsx)(V, {}), (0, r.jsx)("span", {
                                            className: "sr-only",
                                            children: "Toggle navigation menu"
                                        })]
                                    })
                                }), (0, r.jsx)(g, {
                                    side: "left",
                                    children: (0, r.jsxs)("nav", {
                                        className: "grid gap-6 text-lg font-medium",
                                        children: [(0, r.jsxs)(a.default, {
                                            href: "/",
                                            className: "flex items-center gap-2 text-lg font-semibold mb-4",
                                            children: [(0, r.jsx)(v.T, {
                                                className: "h-8 w-8"
                                            }), (0, r.jsx)("span", {
                                                className: "font-bold",
                                                children: "Base Guard"
                                            })]
                                        }), U.map(e => (0, r.jsx)(a.default, {
                                            href: e.href,
                                            className: "text-muted-foreground hover:text-primary",
                                            children: e.label
                                        }, e.href)), (0, r.jsx)(a.default, {
                                            href: "https://x.com/baseguardev",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-muted-foreground hover:text-primary",
                                            children: "Twitter"
                                        }), (0, r.jsx)(a.default, {
                                            href: "https://t.me/baseguardev",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-muted-foreground hover:text-primary",
                                            children: "Telegram"
                                        }), (0, r.jsx)(a.default, {
                                            href: "https://base.meme/coin/base:0xe18D95Cbd9c526171BF3eb4ab36B7479eF388888",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-muted-foreground hover:text-primary",
                                            children: "Base.meme"
                                        })]
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "hidden items-center justify-end lg:flex",
                            children: (0, r.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [(0, r.jsxs)("div", {
                                    className: "hidden lg:flex items-center gap-4",
                                    children: [(0, r.jsx)(a.default, {
                                        href: "https://x.com/baseguardev",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                                        children: "Twitter"
                                    }), (0, r.jsx)(a.default, {
                                        href: "https://t.me/baseguardev",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                                        children: "Telegram"
                                    }), (0, r.jsx)(a.default, {
                                        href: "https://base.meme/coin/base:0xe18D95Cbd9c526171BF3eb4ab36B7479eF388888",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                                        children: "Base.meme"
                                    })]
                                }), (0, r.jsx)(L, {}), (0, r.jsx)(M, {})]
                            })
                        })]
                    })
                })
            }
        },
        2513: function (e, t, s) {
            "use strict";
            s.d(t, {
                ThemeProvider: function () {
                    return n
                }
            });
            var r = s(7437);
            s(2265);
            var a = s(5922);

            function n(e) {
                let {
                    children: t,
                    ...s
                } = e;
                return (0, r.jsx)(a.f, {
                    ...s,
                    children: t
                })
            }
        },
        6878: function (e, t, s) {
            "use strict";
            s.d(t, {
                Toaster: function () {
                    return k
                }
            });
            var r = s(7437),
                a = s(2265);
            let n = 0,
                o = new Map,
                i = e => {
                    if (o.has(e)) return;
                    let t = setTimeout(() => {
                        o.delete(e), u({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    o.set(e, t)
                },
                d = (e, t) => {
                    switch (t.type) {
                        case "ADD_TOAST":
                            return {
                                ...e, toasts: [t.toast, ...e.toasts].slice(0, 1)
                            };
                        case "UPDATE_TOAST":
                            return {
                                ...e, toasts: e.toasts.map(e => e.id === t.toast.id ? {
                                    ...e,
                                    ...t.toast
                                } : e)
                            };
                        case "DISMISS_TOAST": {
                            let {
                                toastId: s
                            } = t;
                            return s ? i(s) : e.toasts.forEach(e => {
                                i(e.id)
                            }), {
                                ...e,
                                toasts: e.toasts.map(e => e.id === s || void 0 === s ? {
                                    ...e,
                                    open: !1
                                } : e)
                            }
                        }
                        case "REMOVE_TOAST":
                            if (void 0 === t.toastId) return {
                                ...e,
                                toasts: []
                            };
                            return {
                                ...e, toasts: e.toasts.filter(e => e.id !== t.toastId)
                            }
                    }
                },
                l = [],
                c = {
                    toasts: []
                };

            function u(e) {
                c = d(c, e), l.forEach(e => {
                    e(c)
                })
            }

            function m(e) {
                let {
                    ...t
                } = e, s = (n = (n + 1) % Number.MAX_SAFE_INTEGER).toString(), r = () => u({
                    type: "DISMISS_TOAST",
                    toastId: s
                });
                return u({
                    type: "ADD_TOAST",
                    toast: {
                        ...t,
                        id: s,
                        open: !0,
                        onOpenChange: e => {
                            e || r()
                        }
                    }
                }), {
                    id: s,
                    dismiss: r,
                    update: e => u({
                        type: "UPDATE_TOAST",
                        toast: {
                            ...e,
                            id: s
                        }
                    })
                }
            }
            var f = s(1915),
                x = s(7712),
                p = s(3448);
            let h = () => (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, r.jsx)("path", {
                        d: "M18 6 6 18"
                    }), (0, r.jsx)("path", {
                        d: "m6 6 12 12"
                    })]
                }),
                g = f.zt,
                v = a.forwardRef((e, t) => {
                    let {
                        className: s,
                        ...a
                    } = e;
                    return (0, r.jsx)(f.l_, {
                        ref: t,
                        className: (0, p.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", s),
                        ...a
                    })
                });
            v.displayName = f.l_.displayName;
            let j = (0, x.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
                    variants: {
                        variant: {
                            default: "border bg-background text-foreground",
                            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                b = a.forwardRef((e, t) => {
                    let {
                        className: s,
                        variant: a,
                        ...n
                    } = e;
                    return (0, r.jsx)(f.fC, {
                        ref: t,
                        className: (0, p.cn)(j({
                            variant: a
                        }), s),
                        ...n
                    })
                });
            b.displayName = f.fC.displayName, a.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, r.jsx)(f.aU, {
                    ref: t,
                    className: (0, p.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", s),
                    ...a
                })
            }).displayName = f.aU.displayName;
            let w = a.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, r.jsx)(f.x8, {
                    ref: t,
                    className: (0, p.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", s),
                    "toast-close": "",
                    ...a,
                    children: (0, r.jsx)(h, {})
                })
            });
            w.displayName = f.x8.displayName;
            let y = a.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, r.jsx)(f.Dx, {
                    ref: t,
                    className: (0, p.cn)("text-sm font-semibold", s),
                    ...a
                })
            });
            y.displayName = f.Dx.displayName;
            let N = a.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, r.jsx)(f.dk, {
                    ref: t,
                    className: (0, p.cn)("text-sm opacity-90", s),
                    ...a
                })
            });

            function k() {
                let {
                    toasts: e
                } = function () {
                    let [e, t] = a.useState(c);
                    return a.useEffect(() => (l.push(t), () => {
                        let e = l.indexOf(t);
                        e > -1 && l.splice(e, 1)
                    }), [e]), {
                        ...e,
                        toast: m,
                        dismiss: e => u({
                            type: "DISMISS_TOAST",
                            toastId: e
                        })
                    }
                }();
                return (0, r.jsxs)(g, {
                    children: [e.map(function (e) {
                        let {
                            id: t,
                            title: s,
                            description: a,
                            action: n,
                            ...o
                        } = e;
                        return (0, r.jsxs)(b, {
                            ...o,
                            children: [(0, r.jsxs)("div", {
                                className: "grid gap-1",
                                children: [s && (0, r.jsx)(y, {
                                    children: s
                                }), a && (0, r.jsx)(N, {
                                    children: a
                                })]
                            }), n, (0, r.jsx)(w, {})]
                        }, t)
                    }), (0, r.jsx)(v, {})]
                })
            }
            N.displayName = f.dk.displayName
        },
        6214: function (e, t, s) {
            "use strict";
            s.d(t, {
                Web3ProviderClient: function () {
                    return x
                }
            });
            var r = s(7437),
                a = s(2979),
                n = s(9827),
                o = s(8342),
                i = s(9516),
                d = s(231),
                l = s(3111),
                c = s(5764),
                u = s(2265);
            let m = (0, o._)({
                    chains: [l.u],
                    connectors: [(0, c.O)()],
                    transports: {
                        [l.u.id]: (0, i.d)()
                    }
                }),
                f = new a.S;

            function x(e) {
                let {
                    children: t
                } = e, [s, a] = u.useState(!1);
                return u.useEffect(() => a(!0), []), (0, r.jsx)(d.F, {
                    config: m,
                    children: (0, r.jsx)(n.aH, {
                        client: f,
                        children: s && t
                    })
                })
            }
        },
        2778: function () {}
    },
    function (e) {
        e.O(0, [984, 358, 983, 137, 894, 264, 336, 156, 248, 225, 291, 819, 750, 971, 117, 744], function () {
            return e(e.s = 9109)
        }), _N_E = e.O()
    }
]);