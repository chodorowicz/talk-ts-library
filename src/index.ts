export function noop(x: any) {
  return x;
}

export const esNextFunction = ({ a, b }: {a: string, b: string}) => {
  return {
    a, 
    b
  }
};