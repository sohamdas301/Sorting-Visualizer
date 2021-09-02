import React, { Component } from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimations } from '../Sorting-Algorithms/mergeSort.js';
import { bubbleSort } from "../Sorting-Algorithms/bubbleSort.js";
import { insertionSort } from '../Sorting-Algorithms/insertionSort';
import { quickSort } from '../Sorting-Algorithms/quickSort';
import { heapSort } from '../Sorting-Algorithms/heapSort';

const ANIMATION_SPEED_MS = 2;

const NUMBER_OF_ARRAY_BARS = 90;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';


export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 600));
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [c, st, end] = animations[i];
            if (c === 1) {
                const barOneStyle = arrayBars[st].style;
                const barTwoStyle = arrayBars[end].style;
                const color = SECONDARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if (c === 2) {
                const barOneStyle = arrayBars[st].style;
                const barTwoStyle = arrayBars[end].style;
                const color = PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if (c === 3) {
                setTimeout(() => {
                    const [cc, barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }

        }
    }

    quickSort() {
        const animations = quickSort(this.state.array.slice());
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [c, st, end] = animations[i];
            if (c === 1) {
                const barOneStyle = arrayBars[st].style;
                const barTwoStyle = arrayBars[end].style;
                const color = SECONDARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if (c === 2) {
                const barOneStyle = arrayBars[st].style;
                const barTwoStyle = arrayBars[end].style;
                const color = PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if (c === 3) {
                setTimeout(() => {
                    const [check, barOneIdx, barTwoIdx, newHeight1, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight1}px`;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }

        }
    }

    heapSort() {
        const animations = heapSort(this.state.array.slice());
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [c, st, end, h1, h2] = animations[i];
            if (c === 1) {
                const barOneStyle = arrayBars[st].style;
                const barTwoStyle = arrayBars[st].style;
                const color = SECONDARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if (c === 2) {
                const barOneStyle = arrayBars[st].style;
                const barTwoStyle = arrayBars[st].style;
                const color = PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if (c === 3) {
                setTimeout(() => {
                    const [cc, barOneIdx, barTwoIdx, newHeight1, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    // barOneStyle.color = PRIMARY_COLOR;
                    barOneStyle.height = `${newHeight1}px`;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    // barTwoStyle.color = PRIMARY_COLOR;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }

        }
    }

    bubbleSort() {
        const temp = this.state.array.slice();
        const animations = bubbleSort(temp);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [st, end] = animations[i];
            if (st !== -1 && (i + 1) % 3 === 1) {
                const barOneStyle = arrayBars[st].style;
                const barTwoStyle = arrayBars[end].style;
                const color = SECONDARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if (st != -1 && (i + 1) % 3 === 2) {
                const barOneStyle = arrayBars[st].style;
                const barTwoStyle = arrayBars[end].style;
                const color = PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if (st !== -1 && (i + 1) % 3 === 0) {
                setTimeout(() => {
                    const [barOneIdx, newHeight1, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight1}px`;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }

        }
    }
    insertionSort() {
        const animations = insertionSort(this.state.array.slice());
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [c, st, end, h1, h2] = animations[i];
            if (c === 1) {
                const barOneStyle = arrayBars[st].style;
                const barTwoStyle = arrayBars[st].style;
                const color = SECONDARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if (c === 2) {
                const barOneStyle = arrayBars[st].style;
                const barTwoStyle = arrayBars[st].style;
                const color = PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if (c === 3) {
                setTimeout(() => {
                    const [cc, barOneIdx, barTwoIdx, newHeight1, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight1}px`;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }

        }
    }
    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            height: `${value}px`,
                        }}>
                    </div>
                ))}
                <div className="buttons">
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
            </div>
        );
    }
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function check(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

