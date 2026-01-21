module.exports = [
"[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GallerySection",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
'use client';
;
;
;
function GallerySection() {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const galleryItems = [
        // Echte afbeeldingen - Ceremonies
        {
            id: 1,
            category: 'ceremony',
            title: 'Band ceremonie groep',
            korean: '승급식',
            media: '/gallery/belt-ceremony-group.jpg',
            type: 'image'
        },
        // Echte afbeeldingen - Training
        {
            id: 2,
            category: 'training',
            title: 'Planken breken demonstratie',
            korean: '격파',
            media: '/gallery/board-breaking-demo.jpg',
            type: 'image'
        },
        {
            id: 3,
            category: 'training',
            title: 'Breektechniek oefening',
            korean: '격파 기술',
            media: '/gallery/breaking-technique.jpg',
            type: 'image'
        },
        {
            id: 4,
            category: 'training',
            title: 'Buiten training',
            korean: '훈련',
            media: '/gallery/outdoor-training.jpg',
            type: 'image'
        },
        {
            id: 5,
            category: 'training',
            title: 'Hoofdtrainer Rachid',
            korean: '수석 코치',
            media: '/gallery/rachid.jpeg',
            type: 'image'
        },
        {
            id: 6,
            category: 'training',
            title: 'Volwassenen training',
            korean: '성인 훈련',
            media: '/gallery/volwassenen-training.jpg',
            type: 'image'
        },
        // Echte afbeeldingen - Wedstrijd
        {
            id: 7,
            category: 'competition',
            title: 'Kampioenen',
            korean: '챔피언',
            media: '/gallery/championship-winners.jpg',
            type: 'image'
        },
        {
            id: 8,
            category: 'competition',
            title: 'Trofee winnaar',
            korean: '승리',
            media: '/gallery/trophy-winner.jpg',
            type: 'image'
        },
        {
            id: 9,
            category: 'competition',
            title: 'Overwinning viering',
            korean: '축하',
            media: '/gallery/victory-celebration.jpg',
            type: 'image'
        },
        // Echte afbeeldingen - Training (voorheen Jeugd)
        {
            id: 10,
            category: 'training',
            title: 'Jonge kampioen',
            korean: '우승자',
            media: '/gallery/young-champion.jpg',
            type: 'image'
        },
        {
            id: 11,
            category: 'training',
            title: 'Jeugd training',
            korean: '청소년 훈련',
            media: '/gallery/jeugd-training.jpg',
            type: 'image'
        },
        // Nieuwe training afbeeldingen (training-01 t/m training-34)
        {
            id: 12,
            category: 'training',
            title: 'Training moment 1',
            korean: '훈련',
            media: '/gallery/training-01.jpg',
            type: 'image'
        },
        {
            id: 13,
            category: 'training',
            title: 'Training moment 2',
            korean: '훈련',
            media: '/gallery/training-02.jpg',
            type: 'image'
        },
        {
            id: 14,
            category: 'training',
            title: 'Training moment 3',
            korean: '훈련',
            media: '/gallery/training-03.jpg',
            type: 'image'
        },
        {
            id: 15,
            category: 'training',
            title: 'Training moment 4',
            korean: '훈련',
            media: '/gallery/training-04.jpg',
            type: 'image'
        },
        {
            id: 16,
            category: 'training',
            title: 'Training moment 5',
            korean: '훈련',
            media: '/gallery/training-05.jpg',
            type: 'image'
        },
        {
            id: 17,
            category: 'training',
            title: 'Training moment 6',
            korean: '훈련',
            media: '/gallery/training-06.jpg',
            type: 'image'
        },
        {
            id: 18,
            category: 'training',
            title: 'Training moment 7',
            korean: '훈련',
            media: '/gallery/training-07.jpg',
            type: 'image'
        },
        {
            id: 19,
            category: 'training',
            title: 'Training moment 8',
            korean: '훈련',
            media: '/gallery/training-08.jpg',
            type: 'image'
        },
        {
            id: 20,
            category: 'training',
            title: 'Training moment 9',
            korean: '훈련',
            media: '/gallery/training-09.jpg',
            type: 'image'
        },
        {
            id: 21,
            category: 'training',
            title: 'Training moment 10',
            korean: '훈련',
            media: '/gallery/training-10.jpg',
            type: 'image'
        },
        {
            id: 22,
            category: 'training',
            title: 'Training moment 11',
            korean: '훈련',
            media: '/gallery/training-11.jpg',
            type: 'image'
        },
        {
            id: 23,
            category: 'training',
            title: 'Training moment 12',
            korean: '훈련',
            media: '/gallery/training-12.jpg',
            type: 'image'
        },
        {
            id: 24,
            category: 'training',
            title: 'Training moment 13',
            korean: '훈련',
            media: '/gallery/training-13.jpg',
            type: 'image'
        },
        {
            id: 25,
            category: 'training',
            title: 'Training moment 14',
            korean: '훈련',
            media: '/gallery/training-14.jpg',
            type: 'image'
        },
        {
            id: 26,
            category: 'training',
            title: 'Training moment 15',
            korean: '훈련',
            media: '/gallery/training-15.jpg',
            type: 'image'
        },
        {
            id: 27,
            category: 'training',
            title: 'Training moment 16',
            korean: '훈련',
            media: '/gallery/training-16.jpg',
            type: 'image'
        },
        {
            id: 28,
            category: 'training',
            title: 'Training moment 17',
            korean: '훈련',
            media: '/gallery/training-17.jpg',
            type: 'image'
        },
        {
            id: 29,
            category: 'training',
            title: 'Training moment 18',
            korean: '훈련',
            media: '/gallery/training-18.jpg',
            type: 'image'
        },
        {
            id: 30,
            category: 'training',
            title: 'Training moment 19',
            korean: '훈련',
            media: '/gallery/training-19.jpg',
            type: 'image'
        },
        {
            id: 31,
            category: 'training',
            title: 'Training moment 21',
            korean: '훈련',
            media: '/gallery/training-21.jpg',
            type: 'image'
        },
        {
            id: 33,
            category: 'training',
            title: 'Training moment 22',
            korean: '훈련',
            media: '/gallery/training-22.jpg',
            type: 'image'
        },
        {
            id: 34,
            category: 'training',
            title: 'Training moment 23',
            korean: '훈련',
            media: '/gallery/training-23.jpg',
            type: 'image'
        },
        {
            id: 35,
            category: 'training',
            title: 'Training moment 24',
            korean: '훈련',
            media: '/gallery/training-24.jpg',
            type: 'image'
        },
        {
            id: 36,
            category: 'training',
            title: 'Training moment 25',
            korean: '훈련',
            media: '/gallery/training-25.jpg',
            type: 'image'
        },
        {
            id: 37,
            category: 'training',
            title: 'Training moment 26',
            korean: '훈련',
            media: '/gallery/training-26.jpg',
            type: 'image'
        },
        {
            id: 38,
            category: 'training',
            title: 'Training moment 27',
            korean: '훈련',
            media: '/gallery/training-27.jpg',
            type: 'image'
        },
        {
            id: 39,
            category: 'training',
            title: 'Training moment 28',
            korean: '훈련',
            media: '/gallery/training-28.jpg',
            type: 'image'
        },
        {
            id: 40,
            category: 'training',
            title: 'Training moment 29',
            korean: '훈련',
            media: '/gallery/training-29.jpg',
            type: 'image'
        },
        {
            id: 41,
            category: 'training',
            title: 'Training moment 30',
            korean: '훈련',
            media: '/gallery/training-30.jpg',
            type: 'image'
        },
        {
            id: 42,
            category: 'training',
            title: 'Training moment 31',
            korean: '훈련',
            media: '/gallery/training-31.jpg',
            type: 'image'
        },
        {
            id: 43,
            category: 'training',
            title: 'Training moment 32',
            korean: '훈련',
            media: '/gallery/training-32.jpg',
            type: 'image'
        },
        {
            id: 44,
            category: 'training',
            title: 'Training moment 33',
            korean: '훈련',
            media: '/gallery/training-33.jpg',
            type: 'image'
        },
        {
            id: 45,
            category: 'training',
            title: 'Training moment 34',
            korean: '훈련',
            media: '/gallery/training-34.jpg',
            type: 'image'
        },
        // Video's
        {
            id: 46,
            category: 'videos',
            title: 'Training sessie 1',
            korean: '훈련 영상',
            media: '/videos/video-1.mp4',
            type: 'video'
        },
        {
            id: 47,
            category: 'videos',
            title: 'Training sessie 2',
            korean: '훈련 영상',
            media: '/videos/video-2.mp4',
            type: 'video'
        },
        {
            id: 48,
            category: 'videos',
            title: 'Techniek demonstratie 1',
            korean: '기술 시연',
            media: '/videos/video-3.mp4',
            type: 'video'
        },
        {
            id: 49,
            category: 'videos',
            title: 'Techniek demonstratie 2',
            korean: '기술 시연',
            media: '/videos/video-4.mp4',
            type: 'video'
        },
        {
            id: 50,
            category: 'videos',
            title: 'Wedstrijd opname 1',
            korean: '대회 영상',
            media: '/videos/video-5.mp4',
            type: 'video'
        },
        {
            id: 51,
            category: 'videos',
            title: 'Wedstrijd opname 2',
            korean: '대회 영상',
            media: '/videos/video-6.mp4',
            type: 'video'
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
            id: 'belt-exam',
            label: 'Bandexamens'
        },
        {
            id: 'ceremony',
            label: 'Evenementen'
        },
        {
            id: 'videos',
            label: "Video's"
        }
    ];
    const filteredItems = activeCategory === 'all' ? galleryItems : galleryItems.filter((item)=>item.category === activeCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery",
        className: "py-32 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold text-xs uppercase tracking-[0.2em]",
                                    children: 'Galerij'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight",
                                children: [
                                    'Momenten van',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                        lineNumber: 112,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: 'excellentie'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-1 bg-primary"
                            }, void 0, false, {
                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-3 mb-16",
                    children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategory(cat.id),
                            className: activeCategory === cat.id ? "px-6 py-3 bg-primary text-primary-foreground text-sm font-bold transition-all duration-300" : "px-6 py-3 bg-muted text-foreground/70 text-sm font-semibold hover:bg-muted/80 hover:text-foreground transition-all duration-300",
                            children: cat.label
                        }, cat.id, false, {
                            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2",
                    children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedItem(item.id),
                            className: "gallery-item group relative aspect-square overflow-hidden cursor-pointer",
                            children: [
                                item.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.media,
                                    alt: item.title,
                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            src: item.media,
                                            className: "w-full h-full object-cover",
                                            muted: true,
                                            playsInline: true
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center bg-black/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "w-8 h-8 text-white ml-1",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-bold text-base mb-1",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-primary text-2xl font-light",
                                                children: item.korean
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4",
                    onClick: ()=>setSelectedItem(null),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-6 right-6 text-secondary-foreground hover:text-primary transition-colors z-10",
                            onClick: ()=>setSelectedItem(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl w-full",
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                galleryItems.find((i)=>i.id === selectedItem)?.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: galleryItems.find((i)=>i.id === selectedItem)?.media,
                                    alt: galleryItems.find((i)=>i.id === selectedItem)?.title,
                                    className: "w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 190,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: galleryItems.find((i)=>i.id === selectedItem)?.media,
                                    controls: true,
                                    autoPlay: true,
                                    className: "w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-secondary-foreground text-center mt-4 text-lg",
                                    children: galleryItems.find((i)=>i.id === selectedItem)?.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/s/black-dragon/src/components/sections/GallerySection.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/s/black-dragon/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Play
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Play", [
    [
        "polygon",
        {
            points: "6 3 20 12 6 21 6 3",
            key: "1oa8hb"
        }
    ]
]);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/Documents/s/black-dragon/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$s$2f$black$2d$dragon$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/s/black-dragon/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=Documents_s_black-dragon_0aaa276a._.js.map