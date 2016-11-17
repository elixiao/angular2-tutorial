import {Injectable} from '@angular/core'


const apples = [
    {
        id:1,
        name:'红富士',
        price:15,
        type:'a'
    },
    {
        id:2,
        name:'元帅',
        price:9,
        type:'a'
    },
    {
        id:3,
        name:'金帅',
        price:8,
        type:'a'
    }
];

const bananas = [
    {
        id:1,
        name:'巴西超大号',
        price:8,
        type:'b'
    },
    {
        id:2,
        name:'海南精品',
        price:6,
        type:'b'
    },
    {
        id:3,
        name:'特价香蕉',
        price:4,
        type:'b'
    }
];

@Injectable()
export class FruitService {
    getApples() {
        return apples
    }

    getBananas() {
        return bananas
    }

    getApple(id) {
        for(let i=apples.length,apple;i;i--) {
            apple = apples[i-1]
            if(apple.id===id) return apple
        }
    }

    getBanana(id) {
        for(let i=bananas.length,banana;i;i--) {
            banana = bananas[i-1]
            if(banana.id===id) return banana
        }
    }
}