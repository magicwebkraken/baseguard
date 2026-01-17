(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [680], {
        1286: function (e, r, t) {
            Promise.resolve().then(t.bind(t, 6894))
        },
        5064: function (e, r, t) {
            "use strict";
            t.d(r, {
                $I: function () {
                    return u
                },
                EM: function () {
                    return m
                },
                F9: function () {
                    return h
                },
                Jn: function () {
                    return a
                },
                NY: function () {
                    return f
                },
                PX: function () {
                    return i
                },
                VX: function () {
                    return b
                },
                WD: function () {
                    return c
                },
                gb: function () {
                    return o
                },
                m8: function () {
                    return s
                },
                m9: function () {
                    return x
                },
                nQ: function () {
                    return d
                },
                pL: function () {
                    return l
                },
                vT: function () {
                    return p
                }
            }), t(3079);
            var n = t(2119);
            (0, n.$)("971097cec7467ddee949aa97ebaf368dc96037be");
            var s = (0, n.$)("6c199c758c7f11958b1b6d50d31eb775dc59ca65"),
                a = (0, n.$)("dba0c65704f97264758d3c7ab8fcc7293d329249"),
                i = (0, n.$)("dc074cc1abbf9f19846960492f9715afc2cb98d8"),
                d = (0, n.$)("d3f28b1000916d1784c8e143f22420f794824d2e"),
                l = (0, n.$)("2557896ae5f4eeb0a6108df5a10154fc138e356d"),
                o = (0, n.$)("35360eaf87d669fa2f67c179ba6fdef7e5a01831"),
                c = (0, n.$)("b854542f26b44f2c8f541d1f4a730cb52cd1a1a1"),
                u = (0, n.$)("cbc34a4ce339e37fd5b9bfef695e9c8b6aa84248"),
                f = (0, n.$)("3d51b7beb642469b297513639cc155a54bf9ff94"),
                x = (0, n.$)("6fbf1aa2befd7b51621ae06b9ea8403769945623"),
                m = (0, n.$)("dbb6f275af3989b1c5df971ea80efa465d26df8f"),
                h = (0, n.$)("d1d5ffb2a54cf39d838989a5fcb476bbf04b1a58"),
                p = (0, n.$)("f7a308c46d7d527ee36d148633eda6bba9c9b5a0"),
                b = (0, n.$)("4d49ede92b1c47f1e1c2db79558d8dca6e6b0816")
        },
        6894: function (e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function () {
                    return v
                }
            });
            var n = t(7437),
                s = t(2265),
                a = t(5064),
                i = t(9820),
                d = t(3804),
                l = t(2381),
                o = t(9140),
                c = t(9174),
                u = t(4456),
                f = t(7648),
                x = t(456),
                m = t(3448),
                h = t(2617),
                p = t(5291);
            let b = () => (0, n.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, n.jsx)("path", {
                        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
                    }), (0, n.jsx)("path", {
                        d: "M21 3v5h-5"
                    }), (0, n.jsx)("path", {
                        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
                    }), (0, n.jsx)("path", {
                        d: "M3 21v-5h5"
                    })]
                }),
                j = e => {
                    let {
                        pairs: r,
                        onRefresh: t,
                        loading: a
                    } = e, [o, h] = (0, s.useState)(1), [j, g] = (0, s.useState)(10), v = Math.ceil(r.length / j), w = r.slice((o - 1) * j, o * j);
                    return (0, n.jsxs)(i.Zb, {
                        children: [(0, n.jsxs)(i.Ol, {
                            className: "flex flex-row items-center justify-between",
                            children: [(0, n.jsxs)("div", {
                                children: [(0, n.jsx)(i.ll, {
                                    children: "Latest Pairs on Base"
                                }), (0, n.jsx)(i.SZ, {
                                    children: "The most recently created token pairs on the Base blockchain."
                                })]
                            }), (0, n.jsx)(l.z, {
                                onClick: t,
                                variant: "outline",
                                size: "icon",
                                disabled: a,
                                children: (0, n.jsx)(b, {
                                    className: (0, m.cn)(a && "animate-spin")
                                })
                            })]
                        }), (0, n.jsxs)(i.aY, {
                            children: [(0, n.jsx)("div", {
                                className: "w-full overflow-x-auto rounded-lg border",
                                children: (0, n.jsxs)(d.iA, {
                                    children: [(0, n.jsx)(d.xD, {
                                        children: (0, n.jsxs)(d.SC, {
                                            children: [(0, n.jsx)(d.ss, {
                                                children: "Token"
                                            }), (0, n.jsx)(d.ss, {
                                                className: "hidden sm:table-cell",
                                                children: "Created"
                                            }), (0, n.jsx)(d.ss, {
                                                children: "Actions"
                                            })]
                                        })
                                    }), (0, n.jsx)(d.RM, {
                                        children: w.map(e => {
                                            let r = e.pair;
                                            if (!r) return null;
                                            let t = "token0" === r.baseToken ? r.token0 : r.token1;
                                            return t ? (0, n.jsxs)(d.SC, {
                                                children: [(0, n.jsxs)(d.pj, {
                                                    children: [(0, n.jsxs)("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [(0, n.jsx)(u.T, {
                                                            className: "h-8 w-8"
                                                        }), (0, n.jsxs)("div", {
                                                            className: "max-w-[150px] sm:max-w-xs",
                                                            children: [(0, n.jsx)("p", {
                                                                className: "font-bold truncate text-xs sm:text-base",
                                                                children: t.name
                                                            }), (0, n.jsx)("p", {
                                                                className: "text-xs text-muted-foreground truncate",
                                                                children: t.symbol
                                                            })]
                                                        })]
                                                    }), (0, n.jsx)("div", {
                                                        className: "sm:hidden mt-2",
                                                        children: (0, n.jsx)(c.C, {
                                                            variant: "secondary",
                                                            children: (0, x.Q)(new Date(e.created_at), {
                                                                addSuffix: !0
                                                            })
                                                        })
                                                    })]
                                                }), (0, n.jsx)(d.pj, {
                                                    className: "hidden sm:table-cell",
                                                    children: (0, n.jsx)(c.C, {
                                                        variant: "secondary",
                                                        children: (0, x.Q)(new Date(e.created_at), {
                                                            addSuffix: !0
                                                        })
                                                    })
                                                }), (0, n.jsx)(d.pj, {
                                                    children: (0, n.jsx)(f.default, {
                                                        href: "/token/".concat(t.address),
                                                        passHref: !0,
                                                        children: (0, n.jsx)(l.z, {
                                                            variant: "outline",
                                                            size: "sm",
                                                            children: "Analyze"
                                                        })
                                                    })
                                                })]
                                            }, e.address) : null
                                        })
                                    })]
                                })
                            }), (0, n.jsxs)("div", {
                                className: "flex items-center justify-between flex-wrap gap-4 pt-4",
                                children: [(0, n.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, n.jsx)("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Rows per page:"
                                    }), (0, n.jsxs)(p.Ph, {
                                        value: String(j),
                                        onValueChange: e => {
                                            g(Number(e)), h(1)
                                        },
                                        children: [(0, n.jsx)(p.i4, {
                                            className: "w-[80px]",
                                            children: (0, n.jsx)(p.ki, {
                                                placeholder: j
                                            })
                                        }), (0, n.jsxs)(p.Bw, {
                                            children: [(0, n.jsx)(p.Ql, {
                                                value: "10",
                                                children: "10"
                                            }), (0, n.jsx)(p.Ql, {
                                                value: "25",
                                                children: "25"
                                            }), (0, n.jsx)(p.Ql, {
                                                value: "50",
                                                children: "50"
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex items-center gap-4",
                                    children: [(0, n.jsxs)("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: ["Page ", o, " of ", v]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [(0, n.jsx)(l.z, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: () => h(e => Math.max(1, e - 1)),
                                            disabled: 1 === o,
                                            children: "Previous"
                                        }), (0, n.jsx)(l.z, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: () => h(e => Math.min(v, e + 1)),
                                            disabled: o === v,
                                            children: "Next"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                g = () => (0, n.jsxs)(i.Zb, {
                    children: [(0, n.jsxs)(i.Ol, {
                        children: [(0, n.jsx)(o.O, {
                            className: "h-7 w-64"
                        }), (0, n.jsx)(o.O, {
                            className: "h-4 w-96 mt-2"
                        })]
                    }), (0, n.jsx)(i.aY, {
                        children: (0, n.jsx)("div", {
                            className: "space-y-2",
                            children: [...Array(10)].map((e, r) => (0, n.jsxs)("div", {
                                className: "flex items-center space-x-4 p-2",
                                children: [(0, n.jsx)(o.O, {
                                    className: "h-12 w-12 rounded-full"
                                }), (0, n.jsxs)("div", {
                                    className: "space-y-2 flex-1",
                                    children: [(0, n.jsx)(o.O, {
                                        className: "h-4 w-3/4"
                                    }), (0, n.jsx)(o.O, {
                                        className: "h-4 w-1/2"
                                    })]
                                }), (0, n.jsx)(o.O, {
                                    className: "h-8 w-24"
                                })]
                            }, r))
                        })
                    })]
                });

            function v() {
                let [e, r] = (0, s.useState)({}), [t, d] = (0, s.useState)(!0), [l, o] = (0, s.useState)(!1), c = async function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    e ? o(!0) : d(!0);
                    let t = await (0, a.WD)();
                    t.error && console.error(t.error), r(t), e ? o(!1) : d(!1)
                };
                return (0, s.useEffect)(() => {
                    c();
                    let e = setInterval(() => c(!0), 2e4);
                    return () => clearInterval(e)
                }, []), (0, n.jsx)("div", {
                    className: "container mx-auto max-w-4xl py-12",
                    children: (0, n.jsxs)(h.O, {
                        className: "w-full",
                        children: [t && (0, n.jsx)(g, {}), e.error && (0, n.jsxs)(i.Zb, {
                            children: [(0, n.jsxs)(i.Ol, {
                                children: [(0, n.jsx)(i.ll, {
                                    children: "Error"
                                }), (0, n.jsx)(i.SZ, {
                                    children: "Could not fetch new pairs."
                                })]
                            }), (0, n.jsx)(i.aY, {
                                children: (0, n.jsx)("p", {
                                    className: "text-destructive",
                                    children: e.error
                                })
                            })]
                        }), e.result && (0, n.jsx)(j, {
                            pairs: e.result,
                            onRefresh: () => c(!0),
                            loading: l
                        })]
                    })
                })
            }
        },
        2617: function (e, r, t) {
            "use strict";
            t.d(r, {
                O: function () {
                    return i
                }
            });
            var n = t(7437),
                s = t(8819),
                a = t(3448);

            function i(e) {
                let {
                    children: r,
                    className: t,
                    delay: i = "0s",
                    duration: d = "500ms",
                    threshold: l = .1
                } = e, {
                    ref: o,
                    inView: c
                } = (0, s.YD)({
                    triggerOnce: !0,
                    threshold: l
                });
                return (0, n.jsx)("div", {
                    ref: o,
                    className: (0, a.cn)("transition-all transform-gpu", c ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", t),
                    style: {
                        transitionDuration: d,
                        transitionDelay: i
                    },
                    children: r
                })
            }
        },
        4456: function (e, r, t) {
            "use strict";
            t.d(r, {
                T: function () {
                    return i
                }
            });
            var n = t(7437),
                s = t(3448),
                a = t(3145);

            function i(e) {
                let {
                    className: r
                } = e;
                return (0, n.jsx)(a.default, {
                    src: "/logo.png",
                    alt: "Base Guard Logo",
                    width: 100,
                    height: 100,
                    className: (0, s.cn)("rounded-sm", r)
                })
            }
        },
        9174: function (e, r, t) {
            "use strict";
            t.d(r, {
                C: function () {
                    return d
                }
            });
            var n = t(7437);
            t(2265);
            var s = t(7712),
                a = t(3448);
            let i = (0, s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                        outline: "text-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function d(e) {
                let {
                    className: r,
                    variant: t,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, a.cn)(i({
                        variant: t
                    }), r),
                    ...s
                })
            }
        },
        2381: function (e, r, t) {
            "use strict";
            t.d(r, {
                d: function () {
                    return l
                },
                z: function () {
                    return o
                }
            });
            var n = t(7437),
                s = t(2265),
                a = t(7053),
                i = t(7712),
                d = t(3448);
            let l = (0, i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                o = s.forwardRef((e, r) => {
                    let {
                        className: t,
                        variant: s,
                        size: i,
                        asChild: o = !1,
                        ...c
                    } = e, u = o ? a.g7 : "button";
                    return (0, n.jsx)(u, {
                        className: (0, d.cn)(l({
                            variant: s,
                            size: i,
                            className: t
                        })),
                        ref: r,
                        ...c
                    })
                });
            o.displayName = "Button"
        },
        9820: function (e, r, t) {
            "use strict";
            t.d(r, {
                Ol: function () {
                    return d
                },
                SZ: function () {
                    return o
                },
                Zb: function () {
                    return i
                },
                aY: function () {
                    return c
                },
                ll: function () {
                    return l
                }
            });
            var n = t(7437),
                s = t(2265),
                a = t(3448);
            let i = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: r,
                    className: (0, a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", t),
                    ...s
                })
            });
            i.displayName = "Card";
            let d = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: r,
                    className: (0, a.cn)("flex flex-col space-y-1.5 p-6", t),
                    ...s
                })
            });
            d.displayName = "CardHeader";
            let l = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: r,
                    className: (0, a.cn)("text-2xl font-semibold leading-none tracking-tight", t),
                    ...s
                })
            });
            l.displayName = "CardTitle";
            let o = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: r,
                    className: (0, a.cn)("text-sm text-muted-foreground", t),
                    ...s
                })
            });
            o.displayName = "CardDescription";
            let c = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: r,
                    className: (0, a.cn)("p-6 pt-0", t),
                    ...s
                })
            });
            c.displayName = "CardContent", s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: r,
                    className: (0, a.cn)("flex items-center p-6 pt-0", t),
                    ...s
                })
            }).displayName = "CardFooter"
        },
        5291: function (e, r, t) {
            "use strict";
            t.d(r, {
                Bw: function () {
                    return h
                },
                Ph: function () {
                    return c
                },
                Ql: function () {
                    return p
                },
                i4: function () {
                    return f
                },
                ki: function () {
                    return u
                }
            });
            var n = t(7437),
                s = t(2265),
                a = t(3402),
                i = t(3448);
            let d = () => (0, n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, n.jsx)("polyline", {
                        points: "20 6 9 17 4 12"
                    })
                }),
                l = () => (0, n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, n.jsx)("path", {
                        d: "m6 9 6 6 6-6"
                    })
                }),
                o = () => (0, n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, n.jsx)("path", {
                        d: "m18 15-6-6-6 6"
                    })
                }),
                c = a.fC;
            a.ZA;
            let u = a.B4,
                f = s.forwardRef((e, r) => {
                    let {
                        className: t,
                        children: s,
                        ...d
                    } = e;
                    return (0, n.jsxs)(a.xz, {
                        ref: r,
                        className: (0, i.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", t),
                        ...d,
                        children: [s, (0, n.jsx)(a.JO, {
                            asChild: !0,
                            children: (0, n.jsx)(l, {
                                className: "h-4 w-4 opacity-50"
                            })
                        })]
                    })
                });
            f.displayName = a.xz.displayName;
            let x = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)(a.u_, {
                    ref: r,
                    className: (0, i.cn)("flex cursor-default items-center justify-center py-1", t),
                    ...s,
                    children: (0, n.jsx)(o, {
                        className: "h-4 w-4"
                    })
                })
            });
            x.displayName = a.u_.displayName;
            let m = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)(a.$G, {
                    ref: r,
                    className: (0, i.cn)("flex cursor-default items-center justify-center py-1", t),
                    ...s,
                    children: (0, n.jsx)(l, {
                        className: "h-4 w-4"
                    })
                })
            });
            m.displayName = a.$G.displayName;
            let h = s.forwardRef((e, r) => {
                let {
                    className: t,
                    children: s,
                    position: d = "popper",
                    ...l
                } = e;
                return (0, n.jsx)(a.h_, {
                    children: (0, n.jsxs)(a.VY, {
                        ref: r,
                        className: (0, i.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === d && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t),
                        position: d,
                        ...l,
                        children: [(0, n.jsx)(x, {}), (0, n.jsx)(a.l_, {
                            className: (0, i.cn)("p-1", "popper" === d && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: s
                        }), (0, n.jsx)(m, {})]
                    })
                })
            });
            h.displayName = a.VY.displayName, s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)(a.__, {
                    ref: r,
                    className: (0, i.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", t),
                    ...s
                })
            }).displayName = a.__.displayName;
            let p = s.forwardRef((e, r) => {
                let {
                    className: t,
                    children: s,
                    ...l
                } = e;
                return (0, n.jsxs)(a.ck, {
                    ref: r,
                    className: (0, i.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
                    ...l,
                    children: [(0, n.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, n.jsx)(a.wU, {
                            children: (0, n.jsx)(d, {
                                className: "h-4 w-4"
                            })
                        })
                    }), (0, n.jsx)(a.eT, {
                        children: s
                    })]
                })
            });
            p.displayName = a.ck.displayName, s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)(a.Z0, {
                    ref: r,
                    className: (0, i.cn)("-mx-1 my-1 h-px bg-muted", t),
                    ...s
                })
            }).displayName = a.Z0.displayName
        },
        9140: function (e, r, t) {
            "use strict";
            t.d(r, {
                O: function () {
                    return a
                }
            });
            var n = t(7437),
                s = t(3448);

            function a(e) {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, s.cn)("animate-pulse rounded-md bg-muted", r),
                    ...t
                })
            }
        },
        3804: function (e, r, t) {
            "use strict";
            t.d(r, {
                RM: function () {
                    return l
                },
                SC: function () {
                    return o
                },
                iA: function () {
                    return i
                },
                pj: function () {
                    return u
                },
                ss: function () {
                    return c
                },
                xD: function () {
                    return d
                }
            });
            var n = t(7437),
                s = t(2265),
                a = t(3448);
            let i = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    className: "relative w-full overflow-auto",
                    children: (0, n.jsx)("table", {
                        ref: r,
                        className: (0, a.cn)("w-full caption-bottom text-sm", t),
                        ...s
                    })
                })
            });
            i.displayName = "Table";
            let d = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("thead", {
                    ref: r,
                    className: (0, a.cn)("[&_tr]:border-b", t),
                    ...s
                })
            });
            d.displayName = "TableHeader";
            let l = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("tbody", {
                    ref: r,
                    className: (0, a.cn)("[&_tr:last-child]:border-0", t),
                    ...s
                })
            });
            l.displayName = "TableBody", s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("tfoot", {
                    ref: r,
                    className: (0, a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t),
                    ...s
                })
            }).displayName = "TableFooter";
            let o = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("tr", {
                    ref: r,
                    className: (0, a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t),
                    ...s
                })
            });
            o.displayName = "TableRow";
            let c = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("th", {
                    ref: r,
                    className: (0, a.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", t),
                    ...s
                })
            });
            c.displayName = "TableHead";
            let u = s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("td", {
                    ref: r,
                    className: (0, a.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", t),
                    ...s
                })
            });
            u.displayName = "TableCell", s.forwardRef((e, r) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, n.jsx)("caption", {
                    ref: r,
                    className: (0, a.cn)("mt-4 text-sm text-muted-foreground", t),
                    ...s
                })
            }).displayName = "TableCaption"
        },
        3448: function (e, r, t) {
            "use strict";
            t.d(r, {
                cn: function () {
                    return a
                }
            });
            var n = t(1994),
                s = t(3335);

            function a() {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                return (0, s.m6)((0, n.W)(r))
            }
        }
    },
    function (e) {
        e.O(0, [137, 894, 264, 336, 249, 456, 971, 117, 744], function () {
            return e(e.s = 1286)
        }), _N_E = e.O()
    }
]);