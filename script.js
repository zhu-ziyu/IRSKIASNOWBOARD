var app = new Vue({
    el: "#app",
    data: {
        items: [
            {
                ix: "01",
                tclz: "t-empty",
                key: "Blue Mountain",
                loc: "Blue Mountain, Collingwood",
                left: -25,
                image: "img/IMG_4424.jpg"
            },
            {
                ix: "02",
                tclz: "t-filled",
                key: "tamback lodge",
                loc: "Alpine Skiing Club, Collingwood",
                left: 25,
                image: "img/IMG_6240.webp"
            },
            {
                ix: "03",
                tclz: "t-empty",
                key: "alphenhof lodge",
                loc: "Alpine Skiing Club, Collingwood",
                left: 75,
                image: "img/IMG_6989.webp"
            },
            {
                ix: "04",
                tclz: "t-empty",
                key: "OFSAA Qualifying",
                loc: "Alpine Skiing Club, Collingwood",
                left: 125,
                image: "img/IMG_5557.webp"
            }
        ]
    },
    methods: {
        next: function() {
            this.items = this.items.map((item, index) => ({
                ...item,
                left: item.left - 50,
                tclz: index === 2 ? "t-filled" : "t-empty"
            }));
            setTimeout(() => {
                const [st, ...rest] = this.items;
                this.items = [...rest, { ...st, left: 125 }];
                setTimeout(() => this.next(), 500);
            }, 2200);
        }
    },

    created: function() {
        this.next();
    }
});
