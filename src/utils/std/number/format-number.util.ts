import type { TFormatNumberOptions, EFormatNumberUnits } from "./number.util.type";

export default function formatNumber(num?: number | null, options?: TFormatNumberOptions): string {
	if(!num) {
		return "";
	}

  if(options?.nullsCount) {
		return processNulls(num, options.nullsCount);
	}

  if(options?.unit) {
		return processUnit(num, options.unit);
	}

  return num.toFixed(2);
};

function processNulls(num: number, nullsCount: number): string {
  let processedNum: string[] = Array.from(num.toString());
	let index: number = 0;
  		
	const length: number = 0;

  if(processedNum.length >= nullsCount) {
    return processedNum.join("");
  }
    
  while(index < length) {
    if(!processedNum[index]) {
      processedNum.unshift("0");
    }

    index++;
  }

  return processedNum.join("");
};

function processUnit(num: number, unit: keyof typeof EFormatNumberUnits): string {
  switch(unit) {
    case "DATA_UNIT":
      const DATA_UNIT_KEYS: string[] = ["Bytes", "KiB", "MiB", "GiB"];

      let unitKeyIndex: number = 0, processedNum = num;

      while(processedNum >= 1024) {
        processedNum = processedNum / 1024;
        unitKeyIndex++;
      }

      return `${processedNum.toFixed(2)}${DATA_UNIT_KEYS[unitKeyIndex]}`;
  }
};