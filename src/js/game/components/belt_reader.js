import { Component } from "../component";
import { BaseItem } from "../base_item";

export class BeltReaderComponent extends Component {
    static getId() {
        return "BeltReader";
    }

    duplicateWithoutContents() {
        return new BeltReaderComponent();
    }

    constructor() {
        super();

        /**
         * Which items went through the reader, we only store the time
         * @type {Array<number>}
         */
        this.lastItemTimes = [];

        /**
         * Which item passed the reader last
         * @type {BaseItem}
         */
        this.lastItem = null;

        /**
         * Stores the last throughput we computed
         * @type {number}
         */
        this.lastThroughput = 0;

        /**
         * Stores when we last computed the throughput
         * @type {number}
         */
        this.lastThroughputComputation = 0;
    }
}
