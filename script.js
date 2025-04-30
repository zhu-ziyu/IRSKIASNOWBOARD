var app = new Vue({
    el: "#app",
    data: {
        items: [
            {
                ix: "01",
                tclz: "t-empty",
                key: "OFSAA Snowboard GIRL 2024 - 2025",
                loc: "Alpine Skiing Club, Collingwood",
                left: -40,
                image: "img/main3.png"
            },
            {
                ix: "02",
                tclz: "t-filled",
                key: "OFSAA Snowboard BOY 2024 - 2025",
                loc: "Alpine Skiing Club, Collingwood",
                left: 40,
                image: "img/main4.png"
            },
            {
                ix: "03",
                tclz: "t-empty",
                key: "IRHS Ski & Snowboard Team 2024 - 2025",
                loc: "Alpine Skiing Club, Collingwood",
                left: 120,
                image: "img/main1.png"
            },
            {
                ix: "04",
                tclz: "t-empty",
                key: "OFSAA SKI Team BOY 2024 - 2025",
                loc: "Alpine Skiing Club, Collingwood",
                left: 200,
                image: "img/main2.png"
            }
        ]
    },
    methods: {
        next: function() {
            // 每次向左移动 80%
            this.items = this.items.map((item, index) => ({
                ...item,
                left: item.left - 80,
                tclz: index === 2 ? "t-filled" : "t-empty"
            }));
            // 动画切换周期结束后，把第一个元素移到最右
            setTimeout(() => {
                const [first, ...rest] = this.items;
                // 新加入的项，left 重置为 200（80*2.5）
                this.items = [...rest, { ...first, left: 200 }];
                // 等待短暂间隔后继续循环
                setTimeout(() => this.next(), 500);
            }, 2200);
        }
    },
    created: function() {
        this.next();
    }
});