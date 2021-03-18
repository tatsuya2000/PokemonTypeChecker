'use strict';

// 内部処理関数
/* ノーマル，ほのお，みず，でんき，くさ，こおり，かくとう，どく，じめん，ひこう，エスパー，むし，いわ，ゴースト，ドラゴン，あく，はがね，フェアリー */
const normal = document.getElementById('normal');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const electric = document.getElementById('electric');
const grass = document.getElementById('grass');
const ice = document.getElementById('ice');
const fighting = document.getElementById('fighting');
const poison = document.getElementById('poison');
const ground = document.getElementById('ground');
const flying = document.getElementById('flying');
const psychic = document.getElementById('psychic');
const bug = document.getElementById('bug');
const rock = document.getElementById('rock');
const ghost = document.getElementById('ghost');
const dragon = document.getElementById('dragon');
const dark = document.getElementById('dark');
const steel = document.getElementById('steel');
const fairy = document.getElementById('fairy');

const typeTable = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
    [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
    [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
    [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
    [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
    [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
    [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
    [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
    [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
    [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
    [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
    [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
    [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],
    [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
    [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1]
];

const undiscoveredTypes = [['ノーマル', 'こおり'], ['ノーマル', 'どく'], ['ノーマル', 'むし'], ['ノーマル', 'いわ'],
['ノーマル', 'ゴースト'], ['ノーマル', 'はがね'], ['ほのお', 'くさ'], ['ほのお', 'フェアリー'],
['でんき', 'かくとう'],  ['こおり', 'どく'], ['かくとう', 'じめん'], ['かくとう', 'フェアリー'],
['どく', 'はがね'], ['じめん', 'フェアリー'], ['むし', 'ドラゴン'], ['むし', 'あく'], ['いわ', 'ゴースト']];

const typeToNumber = (type) => {
    if(type === 'ノーマル') return 0;
    else if(type === 'ほのお') return 1;
    else if(type === 'みず') return 2;
    else if(type === 'でんき') return 3;
    else if(type === 'くさ') return 4;
    else if(type === 'こおり') return 5;
    else if(type === 'かくとう') return 6;
    else if(type === 'どく') return 7;
    else if(type === 'じめん') return 8;
    else if(type === 'ひこう') return 9;
    else if(type === 'エスパー') return 10;
    else if(type === 'むし') return 11;
    else if(type === 'いわ') return 12;
    else if(type === 'ゴースト') return 13;
    else if(type === 'ドラゴン') return 14;
    else if(type === 'あく') return 15;
    else if(type === 'はがね') return 16;
    else if(type === 'フェアリー') return 17;
    else return null;
}

const numberToType = (number) => {
    if(number === 0) return 'ノーマル';
    else if(number === 1) return 'ほのお';
    else if(number === 2) return 'みず';
    else if(number === 3) return 'でんき';
    else if(number === 4) return 'くさ';
    else if(number === 5) return 'こおり';
    else if(number === 6) return 'かくとう';
    else if(number === 7) return 'どく';
    else if(number === 8) return 'じめん';
    else if(number === 9) return 'ひこう';
    else if(number === 10) return 'エスパー';
    else if(number === 11) return 'むし';
    else if(number === 12) return 'いわ';
    else if(number === 13) return 'ゴースト';
    else if(number === 14) return 'ドラゴン';
    else if(number === 15) return 'あく';
    else if(number === 16) return 'はがね';
    else if(number === 17) return 'フェアリー';
    else return null;
}

const numberToId = (number) => {
    if(number === 0) return normal;
    else if(number === 1) return fire;
    else if(number === 2) return water;
    else if(number === 3) return electric;
    else if(number === 4) return grass;
    else if(number === 5) return ice;
    else if(number === 6) return fighting;
    else if(number === 7) return poison;
    else if(number === 8) return ground;
    else if(number === 9) return flying;
    else if(number === 10) return psychic;
    else if(number === 11) return bug;
    else if(number === 12) return rock;
    else if(number === 13) return ghost;
    else if(number === 14) return dragon;
    else if(number === 15) return dark;
    else if(number === 16) return steel;
    else if(number === 17) return fairy;
    else return null;
}

const idToType = (id) => {
    if(id === normal) return 'ノーマル';
    else if(id === fire) return 'ほのお';
    else if(id === water) return 'みず';
    else if(id === electric) return 'でんき';
    else if(id === grass) return 'くさ';
    else if(id === ice) return 'こおり';
    else if(id === fighting) return 'かくとう';
    else if(id === poison) return 'どく';
    else if(id === ground) return 'じめん';
    else if(id === flying) return 'ひこう';
    else if(id === psychic) return 'エスパー';
    else if(id === bug) return 'むし';
    else if(id === rock) return 'いわ';
    else if(id === ghost) return 'ゴースト';
    else if(id === dragon) return 'ドラゴン';
    else if(id === dark) return 'あく';
    else if(id === steel) return 'はがね';
    else if(id === fairy) return 'フェアリー';
    else return null;
}

const typeToString = (type) => {
    if(type === 'ノーマル') return 'normal';
    else if(type === 'ほのお') return 'fire';
    else if(type === 'みず') return 'water';
    else if(type === 'でんき') return 'electric';
    else if(type === 'くさ') return 'grass';
    else if(type === 'こおり') return 'ice';
    else if(type === 'かくとう') return 'fighting';
    else if(type === 'どく') return 'poison';
    else if(type === 'じめん') return 'ground';
    else if(type === 'ひこう') return 'flying';
    else if(type === 'エスパー') return 'psychic';
    else if(type === 'むし') return 'bug';
    else if(type === 'いわ') return 'rock';
    else if(type === 'ゴースト') return 'ghost';
    else if(type === 'ドラゴン') return 'dragon';
    else if(type === 'あく') return 'dark';
    else if(type === 'はがね') return 'steel';
    else if(type === 'フェアリー') return 'fairy';
    else return null;
}

const idToString1 = (id) =>{
    if(id === normal) return 'normal';
    else if(id === fire) return 'fire';
    else if(id === water) return 'water';
    else if(id === electric) return 'electric';
    else if(id === grass) return 'grass';
    else if(id === ice) return 'ice';
    else if(id === fighting) return 'fighting';
    else if(id === poison) return 'poison';
    else if(id === ground) return 'ground';
    else if(id === flying) return 'flying';
    else if(id === psychic) return 'psychic';
    else if(id === bug) return 'bug';
    else if(id === rock) return 'rock';
    else if(id === ghost) return 'ghost';
    else if(id === dragon) return 'dragon';
    else if(id === dark) return 'dark';
    else if(id === steel) return 'steel';
    else if(id === fairy) return 'fairy';
    else return null;
}

const idToString2 = (id) => {
    if(id === normal) return 'Normal';
    else if(id === fire) return 'Fire';
    else if(id === water) return 'Water';
    else if(id === electric) return 'Electric';
    else if(id === grass) return 'Grass';
    else if(id === ice) return 'Ice';
    else if(id === fighting) return 'Fighting';
    else if(id === poison) return 'Poison';
    else if(id === ground) return 'Ground';
    else if(id === flying) return 'Flying';
    else if(id === psychic) return 'Psychic';
    else if(id === bug) return 'Bug';
    else if(id === rock) return 'Rock';
    else if(id === ghost) return 'Ghost';
    else if(id === dragon) return 'Dragon';
    else if(id === dark) return 'Dark';
    else if(id === steel) return 'Steel';
    else if(id === fairy) return 'Fairy';
    else return null;
}

const arrayEqual = (array1, array2) => { //配列がまったく同じならtrue
    if (!Array.isArray(array1))    return false;
    if (!Array.isArray(array2))    return false;
    if (array1.length != array2.length) return false;
    for (let i = 0, n = array1.length; i < n; ++i) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}

const superArrayEqual = (array1, arrays) => {//arrays要素にarray1と同じものがあればtrue
    for(let array2 of arrays) {
        if((arrayEqual(array1, array2))) return true;
    }
    return false;
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const types = numbers.map((number) => {
    return numberToType(number);
});

const ids = numbers.map((number) => {
    return numberToId(number);
}); 

const strings1 = ids.map((id) => {
    return idToString1(id);
});

const strings2 = ids.map((id) => {
    return idToString2(id);
});

const numberCombis = () => {
    const array = [];
    for (let i = 0; i < 18; i++) {
        for (let j = i; j < 18; j++) {
            array.push([i, j]);
        }
    }
    return array;
}

const typeCombis = numberCombis().map((numberCombi) => {
    return numberCombi.map((number) => {
        return numberToType(number);
    });
});

const discoveredTypes = typeCombis.filter((type) => {
    if(type[0] === type[1]) type.pop();
        return !(superArrayEqual(type, undiscoveredTypes));
});

const typeEffect = (attack, defence) => { // 攻撃倍率を計算
    if(typeToNumber(attack) === null) return 'エラー';
    else {
        const effect = typeTable[typeToNumber(attack)][typeToNumber(defence[0])];
        if(defence.length === 2) {
            const doubleEffect = effect * typeTable[typeToNumber(attack)][typeToNumber(defence[1])];
            return doubleEffect;
        } else return effect;
    }
}

const effectMessage = (effect) =>{
    if(effect >= 2) return '効果抜群だ！';
    else if(effect === 1) return '効果ふつうだ';
    else if (effect === 0) return '効果ないようだ';
    else if(effect <= 0.5) return '効果いまひとつだ';
    else return 'error';
}

const choseType = (drawnId) =>{
    const numberCombis = () => {
        const array = [];
        for (let i = 0; i < 18; i++) {
            for (let j = i; j < 18; j++) {
                array.push([i, j]);
            }
        }
        return array;
    }
    const typeCombis = numberCombis().map((numberCombi) => {
        return numberCombi.map((number) => {
            return numberToType(number);
        });
    });
    const discoveredTypes = typeCombis.filter((type) => {
        if(type[0] === type[1]) type.pop();
            return !(superArrayEqual(type, undiscoveredTypes));
    });
    return discoveredTypes[drawnId];
};

const weakList = (type) => {
    const weak = [];
    for(let i = 0; i <= 17; i++) {
        if(typeEffect(numberToType(i), type) >= 2) {
            weak.push(numberToType(i));
        } 
    }
    return weak;
}



const doubleCheck = (item, array) => { // 配列要素にitemが含まれていないならtrue
    for(let i = 0; i < array.length; i++) {
        if(array[i] === item) return false;
    }
    return true;
}


// DOM操作
const start = document.getElementById('start');
const main1 = document.getElementById('main1');
const main2 = document.getElementById('main2');
const main3 = document.getElementById('main3');
const number = document.getElementById('number');
const condition = document.getElementById('condition');
const counter = document.getElementById('counter');
const missCounter = document.getElementById('miss-counter');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const answer = document.getElementById('answer');
const next = document.getElementById('next');
const score = document.getElementById('score');
const perfect = document.getElementById('perfect');
const cmnt = document.getElementById('cmnt');
const retry = document.getElementById('retry');


let enemy;
let attack;
let judge;
let total = {success: 0, miss: 0, score: 0, perfect: 0, comment: '', times: 0, history: []};

function showTypeList (id, typeList) {
    for(let i = 0; i < typeList.length; i++) {
        let li = document.createElement('li');
        li.id = 'type' + i;
        li.innerText = typeList[i];
        li.classList.add(typeToString(typeList[i]));
        li = id.appendChild(li);
    }
}

function typingString(id, string) {
    let i = 0;
    const typ = setInterval(function() {
        id.textContent = string.substring(0, i);
        i++;
            //終了条件
            if (i == string.length + 1) {
                clearInterval(typ);
            }
        }, 50);
    }
    
    function reset() {
        const resetChild = (id) => { //子要素をすべて削除
            while(id.firstChild){
                id.removeChild(id.firstChild);
            }
        };
        const randomId = Math.floor(Math.random() * discoveredTypes.length);
        enemy = {
            type: choseType(randomId), 
            weaks: types.filter((type) => {
            return typeEffect(type, choseType(randomId)) >= 2;
        })};
        attack = {type: '', history: []};
        judge = {success: 0, miss: 0, stop: false};
        number.textContent = total.times + 1;
        for(let i = 0; i < 18; i++) numberToId(i).className = idToString1(numberToId(i));//選択肢を初めのclassに戻す
        resetChild(condition);
        resetChild(answer);
        showTypeList(condition, enemy.type);
        counter.textContent = `${judge.success}/${enemy.weaks.length}`;
        missCounter.textContent = `${judge.miss}/3`;
        missCounter.style.color = 'black';
        typingString(output1, 'どのタイプを選ぶ？');
        output2.textContent = '';
        next.style.display = 'none';
    }
    
    function process() {
        const result = typeEffect(attack.type, enemy.type);
        typingString(output1, effectMessage(result))
        if(doubleCheck(attack.type, attack.history)) {
            attack.history.unshift(attack.type);
            if(result >= 2 && judge.stop === false) {
                judge.success++;
                counter.textContent = `${judge.success}/${enemy.weaks.length}`;
        } else if(judge.stop === false) {
            judge.miss++;
            missCounter.textContent = `${judge.miss}/3`;
        }
        if(judge.miss >= 3 && judge.stop === false) {
            output2.textContent = 'ざんねん！　答え:';
            missCounter.style.color = 'red';
            showTypeList(answer, weakList(enemy.type));
            judge.stop = true;
        }
        if(judge.success === enemy.weaks.length && judge.stop === false) {
            if(judge.miss === 0) {
                output2.textContent = 'パーフェクト！！　答え:';
                showTypeList(answer, weakList(enemy.type));
                total.perfect++;
            }
            else {
                output2.textContent = 'やったね！　答え:';
                showTypeList(answer, weakList(enemy.type));
            }
            judge.stop = true;
            total.score++;
        }
        if(judge.stop === true) next.style.display = 'block';
    }
}

// 初期状態
main2.style.display = 'none';
next.style.display = 'none';
main3.style.display = 'none';

//ゲームスタート
start.onclick = function(event) {
    event.preventDefault();
    reset();
    main1.style.display = 'none';
    main2.style.display = 'block';
    
}


// 選択肢をクリックしたとき
for(let i = 0; i < 18; i++) {
    const id = numberToId(i);
    id.addEventListener('click', () => {
        id.className = 'deep' + idToString2(id);
        id.classList.add('pressed');
        attack.type = idToType(id);
        process();
    });
}

output1.addEventListener('click', () => typingString(output1, 'どのタイプを選ぶ？'));

// 次の問題または結果発表
next.onclick = function(event) {
    event.preventDefault();
    total.success += judge.success;
    total.miss += judge.miss;
    total.times++;
    total.history.unshift(enemy.type);
    if(total.times === 3) {
        main2.style.display = 'none';
        main3.style.display = 'block';
        score.textContent = total.score;
        perfect.textContent = total.perfect;
        if(total.perfect === total.times) total.comment = 'タイプ相性はバッチリだね！！';
        else if(total.score === total.times) total.comment = 'よくできました！';
        else if(total.score === 0) total.comment = 'デバッグ作業お疲れ様です！';
        else total.comment = 'ポケモンエアプかよ！';
        typingString(cmnt, total.comment);
        cmnt.addEventListener('click', () => typingString(cmnt, total.comment));
    } else reset();
}

//再読み込み
retry.onclick = function(event) {
    event.preventDefault();
    window.location.reload(false);
}
