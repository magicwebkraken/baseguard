(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        4989: function (e, t, r) {
            Promise.resolve().then(r.bind(r, 8431))
        },
        5064: function (e, t, r) {
            "use strict";
            r.d(t, {
                $I: function () {
                    return u
                },
                EM: function () {
                    return h
                },
                F9: function () {
                    return f
                },
                Jn: function () {
                    return n
                },
                NY: function () {
                    return x
                },
                PX: function () {
                    return i
                },
                VX: function () {
                    return g
                },
                WD: function () {
                    return c
                },
                gb: function () {
                    return d
                },
                m8: function () {
                    return a
                },
                m9: function () {
                    return m
                },
                nQ: function () {
                    return o
                },
                pL: function () {
                    return l
                },
                vT: function () {
                    return p
                }
            }), r(3079);
            var s = r(2119);
            (0, s.$)("971097cec7467ddee949aa97ebaf368dc96037be");
            var a = (0, s.$)("6c199c758c7f11958b1b6d50d31eb775dc59ca65"),
                n = (0, s.$)("dba0c65704f97264758d3c7ab8fcc7293d329249"),
                i = (0, s.$)("dc074cc1abbf9f19846960492f9715afc2cb98d8"),
                o = (0, s.$)("d3f28b1000916d1784c8e143f22420f794824d2e"),
                l = (0, s.$)("2557896ae5f4eeb0a6108df5a10154fc138e356d"),
                d = (0, s.$)("35360eaf87d669fa2f67c179ba6fdef7e5a01831"),
                c = (0, s.$)("b854542f26b44f2c8f541d1f4a730cb52cd1a1a1"),
                u = (0, s.$)("cbc34a4ce339e37fd5b9bfef695e9c8b6aa84248"),
                x = (0, s.$)("3d51b7beb642469b297513639cc155a54bf9ff94"),
                m = (0, s.$)("6fbf1aa2befd7b51621ae06b9ea8403769945623"),
                h = (0, s.$)("dbb6f275af3989b1c5df971ea80efa465d26df8f"),
                f = (0, s.$)("d1d5ffb2a54cf39d838989a5fcb476bbf04b1a58"),
                p = (0, s.$)("f7a308c46d7d527ee36d148633eda6bba9c9b5a0"),
                g = (0, s.$)("4d49ede92b1c47f1e1c2db79558d8dca6e6b0816")
        },
        8431: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function () {
                    return ed
                }
            });
            var s = r(7437),
                a = r(2265),
                n = r(4887),
                i = r(9376),
                o = r(279),
                l = r(2381);
            let d = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("polyline", {
                        points: "22 7 13.5 15.5 8.5 10.5 2 17"
                    }), (0, s.jsx)("polyline", {
                        points: "16 7 22 7 22 13"
                    })]
                }),
                c = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
                    }), (0, s.jsx)("path", {
                        d: "M12 9v4"
                    }), (0, s.jsx)("path", {
                        d: "M12 17h.01"
                    })]
                }),
                u = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M18 6 6 18"
                    }), (0, s.jsx)("path", {
                        d: "m6 6 12 12"
                    })]
                });

            function x() {
                let {
                    pending: e
                } = (0, n.useFormStatus)();
                return (0, s.jsx)(l.z, {
                    type: "submit",
                    "aria-disabled": e,
                    className: "w-full sm:w-auto shrink-0 h-12",
                    disabled: e,
                    children: e ? (0, s.jsxs)("div", {
                        className: "flex flex-row gap-2",
                        children: [(0, s.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-primary-foreground animate-bounce [animation-delay:.7s]"
                        }), (0, s.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-primary-foreground animate-bounce [animation-delay:.3s]"
                        }), (0, s.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-primary-foreground animate-bounce [animation-delay:.7s]"
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(d, {}), "Analyze Token"]
                    })
                })
            }

            function m(e) {
                let {
                    state: t
                } = e, [r, n] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    t.error ? n(!0) : n(!1)
                }, [t]), (0, s.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0, s.jsxs)("div", {
                        className: "flex flex-col sm:flex-row items-start gap-2",
                        children: [(0, s.jsxs)("div", {
                            className: "w-full relative",
                            children: [(0, s.jsx)("div", {
                                className: "absolute inset-0 rounded-lg border-2 border-primary pointer-events-none"
                            }), (0, s.jsx)(o.I, {
                                name: "address",
                                placeholder: "0x...",
                                className: "h-12 text-base border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                            })]
                        }), (0, s.jsx)(x, {})]
                    }), r && t.error && (0, s.jsxs)("div", {
                        className: "relative w-full flex flex-wrap items-center justify-center py-3 pl-4 pr-14 rounded-lg text-base font-medium transition-all duration-500 ease-in-out border-solid border border-destructive text-destructive [&_svg]:text-destructive group bg-destructive/10",
                        children: [(0, s.jsx)("button", {
                            type: "button",
                            "aria-label": "close-error",
                            onClick: () => n(!1),
                            className: "absolute right-4 p-1 rounded-md transition-opacity text-destructive border border-destructive opacity-40 hover:opacity-100",
                            children: (0, s.jsx)(u, {})
                        }), (0, s.jsxs)("p", {
                            className: "flex flex-row items-center mr-auto gap-x-2",
                            children: [(0, s.jsx)(c, {}), t.error]
                        })]
                    })]
                })
            }
            let h = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M21 12V7H5a2 2 0 0 1 0-4h14v4"
                    }), (0, s.jsx)("path", {
                        d: "M3 5v14a2 2 0 0 0 2 2h16v-5"
                    }), (0, s.jsx)("path", {
                        d: "M18 12a2 2 0 0 0 0 4h4v-4h-4z"
                    })]
                }),
                f = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
                    }), (0, s.jsx)("path", {
                        d: "M12 9v4"
                    }), (0, s.jsx)("path", {
                        d: "M12 17h.01"
                    })]
                }),
                p = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M18 6 6 18"
                    }), (0, s.jsx)("path", {
                        d: "m6 6 12 12"
                    })]
                });

            function g() {
                let {
                    pending: e
                } = (0, n.useFormStatus)();
                return (0, s.jsx)(l.z, {
                    type: "submit",
                    "aria-disabled": e,
                    className: "w-full sm:w-auto shrink-0 h-12",
                    disabled: e,
                    children: e ? (0, s.jsxs)("div", {
                        className: "flex flex-row gap-2",
                        children: [(0, s.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-primary-foreground animate-bounce [animation-delay:.7s]"
                        }), (0, s.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-primary-foreground animate-bounce [animation-delay:.3s]"
                        }), (0, s.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-primary-foreground animate-bounce [animation-delay:.7s]"
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(h, {}), "Analyze Wallet"]
                    })
                })
            }

            function v(e) {
                let {
                    state: t
                } = e, [r, n] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    (null == t ? void 0 : t.error) ? n(!0): n(!1)
                }, [t]), (0, s.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0, s.jsxs)("div", {
                        className: "flex flex-col sm:flex-row items-start gap-2",
                        children: [(0, s.jsxs)("div", {
                            className: "w-full relative",
                            children: [(0, s.jsx)("div", {
                                className: "absolute inset-0 rounded-lg border-2 border-primary pointer-events-none"
                            }), (0, s.jsx)(o.I, {
                                name: "address",
                                placeholder: "Enter wallet address or ENS...",
                                className: "h-12 text-base border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                            })]
                        }), (0, s.jsx)(g, {})]
                    }), r && (null == t ? void 0 : t.error) && (0, s.jsxs)("div", {
                        className: "relative w-full flex flex-wrap items-center justify-center py-3 pl-4 pr-14 rounded-lg text-base font-medium transition-all duration-500 ease-in-out border-solid border border-destructive text-destructive [&_svg]:text-destructive group bg-destructive/10",
                        children: [(0, s.jsx)("button", {
                            type: "button",
                            "aria-label": "close-error",
                            onClick: () => n(!1),
                            className: "absolute right-4 p-1 rounded-md transition-opacity text-destructive border border-destructive opacity-40 hover:opacity-100",
                            children: (0, s.jsx)(p, {})
                        }), (0, s.jsxs)("p", {
                            className: "flex flex-row items-center mr-auto gap-x-2",
                            children: [(0, s.jsx)(f, {}), t.error]
                        })]
                    })]
                })
            }
            var j = r(5064),
                w = r(610),
                b = r(8819),
                y = r(3448);
            let k = a.forwardRef((e, t) => {
                let {
                    className: r,
                    value: n,
                    ...i
                } = e, {
                    ref: o,
                    inView: l
                } = (0, b.YD)({
                    triggerOnce: !0,
                    threshold: .5
                }), [d, c] = a.useState(0);
                return a.useEffect(() => {
                    if (l) {
                        let e = setTimeout(() => c(n || 0), 100);
                        return () => clearTimeout(e)
                    }
                }, [l, n]), (0, s.jsx)(w.fC, {
                    ref: o,
                    className: (0, y.cn)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", r),
                    ...i,
                    children: (0, s.jsx)(w.z$, {
                        className: "h-full w-full flex-1 bg-primary transition-all duration-500",
                        style: {
                            transform: "translateX(-".concat(100 - (d || 0), "%)")
                        }
                    })
                })
            });
            k.displayName = w.fC.displayName;
            var N = r(9820),
                _ = r(2617);
            let C = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("rect", {
                        width: "18",
                        height: "18",
                        x: "3",
                        y: "3",
                        rx: "2"
                    }), (0, s.jsx)("circle", {
                        cx: "9",
                        cy: "9",
                        r: "2"
                    }), (0, s.jsx)("path", {
                        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                    })]
                }),
                L = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
                    }), (0, s.jsx)("path", {
                        d: "M12 9v4"
                    }), (0, s.jsx)("path", {
                        d: "M12 17h.01"
                    })]
                }),
                M = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M18 6 6 18"
                    }), (0, s.jsx)("path", {
                        d: "m6 6 12 12"
                    })]
                });

            function T() {
                let {
                    pending: e
                } = (0, n.useFormStatus)();
                return (0, s.jsx)(l.z, {
                    type: "submit",
                    "aria-disabled": e,
                    className: "w-full sm:w-auto shrink-0 h-12",
                    disabled: e,
                    children: e ? (0, s.jsxs)("div", {
                        className: "flex flex-row gap-2",
                        children: [(0, s.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-primary-foreground animate-bounce [animation-delay:.7s]"
                        }), (0, s.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-primary-foreground animate-bounce [animation-delay:.3s]"
                        }), (0, s.jsx)("div", {
                            className: "w-3 h-3 rounded-full bg-primary-foreground animate-bounce [animation-delay:.7s]"
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(C, {}), "Analyze NFT"]
                    })
                })
            }

            function S(e) {
                let {
                    state: t
                } = e, [r, n] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    t.error ? n(!0) : n(!1)
                }, [t]), (0, s.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0, s.jsxs)("div", {
                        className: "flex flex-col sm:flex-row items-start gap-2",
                        children: [(0, s.jsxs)("div", {
                            className: "w-full relative",
                            children: [(0, s.jsx)("div", {
                                className: "absolute inset-0 rounded-lg border-2 border-primary pointer-events-none"
                            }), (0, s.jsx)(o.I, {
                                name: "address",
                                placeholder: "Enter NFT contract address...",
                                className: "h-12 text-base border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                            })]
                        }), (0, s.jsx)(T, {})]
                    }), r && t.error && (0, s.jsxs)("div", {
                        className: "relative w-full flex flex-wrap items-center justify-center py-3 pl-4 pr-14 rounded-lg text-base font-medium transition-all duration-500 ease-in-out border-solid border border-destructive text-destructive [&_svg]:text-destructive group bg-destructive/10",
                        children: [(0, s.jsx)("button", {
                            type: "button",
                            "aria-label": "close-error",
                            onClick: () => n(!1),
                            className: "absolute right-4 p-1 rounded-md transition-opacity text-destructive border border-destructive opacity-40 hover:opacity-100",
                            children: (0, s.jsx)(M, {})
                        }), (0, s.jsxs)("p", {
                            className: "flex flex-row items-center mr-auto gap-x-2",
                            children: [(0, s.jsx)(L, {}), t.error]
                        })]
                    })]
                })
            }
            let B = {
                    nft_open_source: "NFT Open Source",
                    nft_proxy: "NFT Proxy",
                    malicious_nft_contract: "Malicious NFT Contract",
                    restricted_approval: "Restricted Approval",
                    red_check_mark: "Red Check Mark",
                    trust_list: "On Trust List",
                    self_destruct: "Self Destruct",
                    privileged_minting: "Privileged Minting",
                    privileged_burn: "Privileged Burn",
                    transfer_without_approval: "Transfer Without Approval",
                    oversupply_minting: "Oversupply Minting",
                    metadata_frozen: "Metadata Frozen",
                    nft_name: "Name",
                    nft_symbol: "Symbol",
                    creator_address: "Creator Address",
                    nft_erc: "NFT Standard",
                    nft_owner_number: "Owner Count",
                    total_volume: "Total Volume",
                    traded_volume_24h: "24h Volume",
                    average_price_24h: "24h Avg Price",
                    lowest_price_24h: "24h Lowest Price",
                    highest_price: "Highest Price",
                    sales_24h: "24h Sales",
                    website_url: "Website",
                    twitter_url: "Twitter",
                    discord_url: "Discord",
                    telegram_url: "Telegram",
                    github_url: "Github",
                    nft_description: "Description",
                    medium_url: "Medium",
                    nft_verified: "NFT Verified",
                    same_nfts: "Same NFTs",
                    nft_items: "NFT Items",
                    create_block_number: "Creation Block"
                },
                A = {
                    nft_open_source: "None",
                    nft_proxy: "Medium",
                    malicious_nft_contract: "High",
                    restricted_approval: "High",
                    red_check_mark: "High",
                    trust_list: "None",
                    self_destruct: "High",
                    privileged_minting: "Medium",
                    privileged_burn: "Medium",
                    transfer_without_approval: "High",
                    oversupply_minting: "High",
                    metadata_frozen: "None",
                    nft_verified: "None",
                    nft_name: "Info",
                    nft_symbol: "Info",
                    creator_address: "Info",
                    nft_erc: "Info",
                    nft_owner_number: "Info",
                    total_volume: "Info",
                    traded_volume_24h: "Info",
                    average_price_24h: "Info",
                    lowest_price_24h: "Info",
                    highest_price: "Info",
                    sales_24h: "Info",
                    website_url: "Info",
                    twitter_url: "Info",
                    discord_url: "Info",
                    telegram_url: "Info",
                    github_url: "Info",
                    nft_description: "Info",
                    medium_url: "Info",
                    same_nfts: "Info",
                    nft_items: "Info",
                    create_block_number: "Info"
                },
                W = {
                    High: {
                        alertClass: "bg-red-100 dark:bg-red-900/50 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 hover:bg-red-200/60 dark:hover:bg-red-800/60",
                        valueClass: "text-red-600 dark:text-red-400"
                    },
                    Medium: {
                        alertClass: "bg-yellow-100 dark:bg-yellow-900/50 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 hover:bg-yellow-200/60 dark:hover:bg-yellow-800/60",
                        valueClass: "text-yellow-600 dark:text-yellow-400"
                    },
                    Info: {
                        alertClass: "bg-blue-100 dark:bg-blue-900/50 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 hover:bg-blue-200/60 dark:hover:bg-blue-800/60",
                        valueClass: "text-blue-600 dark:text-blue-400"
                    },
                    None: {
                        alertClass: "bg-green-100/10 dark:bg-green-900/10 border-green-500/20 dark:border-green-700/20 text-foreground dark:text-muted-foreground hover:bg-green-200/20 dark:hover:bg-green-800/20",
                        valueClass: "text-green-600 dark:text-green-400"
                    }
                };

            function F(e) {
                let {
                    rKey: t,
                    value: r
                } = e, a = B[t] || t.replace(/_/g, " ").replace(/\b\w/g, e => e.toUpperCase()), n = A[t] || "Info";
                if (null == r || "" === r) return null;
                let i = r,
                    o = n;
                if ("object" == typeof r && null !== r && "value" in r) i = 1 === r.value ? "Yes" : "No", "Info" !== n && (o = 1 === r.value ? n : "None");
                else if ("number" == typeof r && (0 === r || 1 === r))["On Trust List", "NFT Open Source", "Metadata Frozen", "NFT Verified"].includes(a) ? (i = 1 === r ? "Yes" : "No", o = 1 === r ? "None" : "Medium") : "Info" !== n ? (i = 1 === r ? "Yes" : "No", o = 1 === r ? n : "None") : i = 1 === r ? "Yes" : "No";
                else if ("number" == typeof r) i = r.toLocaleString();
                else if (Array.isArray(r)) {
                    if (0 === r.length) return null;
                    i = (0, s.jsx)("div", {
                        className: "flex flex-col items-end",
                        children: r.map((e, t) => (0, s.jsxs)("div", {
                            className: "text-xs",
                            children: [e.nft_name, " (", e.nft_address ? e.nft_address.substring(0, 6) : "N/A", "...)"]
                        }, t))
                    })
                }
                let l = W[o],
                    d = "string" == typeof r && r.startsWith("http") ? (0, s.jsx)("a", {
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:underline break-all",
                        children: r
                    }) : (0, s.jsx)(s.Fragment, {
                        children: i
                    });
                return "Description" === a && r ? (0, s.jsxs)("div", {
                    className: "pt-2",
                    children: [(0, s.jsx)("h4", {
                        className: "font-semibold text-sm text-muted-foreground mb-1",
                        children: "Description"
                    }), (0, s.jsx)("p", {
                        className: "text-sm text-foreground bg-muted/30 dark:bg-muted/20 p-2 rounded-lg",
                        children: r
                    })]
                }) : (0, s.jsx)("div", {
                    role: "alert",
                    className: (0, y.cn)("border-l-4 p-2 rounded-lg flex items-center transition duration-300 ease-in-out transform hover:scale-105", l.alertClass),
                    children: (0, s.jsxs)("div", {
                        className: "flex justify-between items-center w-full gap-4",
                        children: [(0, s.jsx)("p", {
                            className: "text-sm font-semibold pl-2",
                            children: a
                        }), (0, s.jsx)("div", {
                            className: (0, y.cn)("text-sm font-mono font-semibold text-right", l.valueClass),
                            children: d
                        })]
                    })
                })
            }

            function I(e) {
                let {
                    nftSecurity: t
                } = e, r = ["nft_name", "nft_symbol", "nft_erc", "creator_address", "create_block_number", "nft_owner_number", "nft_items", "total_volume", "traded_volume_24h", "average_price_24h", "lowest_price_24h", "highest_price", "sales_24h", "malicious_nft_contract", "red_check_mark", "trust_list", "nft_verified", "nft_open_source", "nft_proxy", "restricted_approval", "self_destruct", "privileged_minting", "privileged_burn", "transfer_without_approval", "oversupply_minting", "metadata_frozen", "website_url", "twitter_url", "discord_url", "telegram_url", "github_url", "medium_url", "same_nfts", "nft_description"].filter(e => t.hasOwnProperty(e) && null !== t[e]).map(e => [e, t[e]]);
                return (0, s.jsxs)(N.Zb, {
                    className: "shadow-xl",
                    children: [(0, s.jsxs)(N.Ol, {
                        children: [(0, s.jsxs)(N.ll, {
                            className: "flex items-center gap-2",
                            children: [t.nft_name || "NFT", " Security Analysis"]
                        }), (0, s.jsx)(N.SZ, {
                            children: "Security and information overview for the NFT contract."
                        })]
                    }), (0, s.jsx)(N.aY, {
                        className: "space-y-4",
                        children: (0, s.jsx)("div", {
                            className: "space-y-2",
                            children: r.map(e => {
                                let [t, r] = e;
                                return "nft_address" === t ? null : (0, s.jsx)(F, {
                                    rKey: t,
                                    value: r
                                }, t)
                            })
                        })
                    })]
                })
            }
            var O = r(3145);
            let z = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("polyline", {
                        points: "16 18 22 12 16 6"
                    }), (0, s.jsx)("polyline", {
                        points: "8 6 2 12 8 18"
                    })]
                }),
                E = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("rect", {
                        x: "3",
                        y: "8",
                        width: "18",
                        height: "4",
                        rx: "1"
                    }), (0, s.jsx)("path", {
                        d: "M12 8v13"
                    }), (0, s.jsx)("path", {
                        d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
                    }), (0, s.jsx)("path", {
                        d: "M7.5 8a2.5 2.5 0 0 1 0-5A2.5 2.5 0 0 1 12 5.5V8"
                    }), (0, s.jsx)("path", {
                        d: "M16.5 8a2.5 2.5 0 0 0 0-5A2.5 2.5 0 0 0 12 5.5V8"
                    })]
                }),
                H = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    }), (0, s.jsx)("path", {
                        d: "m9 12 2 2 4-4"
                    })]
                }),
                R = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                    }), (0, s.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "6"
                    }), (0, s.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "2"
                    })]
                }),
                P = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
                    }), (0, s.jsx)("path", {
                        d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
                    }), (0, s.jsx)("path", {
                        d: "M4 22h16"
                    }), (0, s.jsx)("path", {
                        d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
                    }), (0, s.jsx)("path", {
                        d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
                    }), (0, s.jsx)("path", {
                        d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
                    })]
                }),
                D = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.09-3.1a2 2 0 0 0-2.43-2.43c-.81.61-2.26.62-3.1.09z"
                    }), (0, s.jsx)("path", {
                        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                    }), (0, s.jsx)("path", {
                        d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
                    }), (0, s.jsx)("path", {
                        d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
                    })]
                }),
                V = () => (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, s.jsx)("path", {
                        d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
                    })
                }),
                $ = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                    }), (0, s.jsx)("circle", {
                        cx: "9",
                        cy: "7",
                        r: "4"
                    }), (0, s.jsx)("polyline", {
                        points: "16 11 18 13 22 9"
                    })]
                }),
                Z = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("rect", {
                        width: "18",
                        height: "18",
                        x: "3",
                        y: "3",
                        rx: "2"
                    }), (0, s.jsx)("circle", {
                        cx: "9",
                        cy: "9",
                        r: "2"
                    }), (0, s.jsx)("path", {
                        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                    })]
                }),
                Y = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M21 12V7H5a2 2 0 0 1 0-4h14v4"
                    }), (0, s.jsx)("path", {
                        d: "M3 5v14a2 2 0 0 0 2 2h16v-5"
                    }), (0, s.jsx)("path", {
                        d: "M18 12a2 2 0 0 0 0 4h4v-4h-4z"
                    })]
                }),
                G = () => (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, s.jsx)("path", {
                        d: "m9 18 6-6-6-6"
                    })
                }),
                X = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M6 3h12l4 6-10 13L2 9Z"
                    }), (0, s.jsx)("path", {
                        d: "m12 22 4-13-3-6h-2l-3 6 4 13Z"
                    }), (0, s.jsx)("path", {
                        d: "M2 9h20"
                    })]
                }),
                q = () => (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: (0, s.jsx)("path", {
                        d: "M2.7 10.3a2.4 2.4 0 0 0 0 3.4l7.6 7.6c.8.8 2 .8 2.8 0l7.6-7.6a2.4 2.4 0 0 0 0-3.4L13.7 2.7a2.4 2.4 0 0 0-3.4 0Z"
                    })
                }),
                J = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10"
                    }), (0, s.jsx)("polyline", {
                        points: "12 6 12 12 16 14"
                    })]
                }),
                K = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("rect", {
                        width: "18",
                        height: "11",
                        x: "3",
                        y: "11",
                        rx: "2",
                        ry: "2"
                    }), (0, s.jsx)("path", {
                        d: "M7 11V7a5 5 0 0 1 10 0v4"
                    })]
                }),
                Q = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M21.21 15.89A10 10 0 1 1 8 2.83"
                    }), (0, s.jsx)("path", {
                        d: "M22 12A10 10 0 0 0 12 2v10z"
                    })]
                }),
                U = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "m17 2 4 4-4 4"
                    }), (0, s.jsx)("path", {
                        d: "M3 11v-1a4 4 0 0 1 4-4h14"
                    }), (0, s.jsx)("path", {
                        d: "m7 22-4-4 4-4"
                    }), (0, s.jsx)("path", {
                        d: "M21 13v1a4 4 0 0 1-4 4H3"
                    })]
                }),
                ee = () => (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, s.jsx)("path", {
                        d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"
                    }), (0, s.jsx)("path", {
                        d: "M5 19.5A9 9 0 0 1 12 12a9 9 0 0 1 7-7.5"
                    }), (0, s.jsx)("path", {
                        d: "M2.8 15.5A9 9 0 0 1 12 12a9 9 0 0 1 9 3.5"
                    }), (0, s.jsx)("path", {
                        d: "M6 18.5A9 9 0 0 1 12 12c1.6 0 3.1.4 4.5 1.1"
                    }), (0, s.jsx)("path", {
                        d: "M11 19.5a9 9 0 0 0 1.5-6.9"
                    }), (0, s.jsx)("path", {
                        d: "M3 12a9 9 0 0 1 9-9 9.9 9.9 0 0 1 6.5 3"
                    }), (0, s.jsx)("path", {
                        d: "M12 12a9 9 0 0 0 9 9"
                    })]
                }),
                et = {},
                er = {},
                es = {},
                ea = e => {
                    let {
                        icon: t,
                        title: r,
                        description: a,
                        delay: n
                    } = e;
                    return (0, s.jsx)(_.O, {
                        delay: n,
                        children: (0, s.jsxs)("button", {
                            className: "group w-full text-left relative p-4 rounded-2xl backdrop-blur-xl border-2 border-primary/30 bg-gradient-to-br from-primary/20 via-background/60 to-background/80 shadow-2xl hover:shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 cursor-pointer hover:border-primary/60 overflow-hidden",
                            children: [(0, s.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                            }), (0, s.jsx)("div", {
                                className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            }), (0, s.jsxs)("div", {
                                className: "relative z-10 flex items-center gap-4",
                                children: [(0, s.jsx)("div", {
                                    className: "p-3 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300",
                                    children: (0, s.jsx)("div", {
                                        className: "w-7 h-7 fill-current text-primary group-hover:text-primary/80 transition-all duration-300 group-hover:scale-110 drop-shadow-lg",
                                        children: t
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex-1 text-left",
                                    children: [(0, s.jsx)("p", {
                                        className: "text-primary font-bold text-lg group-hover:text-primary/90 transition-colors duration-300 drop-shadow-sm",
                                        children: r
                                    }), (0, s.jsx)("p", {
                                        className: "text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300",
                                        children: a
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300",
                                    children: (0, s.jsx)(G, {})
                                })]
                            })]
                        })
                    })
                },
                en = e => {
                    let {
                        icon: t,
                        title: r,
                        description: a,
                        delay: n
                    } = e;
                    return (0, s.jsx)(_.O, {
                        delay: n,
                        className: "w-full",
                        children: (0, s.jsxs)("button", {
                            className: "group w-full h-full text-center bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-4 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/40 hover:-translate-y-1 hover:scale-105 active:scale-95",
                            children: [(0, s.jsx)("div", {
                                className: "inline-flex items-center justify-center p-3 rounded-full bg-primary/10 border-2 border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20",
                                children: t
                            }), (0, s.jsx)("h3", {
                                className: "text-xl font-bold",
                                children: r
                            }), (0, s.jsx)("p", {
                                className: "text-muted-foreground",
                                children: a
                            })]
                        })
                    })
                },
                ei = [{
                    name: "Marketing",
                    value: 1,
                    color: "hsl(var(--chart-1))"
                }, {
                    name: "Community Airdrops",
                    value: 1,
                    color: "hsl(var(--chart-2))"
                }, {
                    name: "Operations",
                    value: 3,
                    color: "hsl(var(--chart-3))"
                }],
                eo = [{
                    name: "Monthly Airdrops",
                    value: .5,
                    color: "hsl(var(--chart-1))"
                }, {
                    name: "NFT Income",
                    value: .5,
                    color: "hsl(var(--chart-2))"
                }, {
                    name: "Buyback",
                    value: .5,
                    color: "hsl(var(--chart-3))"
                }];

            function el() {
                let e;
                (0, i.useRouter)();
                let t = (0, i.useSearchParams)(),
                    [r, o] = (0, n.useFormState)(j.m8, et),
                    [l, d] = (0, n.useFormState)(j.PX, er),
                    [c, u] = (0, n.useFormState)(j.pL, es),
                    x = (0, a.useRef)(null),
                    h = (0, a.useRef)(null),
                    [f, p] = (0, a.useState)({}),
                    [g, w] = (0, a.useState)("token"),
                    [b, y] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    y(!0)
                }, []), (0, a.useEffect)(() => {
                    if (!b) return;
                    let e = t.get("wallet_address");
                    if (e && h.current) {
                        let t = document.getElementById("radio-2");
                        t && t.click(), setTimeout(() => {
                            var t, r;
                            let s = null === (t = h.current) || void 0 === t ? void 0 : t.querySelector('input[name="address"]');
                            s && (s.value = e, null === (r = h.current) || void 0 === r || r.requestSubmit())
                        }, 100)
                    } else {
                        let e = document.querySelector('label[for="'.concat("radio-1", '"]'));
                        e && p({
                            left: "".concat(e.offsetLeft, "px"),
                            width: "".concat(e.offsetWidth, "px")
                        })
                    }
                }, [b, t]);
                let C = e => {
                    let t = e.target.value,
                        r = e.target.nextElementSibling;
                    r && (p({
                        left: "".concat(r.offsetLeft, "px"),
                        width: "".concat(r.offsetWidth, "px")
                    }), w(t))
                };
                switch (g) {
                    case "token":
                    default:
                        e = o;
                        break;
                    case "wallet":
                        e = d;
                        break;
                    case "nft":
                        e = u
                }
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("main", {
                        className: "container mx-auto flex w-full flex-col items-center gap-12 px-4 py-12 sm:py-16 md:py-24",
                        children: (0, s.jsxs)("div", {
                            className: "flex w-full max-w-7xl flex-col items-center gap-4 text-center",
                            children: [(0, s.jsxs)("h1", {
                                className: "text-4xl font-bold tracking-tighter md:text-6xl",
                                children: ["The Professional Standard", (0, s.jsx)("br", {}), "for ", (0, s.jsx)("span", {
                                    className: "text-primary",
                                    children: "BASE"
                                }), " Analytics"]
                            }), (0, s.jsx)("p", {
                                className: "max-w-3xl text-lg text-muted-foreground",
                                children: "Elevate your strategy with the market's most powerful web-based tool. We synthesize complex data into actionable insights."
                            })]
                        })
                    }),  (0, s.jsx)("div", {
                        className: "container mx-auto max-w-2xl mt-8",
                        children: (0, s.jsx)(_.O, {
                            className: "w-full",
                            delay: "0.3s",
                            children: (0, s.jsx)("div", {
                                className: "flex flex-col gap-8",
                                children: c.result && (0, s.jsx)("div", {
                                    children: (0, s.jsx)(I, {
                                        nftSecurity: c.result.nftSecurity
                                    })
                                })
                            })
                        })
                    }), (0, s.jsxs)("div", {
                        className: "container mx-auto flex w-full flex-col items-center gap-16 px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-24",
                        children: [(0, s.jsxs)(_.O, {
                            className: "w-full max-w-4xl text-center",
                            children: [(0, s.jsx)("h2", {
                                className: "text-sm font-semibold uppercase tracking-wider text-primary",
                                children: "About Base Guard"
                            }), (0, s.jsx)("p", {
                                className: "mt-2 text-3xl font-bold tracking-tighter sm:text-4xl",
                                children: "Pioneering the new standard for on-chain intelligence."
                            }), (0, s.jsxs)("div", {
                                className: "mt-8 space-y-4 text-lg text-muted-foreground",
                                children: [(0, s.jsx)("p", {
                                    children: "The on-chain world is filled with noise. Traders have long been forced to rely on a scattered landscape of Telegram bots often unreliable, frequently lagging, and prone to costly misses. We knew there had to be a better way. The community deserved more than just another bot; it needed a professional-grade command center."
                                }), (0, s.jsx)("p", {
                                    children: "So, we did the unimaginable. We moved beyond the limitations of chat-based tools and built Base Guard from the ground up as a comprehensive, web-based intelligence platform. Our mission is to replace the chaos of fragmented data with a single source of truth."
                                }), (0, s.jsx)("p", {
                                    children: "We are not just an alternative; we are the evolution."
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex w-full max-w-5xl flex-wrap justify-center gap-8",
                            children: [(0, s.jsx)(_.O, {
                                delay: "100ms",
                                className: "w-full md:w-auto",
                                children: (0, s.jsxs)("div", {
                                    className: "relative w-full max-w-sm mx-auto",
                                    children: [(0, s.jsx)("div", {
                                        className: "absolute -top-2 -left-2 -z-10 w-full h-full rounded-2xl bg-primary opacity-50 blur-md"
                                    }), (0, s.jsxs)("div", {
                                        className: "relative bg-primary text-primary-foreground p-6 rounded-2xl space-y-4",
                                        children: [(0, s.jsx)(R, {}), (0, s.jsx)("h3", {
                                            className: "text-xl font-bold",
                                            children: "Our Mission"
                                        }), (0, s.jsxs)("p", {
                                            className: "text-sm",
                                            children: ["To empower users with unparalleled on-chain intelligence, transforming complex ", (0, s.jsx)("span", {
                                                className: "font-semibold text-accent-foreground/80",
                                                children: "BASE"
                                            }), " protocol data into clear, actionable insights for confident decision-making."]
                                        })]
                                    })]
                                })
                            }), (0, s.jsx)(_.O, {
                                delay: "200ms",
                                className: "w-full md:w-auto",
                                children: (0, s.jsxs)("div", {
                                    className: "relative w-full max-w-sm mx-auto",
                                    children: [(0, s.jsx)("div", {
                                        className: "absolute -top-2 -left-2 -z-10 w-full h-full rounded-2xl bg-primary opacity-50 blur-md"
                                    }), (0, s.jsxs)("div", {
                                        className: "relative bg-primary text-primary-foreground p-6 rounded-2xl space-y-4",
                                        children: [(0, s.jsx)(H, {}), (0, s.jsx)("h3", {
                                            className: "text-xl font-bold",
                                            children: "Our Vision"
                                        }), (0, s.jsxs)("p", {
                                            className: "text-sm",
                                            children: ["To be the indispensable platform for navigating the ", (0, s.jsx)("span", {
                                                className: "font-semibold text-accent-foreground/80",
                                                children: "BASE"
                                            }), "ecosystem, fostering a more transparent, secure, and accessible on-chain future for every participant."]
                                        })]
                                    })]
                                })
                            })]
                        })]
                    }), (0, s.jsx)("div", {
                        className: "w-full py-12 sm:py-16 md:py-24",
                        children: (0, s.jsxs)("div", {
                            className: "container mx-auto flex w-full flex-col items-center gap-12 px-4 sm:px-8 md:px-12",
                            children: [(0, s.jsxs)(_.O, {
                                className: "w-full max-w-4xl text-center",
                                children: [(0, s.jsx)("h2", {
                                    className: "text-sm font-semibold uppercase tracking-wider text-primary",
                                    children: "Tokenomics"
                                }), (0, s.jsx)("p", {
                                    className: "mt-2 text-3xl font-bold tracking-tighter sm:text-4xl",
                                    children: "Distribution & Fee Structure"
                                }), (0, s.jsx)("p", {
                                    className: "mx-auto mt-4 max-w-2xl text-lg text-muted-foreground",
                                    children: "A clear and transparent overview of the Base Guard token distribution and fee structure."
                                })]
                            }), (0, s.jsxs)(_.O, {
                                className: "grid w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2",
                                delay: "100ms",
                                children: [(0, s.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [(0, s.jsx)("div", {
                                            className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary",
                                            children: (0, s.jsx)(z, {})
                                        }), (0, s.jsx)("h3", {
                                            className: "text-xl font-bold",
                                            children: "Dev Holdings: 5%"
                                        })]
                                    }), (0, s.jsx)("p", {
                                        className: "text-muted-foreground",
                                        children: "This represents the team's initial token allocation, distributed for marketing, community airdrops, and operations."
                                    }), (0, s.jsx)("div", {
                                        className: "pt-4 space-y-4",
                                        children: ei.map(e => (0, s.jsxs)("div", {
                                            className: "space-y-1",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex justify-between items-center text-sm",
                                                children: [(0, s.jsx)("span", {
                                                    style: {
                                                        color: e.color
                                                    },
                                                    children: e.name
                                                }), (0, s.jsxs)("span", {
                                                    children: [e.value, "%"]
                                                })]
                                            }), (0, s.jsx)(k, {
                                                value: 20 * e.value
                                            })]
                                        }, e.name))
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [(0, s.jsx)("div", {
                                            className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary",
                                            children: (0, s.jsx)(E, {})
                                        }), (0, s.jsx)("h3", {
                                            className: "text-xl font-bold",
                                            children: "Creator Rewards: 1.5%"
                                        })]
                                    }), (0, s.jsx)("p", {
                                        className: "text-muted-foreground",
                                        children: "This allocation rewards content creators and builders for fostering a vibrant ecosystem."
                                    }), (0, s.jsx)("div", {
                                        className: "pt-4 space-y-4",
                                        children: eo.map(e => (0, s.jsxs)("div", {
                                            className: "space-y-1",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex justify-between items-center text-sm",
                                                children: [(0, s.jsx)("span", {
                                                    style: {
                                                        color: e.color
                                                    },
                                                    children: e.name
                                                }), (0, s.jsxs)("span", {
                                                    children: [e.value, "%"]
                                                })]
                                            }), (0, s.jsx)(k, {
                                                value: e.value * (100 / 1.5)
                                            })]
                                        }, e.name))
                                    })]
                                })]
                            })]
                        })
                    }), (0, s.jsxs)("div", {
                        className: "container mx-auto flex w-full flex-col items-center gap-16 px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-24",
                        children: [(0, s.jsxs)(_.O, {
                            className: "w-full max-w-4xl text-center",
                            children: [(0, s.jsx)("h2", {
                                className: "text-sm font-semibold uppercase tracking-wider text-primary",
                                children: "AIRDROP"
                            }), (0, s.jsx)("p", {
                                className: "mt-2 text-3xl font-bold tracking-tighter sm:text-4xl",
                                children: "Get Rewarded"
                            }), (0, s.jsx)("p", {
                                className: "mx-auto mt-4 max-w-2xl text-lg text-muted-foreground",
                                children: "Each month, 0.5% of all trade fees are airdropped to our most loyal holders based on the following tiers. This shared revenue is distributed as follows:"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 gap-8",
                            children: [(0, s.jsx)(en, {
                                icon: (0, s.jsx)(X, {
                                    className: "w-8 h-8 text-primary"
                                }),
                                title: "Emerald Tier",
                                description: "Holding 2%+ shares 40% of the revenue pool.",
                                delay: "100ms"
                            }), (0, s.jsx)(en, {
                                icon: (0, s.jsx)(q, {
                                    className: "w-8 h-8 text-primary"
                                }),
                                title: "Diamond Tier",
                                description: "Holding 1%-1.99% shares 34% of the revenue pool.",
                                delay: "200ms"
                            }), (0, s.jsx)(en, {
                                icon: (0, s.jsx)(P, {
                                    className: "w-8 h-8 text-primary"
                                }),
                                title: "Gold Tier",
                                description: "Holding 0.1%-0.99% shares 26% of the revenue pool.",
                                delay: "300ms"
                            })]
                        })]
                    }), (0, s.jsx)("div", {
                        className: "container mx-auto flex w-full flex-col items-center gap-16 px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-24",
                        children: (0, s.jsxs)(_.O, {
                            className: "w-full max-w-4xl text-center",
                            children: [(0, s.jsx)("h2", {
                                className: "text-sm font-semibold uppercase tracking-wider text-primary",
                                children: "ROADMAP"
                            }), (0, s.jsx)("p", {
                                className: "mt-4 text-5xl md:text-7xl font-bold tracking-tighter",
                                children: "We just want to be everywhere and kill all the competitors."
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: "w-full py-12 sm:py-16 md:py-24",
                        children: (0, s.jsxs)("div", {
                            className: "container mx-auto flex w-full flex-col items-center gap-12 px-4 sm:px-8 md:px-12",
                            children: [(0, s.jsxs)(_.O, {
                                className: "w-full max-w-4xl text-center",
                                children: [(0, s.jsx)("h2", {
                                    className: "text-sm font-semibold uppercase tracking-wider text-primary",
                                    children: "COMING SOON"
                                }), (0, s.jsx)("p", {
                                    className: "mt-2 text-3xl font-bold tracking-tighter sm:text-4xl",
                                    children: "Exciting New Features"
                                }), (0, s.jsx)("p", {
                                    className: "mx-auto mt-4 max-w-2xl text-lg text-muted-foreground",
                                    children: "We're always working on the next big thing. Here's a sneak peek at what's coming to Base Guard."
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2",
                                children: [(0, s.jsx)(ea, {
                                    icon: (0, s.jsx)(Z, {}),
                                    title: "NFT",
                                    description: "Track, analyze, and get insights on NFT collections and individual assets.",
                                    delay: "100ms"
                                }), (0, s.jsx)(ea, {
                                    icon: (0, s.jsx)(D, {}),
                                    title: "Recent Base Launch",
                                    description: "Discover and evaluate the newest tokens launching on the Base network.",
                                    delay: "200ms"
                                }), (0, s.jsx)(ea, {
                                    icon: (0, s.jsx)(V, {}),
                                    title: "Trending Base Token",
                                    description: "Stay ahead of the market with real-time data on trending tokens.",
                                    delay: "300ms"
                                }), (0, s.jsx)(ea, {
                                    icon: (0, s.jsx)($, {}),
                                    title: "Recent CTO for Base",
                                    description: "Monitor contract takeovers and ownership changes across the ecosystem.",
                                    delay: "400ms"
                                }), (0, s.jsx)(ea, {
                                    icon: (0, s.jsx)(Y, {}),
                                    title: "Wallet Tracker",
                                    description: "Track your portfolio performance and monitor any wallet on the blockchain.",
                                    delay: "500ms"
                                }), (0, s.jsx)(ea, {
                                    icon: (0, s.jsx)(J, {}),
                                    title: "CEX Funding Rate",
                                    description: "Get real-time funding rate data from major centralized exchanges.",
                                    delay: "600ms"
                                }), (0, s.jsx)(ea, {
                                    icon: (0, s.jsx)(K, {}),
                                    title: "X402 Paywall",
                                    description: "Integrate micro-payments and content monetization using the X402 protocol.",
                                    delay: "700ms"
                                }), (0, s.jsx)(ea, {
                                    icon: (0, s.jsx)(Q, {}),
                                    title: "Stake Analyzer",
                                    description: "Analyze staking pools, rewards, and get insights into staking strategies.",
                                    delay: "800ms"
                                }), (0, s.jsx)(ea, {
                                    icon: (0, s.jsx)(U, {}),
                                    title: "Batch Swap",
                                    description: "Execute multiple swaps in a single, gas-efficient transaction.",
                                    delay: "900ms"
                                }), (0, s.jsx)(ea, {
                                    icon: (0, s.jsx)(ee, {}),
                                    title: "Originality Checker",
                                    description: "Verify the uniqueness of contracts to avoid copy-paste projects.",
                                    delay: "1000ms"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "w-full max-w-4xl text-center pt-16",
                                children: [(0, s.jsx)("h2", {
                                    className: "text-sm font-semibold uppercase tracking-wider text-primary",
                                    children: "PARTNERSHIPS"
                                }), (0, s.jsx)("p", {
                                    className: "mt-4 text-4xl md:text-5xl font-bold tracking-tighter",
                                    children: "Big things coming soon."
                                }), (0, s.jsxs)("div", {
                                    className: "mt-8 flex justify-center items-center gap-8 sm:gap-12 md:gap-16",
                                    children: [(0, s.jsx)(O.default, {
                                        src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Coinmarketcap_svg_logo.svg",
                                        alt: "CoinMarketCap Logo",
                                        width: 200,
                                        height: 50,
                                        className: "opacity-20 filter grayscale"
                                    }), (0, s.jsx)(O.default, {
                                        src: "https://emoneymax.net/emm/wp-content/uploads/2022/09/trend_coingecko-copy.webp",
                                        alt: "CoinGecko Logo",
                                        width: 180,
                                        height: 50,
                                        className: "opacity-20 filter grayscale"
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }

            function ed() {
                return (0, s.jsx)(a.Suspense, {
                    fallback: (0, s.jsx)("div", {
                        children: "Loading..."
                    }),
                    children: (0, s.jsx)(el, {})
                })
            }
        },
        2617: function (e, t, r) {
            "use strict";
            r.d(t, {
                O: function () {
                    return i
                }
            });
            var s = r(7437),
                a = r(8819),
                n = r(3448);

            function i(e) {
                let {
                    children: t,
                    className: r,
                    delay: i = "0s",
                    duration: o = "500ms",
                    threshold: l = .1
                } = e, {
                    ref: d,
                    inView: c
                } = (0, a.YD)({
                    triggerOnce: !0,
                    threshold: l
                });
                return (0, s.jsx)("div", {
                    ref: d,
                    className: (0, n.cn)("transition-all transform-gpu", c ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", r),
                    style: {
                        transitionDuration: o,
                        transitionDelay: i
                    },
                    children: t
                })
            }
        },
        2381: function (e, t, r) {
            "use strict";
            r.d(t, {
                d: function () {
                    return l
                },
                z: function () {
                    return d
                }
            });
            var s = r(7437),
                a = r(2265),
                n = r(7053),
                i = r(7712),
                o = r(3448);
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
                d = a.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: a,
                        size: i,
                        asChild: d = !1,
                        ...c
                    } = e, u = d ? n.g7 : "button";
                    return (0, s.jsx)(u, {
                        className: (0, o.cn)(l({
                            variant: a,
                            size: i,
                            className: r
                        })),
                        ref: t,
                        ...c
                    })
                });
            d.displayName = "Button"
        },
        9820: function (e, t, r) {
            "use strict";
            r.d(t, {
                Ol: function () {
                    return o
                },
                SZ: function () {
                    return d
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
            var s = r(7437),
                a = r(2265),
                n = r(3448);
            let i = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", r),
                    ...a
                })
            });
            i.displayName = "Card";
            let o = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, n.cn)("flex flex-col space-y-1.5 p-6", r),
                    ...a
                })
            });
            o.displayName = "CardHeader";
            let l = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, n.cn)("text-2xl font-semibold leading-none tracking-tight", r),
                    ...a
                })
            });
            l.displayName = "CardTitle";
            let d = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, n.cn)("text-sm text-muted-foreground", r),
                    ...a
                })
            });
            d.displayName = "CardDescription";
            let c = a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, n.cn)("p-6 pt-0", r),
                    ...a
                })
            });
            c.displayName = "CardContent", a.forwardRef((e, t) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    ref: t,
                    className: (0, n.cn)("flex items-center p-6 pt-0", r),
                    ...a
                })
            }).displayName = "CardFooter"
        },
        279: function (e, t, r) {
            "use strict";
            r.d(t, {
                I: function () {
                    return i
                }
            });
            var s = r(7437),
                a = r(2265),
                n = r(3448);
            let i = a.forwardRef((e, t) => {
                let {
                    className: r,
                    type: a,
                    ...i
                } = e;
                return (0, s.jsx)("input", {
                    type: a,
                    className: (0, n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
                    ref: t,
                    ...i
                })
            });
            i.displayName = "Input"
        },
        3448: function (e, t, r) {
            "use strict";
            r.d(t, {
                cn: function () {
                    return n
                }
            });
            var s = r(1994),
                a = r(3335);

            function n() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, a.m6)((0, s.W)(t))
            }
        }
    },
    function (e) {
        e.O(0, [137, 264, 594, 971, 117, 744], function () {
            return e(e.s = 4989)
        }), _N_E = e.O()
    }
]);