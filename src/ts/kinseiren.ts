import "../styles/style.scss";
import "../styles/reset.scss";
import kinseiren from '../json/kinseiren.json';

console.log(kinseiren);



interface TsFunc {
    getJson(): object;
  }

declare global {
    interface Window {
        tsFunc: TsFunc;
    }
}

const tsFunc: TsFunc = (() => {
    return {
        getJson(): object {
            return kinseiren;
        }
    };
})();
window.tsFunc = tsFunc;

