(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GallerySection",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function GallerySection() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const galleryItems = [
        {
            id: 1,
            category: 'training',
            title: 'Hoge trap oefening',
            korean: '차기',
            image: '/gallery/high-kick.jpg'
        },
        {
            id: 2,
            category: 'competition',
            title: 'Kampioenschap',
            korean: '대회',
            image: '/gallery/championship.jpg'
        },
        {
            id: 3,
            category: 'ceremony',
            title: 'Zwarte band ceremonie',
            korean: '심사',
            image: '/gallery/black-belt-ceremony.jpg'
        },
        {
            id: 4,
            category: 'training',
            title: 'Poomsae vormen',
            korean: '품새',
            image: '/gallery/poomsae.jpg'
        },
        {
            id: 5,
            category: 'youth',
            title: 'Kleine tijgers',
            korean: '어린이',
            image: '/gallery/little-tigers.jpg'
        },
        {
            id: 6,
            category: 'competition',
            title: 'Sparringwedstrijd',
            korean: '겨루기',
            image: '/gallery/sparring.jpg'
        },
        {
            id: 7,
            category: 'training',
            title: 'Breektechniek',
            korean: '격파',
            image: '/gallery/breaking.jpg'
        },
        {
            id: 8,
            category: 'ceremony',
            title: 'Bandpromotie',
            korean: '승급',
            image: '/gallery/belt-promotion.jpg'
        },
        {
            id: 9,
            category: 'training',
            title: 'Buiten training',
            korean: '훈련',
            image: '/gallery/outdoor-training.jpg'
        },
        {
            id: 10,
            category: 'ceremony',
            title: 'Band ceremonie groep',
            korean: '승급식',
            image: '/gallery/belt-ceremony-group.jpg'
        },
        {
            id: 11,
            category: 'competition',
            title: 'Jonge kampioen',
            korean: '우승자',
            image: '/gallery/young-champion.jpg'
        },
        {
            id: 12,
            category: 'competition',
            title: 'Trofee winnaar',
            korean: '승리',
            image: '/gallery/trophy-winner.jpg'
        },
        {
            id: 13,
            category: 'competition',
            title: 'Kampioenen',
            korean: '챔피언',
            image: '/gallery/championship-winners.jpg'
        },
        {
            id: 14,
            category: 'training',
            title: 'Planken breken demonstratie',
            korean: '격파',
            image: '/gallery/board-breaking-demo.jpg'
        },
        {
            id: 15,
            category: 'training',
            title: 'Breektechniek oefening',
            korean: '격파 기술',
            image: '/gallery/breaking-technique.jpg'
        },
        {
            id: 16,
            category: 'competition',
            title: 'Overwinning viering',
            korean: '축하',
            image: '/gallery/victory-celebration.jpg'
        }
    ];
    const categories = [
        {
            id: 'all',
            label: 'Alles'
        },
        {
            id: 'training',
            label: 'Training'
        },
        {
            id: 'competition',
            label: 'Wedstrijd'
        },
        {
            id: 'ceremony',
            label: 'Ceremonies'
        },
        {
            id: 'youth',
            label: 'Jeugd'
        }
    ];
    const filteredItems = activeCategory === 'all' ? galleryItems : galleryItems.filter((item)=>item.category === activeCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery",
        className: "py-32 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold text-xs uppercase tracking-[0.2em]",
                                    children: 'Galerij'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight",
                                children: [
                                    'Momenten van',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: 'excellentie'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-1 bg-primary"
                            }, void 0, false, {
                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-3 mb-16",
                    children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategory(cat.id),
                            className: activeCategory === cat.id ? "px-6 py-3 bg-primary text-primary-foreground text-sm font-bold transition-all duration-300" : "px-6 py-3 bg-muted text-foreground/70 text-sm font-semibold hover:bg-muted/80 hover:text-foreground transition-all duration-300",
                            children: cat.label
                        }, cat.id, false, {
                            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2",
                    children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedImage(item.id),
                            className: "gallery-item group relative aspect-square overflow-hidden cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.image,
                                    alt: item.title,
                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-bold text-base mb-1",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-primary text-2xl font-light",
                                                children: item.korean
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4",
                    onClick: ()=>setSelectedImage(null),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-6 right-6 text-secondary-foreground hover:text-primary transition-colors",
                            onClick: ()=>setSelectedImage(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: galleryItems.find((i)=>i.id === selectedImage)?.image,
                                    alt: galleryItems.find((i)=>i.id === selectedImage)?.title,
                                    className: "w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-secondary-foreground text-center mt-4 text-lg",
                                    children: galleryItems.find((i)=>i.id === selectedImage)?.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(GallerySection, "GXIDptAiTOANkAjCbti7RZix/iQ=");
_c = GallerySection;
var _c;
__turbopack_context__.k.register(_c, "GallerySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_s_black-dragon_src_components_sections_GallerySection_tsx_2184a236._.js.map