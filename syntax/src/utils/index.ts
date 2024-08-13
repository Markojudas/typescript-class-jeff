export type Url = `http://${string}/` | `https://${string}/`;

declare const brand: unique symbol;

export type Brand<T, TBrand> = T & { [brand]: TBrand };

// Parametric Polymorphism
export type Result<T, E = undefined> =
  | { ok: true; value: T }
  | { ok: false; error: E | undefined };

export const Ok = <T>(data: T): Result<T, never> => {
  return { ok: true, value: data };
};

export const Err = <E>(error?: E): Result<never, E> => {
  return { ok: false, error };
};
