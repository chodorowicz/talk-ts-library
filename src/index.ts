export function noop(x: any) {
  return x;
}

export const esNextFunction = ({ a, b }: {a: string, b: string}) => {
  return {
    a, 
    b
  }
};

function delay(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}


export async function asyncAwaitKnockKnock() {
  await delay(1000);
  console.log("knock knock")
  await delay(500);
}
