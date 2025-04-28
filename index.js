var app = new Vue({
    el: "#app",
    data: {
        items: [
            {
                ix: "01",
                tclz: "t-empty",
                key: "junifer resort",
                loc: "Mammoth Lakes, Califonia",
                left: -25,
                image: "https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            },
            {
                ix: "02",
                tclz: "t-filled",
                key: "tamback lodge",
                loc: "Bear Valley, California",
                left: 25,
                image: "https://images.unsplash.com/photo-1507492147080-3d1b3e5cd0aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            },
            {
                ix: "03",
                tclz: "t-empty",
                key: "alphenhof lodge",
                loc: "Bear Valley, California",
                left: 75,
                image: "https://images.unsplash.com/photo-1563444276-0ef016ff4ae5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
            },
            {
                ix: "04",
                tclz: "t-empty",
                key: "china pick ski",
                loc: "China Pick Mountain, California",
                left: 125,
                image: "https://images.unsplash.com/photo-1504827274833-7db1774520e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
