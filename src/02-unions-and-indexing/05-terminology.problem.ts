/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

type A =
  | {
      type: "a";
      iDontCare: string;
    }
  | {
      type: "b";
      whatever: string;
    }
  | {
      type: "c";
      What: string;
    };

const getUser = (a:A)=>{
    if(a.type === "a"){
        return a.iDontCare
    }
    if(a.type === "b"){
        return a.whatever
    }
    if(a.type === "c"){
        return a.What
    }
}

type B = "a" | "b" | "c";


enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
