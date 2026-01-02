
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model customer_docs
 * 
 */
export type customer_docs = $Result.DefaultSelection<Prisma.$customer_docsPayload>
/**
 * Model branches
 * 
 */
export type branches = $Result.DefaultSelection<Prisma.$branchesPayload>
/**
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>
/**
 * Model loans
 * 
 */
export type loans = $Result.DefaultSelection<Prisma.$loansPayload>
/**
 * Model loan_payments
 * 
 */
export type loan_payments = $Result.DefaultSelection<Prisma.$loan_paymentsPayload>
/**
 * Model employees2
 * 
 */
export type employees2 = $Result.DefaultSelection<Prisma.$employees2Payload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer_docs`: Exposes CRUD operations for the **customer_docs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customer_docs
    * const customer_docs = await prisma.customer_docs.findMany()
    * ```
    */
  get customer_docs(): Prisma.customer_docsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branches`: Exposes CRUD operations for the **branches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branches.findMany()
    * ```
    */
  get branches(): Prisma.branchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loans`: Exposes CRUD operations for the **loans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loans
    * const loans = await prisma.loans.findMany()
    * ```
    */
  get loans(): Prisma.loansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan_payments`: Exposes CRUD operations for the **loan_payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loan_payments
    * const loan_payments = await prisma.loan_payments.findMany()
    * ```
    */
  get loan_payments(): Prisma.loan_paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employees2`: Exposes CRUD operations for the **employees2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees2s
    * const employees2s = await prisma.employees2.findMany()
    * ```
    */
  get employees2(): Prisma.employees2Delegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    customers: 'customers',
    customer_docs: 'customer_docs',
    branches: 'branches',
    accounts: 'accounts',
    transactions: 'transactions',
    loans: 'loans',
    loan_payments: 'loan_payments',
    employees2: 'employees2'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customers" | "customer_docs" | "branches" | "accounts" | "transactions" | "loans" | "loan_payments" | "employees2"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      customer_docs: {
        payload: Prisma.$customer_docsPayload<ExtArgs>
        fields: Prisma.customer_docsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customer_docsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customer_docsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload>
          }
          findFirst: {
            args: Prisma.customer_docsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customer_docsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload>
          }
          findMany: {
            args: Prisma.customer_docsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload>[]
          }
          create: {
            args: Prisma.customer_docsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload>
          }
          createMany: {
            args: Prisma.customer_docsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customer_docsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload>[]
          }
          delete: {
            args: Prisma.customer_docsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload>
          }
          update: {
            args: Prisma.customer_docsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload>
          }
          deleteMany: {
            args: Prisma.customer_docsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customer_docsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customer_docsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload>[]
          }
          upsert: {
            args: Prisma.customer_docsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_docsPayload>
          }
          aggregate: {
            args: Prisma.Customer_docsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer_docs>
          }
          groupBy: {
            args: Prisma.customer_docsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Customer_docsGroupByOutputType>[]
          }
          count: {
            args: Prisma.customer_docsCountArgs<ExtArgs>
            result: $Utils.Optional<Customer_docsCountAggregateOutputType> | number
          }
        }
      }
      branches: {
        payload: Prisma.$branchesPayload<ExtArgs>
        fields: Prisma.branchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.branchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.branchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          findFirst: {
            args: Prisma.branchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.branchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          findMany: {
            args: Prisma.branchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>[]
          }
          create: {
            args: Prisma.branchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          createMany: {
            args: Prisma.branchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.branchesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>[]
          }
          delete: {
            args: Prisma.branchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          update: {
            args: Prisma.branchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          deleteMany: {
            args: Prisma.branchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.branchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.branchesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>[]
          }
          upsert: {
            args: Prisma.branchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$branchesPayload>
          }
          aggregate: {
            args: Prisma.BranchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranches>
          }
          groupBy: {
            args: Prisma.branchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.branchesCountArgs<ExtArgs>
            result: $Utils.Optional<BranchesCountAggregateOutputType> | number
          }
        }
      }
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      loans: {
        payload: Prisma.$loansPayload<ExtArgs>
        fields: Prisma.loansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload>
          }
          findFirst: {
            args: Prisma.loansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload>
          }
          findMany: {
            args: Prisma.loansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload>[]
          }
          create: {
            args: Prisma.loansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload>
          }
          createMany: {
            args: Prisma.loansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload>[]
          }
          delete: {
            args: Prisma.loansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload>
          }
          update: {
            args: Prisma.loansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload>
          }
          deleteMany: {
            args: Prisma.loansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.loansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload>[]
          }
          upsert: {
            args: Prisma.loansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loansPayload>
          }
          aggregate: {
            args: Prisma.LoansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoans>
          }
          groupBy: {
            args: Prisma.loansGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoansGroupByOutputType>[]
          }
          count: {
            args: Prisma.loansCountArgs<ExtArgs>
            result: $Utils.Optional<LoansCountAggregateOutputType> | number
          }
        }
      }
      loan_payments: {
        payload: Prisma.$loan_paymentsPayload<ExtArgs>
        fields: Prisma.loan_paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loan_paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loan_paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload>
          }
          findFirst: {
            args: Prisma.loan_paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loan_paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload>
          }
          findMany: {
            args: Prisma.loan_paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload>[]
          }
          create: {
            args: Prisma.loan_paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload>
          }
          createMany: {
            args: Prisma.loan_paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loan_paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload>[]
          }
          delete: {
            args: Prisma.loan_paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload>
          }
          update: {
            args: Prisma.loan_paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload>
          }
          deleteMany: {
            args: Prisma.loan_paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loan_paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.loan_paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload>[]
          }
          upsert: {
            args: Prisma.loan_paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loan_paymentsPayload>
          }
          aggregate: {
            args: Prisma.Loan_paymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan_payments>
          }
          groupBy: {
            args: Prisma.loan_paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Loan_paymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.loan_paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<Loan_paymentsCountAggregateOutputType> | number
          }
        }
      }
      employees2: {
        payload: Prisma.$employees2Payload<ExtArgs>
        fields: Prisma.employees2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.employees2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employees2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload>
          }
          findFirst: {
            args: Prisma.employees2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employees2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload>
          }
          findMany: {
            args: Prisma.employees2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload>[]
          }
          create: {
            args: Prisma.employees2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload>
          }
          createMany: {
            args: Prisma.employees2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.employees2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload>[]
          }
          delete: {
            args: Prisma.employees2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload>
          }
          update: {
            args: Prisma.employees2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload>
          }
          deleteMany: {
            args: Prisma.employees2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employees2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.employees2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload>[]
          }
          upsert: {
            args: Prisma.employees2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees2Payload>
          }
          aggregate: {
            args: Prisma.Employees2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees2>
          }
          groupBy: {
            args: Prisma.employees2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Employees2GroupByOutputType>[]
          }
          count: {
            args: Prisma.employees2CountArgs<ExtArgs>
            result: $Utils.Optional<Employees2CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    customers?: customersOmit
    customer_docs?: customer_docsOmit
    branches?: branchesOmit
    accounts?: accountsOmit
    transactions?: transactionsOmit
    loans?: loansOmit
    loan_payments?: loan_paymentsOmit
    employees2?: employees2Omit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    accounts: number
    loans: number
    docs: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | CustomersCountOutputTypeCountAccountsArgs
    loans?: boolean | CustomersCountOutputTypeCountLoansArgs
    docs?: boolean | CustomersCountOutputTypeCountDocsArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loansWhereInput
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customer_docsWhereInput
  }


  /**
   * Count Type BranchesCountOutputType
   */

  export type BranchesCountOutputType = {
    accounts: number
  }

  export type BranchesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | BranchesCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * BranchesCountOutputType without action
   */
  export type BranchesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchesCountOutputType
     */
    select?: BranchesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchesCountOutputType without action
   */
  export type BranchesCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
  }


  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    transactions: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AccountsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type LoansCountOutputType
   */

  export type LoansCountOutputType = {
    payments: number
  }

  export type LoansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | LoansCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * LoansCountOutputType without action
   */
  export type LoansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoansCountOutputType
     */
    select?: LoansCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoansCountOutputType without action
   */
  export type LoansCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loan_paymentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomersMinAggregateOutputType = {
    customer_id: number | null
    name: string | null
    email: string | null
    phone: string | null
  }

  export type CustomersMaxAggregateOutputType = {
    customer_id: number | null
    name: string | null
    email: string | null
    phone: string | null
  }

  export type CustomersCountAggregateOutputType = {
    customer_id: number
    name: number
    email: number
    phone: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    customer_id?: true
  }

  export type CustomersSumAggregateInputType = {
    customer_id?: true
  }

  export type CustomersMinAggregateInputType = {
    customer_id?: true
    name?: true
    email?: true
    phone?: true
  }

  export type CustomersMaxAggregateInputType = {
    customer_id?: true
    name?: true
    email?: true
    phone?: true
  }

  export type CustomersCountAggregateInputType = {
    customer_id?: true
    name?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    customer_id: number
    name: string | null
    email: string | null
    phone: string | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    accounts?: boolean | customers$accountsArgs<ExtArgs>
    loans?: boolean | customers$loansArgs<ExtArgs>
    docs?: boolean | customers$docsArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    customer_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_id" | "name" | "email" | "phone", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | customers$accountsArgs<ExtArgs>
    loans?: boolean | customers$loansArgs<ExtArgs>
    docs?: boolean | customers$docsArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs>[]
      loans: Prisma.$loansPayload<ExtArgs>[]
      docs: Prisma.$customer_docsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_id: number
      name: string | null
      email: string | null
      phone: string | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.findMany({ select: { customer_id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.createManyAndReturn({
     *   select: { customer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.updateManyAndReturn({
     *   select: { customer_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends customers$accountsArgs<ExtArgs> = {}>(args?: Subset<T, customers$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loans<T extends customers$loansArgs<ExtArgs> = {}>(args?: Subset<T, customers$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    docs<T extends customers$docsArgs<ExtArgs> = {}>(args?: Subset<T, customers$docsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly customer_id: FieldRef<"customers", 'Int'>
    readonly name: FieldRef<"customers", 'String'>
    readonly email: FieldRef<"customers", 'String'>
    readonly phone: FieldRef<"customers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data?: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.accounts
   */
  export type customers$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    cursor?: accountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * customers.loans
   */
  export type customers$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
    where?: loansWhereInput
    orderBy?: loansOrderByWithRelationInput | loansOrderByWithRelationInput[]
    cursor?: loansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoansScalarFieldEnum | LoansScalarFieldEnum[]
  }

  /**
   * customers.docs
   */
  export type customers$docsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
    where?: customer_docsWhereInput
    orderBy?: customer_docsOrderByWithRelationInput | customer_docsOrderByWithRelationInput[]
    cursor?: customer_docsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Customer_docsScalarFieldEnum | Customer_docsScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model customer_docs
   */

  export type AggregateCustomer_docs = {
    _count: Customer_docsCountAggregateOutputType | null
    _avg: Customer_docsAvgAggregateOutputType | null
    _sum: Customer_docsSumAggregateOutputType | null
    _min: Customer_docsMinAggregateOutputType | null
    _max: Customer_docsMaxAggregateOutputType | null
  }

  export type Customer_docsAvgAggregateOutputType = {
    doc_id: number | null
    customer_id: number | null
  }

  export type Customer_docsSumAggregateOutputType = {
    doc_id: number | null
    customer_id: number | null
  }

  export type Customer_docsMinAggregateOutputType = {
    doc_id: number | null
    customer_id: number | null
    doc_type: string | null
    doc_url: string | null
  }

  export type Customer_docsMaxAggregateOutputType = {
    doc_id: number | null
    customer_id: number | null
    doc_type: string | null
    doc_url: string | null
  }

  export type Customer_docsCountAggregateOutputType = {
    doc_id: number
    customer_id: number
    doc_type: number
    doc_url: number
    _all: number
  }


  export type Customer_docsAvgAggregateInputType = {
    doc_id?: true
    customer_id?: true
  }

  export type Customer_docsSumAggregateInputType = {
    doc_id?: true
    customer_id?: true
  }

  export type Customer_docsMinAggregateInputType = {
    doc_id?: true
    customer_id?: true
    doc_type?: true
    doc_url?: true
  }

  export type Customer_docsMaxAggregateInputType = {
    doc_id?: true
    customer_id?: true
    doc_type?: true
    doc_url?: true
  }

  export type Customer_docsCountAggregateInputType = {
    doc_id?: true
    customer_id?: true
    doc_type?: true
    doc_url?: true
    _all?: true
  }

  export type Customer_docsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer_docs to aggregate.
     */
    where?: customer_docsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_docs to fetch.
     */
    orderBy?: customer_docsOrderByWithRelationInput | customer_docsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customer_docsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customer_docs
    **/
    _count?: true | Customer_docsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Customer_docsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Customer_docsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Customer_docsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Customer_docsMaxAggregateInputType
  }

  export type GetCustomer_docsAggregateType<T extends Customer_docsAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer_docs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer_docs[P]>
      : GetScalarType<T[P], AggregateCustomer_docs[P]>
  }




  export type customer_docsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customer_docsWhereInput
    orderBy?: customer_docsOrderByWithAggregationInput | customer_docsOrderByWithAggregationInput[]
    by: Customer_docsScalarFieldEnum[] | Customer_docsScalarFieldEnum
    having?: customer_docsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Customer_docsCountAggregateInputType | true
    _avg?: Customer_docsAvgAggregateInputType
    _sum?: Customer_docsSumAggregateInputType
    _min?: Customer_docsMinAggregateInputType
    _max?: Customer_docsMaxAggregateInputType
  }

  export type Customer_docsGroupByOutputType = {
    doc_id: number
    customer_id: number
    doc_type: string
    doc_url: string
    _count: Customer_docsCountAggregateOutputType | null
    _avg: Customer_docsAvgAggregateOutputType | null
    _sum: Customer_docsSumAggregateOutputType | null
    _min: Customer_docsMinAggregateOutputType | null
    _max: Customer_docsMaxAggregateOutputType | null
  }

  type GetCustomer_docsGroupByPayload<T extends customer_docsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Customer_docsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Customer_docsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Customer_docsGroupByOutputType[P]>
            : GetScalarType<T[P], Customer_docsGroupByOutputType[P]>
        }
      >
    >


  export type customer_docsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doc_id?: boolean
    customer_id?: boolean
    doc_type?: boolean
    doc_url?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_docs"]>

  export type customer_docsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doc_id?: boolean
    customer_id?: boolean
    doc_type?: boolean
    doc_url?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_docs"]>

  export type customer_docsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doc_id?: boolean
    customer_id?: boolean
    doc_type?: boolean
    doc_url?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_docs"]>

  export type customer_docsSelectScalar = {
    doc_id?: boolean
    customer_id?: boolean
    doc_type?: boolean
    doc_url?: boolean
  }

  export type customer_docsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"doc_id" | "customer_id" | "doc_type" | "doc_url", ExtArgs["result"]["customer_docs"]>
  export type customer_docsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type customer_docsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type customer_docsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }

  export type $customer_docsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer_docs"
    objects: {
      customer: Prisma.$customersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      doc_id: number
      customer_id: number
      doc_type: string
      doc_url: string
    }, ExtArgs["result"]["customer_docs"]>
    composites: {}
  }

  type customer_docsGetPayload<S extends boolean | null | undefined | customer_docsDefaultArgs> = $Result.GetResult<Prisma.$customer_docsPayload, S>

  type customer_docsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customer_docsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Customer_docsCountAggregateInputType | true
    }

  export interface customer_docsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer_docs'], meta: { name: 'customer_docs' } }
    /**
     * Find zero or one Customer_docs that matches the filter.
     * @param {customer_docsFindUniqueArgs} args - Arguments to find a Customer_docs
     * @example
     * // Get one Customer_docs
     * const customer_docs = await prisma.customer_docs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customer_docsFindUniqueArgs>(args: SelectSubset<T, customer_docsFindUniqueArgs<ExtArgs>>): Prisma__customer_docsClient<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer_docs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customer_docsFindUniqueOrThrowArgs} args - Arguments to find a Customer_docs
     * @example
     * // Get one Customer_docs
     * const customer_docs = await prisma.customer_docs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customer_docsFindUniqueOrThrowArgs>(args: SelectSubset<T, customer_docsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customer_docsClient<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer_docs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_docsFindFirstArgs} args - Arguments to find a Customer_docs
     * @example
     * // Get one Customer_docs
     * const customer_docs = await prisma.customer_docs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customer_docsFindFirstArgs>(args?: SelectSubset<T, customer_docsFindFirstArgs<ExtArgs>>): Prisma__customer_docsClient<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer_docs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_docsFindFirstOrThrowArgs} args - Arguments to find a Customer_docs
     * @example
     * // Get one Customer_docs
     * const customer_docs = await prisma.customer_docs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customer_docsFindFirstOrThrowArgs>(args?: SelectSubset<T, customer_docsFindFirstOrThrowArgs<ExtArgs>>): Prisma__customer_docsClient<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customer_docs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_docsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customer_docs
     * const customer_docs = await prisma.customer_docs.findMany()
     * 
     * // Get first 10 Customer_docs
     * const customer_docs = await prisma.customer_docs.findMany({ take: 10 })
     * 
     * // Only select the `doc_id`
     * const customer_docsWithDoc_idOnly = await prisma.customer_docs.findMany({ select: { doc_id: true } })
     * 
     */
    findMany<T extends customer_docsFindManyArgs>(args?: SelectSubset<T, customer_docsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer_docs.
     * @param {customer_docsCreateArgs} args - Arguments to create a Customer_docs.
     * @example
     * // Create one Customer_docs
     * const Customer_docs = await prisma.customer_docs.create({
     *   data: {
     *     // ... data to create a Customer_docs
     *   }
     * })
     * 
     */
    create<T extends customer_docsCreateArgs>(args: SelectSubset<T, customer_docsCreateArgs<ExtArgs>>): Prisma__customer_docsClient<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customer_docs.
     * @param {customer_docsCreateManyArgs} args - Arguments to create many Customer_docs.
     * @example
     * // Create many Customer_docs
     * const customer_docs = await prisma.customer_docs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customer_docsCreateManyArgs>(args?: SelectSubset<T, customer_docsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customer_docs and returns the data saved in the database.
     * @param {customer_docsCreateManyAndReturnArgs} args - Arguments to create many Customer_docs.
     * @example
     * // Create many Customer_docs
     * const customer_docs = await prisma.customer_docs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customer_docs and only return the `doc_id`
     * const customer_docsWithDoc_idOnly = await prisma.customer_docs.createManyAndReturn({
     *   select: { doc_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customer_docsCreateManyAndReturnArgs>(args?: SelectSubset<T, customer_docsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer_docs.
     * @param {customer_docsDeleteArgs} args - Arguments to delete one Customer_docs.
     * @example
     * // Delete one Customer_docs
     * const Customer_docs = await prisma.customer_docs.delete({
     *   where: {
     *     // ... filter to delete one Customer_docs
     *   }
     * })
     * 
     */
    delete<T extends customer_docsDeleteArgs>(args: SelectSubset<T, customer_docsDeleteArgs<ExtArgs>>): Prisma__customer_docsClient<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer_docs.
     * @param {customer_docsUpdateArgs} args - Arguments to update one Customer_docs.
     * @example
     * // Update one Customer_docs
     * const customer_docs = await prisma.customer_docs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customer_docsUpdateArgs>(args: SelectSubset<T, customer_docsUpdateArgs<ExtArgs>>): Prisma__customer_docsClient<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customer_docs.
     * @param {customer_docsDeleteManyArgs} args - Arguments to filter Customer_docs to delete.
     * @example
     * // Delete a few Customer_docs
     * const { count } = await prisma.customer_docs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customer_docsDeleteManyArgs>(args?: SelectSubset<T, customer_docsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_docsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customer_docs
     * const customer_docs = await prisma.customer_docs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customer_docsUpdateManyArgs>(args: SelectSubset<T, customer_docsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_docs and returns the data updated in the database.
     * @param {customer_docsUpdateManyAndReturnArgs} args - Arguments to update many Customer_docs.
     * @example
     * // Update many Customer_docs
     * const customer_docs = await prisma.customer_docs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customer_docs and only return the `doc_id`
     * const customer_docsWithDoc_idOnly = await prisma.customer_docs.updateManyAndReturn({
     *   select: { doc_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customer_docsUpdateManyAndReturnArgs>(args: SelectSubset<T, customer_docsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer_docs.
     * @param {customer_docsUpsertArgs} args - Arguments to update or create a Customer_docs.
     * @example
     * // Update or create a Customer_docs
     * const customer_docs = await prisma.customer_docs.upsert({
     *   create: {
     *     // ... data to create a Customer_docs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer_docs we want to update
     *   }
     * })
     */
    upsert<T extends customer_docsUpsertArgs>(args: SelectSubset<T, customer_docsUpsertArgs<ExtArgs>>): Prisma__customer_docsClient<$Result.GetResult<Prisma.$customer_docsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customer_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_docsCountArgs} args - Arguments to filter Customer_docs to count.
     * @example
     * // Count the number of Customer_docs
     * const count = await prisma.customer_docs.count({
     *   where: {
     *     // ... the filter for the Customer_docs we want to count
     *   }
     * })
    **/
    count<T extends customer_docsCountArgs>(
      args?: Subset<T, customer_docsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Customer_docsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_docsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Customer_docsAggregateArgs>(args: Subset<T, Customer_docsAggregateArgs>): Prisma.PrismaPromise<GetCustomer_docsAggregateType<T>>

    /**
     * Group by Customer_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_docsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customer_docsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customer_docsGroupByArgs['orderBy'] }
        : { orderBy?: customer_docsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customer_docsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomer_docsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer_docs model
   */
  readonly fields: customer_docsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer_docs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customer_docsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customer_docs model
   */
  interface customer_docsFieldRefs {
    readonly doc_id: FieldRef<"customer_docs", 'Int'>
    readonly customer_id: FieldRef<"customer_docs", 'Int'>
    readonly doc_type: FieldRef<"customer_docs", 'String'>
    readonly doc_url: FieldRef<"customer_docs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customer_docs findUnique
   */
  export type customer_docsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
    /**
     * Filter, which customer_docs to fetch.
     */
    where: customer_docsWhereUniqueInput
  }

  /**
   * customer_docs findUniqueOrThrow
   */
  export type customer_docsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
    /**
     * Filter, which customer_docs to fetch.
     */
    where: customer_docsWhereUniqueInput
  }

  /**
   * customer_docs findFirst
   */
  export type customer_docsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
    /**
     * Filter, which customer_docs to fetch.
     */
    where?: customer_docsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_docs to fetch.
     */
    orderBy?: customer_docsOrderByWithRelationInput | customer_docsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customer_docs.
     */
    cursor?: customer_docsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customer_docs.
     */
    distinct?: Customer_docsScalarFieldEnum | Customer_docsScalarFieldEnum[]
  }

  /**
   * customer_docs findFirstOrThrow
   */
  export type customer_docsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
    /**
     * Filter, which customer_docs to fetch.
     */
    where?: customer_docsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_docs to fetch.
     */
    orderBy?: customer_docsOrderByWithRelationInput | customer_docsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customer_docs.
     */
    cursor?: customer_docsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customer_docs.
     */
    distinct?: Customer_docsScalarFieldEnum | Customer_docsScalarFieldEnum[]
  }

  /**
   * customer_docs findMany
   */
  export type customer_docsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
    /**
     * Filter, which customer_docs to fetch.
     */
    where?: customer_docsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_docs to fetch.
     */
    orderBy?: customer_docsOrderByWithRelationInput | customer_docsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customer_docs.
     */
    cursor?: customer_docsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_docs.
     */
    skip?: number
    distinct?: Customer_docsScalarFieldEnum | Customer_docsScalarFieldEnum[]
  }

  /**
   * customer_docs create
   */
  export type customer_docsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
    /**
     * The data needed to create a customer_docs.
     */
    data: XOR<customer_docsCreateInput, customer_docsUncheckedCreateInput>
  }

  /**
   * customer_docs createMany
   */
  export type customer_docsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customer_docs.
     */
    data: customer_docsCreateManyInput | customer_docsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer_docs createManyAndReturn
   */
  export type customer_docsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * The data used to create many customer_docs.
     */
    data: customer_docsCreateManyInput | customer_docsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * customer_docs update
   */
  export type customer_docsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
    /**
     * The data needed to update a customer_docs.
     */
    data: XOR<customer_docsUpdateInput, customer_docsUncheckedUpdateInput>
    /**
     * Choose, which customer_docs to update.
     */
    where: customer_docsWhereUniqueInput
  }

  /**
   * customer_docs updateMany
   */
  export type customer_docsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customer_docs.
     */
    data: XOR<customer_docsUpdateManyMutationInput, customer_docsUncheckedUpdateManyInput>
    /**
     * Filter which customer_docs to update
     */
    where?: customer_docsWhereInput
    /**
     * Limit how many customer_docs to update.
     */
    limit?: number
  }

  /**
   * customer_docs updateManyAndReturn
   */
  export type customer_docsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * The data used to update customer_docs.
     */
    data: XOR<customer_docsUpdateManyMutationInput, customer_docsUncheckedUpdateManyInput>
    /**
     * Filter which customer_docs to update
     */
    where?: customer_docsWhereInput
    /**
     * Limit how many customer_docs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * customer_docs upsert
   */
  export type customer_docsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
    /**
     * The filter to search for the customer_docs to update in case it exists.
     */
    where: customer_docsWhereUniqueInput
    /**
     * In case the customer_docs found by the `where` argument doesn't exist, create a new customer_docs with this data.
     */
    create: XOR<customer_docsCreateInput, customer_docsUncheckedCreateInput>
    /**
     * In case the customer_docs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customer_docsUpdateInput, customer_docsUncheckedUpdateInput>
  }

  /**
   * customer_docs delete
   */
  export type customer_docsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
    /**
     * Filter which customer_docs to delete.
     */
    where: customer_docsWhereUniqueInput
  }

  /**
   * customer_docs deleteMany
   */
  export type customer_docsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer_docs to delete
     */
    where?: customer_docsWhereInput
    /**
     * Limit how many customer_docs to delete.
     */
    limit?: number
  }

  /**
   * customer_docs without action
   */
  export type customer_docsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_docs
     */
    select?: customer_docsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_docs
     */
    omit?: customer_docsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_docsInclude<ExtArgs> | null
  }


  /**
   * Model branches
   */

  export type AggregateBranches = {
    _count: BranchesCountAggregateOutputType | null
    _avg: BranchesAvgAggregateOutputType | null
    _sum: BranchesSumAggregateOutputType | null
    _min: BranchesMinAggregateOutputType | null
    _max: BranchesMaxAggregateOutputType | null
  }

  export type BranchesAvgAggregateOutputType = {
    branch_id: number | null
  }

  export type BranchesSumAggregateOutputType = {
    branch_id: number | null
  }

  export type BranchesMinAggregateOutputType = {
    branch_id: number | null
    branch_name: string | null
    city: string | null
  }

  export type BranchesMaxAggregateOutputType = {
    branch_id: number | null
    branch_name: string | null
    city: string | null
  }

  export type BranchesCountAggregateOutputType = {
    branch_id: number
    branch_name: number
    city: number
    _all: number
  }


  export type BranchesAvgAggregateInputType = {
    branch_id?: true
  }

  export type BranchesSumAggregateInputType = {
    branch_id?: true
  }

  export type BranchesMinAggregateInputType = {
    branch_id?: true
    branch_name?: true
    city?: true
  }

  export type BranchesMaxAggregateInputType = {
    branch_id?: true
    branch_name?: true
    city?: true
  }

  export type BranchesCountAggregateInputType = {
    branch_id?: true
    branch_name?: true
    city?: true
    _all?: true
  }

  export type BranchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which branches to aggregate.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: branchesOrderByWithRelationInput | branchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned branches
    **/
    _count?: true | BranchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchesMaxAggregateInputType
  }

  export type GetBranchesAggregateType<T extends BranchesAggregateArgs> = {
        [P in keyof T & keyof AggregateBranches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranches[P]>
      : GetScalarType<T[P], AggregateBranches[P]>
  }




  export type branchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: branchesWhereInput
    orderBy?: branchesOrderByWithAggregationInput | branchesOrderByWithAggregationInput[]
    by: BranchesScalarFieldEnum[] | BranchesScalarFieldEnum
    having?: branchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchesCountAggregateInputType | true
    _avg?: BranchesAvgAggregateInputType
    _sum?: BranchesSumAggregateInputType
    _min?: BranchesMinAggregateInputType
    _max?: BranchesMaxAggregateInputType
  }

  export type BranchesGroupByOutputType = {
    branch_id: number
    branch_name: string | null
    city: string | null
    _count: BranchesCountAggregateOutputType | null
    _avg: BranchesAvgAggregateOutputType | null
    _sum: BranchesSumAggregateOutputType | null
    _min: BranchesMinAggregateOutputType | null
    _max: BranchesMaxAggregateOutputType | null
  }

  type GetBranchesGroupByPayload<T extends branchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchesGroupByOutputType[P]>
            : GetScalarType<T[P], BranchesGroupByOutputType[P]>
        }
      >
    >


  export type branchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    branch_id?: boolean
    branch_name?: boolean
    city?: boolean
    accounts?: boolean | branches$accountsArgs<ExtArgs>
    _count?: boolean | BranchesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branches"]>

  export type branchesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    branch_id?: boolean
    branch_name?: boolean
    city?: boolean
  }, ExtArgs["result"]["branches"]>

  export type branchesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    branch_id?: boolean
    branch_name?: boolean
    city?: boolean
  }, ExtArgs["result"]["branches"]>

  export type branchesSelectScalar = {
    branch_id?: boolean
    branch_name?: boolean
    city?: boolean
  }

  export type branchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"branch_id" | "branch_name" | "city", ExtArgs["result"]["branches"]>
  export type branchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | branches$accountsArgs<ExtArgs>
    _count?: boolean | BranchesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type branchesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type branchesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $branchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "branches"
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      branch_id: number
      branch_name: string | null
      city: string | null
    }, ExtArgs["result"]["branches"]>
    composites: {}
  }

  type branchesGetPayload<S extends boolean | null | undefined | branchesDefaultArgs> = $Result.GetResult<Prisma.$branchesPayload, S>

  type branchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<branchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchesCountAggregateInputType | true
    }

  export interface branchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['branches'], meta: { name: 'branches' } }
    /**
     * Find zero or one Branches that matches the filter.
     * @param {branchesFindUniqueArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends branchesFindUniqueArgs>(args: SelectSubset<T, branchesFindUniqueArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {branchesFindUniqueOrThrowArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends branchesFindUniqueOrThrowArgs>(args: SelectSubset<T, branchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindFirstArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends branchesFindFirstArgs>(args?: SelectSubset<T, branchesFindFirstArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindFirstOrThrowArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends branchesFindFirstOrThrowArgs>(args?: SelectSubset<T, branchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branches.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branches.findMany({ take: 10 })
     * 
     * // Only select the `branch_id`
     * const branchesWithBranch_idOnly = await prisma.branches.findMany({ select: { branch_id: true } })
     * 
     */
    findMany<T extends branchesFindManyArgs>(args?: SelectSubset<T, branchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branches.
     * @param {branchesCreateArgs} args - Arguments to create a Branches.
     * @example
     * // Create one Branches
     * const Branches = await prisma.branches.create({
     *   data: {
     *     // ... data to create a Branches
     *   }
     * })
     * 
     */
    create<T extends branchesCreateArgs>(args: SelectSubset<T, branchesCreateArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {branchesCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branches = await prisma.branches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends branchesCreateManyArgs>(args?: SelectSubset<T, branchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {branchesCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branches = await prisma.branches.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `branch_id`
     * const branchesWithBranch_idOnly = await prisma.branches.createManyAndReturn({
     *   select: { branch_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends branchesCreateManyAndReturnArgs>(args?: SelectSubset<T, branchesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branches.
     * @param {branchesDeleteArgs} args - Arguments to delete one Branches.
     * @example
     * // Delete one Branches
     * const Branches = await prisma.branches.delete({
     *   where: {
     *     // ... filter to delete one Branches
     *   }
     * })
     * 
     */
    delete<T extends branchesDeleteArgs>(args: SelectSubset<T, branchesDeleteArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branches.
     * @param {branchesUpdateArgs} args - Arguments to update one Branches.
     * @example
     * // Update one Branches
     * const branches = await prisma.branches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends branchesUpdateArgs>(args: SelectSubset<T, branchesUpdateArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {branchesDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends branchesDeleteManyArgs>(args?: SelectSubset<T, branchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branches = await prisma.branches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends branchesUpdateManyArgs>(args: SelectSubset<T, branchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {branchesUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branches = await prisma.branches.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `branch_id`
     * const branchesWithBranch_idOnly = await prisma.branches.updateManyAndReturn({
     *   select: { branch_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends branchesUpdateManyAndReturnArgs>(args: SelectSubset<T, branchesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branches.
     * @param {branchesUpsertArgs} args - Arguments to update or create a Branches.
     * @example
     * // Update or create a Branches
     * const branches = await prisma.branches.upsert({
     *   create: {
     *     // ... data to create a Branches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branches we want to update
     *   }
     * })
     */
    upsert<T extends branchesUpsertArgs>(args: SelectSubset<T, branchesUpsertArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branches.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends branchesCountArgs>(
      args?: Subset<T, branchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchesAggregateArgs>(args: Subset<T, BranchesAggregateArgs>): Prisma.PrismaPromise<GetBranchesAggregateType<T>>

    /**
     * Group by Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends branchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: branchesGroupByArgs['orderBy'] }
        : { orderBy?: branchesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, branchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the branches model
   */
  readonly fields: branchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for branches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__branchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends branches$accountsArgs<ExtArgs> = {}>(args?: Subset<T, branches$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the branches model
   */
  interface branchesFieldRefs {
    readonly branch_id: FieldRef<"branches", 'Int'>
    readonly branch_name: FieldRef<"branches", 'String'>
    readonly city: FieldRef<"branches", 'String'>
  }
    

  // Custom InputTypes
  /**
   * branches findUnique
   */
  export type branchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: branchesInclude<ExtArgs> | null
    /**
     * Filter, which branches to fetch.
     */
    where: branchesWhereUniqueInput
  }

  /**
   * branches findUniqueOrThrow
   */
  export type branchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: branchesInclude<ExtArgs> | null
    /**
     * Filter, which branches to fetch.
     */
    where: branchesWhereUniqueInput
  }

  /**
   * branches findFirst
   */
  export type branchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: branchesInclude<ExtArgs> | null
    /**
     * Filter, which branches to fetch.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: branchesOrderByWithRelationInput | branchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches.
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches.
     */
    distinct?: BranchesScalarFieldEnum | BranchesScalarFieldEnum[]
  }

  /**
   * branches findFirstOrThrow
   */
  export type branchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: branchesInclude<ExtArgs> | null
    /**
     * Filter, which branches to fetch.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: branchesOrderByWithRelationInput | branchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches.
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches.
     */
    distinct?: BranchesScalarFieldEnum | BranchesScalarFieldEnum[]
  }

  /**
   * branches findMany
   */
  export type branchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: branchesInclude<ExtArgs> | null
    /**
     * Filter, which branches to fetch.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: branchesOrderByWithRelationInput | branchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing branches.
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    distinct?: BranchesScalarFieldEnum | BranchesScalarFieldEnum[]
  }

  /**
   * branches create
   */
  export type branchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: branchesInclude<ExtArgs> | null
    /**
     * The data needed to create a branches.
     */
    data?: XOR<branchesCreateInput, branchesUncheckedCreateInput>
  }

  /**
   * branches createMany
   */
  export type branchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many branches.
     */
    data: branchesCreateManyInput | branchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * branches createManyAndReturn
   */
  export type branchesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * The data used to create many branches.
     */
    data: branchesCreateManyInput | branchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * branches update
   */
  export type branchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: branchesInclude<ExtArgs> | null
    /**
     * The data needed to update a branches.
     */
    data: XOR<branchesUpdateInput, branchesUncheckedUpdateInput>
    /**
     * Choose, which branches to update.
     */
    where: branchesWhereUniqueInput
  }

  /**
   * branches updateMany
   */
  export type branchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update branches.
     */
    data: XOR<branchesUpdateManyMutationInput, branchesUncheckedUpdateManyInput>
    /**
     * Filter which branches to update
     */
    where?: branchesWhereInput
    /**
     * Limit how many branches to update.
     */
    limit?: number
  }

  /**
   * branches updateManyAndReturn
   */
  export type branchesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * The data used to update branches.
     */
    data: XOR<branchesUpdateManyMutationInput, branchesUncheckedUpdateManyInput>
    /**
     * Filter which branches to update
     */
    where?: branchesWhereInput
    /**
     * Limit how many branches to update.
     */
    limit?: number
  }

  /**
   * branches upsert
   */
  export type branchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: branchesInclude<ExtArgs> | null
    /**
     * The filter to search for the branches to update in case it exists.
     */
    where: branchesWhereUniqueInput
    /**
     * In case the branches found by the `where` argument doesn't exist, create a new branches with this data.
     */
    create: XOR<branchesCreateInput, branchesUncheckedCreateInput>
    /**
     * In case the branches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<branchesUpdateInput, branchesUncheckedUpdateInput>
  }

  /**
   * branches delete
   */
  export type branchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: branchesInclude<ExtArgs> | null
    /**
     * Filter which branches to delete.
     */
    where: branchesWhereUniqueInput
  }

  /**
   * branches deleteMany
   */
  export type branchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which branches to delete
     */
    where?: branchesWhereInput
    /**
     * Limit how many branches to delete.
     */
    limit?: number
  }

  /**
   * branches.accounts
   */
  export type branches$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    cursor?: accountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * branches without action
   */
  export type branchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the branches
     */
    omit?: branchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: branchesInclude<ExtArgs> | null
  }


  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    account_id: number | null
    customer_id: number | null
    branch_id: number | null
    balance: Decimal | null
  }

  export type AccountsSumAggregateOutputType = {
    account_id: number | null
    customer_id: number | null
    branch_id: number | null
    balance: Decimal | null
  }

  export type AccountsMinAggregateOutputType = {
    account_id: number | null
    account_number: string | null
    customer_id: number | null
    branch_id: number | null
    account_type: string | null
    balance: Decimal | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    account_id: number | null
    account_number: string | null
    customer_id: number | null
    branch_id: number | null
    account_type: string | null
    balance: Decimal | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    account_id: number
    account_number: number
    customer_id: number
    branch_id: number
    account_type: number
    balance: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    account_id?: true
    customer_id?: true
    branch_id?: true
    balance?: true
  }

  export type AccountsSumAggregateInputType = {
    account_id?: true
    customer_id?: true
    branch_id?: true
    balance?: true
  }

  export type AccountsMinAggregateInputType = {
    account_id?: true
    account_number?: true
    customer_id?: true
    branch_id?: true
    account_type?: true
    balance?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountsMaxAggregateInputType = {
    account_id?: true
    account_number?: true
    customer_id?: true
    branch_id?: true
    account_type?: true
    balance?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountsCountAggregateInputType = {
    account_id?: true
    account_number?: true
    customer_id?: true
    branch_id?: true
    account_type?: true
    balance?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    account_id: number
    account_number: string | null
    customer_id: number
    branch_id: number
    account_type: string | null
    balance: Decimal
    status: string
    created_at: Date
    updated_at: Date | null
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    account_number?: boolean
    customer_id?: boolean
    branch_id?: boolean
    account_type?: boolean
    balance?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    branch?: boolean | branchesDefaultArgs<ExtArgs>
    transactions?: boolean | accounts$transactionsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    account_number?: boolean
    customer_id?: boolean
    branch_id?: boolean
    account_type?: boolean
    balance?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    branch?: boolean | branchesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    account_number?: boolean
    customer_id?: boolean
    branch_id?: boolean
    account_type?: boolean
    balance?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    branch?: boolean | branchesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectScalar = {
    account_id?: boolean
    account_number?: boolean
    customer_id?: boolean
    branch_id?: boolean
    account_type?: boolean
    balance?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"account_id" | "account_number" | "customer_id" | "branch_id" | "account_type" | "balance" | "status" | "created_at" | "updated_at", ExtArgs["result"]["accounts"]>
  export type accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    branch?: boolean | branchesDefaultArgs<ExtArgs>
    transactions?: boolean | accounts$transactionsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type accountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    branch?: boolean | branchesDefaultArgs<ExtArgs>
  }
  export type accountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    branch?: boolean | branchesDefaultArgs<ExtArgs>
  }

  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {
      customer: Prisma.$customersPayload<ExtArgs>
      branch: Prisma.$branchesPayload<ExtArgs>
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: number
      account_number: string | null
      customer_id: number
      branch_id: number
      account_type: string | null
      balance: Prisma.Decimal
      status: string
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const accountsWithAccount_idOnly = await prisma.accounts.findMany({ select: { account_id: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `account_id`
     * const accountsWithAccount_idOnly = await prisma.accounts.createManyAndReturn({
     *   select: { account_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `account_id`
     * const accountsWithAccount_idOnly = await prisma.accounts.updateManyAndReturn({
     *   select: { account_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accountsUpdateManyAndReturnArgs>(args: SelectSubset<T, accountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends branchesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, branchesDefaultArgs<ExtArgs>>): Prisma__branchesClient<$Result.GetResult<Prisma.$branchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends accounts$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, accounts$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the accounts model
   */
  interface accountsFieldRefs {
    readonly account_id: FieldRef<"accounts", 'Int'>
    readonly account_number: FieldRef<"accounts", 'String'>
    readonly customer_id: FieldRef<"accounts", 'Int'>
    readonly branch_id: FieldRef<"accounts", 'Int'>
    readonly account_type: FieldRef<"accounts", 'String'>
    readonly balance: FieldRef<"accounts", 'Decimal'>
    readonly status: FieldRef<"accounts", 'String'>
    readonly created_at: FieldRef<"accounts", 'DateTime'>
    readonly updated_at: FieldRef<"accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts createManyAndReturn
   */
  export type accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * accounts updateManyAndReturn
   */
  export type accountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * accounts.transactions
   */
  export type accounts$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    transaction_id: number | null
    account_id: number | null
    amount: Decimal | null
  }

  export type TransactionsSumAggregateOutputType = {
    transaction_id: number | null
    account_id: number | null
    amount: Decimal | null
  }

  export type TransactionsMinAggregateOutputType = {
    transaction_id: number | null
    account_id: number | null
    amount: Decimal | null
    transaction_type: string | null
    transaction_date: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    transaction_id: number | null
    account_id: number | null
    amount: Decimal | null
    transaction_type: string | null
    transaction_date: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    transaction_id: number
    account_id: number
    amount: number
    transaction_type: number
    transaction_date: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    transaction_id?: true
    account_id?: true
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    transaction_id?: true
    account_id?: true
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    transaction_id?: true
    account_id?: true
    amount?: true
    transaction_type?: true
    transaction_date?: true
  }

  export type TransactionsMaxAggregateInputType = {
    transaction_id?: true
    account_id?: true
    amount?: true
    transaction_type?: true
    transaction_date?: true
  }

  export type TransactionsCountAggregateInputType = {
    transaction_id?: true
    account_id?: true
    amount?: true
    transaction_type?: true
    transaction_date?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    transaction_id: number
    account_id: number
    amount: Decimal | null
    transaction_type: string | null
    transaction_date: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    account_id?: boolean
    amount?: boolean
    transaction_type?: boolean
    transaction_date?: boolean
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    account_id?: boolean
    amount?: boolean
    transaction_type?: boolean
    transaction_date?: boolean
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    account_id?: boolean
    amount?: boolean
    transaction_type?: boolean
    transaction_date?: boolean
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectScalar = {
    transaction_id?: boolean
    account_id?: boolean
    amount?: boolean
    transaction_type?: boolean
    transaction_date?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transaction_id" | "account_id" | "amount" | "transaction_type" | "transaction_date", ExtArgs["result"]["transactions"]>
  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }
  export type transactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountsDefaultArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      account: Prisma.$accountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_id: number
      account_id: number
      amount: Prisma.Decimal | null
      transaction_type: string | null
      transaction_date: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `transaction_id`
     * const transactionsWithTransaction_idOnly = await prisma.transactions.findMany({ select: { transaction_id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `transaction_id`
     * const transactionsWithTransaction_idOnly = await prisma.transactions.createManyAndReturn({
     *   select: { transaction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `transaction_id`
     * const transactionsWithTransaction_idOnly = await prisma.transactions.updateManyAndReturn({
     *   select: { transaction_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly transaction_id: FieldRef<"transactions", 'Int'>
    readonly account_id: FieldRef<"transactions", 'Int'>
    readonly amount: FieldRef<"transactions", 'Decimal'>
    readonly transaction_type: FieldRef<"transactions", 'String'>
    readonly transaction_date: FieldRef<"transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions createManyAndReturn
   */
  export type transactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions updateManyAndReturn
   */
  export type transactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
  }


  /**
   * Model loans
   */

  export type AggregateLoans = {
    _count: LoansCountAggregateOutputType | null
    _avg: LoansAvgAggregateOutputType | null
    _sum: LoansSumAggregateOutputType | null
    _min: LoansMinAggregateOutputType | null
    _max: LoansMaxAggregateOutputType | null
  }

  export type LoansAvgAggregateOutputType = {
    loan_id: number | null
    customer_id: number | null
    amount: Decimal | null
    interest_rate: Decimal | null
  }

  export type LoansSumAggregateOutputType = {
    loan_id: number | null
    customer_id: number | null
    amount: Decimal | null
    interest_rate: Decimal | null
  }

  export type LoansMinAggregateOutputType = {
    loan_id: number | null
    customer_id: number | null
    loan_type: string | null
    amount: Decimal | null
    interest_rate: Decimal | null
  }

  export type LoansMaxAggregateOutputType = {
    loan_id: number | null
    customer_id: number | null
    loan_type: string | null
    amount: Decimal | null
    interest_rate: Decimal | null
  }

  export type LoansCountAggregateOutputType = {
    loan_id: number
    customer_id: number
    loan_type: number
    amount: number
    interest_rate: number
    _all: number
  }


  export type LoansAvgAggregateInputType = {
    loan_id?: true
    customer_id?: true
    amount?: true
    interest_rate?: true
  }

  export type LoansSumAggregateInputType = {
    loan_id?: true
    customer_id?: true
    amount?: true
    interest_rate?: true
  }

  export type LoansMinAggregateInputType = {
    loan_id?: true
    customer_id?: true
    loan_type?: true
    amount?: true
    interest_rate?: true
  }

  export type LoansMaxAggregateInputType = {
    loan_id?: true
    customer_id?: true
    loan_type?: true
    amount?: true
    interest_rate?: true
  }

  export type LoansCountAggregateInputType = {
    loan_id?: true
    customer_id?: true
    loan_type?: true
    amount?: true
    interest_rate?: true
    _all?: true
  }

  export type LoansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loans to aggregate.
     */
    where?: loansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loansOrderByWithRelationInput | loansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loans
    **/
    _count?: true | LoansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoansMaxAggregateInputType
  }

  export type GetLoansAggregateType<T extends LoansAggregateArgs> = {
        [P in keyof T & keyof AggregateLoans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoans[P]>
      : GetScalarType<T[P], AggregateLoans[P]>
  }




  export type loansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loansWhereInput
    orderBy?: loansOrderByWithAggregationInput | loansOrderByWithAggregationInput[]
    by: LoansScalarFieldEnum[] | LoansScalarFieldEnum
    having?: loansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoansCountAggregateInputType | true
    _avg?: LoansAvgAggregateInputType
    _sum?: LoansSumAggregateInputType
    _min?: LoansMinAggregateInputType
    _max?: LoansMaxAggregateInputType
  }

  export type LoansGroupByOutputType = {
    loan_id: number
    customer_id: number
    loan_type: string | null
    amount: Decimal | null
    interest_rate: Decimal | null
    _count: LoansCountAggregateOutputType | null
    _avg: LoansAvgAggregateOutputType | null
    _sum: LoansSumAggregateOutputType | null
    _min: LoansMinAggregateOutputType | null
    _max: LoansMaxAggregateOutputType | null
  }

  type GetLoansGroupByPayload<T extends loansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoansGroupByOutputType[P]>
            : GetScalarType<T[P], LoansGroupByOutputType[P]>
        }
      >
    >


  export type loansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    loan_id?: boolean
    customer_id?: boolean
    loan_type?: boolean
    amount?: boolean
    interest_rate?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
    payments?: boolean | loans$paymentsArgs<ExtArgs>
    _count?: boolean | LoansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loans"]>

  export type loansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    loan_id?: boolean
    customer_id?: boolean
    loan_type?: boolean
    amount?: boolean
    interest_rate?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loans"]>

  export type loansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    loan_id?: boolean
    customer_id?: boolean
    loan_type?: boolean
    amount?: boolean
    interest_rate?: boolean
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loans"]>

  export type loansSelectScalar = {
    loan_id?: boolean
    customer_id?: boolean
    loan_type?: boolean
    amount?: boolean
    interest_rate?: boolean
  }

  export type loansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"loan_id" | "customer_id" | "loan_type" | "amount" | "interest_rate", ExtArgs["result"]["loans"]>
  export type loansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
    payments?: boolean | loans$paymentsArgs<ExtArgs>
    _count?: boolean | LoansCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type loansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }
  export type loansIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customersDefaultArgs<ExtArgs>
  }

  export type $loansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loans"
    objects: {
      customer: Prisma.$customersPayload<ExtArgs>
      payments: Prisma.$loan_paymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      loan_id: number
      customer_id: number
      loan_type: string | null
      amount: Prisma.Decimal | null
      interest_rate: Prisma.Decimal | null
    }, ExtArgs["result"]["loans"]>
    composites: {}
  }

  type loansGetPayload<S extends boolean | null | undefined | loansDefaultArgs> = $Result.GetResult<Prisma.$loansPayload, S>

  type loansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoansCountAggregateInputType | true
    }

  export interface loansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loans'], meta: { name: 'loans' } }
    /**
     * Find zero or one Loans that matches the filter.
     * @param {loansFindUniqueArgs} args - Arguments to find a Loans
     * @example
     * // Get one Loans
     * const loans = await prisma.loans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loansFindUniqueArgs>(args: SelectSubset<T, loansFindUniqueArgs<ExtArgs>>): Prisma__loansClient<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loansFindUniqueOrThrowArgs} args - Arguments to find a Loans
     * @example
     * // Get one Loans
     * const loans = await prisma.loans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loansFindUniqueOrThrowArgs>(args: SelectSubset<T, loansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loansClient<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loansFindFirstArgs} args - Arguments to find a Loans
     * @example
     * // Get one Loans
     * const loans = await prisma.loans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loansFindFirstArgs>(args?: SelectSubset<T, loansFindFirstArgs<ExtArgs>>): Prisma__loansClient<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loansFindFirstOrThrowArgs} args - Arguments to find a Loans
     * @example
     * // Get one Loans
     * const loans = await prisma.loans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loansFindFirstOrThrowArgs>(args?: SelectSubset<T, loansFindFirstOrThrowArgs<ExtArgs>>): Prisma__loansClient<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loans.findMany()
     * 
     * // Get first 10 Loans
     * const loans = await prisma.loans.findMany({ take: 10 })
     * 
     * // Only select the `loan_id`
     * const loansWithLoan_idOnly = await prisma.loans.findMany({ select: { loan_id: true } })
     * 
     */
    findMany<T extends loansFindManyArgs>(args?: SelectSubset<T, loansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loans.
     * @param {loansCreateArgs} args - Arguments to create a Loans.
     * @example
     * // Create one Loans
     * const Loans = await prisma.loans.create({
     *   data: {
     *     // ... data to create a Loans
     *   }
     * })
     * 
     */
    create<T extends loansCreateArgs>(args: SelectSubset<T, loansCreateArgs<ExtArgs>>): Prisma__loansClient<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loans.
     * @param {loansCreateManyArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loans = await prisma.loans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loansCreateManyArgs>(args?: SelectSubset<T, loansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loans and returns the data saved in the database.
     * @param {loansCreateManyAndReturnArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loans = await prisma.loans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loans and only return the `loan_id`
     * const loansWithLoan_idOnly = await prisma.loans.createManyAndReturn({
     *   select: { loan_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends loansCreateManyAndReturnArgs>(args?: SelectSubset<T, loansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loans.
     * @param {loansDeleteArgs} args - Arguments to delete one Loans.
     * @example
     * // Delete one Loans
     * const Loans = await prisma.loans.delete({
     *   where: {
     *     // ... filter to delete one Loans
     *   }
     * })
     * 
     */
    delete<T extends loansDeleteArgs>(args: SelectSubset<T, loansDeleteArgs<ExtArgs>>): Prisma__loansClient<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loans.
     * @param {loansUpdateArgs} args - Arguments to update one Loans.
     * @example
     * // Update one Loans
     * const loans = await prisma.loans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loansUpdateArgs>(args: SelectSubset<T, loansUpdateArgs<ExtArgs>>): Prisma__loansClient<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loans.
     * @param {loansDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loansDeleteManyArgs>(args?: SelectSubset<T, loansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loans = await prisma.loans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loansUpdateManyArgs>(args: SelectSubset<T, loansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans and returns the data updated in the database.
     * @param {loansUpdateManyAndReturnArgs} args - Arguments to update many Loans.
     * @example
     * // Update many Loans
     * const loans = await prisma.loans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loans and only return the `loan_id`
     * const loansWithLoan_idOnly = await prisma.loans.updateManyAndReturn({
     *   select: { loan_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends loansUpdateManyAndReturnArgs>(args: SelectSubset<T, loansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loans.
     * @param {loansUpsertArgs} args - Arguments to update or create a Loans.
     * @example
     * // Update or create a Loans
     * const loans = await prisma.loans.upsert({
     *   create: {
     *     // ... data to create a Loans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loans we want to update
     *   }
     * })
     */
    upsert<T extends loansUpsertArgs>(args: SelectSubset<T, loansUpsertArgs<ExtArgs>>): Prisma__loansClient<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loansCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loans.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
    **/
    count<T extends loansCountArgs>(
      args?: Subset<T, loansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoansAggregateArgs>(args: Subset<T, LoansAggregateArgs>): Prisma.PrismaPromise<GetLoansAggregateType<T>>

    /**
     * Group by Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends loansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loansGroupByArgs['orderBy'] }
        : { orderBy?: loansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, loansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loans model
   */
  readonly fields: loansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customersDefaultArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends loans$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, loans$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the loans model
   */
  interface loansFieldRefs {
    readonly loan_id: FieldRef<"loans", 'Int'>
    readonly customer_id: FieldRef<"loans", 'Int'>
    readonly loan_type: FieldRef<"loans", 'String'>
    readonly amount: FieldRef<"loans", 'Decimal'>
    readonly interest_rate: FieldRef<"loans", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * loans findUnique
   */
  export type loansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
    /**
     * Filter, which loans to fetch.
     */
    where: loansWhereUniqueInput
  }

  /**
   * loans findUniqueOrThrow
   */
  export type loansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
    /**
     * Filter, which loans to fetch.
     */
    where: loansWhereUniqueInput
  }

  /**
   * loans findFirst
   */
  export type loansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
    /**
     * Filter, which loans to fetch.
     */
    where?: loansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loansOrderByWithRelationInput | loansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loans.
     */
    cursor?: loansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loans.
     */
    distinct?: LoansScalarFieldEnum | LoansScalarFieldEnum[]
  }

  /**
   * loans findFirstOrThrow
   */
  export type loansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
    /**
     * Filter, which loans to fetch.
     */
    where?: loansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loansOrderByWithRelationInput | loansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loans.
     */
    cursor?: loansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loans.
     */
    distinct?: LoansScalarFieldEnum | LoansScalarFieldEnum[]
  }

  /**
   * loans findMany
   */
  export type loansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
    /**
     * Filter, which loans to fetch.
     */
    where?: loansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loans to fetch.
     */
    orderBy?: loansOrderByWithRelationInput | loansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loans.
     */
    cursor?: loansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loans.
     */
    skip?: number
    distinct?: LoansScalarFieldEnum | LoansScalarFieldEnum[]
  }

  /**
   * loans create
   */
  export type loansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
    /**
     * The data needed to create a loans.
     */
    data: XOR<loansCreateInput, loansUncheckedCreateInput>
  }

  /**
   * loans createMany
   */
  export type loansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loans.
     */
    data: loansCreateManyInput | loansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loans createManyAndReturn
   */
  export type loansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * The data used to create many loans.
     */
    data: loansCreateManyInput | loansCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * loans update
   */
  export type loansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
    /**
     * The data needed to update a loans.
     */
    data: XOR<loansUpdateInput, loansUncheckedUpdateInput>
    /**
     * Choose, which loans to update.
     */
    where: loansWhereUniqueInput
  }

  /**
   * loans updateMany
   */
  export type loansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loans.
     */
    data: XOR<loansUpdateManyMutationInput, loansUncheckedUpdateManyInput>
    /**
     * Filter which loans to update
     */
    where?: loansWhereInput
    /**
     * Limit how many loans to update.
     */
    limit?: number
  }

  /**
   * loans updateManyAndReturn
   */
  export type loansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * The data used to update loans.
     */
    data: XOR<loansUpdateManyMutationInput, loansUncheckedUpdateManyInput>
    /**
     * Filter which loans to update
     */
    where?: loansWhereInput
    /**
     * Limit how many loans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * loans upsert
   */
  export type loansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
    /**
     * The filter to search for the loans to update in case it exists.
     */
    where: loansWhereUniqueInput
    /**
     * In case the loans found by the `where` argument doesn't exist, create a new loans with this data.
     */
    create: XOR<loansCreateInput, loansUncheckedCreateInput>
    /**
     * In case the loans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loansUpdateInput, loansUncheckedUpdateInput>
  }

  /**
   * loans delete
   */
  export type loansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
    /**
     * Filter which loans to delete.
     */
    where: loansWhereUniqueInput
  }

  /**
   * loans deleteMany
   */
  export type loansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loans to delete
     */
    where?: loansWhereInput
    /**
     * Limit how many loans to delete.
     */
    limit?: number
  }

  /**
   * loans.payments
   */
  export type loans$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
    where?: loan_paymentsWhereInput
    orderBy?: loan_paymentsOrderByWithRelationInput | loan_paymentsOrderByWithRelationInput[]
    cursor?: loan_paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Loan_paymentsScalarFieldEnum | Loan_paymentsScalarFieldEnum[]
  }

  /**
   * loans without action
   */
  export type loansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loans
     */
    select?: loansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loans
     */
    omit?: loansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loansInclude<ExtArgs> | null
  }


  /**
   * Model loan_payments
   */

  export type AggregateLoan_payments = {
    _count: Loan_paymentsCountAggregateOutputType | null
    _avg: Loan_paymentsAvgAggregateOutputType | null
    _sum: Loan_paymentsSumAggregateOutputType | null
    _min: Loan_paymentsMinAggregateOutputType | null
    _max: Loan_paymentsMaxAggregateOutputType | null
  }

  export type Loan_paymentsAvgAggregateOutputType = {
    payment_id: number | null
    loan_id: number | null
    amount: Decimal | null
  }

  export type Loan_paymentsSumAggregateOutputType = {
    payment_id: number | null
    loan_id: number | null
    amount: Decimal | null
  }

  export type Loan_paymentsMinAggregateOutputType = {
    payment_id: number | null
    loan_id: number | null
    amount: Decimal | null
    payment_date: Date | null
  }

  export type Loan_paymentsMaxAggregateOutputType = {
    payment_id: number | null
    loan_id: number | null
    amount: Decimal | null
    payment_date: Date | null
  }

  export type Loan_paymentsCountAggregateOutputType = {
    payment_id: number
    loan_id: number
    amount: number
    payment_date: number
    _all: number
  }


  export type Loan_paymentsAvgAggregateInputType = {
    payment_id?: true
    loan_id?: true
    amount?: true
  }

  export type Loan_paymentsSumAggregateInputType = {
    payment_id?: true
    loan_id?: true
    amount?: true
  }

  export type Loan_paymentsMinAggregateInputType = {
    payment_id?: true
    loan_id?: true
    amount?: true
    payment_date?: true
  }

  export type Loan_paymentsMaxAggregateInputType = {
    payment_id?: true
    loan_id?: true
    amount?: true
    payment_date?: true
  }

  export type Loan_paymentsCountAggregateInputType = {
    payment_id?: true
    loan_id?: true
    amount?: true
    payment_date?: true
    _all?: true
  }

  export type Loan_paymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_payments to aggregate.
     */
    where?: loan_paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_payments to fetch.
     */
    orderBy?: loan_paymentsOrderByWithRelationInput | loan_paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loan_paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loan_payments
    **/
    _count?: true | Loan_paymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Loan_paymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Loan_paymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Loan_paymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Loan_paymentsMaxAggregateInputType
  }

  export type GetLoan_paymentsAggregateType<T extends Loan_paymentsAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan_payments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan_payments[P]>
      : GetScalarType<T[P], AggregateLoan_payments[P]>
  }




  export type loan_paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loan_paymentsWhereInput
    orderBy?: loan_paymentsOrderByWithAggregationInput | loan_paymentsOrderByWithAggregationInput[]
    by: Loan_paymentsScalarFieldEnum[] | Loan_paymentsScalarFieldEnum
    having?: loan_paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Loan_paymentsCountAggregateInputType | true
    _avg?: Loan_paymentsAvgAggregateInputType
    _sum?: Loan_paymentsSumAggregateInputType
    _min?: Loan_paymentsMinAggregateInputType
    _max?: Loan_paymentsMaxAggregateInputType
  }

  export type Loan_paymentsGroupByOutputType = {
    payment_id: number
    loan_id: number
    amount: Decimal | null
    payment_date: Date
    _count: Loan_paymentsCountAggregateOutputType | null
    _avg: Loan_paymentsAvgAggregateOutputType | null
    _sum: Loan_paymentsSumAggregateOutputType | null
    _min: Loan_paymentsMinAggregateOutputType | null
    _max: Loan_paymentsMaxAggregateOutputType | null
  }

  type GetLoan_paymentsGroupByPayload<T extends loan_paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loan_paymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Loan_paymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Loan_paymentsGroupByOutputType[P]>
            : GetScalarType<T[P], Loan_paymentsGroupByOutputType[P]>
        }
      >
    >


  export type loan_paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    loan_id?: boolean
    amount?: boolean
    payment_date?: boolean
    loan?: boolean | loansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan_payments"]>

  export type loan_paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    loan_id?: boolean
    amount?: boolean
    payment_date?: boolean
    loan?: boolean | loansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan_payments"]>

  export type loan_paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    loan_id?: boolean
    amount?: boolean
    payment_date?: boolean
    loan?: boolean | loansDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan_payments"]>

  export type loan_paymentsSelectScalar = {
    payment_id?: boolean
    loan_id?: boolean
    amount?: boolean
    payment_date?: boolean
  }

  export type loan_paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "loan_id" | "amount" | "payment_date", ExtArgs["result"]["loan_payments"]>
  export type loan_paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | loansDefaultArgs<ExtArgs>
  }
  export type loan_paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | loansDefaultArgs<ExtArgs>
  }
  export type loan_paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | loansDefaultArgs<ExtArgs>
  }

  export type $loan_paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loan_payments"
    objects: {
      loan: Prisma.$loansPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      loan_id: number
      amount: Prisma.Decimal | null
      payment_date: Date
    }, ExtArgs["result"]["loan_payments"]>
    composites: {}
  }

  type loan_paymentsGetPayload<S extends boolean | null | undefined | loan_paymentsDefaultArgs> = $Result.GetResult<Prisma.$loan_paymentsPayload, S>

  type loan_paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loan_paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Loan_paymentsCountAggregateInputType | true
    }

  export interface loan_paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan_payments'], meta: { name: 'loan_payments' } }
    /**
     * Find zero or one Loan_payments that matches the filter.
     * @param {loan_paymentsFindUniqueArgs} args - Arguments to find a Loan_payments
     * @example
     * // Get one Loan_payments
     * const loan_payments = await prisma.loan_payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loan_paymentsFindUniqueArgs>(args: SelectSubset<T, loan_paymentsFindUniqueArgs<ExtArgs>>): Prisma__loan_paymentsClient<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loan_payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loan_paymentsFindUniqueOrThrowArgs} args - Arguments to find a Loan_payments
     * @example
     * // Get one Loan_payments
     * const loan_payments = await prisma.loan_payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loan_paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, loan_paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loan_paymentsClient<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan_payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentsFindFirstArgs} args - Arguments to find a Loan_payments
     * @example
     * // Get one Loan_payments
     * const loan_payments = await prisma.loan_payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loan_paymentsFindFirstArgs>(args?: SelectSubset<T, loan_paymentsFindFirstArgs<ExtArgs>>): Prisma__loan_paymentsClient<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loan_payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentsFindFirstOrThrowArgs} args - Arguments to find a Loan_payments
     * @example
     * // Get one Loan_payments
     * const loan_payments = await prisma.loan_payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loan_paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, loan_paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__loan_paymentsClient<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loan_payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loan_payments
     * const loan_payments = await prisma.loan_payments.findMany()
     * 
     * // Get first 10 Loan_payments
     * const loan_payments = await prisma.loan_payments.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const loan_paymentsWithPayment_idOnly = await prisma.loan_payments.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends loan_paymentsFindManyArgs>(args?: SelectSubset<T, loan_paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loan_payments.
     * @param {loan_paymentsCreateArgs} args - Arguments to create a Loan_payments.
     * @example
     * // Create one Loan_payments
     * const Loan_payments = await prisma.loan_payments.create({
     *   data: {
     *     // ... data to create a Loan_payments
     *   }
     * })
     * 
     */
    create<T extends loan_paymentsCreateArgs>(args: SelectSubset<T, loan_paymentsCreateArgs<ExtArgs>>): Prisma__loan_paymentsClient<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loan_payments.
     * @param {loan_paymentsCreateManyArgs} args - Arguments to create many Loan_payments.
     * @example
     * // Create many Loan_payments
     * const loan_payments = await prisma.loan_payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loan_paymentsCreateManyArgs>(args?: SelectSubset<T, loan_paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loan_payments and returns the data saved in the database.
     * @param {loan_paymentsCreateManyAndReturnArgs} args - Arguments to create many Loan_payments.
     * @example
     * // Create many Loan_payments
     * const loan_payments = await prisma.loan_payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loan_payments and only return the `payment_id`
     * const loan_paymentsWithPayment_idOnly = await prisma.loan_payments.createManyAndReturn({
     *   select: { payment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends loan_paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, loan_paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loan_payments.
     * @param {loan_paymentsDeleteArgs} args - Arguments to delete one Loan_payments.
     * @example
     * // Delete one Loan_payments
     * const Loan_payments = await prisma.loan_payments.delete({
     *   where: {
     *     // ... filter to delete one Loan_payments
     *   }
     * })
     * 
     */
    delete<T extends loan_paymentsDeleteArgs>(args: SelectSubset<T, loan_paymentsDeleteArgs<ExtArgs>>): Prisma__loan_paymentsClient<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loan_payments.
     * @param {loan_paymentsUpdateArgs} args - Arguments to update one Loan_payments.
     * @example
     * // Update one Loan_payments
     * const loan_payments = await prisma.loan_payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loan_paymentsUpdateArgs>(args: SelectSubset<T, loan_paymentsUpdateArgs<ExtArgs>>): Prisma__loan_paymentsClient<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loan_payments.
     * @param {loan_paymentsDeleteManyArgs} args - Arguments to filter Loan_payments to delete.
     * @example
     * // Delete a few Loan_payments
     * const { count } = await prisma.loan_payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loan_paymentsDeleteManyArgs>(args?: SelectSubset<T, loan_paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loan_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loan_payments
     * const loan_payments = await prisma.loan_payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loan_paymentsUpdateManyArgs>(args: SelectSubset<T, loan_paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loan_payments and returns the data updated in the database.
     * @param {loan_paymentsUpdateManyAndReturnArgs} args - Arguments to update many Loan_payments.
     * @example
     * // Update many Loan_payments
     * const loan_payments = await prisma.loan_payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loan_payments and only return the `payment_id`
     * const loan_paymentsWithPayment_idOnly = await prisma.loan_payments.updateManyAndReturn({
     *   select: { payment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends loan_paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, loan_paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loan_payments.
     * @param {loan_paymentsUpsertArgs} args - Arguments to update or create a Loan_payments.
     * @example
     * // Update or create a Loan_payments
     * const loan_payments = await prisma.loan_payments.upsert({
     *   create: {
     *     // ... data to create a Loan_payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan_payments we want to update
     *   }
     * })
     */
    upsert<T extends loan_paymentsUpsertArgs>(args: SelectSubset<T, loan_paymentsUpsertArgs<ExtArgs>>): Prisma__loan_paymentsClient<$Result.GetResult<Prisma.$loan_paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loan_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentsCountArgs} args - Arguments to filter Loan_payments to count.
     * @example
     * // Count the number of Loan_payments
     * const count = await prisma.loan_payments.count({
     *   where: {
     *     // ... the filter for the Loan_payments we want to count
     *   }
     * })
    **/
    count<T extends loan_paymentsCountArgs>(
      args?: Subset<T, loan_paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loan_paymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loan_paymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Loan_paymentsAggregateArgs>(args: Subset<T, Loan_paymentsAggregateArgs>): Prisma.PrismaPromise<GetLoan_paymentsAggregateType<T>>

    /**
     * Group by Loan_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_paymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends loan_paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loan_paymentsGroupByArgs['orderBy'] }
        : { orderBy?: loan_paymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, loan_paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoan_paymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loan_payments model
   */
  readonly fields: loan_paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan_payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loan_paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loan<T extends loansDefaultArgs<ExtArgs> = {}>(args?: Subset<T, loansDefaultArgs<ExtArgs>>): Prisma__loansClient<$Result.GetResult<Prisma.$loansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the loan_payments model
   */
  interface loan_paymentsFieldRefs {
    readonly payment_id: FieldRef<"loan_payments", 'Int'>
    readonly loan_id: FieldRef<"loan_payments", 'Int'>
    readonly amount: FieldRef<"loan_payments", 'Decimal'>
    readonly payment_date: FieldRef<"loan_payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * loan_payments findUnique
   */
  export type loan_paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
    /**
     * Filter, which loan_payments to fetch.
     */
    where: loan_paymentsWhereUniqueInput
  }

  /**
   * loan_payments findUniqueOrThrow
   */
  export type loan_paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
    /**
     * Filter, which loan_payments to fetch.
     */
    where: loan_paymentsWhereUniqueInput
  }

  /**
   * loan_payments findFirst
   */
  export type loan_paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
    /**
     * Filter, which loan_payments to fetch.
     */
    where?: loan_paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_payments to fetch.
     */
    orderBy?: loan_paymentsOrderByWithRelationInput | loan_paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loan_payments.
     */
    cursor?: loan_paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loan_payments.
     */
    distinct?: Loan_paymentsScalarFieldEnum | Loan_paymentsScalarFieldEnum[]
  }

  /**
   * loan_payments findFirstOrThrow
   */
  export type loan_paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
    /**
     * Filter, which loan_payments to fetch.
     */
    where?: loan_paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_payments to fetch.
     */
    orderBy?: loan_paymentsOrderByWithRelationInput | loan_paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loan_payments.
     */
    cursor?: loan_paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loan_payments.
     */
    distinct?: Loan_paymentsScalarFieldEnum | Loan_paymentsScalarFieldEnum[]
  }

  /**
   * loan_payments findMany
   */
  export type loan_paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
    /**
     * Filter, which loan_payments to fetch.
     */
    where?: loan_paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loan_payments to fetch.
     */
    orderBy?: loan_paymentsOrderByWithRelationInput | loan_paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loan_payments.
     */
    cursor?: loan_paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loan_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loan_payments.
     */
    skip?: number
    distinct?: Loan_paymentsScalarFieldEnum | Loan_paymentsScalarFieldEnum[]
  }

  /**
   * loan_payments create
   */
  export type loan_paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a loan_payments.
     */
    data: XOR<loan_paymentsCreateInput, loan_paymentsUncheckedCreateInput>
  }

  /**
   * loan_payments createMany
   */
  export type loan_paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loan_payments.
     */
    data: loan_paymentsCreateManyInput | loan_paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loan_payments createManyAndReturn
   */
  export type loan_paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many loan_payments.
     */
    data: loan_paymentsCreateManyInput | loan_paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * loan_payments update
   */
  export type loan_paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a loan_payments.
     */
    data: XOR<loan_paymentsUpdateInput, loan_paymentsUncheckedUpdateInput>
    /**
     * Choose, which loan_payments to update.
     */
    where: loan_paymentsWhereUniqueInput
  }

  /**
   * loan_payments updateMany
   */
  export type loan_paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loan_payments.
     */
    data: XOR<loan_paymentsUpdateManyMutationInput, loan_paymentsUncheckedUpdateManyInput>
    /**
     * Filter which loan_payments to update
     */
    where?: loan_paymentsWhereInput
    /**
     * Limit how many loan_payments to update.
     */
    limit?: number
  }

  /**
   * loan_payments updateManyAndReturn
   */
  export type loan_paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * The data used to update loan_payments.
     */
    data: XOR<loan_paymentsUpdateManyMutationInput, loan_paymentsUncheckedUpdateManyInput>
    /**
     * Filter which loan_payments to update
     */
    where?: loan_paymentsWhereInput
    /**
     * Limit how many loan_payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * loan_payments upsert
   */
  export type loan_paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the loan_payments to update in case it exists.
     */
    where: loan_paymentsWhereUniqueInput
    /**
     * In case the loan_payments found by the `where` argument doesn't exist, create a new loan_payments with this data.
     */
    create: XOR<loan_paymentsCreateInput, loan_paymentsUncheckedCreateInput>
    /**
     * In case the loan_payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loan_paymentsUpdateInput, loan_paymentsUncheckedUpdateInput>
  }

  /**
   * loan_payments delete
   */
  export type loan_paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
    /**
     * Filter which loan_payments to delete.
     */
    where: loan_paymentsWhereUniqueInput
  }

  /**
   * loan_payments deleteMany
   */
  export type loan_paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_payments to delete
     */
    where?: loan_paymentsWhereInput
    /**
     * Limit how many loan_payments to delete.
     */
    limit?: number
  }

  /**
   * loan_payments without action
   */
  export type loan_paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_payments
     */
    select?: loan_paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loan_payments
     */
    omit?: loan_paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loan_paymentsInclude<ExtArgs> | null
  }


  /**
   * Model employees2
   */

  export type AggregateEmployees2 = {
    _count: Employees2CountAggregateOutputType | null
    _avg: Employees2AvgAggregateOutputType | null
    _sum: Employees2SumAggregateOutputType | null
    _min: Employees2MinAggregateOutputType | null
    _max: Employees2MaxAggregateOutputType | null
  }

  export type Employees2AvgAggregateOutputType = {
    id: number | null
  }

  export type Employees2SumAggregateOutputType = {
    id: number | null
  }

  export type Employees2MinAggregateOutputType = {
    id: number | null
    name1: string | null
  }

  export type Employees2MaxAggregateOutputType = {
    id: number | null
    name1: string | null
  }

  export type Employees2CountAggregateOutputType = {
    id: number
    name1: number
    _all: number
  }


  export type Employees2AvgAggregateInputType = {
    id?: true
  }

  export type Employees2SumAggregateInputType = {
    id?: true
  }

  export type Employees2MinAggregateInputType = {
    id?: true
    name1?: true
  }

  export type Employees2MaxAggregateInputType = {
    id?: true
    name1?: true
  }

  export type Employees2CountAggregateInputType = {
    id?: true
    name1?: true
    _all?: true
  }

  export type Employees2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees2 to aggregate.
     */
    where?: employees2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees2s to fetch.
     */
    orderBy?: employees2OrderByWithRelationInput | employees2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employees2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees2s
    **/
    _count?: true | Employees2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Employees2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Employees2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Employees2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Employees2MaxAggregateInputType
  }

  export type GetEmployees2AggregateType<T extends Employees2AggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees2[P]>
      : GetScalarType<T[P], AggregateEmployees2[P]>
  }




  export type employees2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employees2WhereInput
    orderBy?: employees2OrderByWithAggregationInput | employees2OrderByWithAggregationInput[]
    by: Employees2ScalarFieldEnum[] | Employees2ScalarFieldEnum
    having?: employees2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Employees2CountAggregateInputType | true
    _avg?: Employees2AvgAggregateInputType
    _sum?: Employees2SumAggregateInputType
    _min?: Employees2MinAggregateInputType
    _max?: Employees2MaxAggregateInputType
  }

  export type Employees2GroupByOutputType = {
    id: number
    name1: string
    _count: Employees2CountAggregateOutputType | null
    _avg: Employees2AvgAggregateOutputType | null
    _sum: Employees2SumAggregateOutputType | null
    _min: Employees2MinAggregateOutputType | null
    _max: Employees2MaxAggregateOutputType | null
  }

  type GetEmployees2GroupByPayload<T extends employees2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Employees2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Employees2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Employees2GroupByOutputType[P]>
            : GetScalarType<T[P], Employees2GroupByOutputType[P]>
        }
      >
    >


  export type employees2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name1?: boolean
  }, ExtArgs["result"]["employees2"]>

  export type employees2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name1?: boolean
  }, ExtArgs["result"]["employees2"]>

  export type employees2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name1?: boolean
  }, ExtArgs["result"]["employees2"]>

  export type employees2SelectScalar = {
    id?: boolean
    name1?: boolean
  }

  export type employees2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name1", ExtArgs["result"]["employees2"]>

  export type $employees2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employees2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name1: string
    }, ExtArgs["result"]["employees2"]>
    composites: {}
  }

  type employees2GetPayload<S extends boolean | null | undefined | employees2DefaultArgs> = $Result.GetResult<Prisma.$employees2Payload, S>

  type employees2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employees2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Employees2CountAggregateInputType | true
    }

  export interface employees2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employees2'], meta: { name: 'employees2' } }
    /**
     * Find zero or one Employees2 that matches the filter.
     * @param {employees2FindUniqueArgs} args - Arguments to find a Employees2
     * @example
     * // Get one Employees2
     * const employees2 = await prisma.employees2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employees2FindUniqueArgs>(args: SelectSubset<T, employees2FindUniqueArgs<ExtArgs>>): Prisma__employees2Client<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employees2FindUniqueOrThrowArgs} args - Arguments to find a Employees2
     * @example
     * // Get one Employees2
     * const employees2 = await prisma.employees2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employees2FindUniqueOrThrowArgs>(args: SelectSubset<T, employees2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__employees2Client<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees2FindFirstArgs} args - Arguments to find a Employees2
     * @example
     * // Get one Employees2
     * const employees2 = await prisma.employees2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employees2FindFirstArgs>(args?: SelectSubset<T, employees2FindFirstArgs<ExtArgs>>): Prisma__employees2Client<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees2FindFirstOrThrowArgs} args - Arguments to find a Employees2
     * @example
     * // Get one Employees2
     * const employees2 = await prisma.employees2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employees2FindFirstOrThrowArgs>(args?: SelectSubset<T, employees2FindFirstOrThrowArgs<ExtArgs>>): Prisma__employees2Client<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees2s
     * const employees2s = await prisma.employees2.findMany()
     * 
     * // Get first 10 Employees2s
     * const employees2s = await prisma.employees2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employees2WithIdOnly = await prisma.employees2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends employees2FindManyArgs>(args?: SelectSubset<T, employees2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees2.
     * @param {employees2CreateArgs} args - Arguments to create a Employees2.
     * @example
     * // Create one Employees2
     * const Employees2 = await prisma.employees2.create({
     *   data: {
     *     // ... data to create a Employees2
     *   }
     * })
     * 
     */
    create<T extends employees2CreateArgs>(args: SelectSubset<T, employees2CreateArgs<ExtArgs>>): Prisma__employees2Client<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees2s.
     * @param {employees2CreateManyArgs} args - Arguments to create many Employees2s.
     * @example
     * // Create many Employees2s
     * const employees2 = await prisma.employees2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employees2CreateManyArgs>(args?: SelectSubset<T, employees2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees2s and returns the data saved in the database.
     * @param {employees2CreateManyAndReturnArgs} args - Arguments to create many Employees2s.
     * @example
     * // Create many Employees2s
     * const employees2 = await prisma.employees2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees2s and only return the `id`
     * const employees2WithIdOnly = await prisma.employees2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends employees2CreateManyAndReturnArgs>(args?: SelectSubset<T, employees2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employees2.
     * @param {employees2DeleteArgs} args - Arguments to delete one Employees2.
     * @example
     * // Delete one Employees2
     * const Employees2 = await prisma.employees2.delete({
     *   where: {
     *     // ... filter to delete one Employees2
     *   }
     * })
     * 
     */
    delete<T extends employees2DeleteArgs>(args: SelectSubset<T, employees2DeleteArgs<ExtArgs>>): Prisma__employees2Client<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees2.
     * @param {employees2UpdateArgs} args - Arguments to update one Employees2.
     * @example
     * // Update one Employees2
     * const employees2 = await prisma.employees2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employees2UpdateArgs>(args: SelectSubset<T, employees2UpdateArgs<ExtArgs>>): Prisma__employees2Client<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees2s.
     * @param {employees2DeleteManyArgs} args - Arguments to filter Employees2s to delete.
     * @example
     * // Delete a few Employees2s
     * const { count } = await prisma.employees2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employees2DeleteManyArgs>(args?: SelectSubset<T, employees2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees2s
     * const employees2 = await prisma.employees2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employees2UpdateManyArgs>(args: SelectSubset<T, employees2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees2s and returns the data updated in the database.
     * @param {employees2UpdateManyAndReturnArgs} args - Arguments to update many Employees2s.
     * @example
     * // Update many Employees2s
     * const employees2 = await prisma.employees2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees2s and only return the `id`
     * const employees2WithIdOnly = await prisma.employees2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends employees2UpdateManyAndReturnArgs>(args: SelectSubset<T, employees2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employees2.
     * @param {employees2UpsertArgs} args - Arguments to update or create a Employees2.
     * @example
     * // Update or create a Employees2
     * const employees2 = await prisma.employees2.upsert({
     *   create: {
     *     // ... data to create a Employees2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees2 we want to update
     *   }
     * })
     */
    upsert<T extends employees2UpsertArgs>(args: SelectSubset<T, employees2UpsertArgs<ExtArgs>>): Prisma__employees2Client<$Result.GetResult<Prisma.$employees2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees2CountArgs} args - Arguments to filter Employees2s to count.
     * @example
     * // Count the number of Employees2s
     * const count = await prisma.employees2.count({
     *   where: {
     *     // ... the filter for the Employees2s we want to count
     *   }
     * })
    **/
    count<T extends employees2CountArgs>(
      args?: Subset<T, employees2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Employees2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employees2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Employees2AggregateArgs>(args: Subset<T, Employees2AggregateArgs>): Prisma.PrismaPromise<GetEmployees2AggregateType<T>>

    /**
     * Group by Employees2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends employees2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employees2GroupByArgs['orderBy'] }
        : { orderBy?: employees2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, employees2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployees2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employees2 model
   */
  readonly fields: employees2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employees2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employees2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the employees2 model
   */
  interface employees2FieldRefs {
    readonly id: FieldRef<"employees2", 'Int'>
    readonly name1: FieldRef<"employees2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * employees2 findUnique
   */
  export type employees2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2Select<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * Filter, which employees2 to fetch.
     */
    where: employees2WhereUniqueInput
  }

  /**
   * employees2 findUniqueOrThrow
   */
  export type employees2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2Select<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * Filter, which employees2 to fetch.
     */
    where: employees2WhereUniqueInput
  }

  /**
   * employees2 findFirst
   */
  export type employees2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2Select<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * Filter, which employees2 to fetch.
     */
    where?: employees2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees2s to fetch.
     */
    orderBy?: employees2OrderByWithRelationInput | employees2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees2s.
     */
    cursor?: employees2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees2s.
     */
    distinct?: Employees2ScalarFieldEnum | Employees2ScalarFieldEnum[]
  }

  /**
   * employees2 findFirstOrThrow
   */
  export type employees2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2Select<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * Filter, which employees2 to fetch.
     */
    where?: employees2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees2s to fetch.
     */
    orderBy?: employees2OrderByWithRelationInput | employees2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees2s.
     */
    cursor?: employees2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees2s.
     */
    distinct?: Employees2ScalarFieldEnum | Employees2ScalarFieldEnum[]
  }

  /**
   * employees2 findMany
   */
  export type employees2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2Select<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * Filter, which employees2s to fetch.
     */
    where?: employees2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees2s to fetch.
     */
    orderBy?: employees2OrderByWithRelationInput | employees2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees2s.
     */
    cursor?: employees2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees2s.
     */
    skip?: number
    distinct?: Employees2ScalarFieldEnum | Employees2ScalarFieldEnum[]
  }

  /**
   * employees2 create
   */
  export type employees2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2Select<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * The data needed to create a employees2.
     */
    data: XOR<employees2CreateInput, employees2UncheckedCreateInput>
  }

  /**
   * employees2 createMany
   */
  export type employees2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees2s.
     */
    data: employees2CreateManyInput | employees2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees2 createManyAndReturn
   */
  export type employees2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * The data used to create many employees2s.
     */
    data: employees2CreateManyInput | employees2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees2 update
   */
  export type employees2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2Select<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * The data needed to update a employees2.
     */
    data: XOR<employees2UpdateInput, employees2UncheckedUpdateInput>
    /**
     * Choose, which employees2 to update.
     */
    where: employees2WhereUniqueInput
  }

  /**
   * employees2 updateMany
   */
  export type employees2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees2s.
     */
    data: XOR<employees2UpdateManyMutationInput, employees2UncheckedUpdateManyInput>
    /**
     * Filter which employees2s to update
     */
    where?: employees2WhereInput
    /**
     * Limit how many employees2s to update.
     */
    limit?: number
  }

  /**
   * employees2 updateManyAndReturn
   */
  export type employees2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * The data used to update employees2s.
     */
    data: XOR<employees2UpdateManyMutationInput, employees2UncheckedUpdateManyInput>
    /**
     * Filter which employees2s to update
     */
    where?: employees2WhereInput
    /**
     * Limit how many employees2s to update.
     */
    limit?: number
  }

  /**
   * employees2 upsert
   */
  export type employees2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2Select<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * The filter to search for the employees2 to update in case it exists.
     */
    where: employees2WhereUniqueInput
    /**
     * In case the employees2 found by the `where` argument doesn't exist, create a new employees2 with this data.
     */
    create: XOR<employees2CreateInput, employees2UncheckedCreateInput>
    /**
     * In case the employees2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employees2UpdateInput, employees2UncheckedUpdateInput>
  }

  /**
   * employees2 delete
   */
  export type employees2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2Select<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
    /**
     * Filter which employees2 to delete.
     */
    where: employees2WhereUniqueInput
  }

  /**
   * employees2 deleteMany
   */
  export type employees2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees2s to delete
     */
    where?: employees2WhereInput
    /**
     * Limit how many employees2s to delete.
     */
    limit?: number
  }

  /**
   * employees2 without action
   */
  export type employees2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees2
     */
    select?: employees2Select<ExtArgs> | null
    /**
     * Omit specific fields from the employees2
     */
    omit?: employees2Omit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomersScalarFieldEnum: {
    customer_id: 'customer_id',
    name: 'name',
    email: 'email',
    phone: 'phone'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const Customer_docsScalarFieldEnum: {
    doc_id: 'doc_id',
    customer_id: 'customer_id',
    doc_type: 'doc_type',
    doc_url: 'doc_url'
  };

  export type Customer_docsScalarFieldEnum = (typeof Customer_docsScalarFieldEnum)[keyof typeof Customer_docsScalarFieldEnum]


  export const BranchesScalarFieldEnum: {
    branch_id: 'branch_id',
    branch_name: 'branch_name',
    city: 'city'
  };

  export type BranchesScalarFieldEnum = (typeof BranchesScalarFieldEnum)[keyof typeof BranchesScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    account_id: 'account_id',
    account_number: 'account_number',
    customer_id: 'customer_id',
    branch_id: 'branch_id',
    account_type: 'account_type',
    balance: 'balance',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    transaction_id: 'transaction_id',
    account_id: 'account_id',
    amount: 'amount',
    transaction_type: 'transaction_type',
    transaction_date: 'transaction_date'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const LoansScalarFieldEnum: {
    loan_id: 'loan_id',
    customer_id: 'customer_id',
    loan_type: 'loan_type',
    amount: 'amount',
    interest_rate: 'interest_rate'
  };

  export type LoansScalarFieldEnum = (typeof LoansScalarFieldEnum)[keyof typeof LoansScalarFieldEnum]


  export const Loan_paymentsScalarFieldEnum: {
    payment_id: 'payment_id',
    loan_id: 'loan_id',
    amount: 'amount',
    payment_date: 'payment_date'
  };

  export type Loan_paymentsScalarFieldEnum = (typeof Loan_paymentsScalarFieldEnum)[keyof typeof Loan_paymentsScalarFieldEnum]


  export const Employees2ScalarFieldEnum: {
    id: 'id',
    name1: 'name1'
  };

  export type Employees2ScalarFieldEnum = (typeof Employees2ScalarFieldEnum)[keyof typeof Employees2ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    customer_id?: IntFilter<"customers"> | number
    name?: StringNullableFilter<"customers"> | string | null
    email?: StringNullableFilter<"customers"> | string | null
    phone?: StringNullableFilter<"customers"> | string | null
    accounts?: AccountsListRelationFilter
    loans?: LoansListRelationFilter
    docs?: Customer_docsListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    customer_id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    accounts?: accountsOrderByRelationAggregateInput
    loans?: loansOrderByRelationAggregateInput
    docs?: customer_docsOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: number
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    name?: StringNullableFilter<"customers"> | string | null
    email?: StringNullableFilter<"customers"> | string | null
    phone?: StringNullableFilter<"customers"> | string | null
    accounts?: AccountsListRelationFilter
    loans?: LoansListRelationFilter
    docs?: Customer_docsListRelationFilter
  }, "customer_id">

  export type customersOrderByWithAggregationInput = {
    customer_id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    customer_id?: IntWithAggregatesFilter<"customers"> | number
    name?: StringNullableWithAggregatesFilter<"customers"> | string | null
    email?: StringNullableWithAggregatesFilter<"customers"> | string | null
    phone?: StringNullableWithAggregatesFilter<"customers"> | string | null
  }

  export type customer_docsWhereInput = {
    AND?: customer_docsWhereInput | customer_docsWhereInput[]
    OR?: customer_docsWhereInput[]
    NOT?: customer_docsWhereInput | customer_docsWhereInput[]
    doc_id?: IntFilter<"customer_docs"> | number
    customer_id?: IntFilter<"customer_docs"> | number
    doc_type?: StringFilter<"customer_docs"> | string
    doc_url?: StringFilter<"customer_docs"> | string
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
  }

  export type customer_docsOrderByWithRelationInput = {
    doc_id?: SortOrder
    customer_id?: SortOrder
    doc_type?: SortOrder
    doc_url?: SortOrder
    customer?: customersOrderByWithRelationInput
  }

  export type customer_docsWhereUniqueInput = Prisma.AtLeast<{
    doc_id?: number
    AND?: customer_docsWhereInput | customer_docsWhereInput[]
    OR?: customer_docsWhereInput[]
    NOT?: customer_docsWhereInput | customer_docsWhereInput[]
    customer_id?: IntFilter<"customer_docs"> | number
    doc_type?: StringFilter<"customer_docs"> | string
    doc_url?: StringFilter<"customer_docs"> | string
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
  }, "doc_id">

  export type customer_docsOrderByWithAggregationInput = {
    doc_id?: SortOrder
    customer_id?: SortOrder
    doc_type?: SortOrder
    doc_url?: SortOrder
    _count?: customer_docsCountOrderByAggregateInput
    _avg?: customer_docsAvgOrderByAggregateInput
    _max?: customer_docsMaxOrderByAggregateInput
    _min?: customer_docsMinOrderByAggregateInput
    _sum?: customer_docsSumOrderByAggregateInput
  }

  export type customer_docsScalarWhereWithAggregatesInput = {
    AND?: customer_docsScalarWhereWithAggregatesInput | customer_docsScalarWhereWithAggregatesInput[]
    OR?: customer_docsScalarWhereWithAggregatesInput[]
    NOT?: customer_docsScalarWhereWithAggregatesInput | customer_docsScalarWhereWithAggregatesInput[]
    doc_id?: IntWithAggregatesFilter<"customer_docs"> | number
    customer_id?: IntWithAggregatesFilter<"customer_docs"> | number
    doc_type?: StringWithAggregatesFilter<"customer_docs"> | string
    doc_url?: StringWithAggregatesFilter<"customer_docs"> | string
  }

  export type branchesWhereInput = {
    AND?: branchesWhereInput | branchesWhereInput[]
    OR?: branchesWhereInput[]
    NOT?: branchesWhereInput | branchesWhereInput[]
    branch_id?: IntFilter<"branches"> | number
    branch_name?: StringNullableFilter<"branches"> | string | null
    city?: StringNullableFilter<"branches"> | string | null
    accounts?: AccountsListRelationFilter
  }

  export type branchesOrderByWithRelationInput = {
    branch_id?: SortOrder
    branch_name?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    accounts?: accountsOrderByRelationAggregateInput
  }

  export type branchesWhereUniqueInput = Prisma.AtLeast<{
    branch_id?: number
    AND?: branchesWhereInput | branchesWhereInput[]
    OR?: branchesWhereInput[]
    NOT?: branchesWhereInput | branchesWhereInput[]
    branch_name?: StringNullableFilter<"branches"> | string | null
    city?: StringNullableFilter<"branches"> | string | null
    accounts?: AccountsListRelationFilter
  }, "branch_id">

  export type branchesOrderByWithAggregationInput = {
    branch_id?: SortOrder
    branch_name?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    _count?: branchesCountOrderByAggregateInput
    _avg?: branchesAvgOrderByAggregateInput
    _max?: branchesMaxOrderByAggregateInput
    _min?: branchesMinOrderByAggregateInput
    _sum?: branchesSumOrderByAggregateInput
  }

  export type branchesScalarWhereWithAggregatesInput = {
    AND?: branchesScalarWhereWithAggregatesInput | branchesScalarWhereWithAggregatesInput[]
    OR?: branchesScalarWhereWithAggregatesInput[]
    NOT?: branchesScalarWhereWithAggregatesInput | branchesScalarWhereWithAggregatesInput[]
    branch_id?: IntWithAggregatesFilter<"branches"> | number
    branch_name?: StringNullableWithAggregatesFilter<"branches"> | string | null
    city?: StringNullableWithAggregatesFilter<"branches"> | string | null
  }

  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    account_id?: IntFilter<"accounts"> | number
    account_number?: StringNullableFilter<"accounts"> | string | null
    customer_id?: IntFilter<"accounts"> | number
    branch_id?: IntFilter<"accounts"> | number
    account_type?: StringNullableFilter<"accounts"> | string | null
    balance?: DecimalFilter<"accounts"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"accounts"> | string
    created_at?: DateTimeFilter<"accounts"> | Date | string
    updated_at?: DateTimeNullableFilter<"accounts"> | Date | string | null
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    branch?: XOR<BranchesScalarRelationFilter, branchesWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type accountsOrderByWithRelationInput = {
    account_id?: SortOrder
    account_number?: SortOrderInput | SortOrder
    customer_id?: SortOrder
    branch_id?: SortOrder
    account_type?: SortOrderInput | SortOrder
    balance?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    customer?: customersOrderByWithRelationInput
    branch?: branchesOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    account_id?: number
    account_number?: string
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    customer_id?: IntFilter<"accounts"> | number
    branch_id?: IntFilter<"accounts"> | number
    account_type?: StringNullableFilter<"accounts"> | string | null
    balance?: DecimalFilter<"accounts"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"accounts"> | string
    created_at?: DateTimeFilter<"accounts"> | Date | string
    updated_at?: DateTimeNullableFilter<"accounts"> | Date | string | null
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    branch?: XOR<BranchesScalarRelationFilter, branchesWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "account_id" | "account_number">

  export type accountsOrderByWithAggregationInput = {
    account_id?: SortOrder
    account_number?: SortOrderInput | SortOrder
    customer_id?: SortOrder
    branch_id?: SortOrder
    account_type?: SortOrderInput | SortOrder
    balance?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: accountsCountOrderByAggregateInput
    _avg?: accountsAvgOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
    _sum?: accountsSumOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    account_id?: IntWithAggregatesFilter<"accounts"> | number
    account_number?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    customer_id?: IntWithAggregatesFilter<"accounts"> | number
    branch_id?: IntWithAggregatesFilter<"accounts"> | number
    account_type?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    balance?: DecimalWithAggregatesFilter<"accounts"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"accounts"> | string
    created_at?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"accounts"> | Date | string | null
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    transaction_id?: IntFilter<"transactions"> | number
    account_id?: IntFilter<"transactions"> | number
    amount?: DecimalNullableFilter<"transactions"> | Decimal | DecimalJsLike | number | string | null
    transaction_type?: StringNullableFilter<"transactions"> | string | null
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
    account?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
  }

  export type transactionsOrderByWithRelationInput = {
    transaction_id?: SortOrder
    account_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    transaction_type?: SortOrderInput | SortOrder
    transaction_date?: SortOrder
    account?: accountsOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: number
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    account_id?: IntFilter<"transactions"> | number
    amount?: DecimalNullableFilter<"transactions"> | Decimal | DecimalJsLike | number | string | null
    transaction_type?: StringNullableFilter<"transactions"> | string | null
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
    account?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
  }, "transaction_id">

  export type transactionsOrderByWithAggregationInput = {
    transaction_id?: SortOrder
    account_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    transaction_type?: SortOrderInput | SortOrder
    transaction_date?: SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    transaction_id?: IntWithAggregatesFilter<"transactions"> | number
    account_id?: IntWithAggregatesFilter<"transactions"> | number
    amount?: DecimalNullableWithAggregatesFilter<"transactions"> | Decimal | DecimalJsLike | number | string | null
    transaction_type?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    transaction_date?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
  }

  export type loansWhereInput = {
    AND?: loansWhereInput | loansWhereInput[]
    OR?: loansWhereInput[]
    NOT?: loansWhereInput | loansWhereInput[]
    loan_id?: IntFilter<"loans"> | number
    customer_id?: IntFilter<"loans"> | number
    loan_type?: StringNullableFilter<"loans"> | string | null
    amount?: DecimalNullableFilter<"loans"> | Decimal | DecimalJsLike | number | string | null
    interest_rate?: DecimalNullableFilter<"loans"> | Decimal | DecimalJsLike | number | string | null
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    payments?: Loan_paymentsListRelationFilter
  }

  export type loansOrderByWithRelationInput = {
    loan_id?: SortOrder
    customer_id?: SortOrder
    loan_type?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    interest_rate?: SortOrderInput | SortOrder
    customer?: customersOrderByWithRelationInput
    payments?: loan_paymentsOrderByRelationAggregateInput
  }

  export type loansWhereUniqueInput = Prisma.AtLeast<{
    loan_id?: number
    AND?: loansWhereInput | loansWhereInput[]
    OR?: loansWhereInput[]
    NOT?: loansWhereInput | loansWhereInput[]
    customer_id?: IntFilter<"loans"> | number
    loan_type?: StringNullableFilter<"loans"> | string | null
    amount?: DecimalNullableFilter<"loans"> | Decimal | DecimalJsLike | number | string | null
    interest_rate?: DecimalNullableFilter<"loans"> | Decimal | DecimalJsLike | number | string | null
    customer?: XOR<CustomersScalarRelationFilter, customersWhereInput>
    payments?: Loan_paymentsListRelationFilter
  }, "loan_id">

  export type loansOrderByWithAggregationInput = {
    loan_id?: SortOrder
    customer_id?: SortOrder
    loan_type?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    interest_rate?: SortOrderInput | SortOrder
    _count?: loansCountOrderByAggregateInput
    _avg?: loansAvgOrderByAggregateInput
    _max?: loansMaxOrderByAggregateInput
    _min?: loansMinOrderByAggregateInput
    _sum?: loansSumOrderByAggregateInput
  }

  export type loansScalarWhereWithAggregatesInput = {
    AND?: loansScalarWhereWithAggregatesInput | loansScalarWhereWithAggregatesInput[]
    OR?: loansScalarWhereWithAggregatesInput[]
    NOT?: loansScalarWhereWithAggregatesInput | loansScalarWhereWithAggregatesInput[]
    loan_id?: IntWithAggregatesFilter<"loans"> | number
    customer_id?: IntWithAggregatesFilter<"loans"> | number
    loan_type?: StringNullableWithAggregatesFilter<"loans"> | string | null
    amount?: DecimalNullableWithAggregatesFilter<"loans"> | Decimal | DecimalJsLike | number | string | null
    interest_rate?: DecimalNullableWithAggregatesFilter<"loans"> | Decimal | DecimalJsLike | number | string | null
  }

  export type loan_paymentsWhereInput = {
    AND?: loan_paymentsWhereInput | loan_paymentsWhereInput[]
    OR?: loan_paymentsWhereInput[]
    NOT?: loan_paymentsWhereInput | loan_paymentsWhereInput[]
    payment_id?: IntFilter<"loan_payments"> | number
    loan_id?: IntFilter<"loan_payments"> | number
    amount?: DecimalNullableFilter<"loan_payments"> | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeFilter<"loan_payments"> | Date | string
    loan?: XOR<LoansScalarRelationFilter, loansWhereInput>
  }

  export type loan_paymentsOrderByWithRelationInput = {
    payment_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    payment_date?: SortOrder
    loan?: loansOrderByWithRelationInput
  }

  export type loan_paymentsWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    AND?: loan_paymentsWhereInput | loan_paymentsWhereInput[]
    OR?: loan_paymentsWhereInput[]
    NOT?: loan_paymentsWhereInput | loan_paymentsWhereInput[]
    loan_id?: IntFilter<"loan_payments"> | number
    amount?: DecimalNullableFilter<"loan_payments"> | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeFilter<"loan_payments"> | Date | string
    loan?: XOR<LoansScalarRelationFilter, loansWhereInput>
  }, "payment_id">

  export type loan_paymentsOrderByWithAggregationInput = {
    payment_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrderInput | SortOrder
    payment_date?: SortOrder
    _count?: loan_paymentsCountOrderByAggregateInput
    _avg?: loan_paymentsAvgOrderByAggregateInput
    _max?: loan_paymentsMaxOrderByAggregateInput
    _min?: loan_paymentsMinOrderByAggregateInput
    _sum?: loan_paymentsSumOrderByAggregateInput
  }

  export type loan_paymentsScalarWhereWithAggregatesInput = {
    AND?: loan_paymentsScalarWhereWithAggregatesInput | loan_paymentsScalarWhereWithAggregatesInput[]
    OR?: loan_paymentsScalarWhereWithAggregatesInput[]
    NOT?: loan_paymentsScalarWhereWithAggregatesInput | loan_paymentsScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"loan_payments"> | number
    loan_id?: IntWithAggregatesFilter<"loan_payments"> | number
    amount?: DecimalNullableWithAggregatesFilter<"loan_payments"> | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeWithAggregatesFilter<"loan_payments"> | Date | string
  }

  export type employees2WhereInput = {
    AND?: employees2WhereInput | employees2WhereInput[]
    OR?: employees2WhereInput[]
    NOT?: employees2WhereInput | employees2WhereInput[]
    id?: IntFilter<"employees2"> | number
    name1?: StringFilter<"employees2"> | string
  }

  export type employees2OrderByWithRelationInput = {
    id?: SortOrder
    name1?: SortOrder
  }

  export type employees2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name1?: string
    AND?: employees2WhereInput | employees2WhereInput[]
    OR?: employees2WhereInput[]
    NOT?: employees2WhereInput | employees2WhereInput[]
  }, "id" | "name1">

  export type employees2OrderByWithAggregationInput = {
    id?: SortOrder
    name1?: SortOrder
    _count?: employees2CountOrderByAggregateInput
    _avg?: employees2AvgOrderByAggregateInput
    _max?: employees2MaxOrderByAggregateInput
    _min?: employees2MinOrderByAggregateInput
    _sum?: employees2SumOrderByAggregateInput
  }

  export type employees2ScalarWhereWithAggregatesInput = {
    AND?: employees2ScalarWhereWithAggregatesInput | employees2ScalarWhereWithAggregatesInput[]
    OR?: employees2ScalarWhereWithAggregatesInput[]
    NOT?: employees2ScalarWhereWithAggregatesInput | employees2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"employees2"> | number
    name1?: StringWithAggregatesFilter<"employees2"> | string
  }

  export type customersCreateInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    accounts?: accountsCreateNestedManyWithoutCustomerInput
    loans?: loansCreateNestedManyWithoutCustomerInput
    docs?: customer_docsCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateInput = {
    customer_id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    accounts?: accountsUncheckedCreateNestedManyWithoutCustomerInput
    loans?: loansUncheckedCreateNestedManyWithoutCustomerInput
    docs?: customer_docsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUpdateManyWithoutCustomerNestedInput
    loans?: loansUpdateManyWithoutCustomerNestedInput
    docs?: customer_docsUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUncheckedUpdateManyWithoutCustomerNestedInput
    loans?: loansUncheckedUpdateManyWithoutCustomerNestedInput
    docs?: customer_docsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customersCreateManyInput = {
    customer_id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
  }

  export type customersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customer_docsCreateInput = {
    doc_type: string
    doc_url: string
    customer: customersCreateNestedOneWithoutDocsInput
  }

  export type customer_docsUncheckedCreateInput = {
    doc_id?: number
    customer_id: number
    doc_type: string
    doc_url: string
  }

  export type customer_docsUpdateInput = {
    doc_type?: StringFieldUpdateOperationsInput | string
    doc_url?: StringFieldUpdateOperationsInput | string
    customer?: customersUpdateOneRequiredWithoutDocsNestedInput
  }

  export type customer_docsUncheckedUpdateInput = {
    doc_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    doc_url?: StringFieldUpdateOperationsInput | string
  }

  export type customer_docsCreateManyInput = {
    doc_id?: number
    customer_id: number
    doc_type: string
    doc_url: string
  }

  export type customer_docsUpdateManyMutationInput = {
    doc_type?: StringFieldUpdateOperationsInput | string
    doc_url?: StringFieldUpdateOperationsInput | string
  }

  export type customer_docsUncheckedUpdateManyInput = {
    doc_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    doc_url?: StringFieldUpdateOperationsInput | string
  }

  export type branchesCreateInput = {
    branch_name?: string | null
    city?: string | null
    accounts?: accountsCreateNestedManyWithoutBranchInput
  }

  export type branchesUncheckedCreateInput = {
    branch_id?: number
    branch_name?: string | null
    city?: string | null
    accounts?: accountsUncheckedCreateNestedManyWithoutBranchInput
  }

  export type branchesUpdateInput = {
    branch_name?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUpdateManyWithoutBranchNestedInput
  }

  export type branchesUncheckedUpdateInput = {
    branch_id?: IntFieldUpdateOperationsInput | number
    branch_name?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type branchesCreateManyInput = {
    branch_id?: number
    branch_name?: string | null
    city?: string | null
  }

  export type branchesUpdateManyMutationInput = {
    branch_name?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type branchesUncheckedUpdateManyInput = {
    branch_id?: IntFieldUpdateOperationsInput | number
    branch_name?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountsCreateInput = {
    account_number?: string | null
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    customer: customersCreateNestedOneWithoutAccountsInput
    branch: branchesCreateNestedOneWithoutAccountsInput
    transactions?: transactionsCreateNestedManyWithoutAccountInput
  }

  export type accountsUncheckedCreateInput = {
    account_id?: number
    account_number?: string | null
    customer_id: number
    branch_id: number
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    transactions?: transactionsUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountsUpdateInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customersUpdateOneRequiredWithoutAccountsNestedInput
    branch?: branchesUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: transactionsUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountsCreateManyInput = {
    account_id?: number
    account_number?: string | null
    customer_id: number
    branch_id: number
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type accountsUpdateManyMutationInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accountsUncheckedUpdateManyInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsCreateInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    transaction_type?: string | null
    transaction_date?: Date | string
    account: accountsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    transaction_id?: number
    account_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    transaction_type?: string | null
    transaction_date?: Date | string
  }

  export type transactionsUpdateInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountsUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManyInput = {
    transaction_id?: number
    account_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    transaction_type?: string | null
    transaction_date?: Date | string
  }

  export type transactionsUpdateManyMutationInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loansCreateInput = {
    loan_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    customer: customersCreateNestedOneWithoutLoansInput
    payments?: loan_paymentsCreateNestedManyWithoutLoanInput
  }

  export type loansUncheckedCreateInput = {
    loan_id?: number
    customer_id: number
    loan_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    payments?: loan_paymentsUncheckedCreateNestedManyWithoutLoanInput
  }

  export type loansUpdateInput = {
    loan_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customer?: customersUpdateOneRequiredWithoutLoansNestedInput
    payments?: loan_paymentsUpdateManyWithoutLoanNestedInput
  }

  export type loansUncheckedUpdateInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    loan_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments?: loan_paymentsUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type loansCreateManyInput = {
    loan_id?: number
    customer_id: number
    loan_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type loansUpdateManyMutationInput = {
    loan_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type loansUncheckedUpdateManyInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    loan_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type loan_paymentsCreateInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string
    loan: loansCreateNestedOneWithoutPaymentsInput
  }

  export type loan_paymentsUncheckedCreateInput = {
    payment_id?: number
    loan_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string
  }

  export type loan_paymentsUpdateInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: loansUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type loan_paymentsUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    loan_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loan_paymentsCreateManyInput = {
    payment_id?: number
    loan_id: number
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string
  }

  export type loan_paymentsUpdateManyMutationInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loan_paymentsUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    loan_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employees2CreateInput = {
    name1: string
  }

  export type employees2UncheckedCreateInput = {
    id?: number
    name1: string
  }

  export type employees2UpdateInput = {
    name1?: StringFieldUpdateOperationsInput | string
  }

  export type employees2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name1?: StringFieldUpdateOperationsInput | string
  }

  export type employees2CreateManyInput = {
    id?: number
    name1: string
  }

  export type employees2UpdateManyMutationInput = {
    name1?: StringFieldUpdateOperationsInput | string
  }

  export type employees2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name1?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AccountsListRelationFilter = {
    every?: accountsWhereInput
    some?: accountsWhereInput
    none?: accountsWhereInput
  }

  export type LoansListRelationFilter = {
    every?: loansWhereInput
    some?: loansWhereInput
    none?: loansWhereInput
  }

  export type Customer_docsListRelationFilter = {
    every?: customer_docsWhereInput
    some?: customer_docsWhereInput
    none?: customer_docsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type accountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type loansOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customer_docsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    customer_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CustomersScalarRelationFilter = {
    is?: customersWhereInput
    isNot?: customersWhereInput
  }

  export type customer_docsCountOrderByAggregateInput = {
    doc_id?: SortOrder
    customer_id?: SortOrder
    doc_type?: SortOrder
    doc_url?: SortOrder
  }

  export type customer_docsAvgOrderByAggregateInput = {
    doc_id?: SortOrder
    customer_id?: SortOrder
  }

  export type customer_docsMaxOrderByAggregateInput = {
    doc_id?: SortOrder
    customer_id?: SortOrder
    doc_type?: SortOrder
    doc_url?: SortOrder
  }

  export type customer_docsMinOrderByAggregateInput = {
    doc_id?: SortOrder
    customer_id?: SortOrder
    doc_type?: SortOrder
    doc_url?: SortOrder
  }

  export type customer_docsSumOrderByAggregateInput = {
    doc_id?: SortOrder
    customer_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type branchesCountOrderByAggregateInput = {
    branch_id?: SortOrder
    branch_name?: SortOrder
    city?: SortOrder
  }

  export type branchesAvgOrderByAggregateInput = {
    branch_id?: SortOrder
  }

  export type branchesMaxOrderByAggregateInput = {
    branch_id?: SortOrder
    branch_name?: SortOrder
    city?: SortOrder
  }

  export type branchesMinOrderByAggregateInput = {
    branch_id?: SortOrder
    branch_name?: SortOrder
    city?: SortOrder
  }

  export type branchesSumOrderByAggregateInput = {
    branch_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BranchesScalarRelationFilter = {
    is?: branchesWhereInput
    isNot?: branchesWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountsCountOrderByAggregateInput = {
    account_id?: SortOrder
    account_number?: SortOrder
    customer_id?: SortOrder
    branch_id?: SortOrder
    account_type?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type accountsAvgOrderByAggregateInput = {
    account_id?: SortOrder
    customer_id?: SortOrder
    branch_id?: SortOrder
    balance?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    account_id?: SortOrder
    account_number?: SortOrder
    customer_id?: SortOrder
    branch_id?: SortOrder
    account_type?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    account_id?: SortOrder
    account_number?: SortOrder
    customer_id?: SortOrder
    branch_id?: SortOrder
    account_type?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type accountsSumOrderByAggregateInput = {
    account_id?: SortOrder
    customer_id?: SortOrder
    branch_id?: SortOrder
    balance?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type AccountsScalarRelationFilter = {
    is?: accountsWhereInput
    isNot?: accountsWhereInput
  }

  export type transactionsCountOrderByAggregateInput = {
    transaction_id?: SortOrder
    account_id?: SortOrder
    amount?: SortOrder
    transaction_type?: SortOrder
    transaction_date?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    transaction_id?: SortOrder
    account_id?: SortOrder
    amount?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    transaction_id?: SortOrder
    account_id?: SortOrder
    amount?: SortOrder
    transaction_type?: SortOrder
    transaction_date?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    transaction_id?: SortOrder
    account_id?: SortOrder
    amount?: SortOrder
    transaction_type?: SortOrder
    transaction_date?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    transaction_id?: SortOrder
    account_id?: SortOrder
    amount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Loan_paymentsListRelationFilter = {
    every?: loan_paymentsWhereInput
    some?: loan_paymentsWhereInput
    none?: loan_paymentsWhereInput
  }

  export type loan_paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type loansCountOrderByAggregateInput = {
    loan_id?: SortOrder
    customer_id?: SortOrder
    loan_type?: SortOrder
    amount?: SortOrder
    interest_rate?: SortOrder
  }

  export type loansAvgOrderByAggregateInput = {
    loan_id?: SortOrder
    customer_id?: SortOrder
    amount?: SortOrder
    interest_rate?: SortOrder
  }

  export type loansMaxOrderByAggregateInput = {
    loan_id?: SortOrder
    customer_id?: SortOrder
    loan_type?: SortOrder
    amount?: SortOrder
    interest_rate?: SortOrder
  }

  export type loansMinOrderByAggregateInput = {
    loan_id?: SortOrder
    customer_id?: SortOrder
    loan_type?: SortOrder
    amount?: SortOrder
    interest_rate?: SortOrder
  }

  export type loansSumOrderByAggregateInput = {
    loan_id?: SortOrder
    customer_id?: SortOrder
    amount?: SortOrder
    interest_rate?: SortOrder
  }

  export type LoansScalarRelationFilter = {
    is?: loansWhereInput
    isNot?: loansWhereInput
  }

  export type loan_paymentsCountOrderByAggregateInput = {
    payment_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
  }

  export type loan_paymentsAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrder
  }

  export type loan_paymentsMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
  }

  export type loan_paymentsMinOrderByAggregateInput = {
    payment_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrder
    payment_date?: SortOrder
  }

  export type loan_paymentsSumOrderByAggregateInput = {
    payment_id?: SortOrder
    loan_id?: SortOrder
    amount?: SortOrder
  }

  export type employees2CountOrderByAggregateInput = {
    id?: SortOrder
    name1?: SortOrder
  }

  export type employees2AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type employees2MaxOrderByAggregateInput = {
    id?: SortOrder
    name1?: SortOrder
  }

  export type employees2MinOrderByAggregateInput = {
    id?: SortOrder
    name1?: SortOrder
  }

  export type employees2SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type accountsCreateNestedManyWithoutCustomerInput = {
    create?: XOR<accountsCreateWithoutCustomerInput, accountsUncheckedCreateWithoutCustomerInput> | accountsCreateWithoutCustomerInput[] | accountsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutCustomerInput | accountsCreateOrConnectWithoutCustomerInput[]
    createMany?: accountsCreateManyCustomerInputEnvelope
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
  }

  export type loansCreateNestedManyWithoutCustomerInput = {
    create?: XOR<loansCreateWithoutCustomerInput, loansUncheckedCreateWithoutCustomerInput> | loansCreateWithoutCustomerInput[] | loansUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: loansCreateOrConnectWithoutCustomerInput | loansCreateOrConnectWithoutCustomerInput[]
    createMany?: loansCreateManyCustomerInputEnvelope
    connect?: loansWhereUniqueInput | loansWhereUniqueInput[]
  }

  export type customer_docsCreateNestedManyWithoutCustomerInput = {
    create?: XOR<customer_docsCreateWithoutCustomerInput, customer_docsUncheckedCreateWithoutCustomerInput> | customer_docsCreateWithoutCustomerInput[] | customer_docsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: customer_docsCreateOrConnectWithoutCustomerInput | customer_docsCreateOrConnectWithoutCustomerInput[]
    createMany?: customer_docsCreateManyCustomerInputEnvelope
    connect?: customer_docsWhereUniqueInput | customer_docsWhereUniqueInput[]
  }

  export type accountsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<accountsCreateWithoutCustomerInput, accountsUncheckedCreateWithoutCustomerInput> | accountsCreateWithoutCustomerInput[] | accountsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutCustomerInput | accountsCreateOrConnectWithoutCustomerInput[]
    createMany?: accountsCreateManyCustomerInputEnvelope
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
  }

  export type loansUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<loansCreateWithoutCustomerInput, loansUncheckedCreateWithoutCustomerInput> | loansCreateWithoutCustomerInput[] | loansUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: loansCreateOrConnectWithoutCustomerInput | loansCreateOrConnectWithoutCustomerInput[]
    createMany?: loansCreateManyCustomerInputEnvelope
    connect?: loansWhereUniqueInput | loansWhereUniqueInput[]
  }

  export type customer_docsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<customer_docsCreateWithoutCustomerInput, customer_docsUncheckedCreateWithoutCustomerInput> | customer_docsCreateWithoutCustomerInput[] | customer_docsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: customer_docsCreateOrConnectWithoutCustomerInput | customer_docsCreateOrConnectWithoutCustomerInput[]
    createMany?: customer_docsCreateManyCustomerInputEnvelope
    connect?: customer_docsWhereUniqueInput | customer_docsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type accountsUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<accountsCreateWithoutCustomerInput, accountsUncheckedCreateWithoutCustomerInput> | accountsCreateWithoutCustomerInput[] | accountsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutCustomerInput | accountsCreateOrConnectWithoutCustomerInput[]
    upsert?: accountsUpsertWithWhereUniqueWithoutCustomerInput | accountsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: accountsCreateManyCustomerInputEnvelope
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    update?: accountsUpdateWithWhereUniqueWithoutCustomerInput | accountsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: accountsUpdateManyWithWhereWithoutCustomerInput | accountsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[]
  }

  export type loansUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<loansCreateWithoutCustomerInput, loansUncheckedCreateWithoutCustomerInput> | loansCreateWithoutCustomerInput[] | loansUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: loansCreateOrConnectWithoutCustomerInput | loansCreateOrConnectWithoutCustomerInput[]
    upsert?: loansUpsertWithWhereUniqueWithoutCustomerInput | loansUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: loansCreateManyCustomerInputEnvelope
    set?: loansWhereUniqueInput | loansWhereUniqueInput[]
    disconnect?: loansWhereUniqueInput | loansWhereUniqueInput[]
    delete?: loansWhereUniqueInput | loansWhereUniqueInput[]
    connect?: loansWhereUniqueInput | loansWhereUniqueInput[]
    update?: loansUpdateWithWhereUniqueWithoutCustomerInput | loansUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: loansUpdateManyWithWhereWithoutCustomerInput | loansUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: loansScalarWhereInput | loansScalarWhereInput[]
  }

  export type customer_docsUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<customer_docsCreateWithoutCustomerInput, customer_docsUncheckedCreateWithoutCustomerInput> | customer_docsCreateWithoutCustomerInput[] | customer_docsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: customer_docsCreateOrConnectWithoutCustomerInput | customer_docsCreateOrConnectWithoutCustomerInput[]
    upsert?: customer_docsUpsertWithWhereUniqueWithoutCustomerInput | customer_docsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: customer_docsCreateManyCustomerInputEnvelope
    set?: customer_docsWhereUniqueInput | customer_docsWhereUniqueInput[]
    disconnect?: customer_docsWhereUniqueInput | customer_docsWhereUniqueInput[]
    delete?: customer_docsWhereUniqueInput | customer_docsWhereUniqueInput[]
    connect?: customer_docsWhereUniqueInput | customer_docsWhereUniqueInput[]
    update?: customer_docsUpdateWithWhereUniqueWithoutCustomerInput | customer_docsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: customer_docsUpdateManyWithWhereWithoutCustomerInput | customer_docsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: customer_docsScalarWhereInput | customer_docsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type accountsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<accountsCreateWithoutCustomerInput, accountsUncheckedCreateWithoutCustomerInput> | accountsCreateWithoutCustomerInput[] | accountsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutCustomerInput | accountsCreateOrConnectWithoutCustomerInput[]
    upsert?: accountsUpsertWithWhereUniqueWithoutCustomerInput | accountsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: accountsCreateManyCustomerInputEnvelope
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    update?: accountsUpdateWithWhereUniqueWithoutCustomerInput | accountsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: accountsUpdateManyWithWhereWithoutCustomerInput | accountsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[]
  }

  export type loansUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<loansCreateWithoutCustomerInput, loansUncheckedCreateWithoutCustomerInput> | loansCreateWithoutCustomerInput[] | loansUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: loansCreateOrConnectWithoutCustomerInput | loansCreateOrConnectWithoutCustomerInput[]
    upsert?: loansUpsertWithWhereUniqueWithoutCustomerInput | loansUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: loansCreateManyCustomerInputEnvelope
    set?: loansWhereUniqueInput | loansWhereUniqueInput[]
    disconnect?: loansWhereUniqueInput | loansWhereUniqueInput[]
    delete?: loansWhereUniqueInput | loansWhereUniqueInput[]
    connect?: loansWhereUniqueInput | loansWhereUniqueInput[]
    update?: loansUpdateWithWhereUniqueWithoutCustomerInput | loansUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: loansUpdateManyWithWhereWithoutCustomerInput | loansUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: loansScalarWhereInput | loansScalarWhereInput[]
  }

  export type customer_docsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<customer_docsCreateWithoutCustomerInput, customer_docsUncheckedCreateWithoutCustomerInput> | customer_docsCreateWithoutCustomerInput[] | customer_docsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: customer_docsCreateOrConnectWithoutCustomerInput | customer_docsCreateOrConnectWithoutCustomerInput[]
    upsert?: customer_docsUpsertWithWhereUniqueWithoutCustomerInput | customer_docsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: customer_docsCreateManyCustomerInputEnvelope
    set?: customer_docsWhereUniqueInput | customer_docsWhereUniqueInput[]
    disconnect?: customer_docsWhereUniqueInput | customer_docsWhereUniqueInput[]
    delete?: customer_docsWhereUniqueInput | customer_docsWhereUniqueInput[]
    connect?: customer_docsWhereUniqueInput | customer_docsWhereUniqueInput[]
    update?: customer_docsUpdateWithWhereUniqueWithoutCustomerInput | customer_docsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: customer_docsUpdateManyWithWhereWithoutCustomerInput | customer_docsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: customer_docsScalarWhereInput | customer_docsScalarWhereInput[]
  }

  export type customersCreateNestedOneWithoutDocsInput = {
    create?: XOR<customersCreateWithoutDocsInput, customersUncheckedCreateWithoutDocsInput>
    connectOrCreate?: customersCreateOrConnectWithoutDocsInput
    connect?: customersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type customersUpdateOneRequiredWithoutDocsNestedInput = {
    create?: XOR<customersCreateWithoutDocsInput, customersUncheckedCreateWithoutDocsInput>
    connectOrCreate?: customersCreateOrConnectWithoutDocsInput
    upsert?: customersUpsertWithoutDocsInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutDocsInput, customersUpdateWithoutDocsInput>, customersUncheckedUpdateWithoutDocsInput>
  }

  export type accountsCreateNestedManyWithoutBranchInput = {
    create?: XOR<accountsCreateWithoutBranchInput, accountsUncheckedCreateWithoutBranchInput> | accountsCreateWithoutBranchInput[] | accountsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutBranchInput | accountsCreateOrConnectWithoutBranchInput[]
    createMany?: accountsCreateManyBranchInputEnvelope
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
  }

  export type accountsUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<accountsCreateWithoutBranchInput, accountsUncheckedCreateWithoutBranchInput> | accountsCreateWithoutBranchInput[] | accountsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutBranchInput | accountsCreateOrConnectWithoutBranchInput[]
    createMany?: accountsCreateManyBranchInputEnvelope
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
  }

  export type accountsUpdateManyWithoutBranchNestedInput = {
    create?: XOR<accountsCreateWithoutBranchInput, accountsUncheckedCreateWithoutBranchInput> | accountsCreateWithoutBranchInput[] | accountsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutBranchInput | accountsCreateOrConnectWithoutBranchInput[]
    upsert?: accountsUpsertWithWhereUniqueWithoutBranchInput | accountsUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: accountsCreateManyBranchInputEnvelope
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    update?: accountsUpdateWithWhereUniqueWithoutBranchInput | accountsUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: accountsUpdateManyWithWhereWithoutBranchInput | accountsUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[]
  }

  export type accountsUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<accountsCreateWithoutBranchInput, accountsUncheckedCreateWithoutBranchInput> | accountsCreateWithoutBranchInput[] | accountsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutBranchInput | accountsCreateOrConnectWithoutBranchInput[]
    upsert?: accountsUpsertWithWhereUniqueWithoutBranchInput | accountsUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: accountsCreateManyBranchInputEnvelope
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    update?: accountsUpdateWithWhereUniqueWithoutBranchInput | accountsUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: accountsUpdateManyWithWhereWithoutBranchInput | accountsUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[]
  }

  export type customersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<customersCreateWithoutAccountsInput, customersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: customersCreateOrConnectWithoutAccountsInput
    connect?: customersWhereUniqueInput
  }

  export type branchesCreateNestedOneWithoutAccountsInput = {
    create?: XOR<branchesCreateWithoutAccountsInput, branchesUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: branchesCreateOrConnectWithoutAccountsInput
    connect?: branchesWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutAccountInput = {
    create?: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput> | transactionsCreateWithoutAccountInput[] | transactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountInput | transactionsCreateOrConnectWithoutAccountInput[]
    createMany?: transactionsCreateManyAccountInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput> | transactionsCreateWithoutAccountInput[] | transactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountInput | transactionsCreateOrConnectWithoutAccountInput[]
    createMany?: transactionsCreateManyAccountInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type customersUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<customersCreateWithoutAccountsInput, customersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: customersCreateOrConnectWithoutAccountsInput
    upsert?: customersUpsertWithoutAccountsInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutAccountsInput, customersUpdateWithoutAccountsInput>, customersUncheckedUpdateWithoutAccountsInput>
  }

  export type branchesUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<branchesCreateWithoutAccountsInput, branchesUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: branchesCreateOrConnectWithoutAccountsInput
    upsert?: branchesUpsertWithoutAccountsInput
    connect?: branchesWhereUniqueInput
    update?: XOR<XOR<branchesUpdateToOneWithWhereWithoutAccountsInput, branchesUpdateWithoutAccountsInput>, branchesUncheckedUpdateWithoutAccountsInput>
  }

  export type transactionsUpdateManyWithoutAccountNestedInput = {
    create?: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput> | transactionsCreateWithoutAccountInput[] | transactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountInput | transactionsCreateOrConnectWithoutAccountInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutAccountInput | transactionsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: transactionsCreateManyAccountInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutAccountInput | transactionsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutAccountInput | transactionsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput> | transactionsCreateWithoutAccountInput[] | transactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountInput | transactionsCreateOrConnectWithoutAccountInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutAccountInput | transactionsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: transactionsCreateManyAccountInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutAccountInput | transactionsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutAccountInput | transactionsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type accountsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutTransactionsInput
    connect?: accountsWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type accountsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutTransactionsInput
    upsert?: accountsUpsertWithoutTransactionsInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutTransactionsInput, accountsUpdateWithoutTransactionsInput>, accountsUncheckedUpdateWithoutTransactionsInput>
  }

  export type customersCreateNestedOneWithoutLoansInput = {
    create?: XOR<customersCreateWithoutLoansInput, customersUncheckedCreateWithoutLoansInput>
    connectOrCreate?: customersCreateOrConnectWithoutLoansInput
    connect?: customersWhereUniqueInput
  }

  export type loan_paymentsCreateNestedManyWithoutLoanInput = {
    create?: XOR<loan_paymentsCreateWithoutLoanInput, loan_paymentsUncheckedCreateWithoutLoanInput> | loan_paymentsCreateWithoutLoanInput[] | loan_paymentsUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: loan_paymentsCreateOrConnectWithoutLoanInput | loan_paymentsCreateOrConnectWithoutLoanInput[]
    createMany?: loan_paymentsCreateManyLoanInputEnvelope
    connect?: loan_paymentsWhereUniqueInput | loan_paymentsWhereUniqueInput[]
  }

  export type loan_paymentsUncheckedCreateNestedManyWithoutLoanInput = {
    create?: XOR<loan_paymentsCreateWithoutLoanInput, loan_paymentsUncheckedCreateWithoutLoanInput> | loan_paymentsCreateWithoutLoanInput[] | loan_paymentsUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: loan_paymentsCreateOrConnectWithoutLoanInput | loan_paymentsCreateOrConnectWithoutLoanInput[]
    createMany?: loan_paymentsCreateManyLoanInputEnvelope
    connect?: loan_paymentsWhereUniqueInput | loan_paymentsWhereUniqueInput[]
  }

  export type customersUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<customersCreateWithoutLoansInput, customersUncheckedCreateWithoutLoansInput>
    connectOrCreate?: customersCreateOrConnectWithoutLoansInput
    upsert?: customersUpsertWithoutLoansInput
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutLoansInput, customersUpdateWithoutLoansInput>, customersUncheckedUpdateWithoutLoansInput>
  }

  export type loan_paymentsUpdateManyWithoutLoanNestedInput = {
    create?: XOR<loan_paymentsCreateWithoutLoanInput, loan_paymentsUncheckedCreateWithoutLoanInput> | loan_paymentsCreateWithoutLoanInput[] | loan_paymentsUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: loan_paymentsCreateOrConnectWithoutLoanInput | loan_paymentsCreateOrConnectWithoutLoanInput[]
    upsert?: loan_paymentsUpsertWithWhereUniqueWithoutLoanInput | loan_paymentsUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: loan_paymentsCreateManyLoanInputEnvelope
    set?: loan_paymentsWhereUniqueInput | loan_paymentsWhereUniqueInput[]
    disconnect?: loan_paymentsWhereUniqueInput | loan_paymentsWhereUniqueInput[]
    delete?: loan_paymentsWhereUniqueInput | loan_paymentsWhereUniqueInput[]
    connect?: loan_paymentsWhereUniqueInput | loan_paymentsWhereUniqueInput[]
    update?: loan_paymentsUpdateWithWhereUniqueWithoutLoanInput | loan_paymentsUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: loan_paymentsUpdateManyWithWhereWithoutLoanInput | loan_paymentsUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: loan_paymentsScalarWhereInput | loan_paymentsScalarWhereInput[]
  }

  export type loan_paymentsUncheckedUpdateManyWithoutLoanNestedInput = {
    create?: XOR<loan_paymentsCreateWithoutLoanInput, loan_paymentsUncheckedCreateWithoutLoanInput> | loan_paymentsCreateWithoutLoanInput[] | loan_paymentsUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: loan_paymentsCreateOrConnectWithoutLoanInput | loan_paymentsCreateOrConnectWithoutLoanInput[]
    upsert?: loan_paymentsUpsertWithWhereUniqueWithoutLoanInput | loan_paymentsUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: loan_paymentsCreateManyLoanInputEnvelope
    set?: loan_paymentsWhereUniqueInput | loan_paymentsWhereUniqueInput[]
    disconnect?: loan_paymentsWhereUniqueInput | loan_paymentsWhereUniqueInput[]
    delete?: loan_paymentsWhereUniqueInput | loan_paymentsWhereUniqueInput[]
    connect?: loan_paymentsWhereUniqueInput | loan_paymentsWhereUniqueInput[]
    update?: loan_paymentsUpdateWithWhereUniqueWithoutLoanInput | loan_paymentsUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: loan_paymentsUpdateManyWithWhereWithoutLoanInput | loan_paymentsUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: loan_paymentsScalarWhereInput | loan_paymentsScalarWhereInput[]
  }

  export type loansCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<loansCreateWithoutPaymentsInput, loansUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: loansCreateOrConnectWithoutPaymentsInput
    connect?: loansWhereUniqueInput
  }

  export type loansUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<loansCreateWithoutPaymentsInput, loansUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: loansCreateOrConnectWithoutPaymentsInput
    upsert?: loansUpsertWithoutPaymentsInput
    connect?: loansWhereUniqueInput
    update?: XOR<XOR<loansUpdateToOneWithWhereWithoutPaymentsInput, loansUpdateWithoutPaymentsInput>, loansUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type accountsCreateWithoutCustomerInput = {
    account_number?: string | null
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    branch: branchesCreateNestedOneWithoutAccountsInput
    transactions?: transactionsCreateNestedManyWithoutAccountInput
  }

  export type accountsUncheckedCreateWithoutCustomerInput = {
    account_id?: number
    account_number?: string | null
    branch_id: number
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    transactions?: transactionsUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountsCreateOrConnectWithoutCustomerInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutCustomerInput, accountsUncheckedCreateWithoutCustomerInput>
  }

  export type accountsCreateManyCustomerInputEnvelope = {
    data: accountsCreateManyCustomerInput | accountsCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type loansCreateWithoutCustomerInput = {
    loan_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    payments?: loan_paymentsCreateNestedManyWithoutLoanInput
  }

  export type loansUncheckedCreateWithoutCustomerInput = {
    loan_id?: number
    loan_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    payments?: loan_paymentsUncheckedCreateNestedManyWithoutLoanInput
  }

  export type loansCreateOrConnectWithoutCustomerInput = {
    where: loansWhereUniqueInput
    create: XOR<loansCreateWithoutCustomerInput, loansUncheckedCreateWithoutCustomerInput>
  }

  export type loansCreateManyCustomerInputEnvelope = {
    data: loansCreateManyCustomerInput | loansCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type customer_docsCreateWithoutCustomerInput = {
    doc_type: string
    doc_url: string
  }

  export type customer_docsUncheckedCreateWithoutCustomerInput = {
    doc_id?: number
    doc_type: string
    doc_url: string
  }

  export type customer_docsCreateOrConnectWithoutCustomerInput = {
    where: customer_docsWhereUniqueInput
    create: XOR<customer_docsCreateWithoutCustomerInput, customer_docsUncheckedCreateWithoutCustomerInput>
  }

  export type customer_docsCreateManyCustomerInputEnvelope = {
    data: customer_docsCreateManyCustomerInput | customer_docsCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type accountsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: accountsWhereUniqueInput
    update: XOR<accountsUpdateWithoutCustomerInput, accountsUncheckedUpdateWithoutCustomerInput>
    create: XOR<accountsCreateWithoutCustomerInput, accountsUncheckedCreateWithoutCustomerInput>
  }

  export type accountsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: accountsWhereUniqueInput
    data: XOR<accountsUpdateWithoutCustomerInput, accountsUncheckedUpdateWithoutCustomerInput>
  }

  export type accountsUpdateManyWithWhereWithoutCustomerInput = {
    where: accountsScalarWhereInput
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyWithoutCustomerInput>
  }

  export type accountsScalarWhereInput = {
    AND?: accountsScalarWhereInput | accountsScalarWhereInput[]
    OR?: accountsScalarWhereInput[]
    NOT?: accountsScalarWhereInput | accountsScalarWhereInput[]
    account_id?: IntFilter<"accounts"> | number
    account_number?: StringNullableFilter<"accounts"> | string | null
    customer_id?: IntFilter<"accounts"> | number
    branch_id?: IntFilter<"accounts"> | number
    account_type?: StringNullableFilter<"accounts"> | string | null
    balance?: DecimalFilter<"accounts"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"accounts"> | string
    created_at?: DateTimeFilter<"accounts"> | Date | string
    updated_at?: DateTimeNullableFilter<"accounts"> | Date | string | null
  }

  export type loansUpsertWithWhereUniqueWithoutCustomerInput = {
    where: loansWhereUniqueInput
    update: XOR<loansUpdateWithoutCustomerInput, loansUncheckedUpdateWithoutCustomerInput>
    create: XOR<loansCreateWithoutCustomerInput, loansUncheckedCreateWithoutCustomerInput>
  }

  export type loansUpdateWithWhereUniqueWithoutCustomerInput = {
    where: loansWhereUniqueInput
    data: XOR<loansUpdateWithoutCustomerInput, loansUncheckedUpdateWithoutCustomerInput>
  }

  export type loansUpdateManyWithWhereWithoutCustomerInput = {
    where: loansScalarWhereInput
    data: XOR<loansUpdateManyMutationInput, loansUncheckedUpdateManyWithoutCustomerInput>
  }

  export type loansScalarWhereInput = {
    AND?: loansScalarWhereInput | loansScalarWhereInput[]
    OR?: loansScalarWhereInput[]
    NOT?: loansScalarWhereInput | loansScalarWhereInput[]
    loan_id?: IntFilter<"loans"> | number
    customer_id?: IntFilter<"loans"> | number
    loan_type?: StringNullableFilter<"loans"> | string | null
    amount?: DecimalNullableFilter<"loans"> | Decimal | DecimalJsLike | number | string | null
    interest_rate?: DecimalNullableFilter<"loans"> | Decimal | DecimalJsLike | number | string | null
  }

  export type customer_docsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: customer_docsWhereUniqueInput
    update: XOR<customer_docsUpdateWithoutCustomerInput, customer_docsUncheckedUpdateWithoutCustomerInput>
    create: XOR<customer_docsCreateWithoutCustomerInput, customer_docsUncheckedCreateWithoutCustomerInput>
  }

  export type customer_docsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: customer_docsWhereUniqueInput
    data: XOR<customer_docsUpdateWithoutCustomerInput, customer_docsUncheckedUpdateWithoutCustomerInput>
  }

  export type customer_docsUpdateManyWithWhereWithoutCustomerInput = {
    where: customer_docsScalarWhereInput
    data: XOR<customer_docsUpdateManyMutationInput, customer_docsUncheckedUpdateManyWithoutCustomerInput>
  }

  export type customer_docsScalarWhereInput = {
    AND?: customer_docsScalarWhereInput | customer_docsScalarWhereInput[]
    OR?: customer_docsScalarWhereInput[]
    NOT?: customer_docsScalarWhereInput | customer_docsScalarWhereInput[]
    doc_id?: IntFilter<"customer_docs"> | number
    customer_id?: IntFilter<"customer_docs"> | number
    doc_type?: StringFilter<"customer_docs"> | string
    doc_url?: StringFilter<"customer_docs"> | string
  }

  export type customersCreateWithoutDocsInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    accounts?: accountsCreateNestedManyWithoutCustomerInput
    loans?: loansCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateWithoutDocsInput = {
    customer_id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    accounts?: accountsUncheckedCreateNestedManyWithoutCustomerInput
    loans?: loansUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersCreateOrConnectWithoutDocsInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutDocsInput, customersUncheckedCreateWithoutDocsInput>
  }

  export type customersUpsertWithoutDocsInput = {
    update: XOR<customersUpdateWithoutDocsInput, customersUncheckedUpdateWithoutDocsInput>
    create: XOR<customersCreateWithoutDocsInput, customersUncheckedCreateWithoutDocsInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutDocsInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutDocsInput, customersUncheckedUpdateWithoutDocsInput>
  }

  export type customersUpdateWithoutDocsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUpdateManyWithoutCustomerNestedInput
    loans?: loansUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateWithoutDocsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUncheckedUpdateManyWithoutCustomerNestedInput
    loans?: loansUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type accountsCreateWithoutBranchInput = {
    account_number?: string | null
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    customer: customersCreateNestedOneWithoutAccountsInput
    transactions?: transactionsCreateNestedManyWithoutAccountInput
  }

  export type accountsUncheckedCreateWithoutBranchInput = {
    account_id?: number
    account_number?: string | null
    customer_id: number
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    transactions?: transactionsUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountsCreateOrConnectWithoutBranchInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutBranchInput, accountsUncheckedCreateWithoutBranchInput>
  }

  export type accountsCreateManyBranchInputEnvelope = {
    data: accountsCreateManyBranchInput | accountsCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type accountsUpsertWithWhereUniqueWithoutBranchInput = {
    where: accountsWhereUniqueInput
    update: XOR<accountsUpdateWithoutBranchInput, accountsUncheckedUpdateWithoutBranchInput>
    create: XOR<accountsCreateWithoutBranchInput, accountsUncheckedCreateWithoutBranchInput>
  }

  export type accountsUpdateWithWhereUniqueWithoutBranchInput = {
    where: accountsWhereUniqueInput
    data: XOR<accountsUpdateWithoutBranchInput, accountsUncheckedUpdateWithoutBranchInput>
  }

  export type accountsUpdateManyWithWhereWithoutBranchInput = {
    where: accountsScalarWhereInput
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyWithoutBranchInput>
  }

  export type customersCreateWithoutAccountsInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    loans?: loansCreateNestedManyWithoutCustomerInput
    docs?: customer_docsCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateWithoutAccountsInput = {
    customer_id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    loans?: loansUncheckedCreateNestedManyWithoutCustomerInput
    docs?: customer_docsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersCreateOrConnectWithoutAccountsInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutAccountsInput, customersUncheckedCreateWithoutAccountsInput>
  }

  export type branchesCreateWithoutAccountsInput = {
    branch_name?: string | null
    city?: string | null
  }

  export type branchesUncheckedCreateWithoutAccountsInput = {
    branch_id?: number
    branch_name?: string | null
    city?: string | null
  }

  export type branchesCreateOrConnectWithoutAccountsInput = {
    where: branchesWhereUniqueInput
    create: XOR<branchesCreateWithoutAccountsInput, branchesUncheckedCreateWithoutAccountsInput>
  }

  export type transactionsCreateWithoutAccountInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    transaction_type?: string | null
    transaction_date?: Date | string
  }

  export type transactionsUncheckedCreateWithoutAccountInput = {
    transaction_id?: number
    amount?: Decimal | DecimalJsLike | number | string | null
    transaction_type?: string | null
    transaction_date?: Date | string
  }

  export type transactionsCreateOrConnectWithoutAccountInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput>
  }

  export type transactionsCreateManyAccountInputEnvelope = {
    data: transactionsCreateManyAccountInput | transactionsCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type customersUpsertWithoutAccountsInput = {
    update: XOR<customersUpdateWithoutAccountsInput, customersUncheckedUpdateWithoutAccountsInput>
    create: XOR<customersCreateWithoutAccountsInput, customersUncheckedCreateWithoutAccountsInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutAccountsInput, customersUncheckedUpdateWithoutAccountsInput>
  }

  export type customersUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    loans?: loansUpdateManyWithoutCustomerNestedInput
    docs?: customer_docsUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateWithoutAccountsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    loans?: loansUncheckedUpdateManyWithoutCustomerNestedInput
    docs?: customer_docsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type branchesUpsertWithoutAccountsInput = {
    update: XOR<branchesUpdateWithoutAccountsInput, branchesUncheckedUpdateWithoutAccountsInput>
    create: XOR<branchesCreateWithoutAccountsInput, branchesUncheckedCreateWithoutAccountsInput>
    where?: branchesWhereInput
  }

  export type branchesUpdateToOneWithWhereWithoutAccountsInput = {
    where?: branchesWhereInput
    data: XOR<branchesUpdateWithoutAccountsInput, branchesUncheckedUpdateWithoutAccountsInput>
  }

  export type branchesUpdateWithoutAccountsInput = {
    branch_name?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type branchesUncheckedUpdateWithoutAccountsInput = {
    branch_id?: IntFieldUpdateOperationsInput | number
    branch_name?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionsUpsertWithWhereUniqueWithoutAccountInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutAccountInput, transactionsUncheckedUpdateWithoutAccountInput>
    create: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutAccountInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutAccountInput, transactionsUncheckedUpdateWithoutAccountInput>
  }

  export type transactionsUpdateManyWithWhereWithoutAccountInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutAccountInput>
  }

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    OR?: transactionsScalarWhereInput[]
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    transaction_id?: IntFilter<"transactions"> | number
    account_id?: IntFilter<"transactions"> | number
    amount?: DecimalNullableFilter<"transactions"> | Decimal | DecimalJsLike | number | string | null
    transaction_type?: StringNullableFilter<"transactions"> | string | null
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
  }

  export type accountsCreateWithoutTransactionsInput = {
    account_number?: string | null
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
    customer: customersCreateNestedOneWithoutAccountsInput
    branch: branchesCreateNestedOneWithoutAccountsInput
  }

  export type accountsUncheckedCreateWithoutTransactionsInput = {
    account_id?: number
    account_number?: string | null
    customer_id: number
    branch_id: number
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type accountsCreateOrConnectWithoutTransactionsInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
  }

  export type accountsUpsertWithoutTransactionsInput = {
    update: XOR<accountsUpdateWithoutTransactionsInput, accountsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutTransactionsInput, accountsUncheckedUpdateWithoutTransactionsInput>
  }

  export type accountsUpdateWithoutTransactionsInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customersUpdateOneRequiredWithoutAccountsNestedInput
    branch?: branchesUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateWithoutTransactionsInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersCreateWithoutLoansInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    accounts?: accountsCreateNestedManyWithoutCustomerInput
    docs?: customer_docsCreateNestedManyWithoutCustomerInput
  }

  export type customersUncheckedCreateWithoutLoansInput = {
    customer_id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    accounts?: accountsUncheckedCreateNestedManyWithoutCustomerInput
    docs?: customer_docsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customersCreateOrConnectWithoutLoansInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutLoansInput, customersUncheckedCreateWithoutLoansInput>
  }

  export type loan_paymentsCreateWithoutLoanInput = {
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string
  }

  export type loan_paymentsUncheckedCreateWithoutLoanInput = {
    payment_id?: number
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string
  }

  export type loan_paymentsCreateOrConnectWithoutLoanInput = {
    where: loan_paymentsWhereUniqueInput
    create: XOR<loan_paymentsCreateWithoutLoanInput, loan_paymentsUncheckedCreateWithoutLoanInput>
  }

  export type loan_paymentsCreateManyLoanInputEnvelope = {
    data: loan_paymentsCreateManyLoanInput | loan_paymentsCreateManyLoanInput[]
    skipDuplicates?: boolean
  }

  export type customersUpsertWithoutLoansInput = {
    update: XOR<customersUpdateWithoutLoansInput, customersUncheckedUpdateWithoutLoansInput>
    create: XOR<customersCreateWithoutLoansInput, customersUncheckedCreateWithoutLoansInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutLoansInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutLoansInput, customersUncheckedUpdateWithoutLoansInput>
  }

  export type customersUpdateWithoutLoansInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUpdateManyWithoutCustomerNestedInput
    docs?: customer_docsUpdateManyWithoutCustomerNestedInput
  }

  export type customersUncheckedUpdateWithoutLoansInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUncheckedUpdateManyWithoutCustomerNestedInput
    docs?: customer_docsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type loan_paymentsUpsertWithWhereUniqueWithoutLoanInput = {
    where: loan_paymentsWhereUniqueInput
    update: XOR<loan_paymentsUpdateWithoutLoanInput, loan_paymentsUncheckedUpdateWithoutLoanInput>
    create: XOR<loan_paymentsCreateWithoutLoanInput, loan_paymentsUncheckedCreateWithoutLoanInput>
  }

  export type loan_paymentsUpdateWithWhereUniqueWithoutLoanInput = {
    where: loan_paymentsWhereUniqueInput
    data: XOR<loan_paymentsUpdateWithoutLoanInput, loan_paymentsUncheckedUpdateWithoutLoanInput>
  }

  export type loan_paymentsUpdateManyWithWhereWithoutLoanInput = {
    where: loan_paymentsScalarWhereInput
    data: XOR<loan_paymentsUpdateManyMutationInput, loan_paymentsUncheckedUpdateManyWithoutLoanInput>
  }

  export type loan_paymentsScalarWhereInput = {
    AND?: loan_paymentsScalarWhereInput | loan_paymentsScalarWhereInput[]
    OR?: loan_paymentsScalarWhereInput[]
    NOT?: loan_paymentsScalarWhereInput | loan_paymentsScalarWhereInput[]
    payment_id?: IntFilter<"loan_payments"> | number
    loan_id?: IntFilter<"loan_payments"> | number
    amount?: DecimalNullableFilter<"loan_payments"> | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeFilter<"loan_payments"> | Date | string
  }

  export type loansCreateWithoutPaymentsInput = {
    loan_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
    customer: customersCreateNestedOneWithoutLoansInput
  }

  export type loansUncheckedCreateWithoutPaymentsInput = {
    loan_id?: number
    customer_id: number
    loan_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type loansCreateOrConnectWithoutPaymentsInput = {
    where: loansWhereUniqueInput
    create: XOR<loansCreateWithoutPaymentsInput, loansUncheckedCreateWithoutPaymentsInput>
  }

  export type loansUpsertWithoutPaymentsInput = {
    update: XOR<loansUpdateWithoutPaymentsInput, loansUncheckedUpdateWithoutPaymentsInput>
    create: XOR<loansCreateWithoutPaymentsInput, loansUncheckedCreateWithoutPaymentsInput>
    where?: loansWhereInput
  }

  export type loansUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: loansWhereInput
    data: XOR<loansUpdateWithoutPaymentsInput, loansUncheckedUpdateWithoutPaymentsInput>
  }

  export type loansUpdateWithoutPaymentsInput = {
    loan_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customer?: customersUpdateOneRequiredWithoutLoansNestedInput
  }

  export type loansUncheckedUpdateWithoutPaymentsInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    loan_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type accountsCreateManyCustomerInput = {
    account_id?: number
    account_number?: string | null
    branch_id: number
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type loansCreateManyCustomerInput = {
    loan_id?: number
    loan_type?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    interest_rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type customer_docsCreateManyCustomerInput = {
    doc_id?: number
    doc_type: string
    doc_url: string
  }

  export type accountsUpdateWithoutCustomerInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: branchesUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateWithoutCustomerInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    branch_id?: IntFieldUpdateOperationsInput | number
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: transactionsUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateManyWithoutCustomerInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    branch_id?: IntFieldUpdateOperationsInput | number
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loansUpdateWithoutCustomerInput = {
    loan_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments?: loan_paymentsUpdateManyWithoutLoanNestedInput
  }

  export type loansUncheckedUpdateWithoutCustomerInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    loan_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payments?: loan_paymentsUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type loansUncheckedUpdateManyWithoutCustomerInput = {
    loan_id?: IntFieldUpdateOperationsInput | number
    loan_type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interest_rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type customer_docsUpdateWithoutCustomerInput = {
    doc_type?: StringFieldUpdateOperationsInput | string
    doc_url?: StringFieldUpdateOperationsInput | string
  }

  export type customer_docsUncheckedUpdateWithoutCustomerInput = {
    doc_id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    doc_url?: StringFieldUpdateOperationsInput | string
  }

  export type customer_docsUncheckedUpdateManyWithoutCustomerInput = {
    doc_id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    doc_url?: StringFieldUpdateOperationsInput | string
  }

  export type accountsCreateManyBranchInput = {
    account_id?: number
    account_number?: string | null
    customer_id: number
    account_type?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type accountsUpdateWithoutBranchInput = {
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: customersUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateWithoutBranchInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: transactionsUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateManyWithoutBranchInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    account_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionsCreateManyAccountInput = {
    transaction_id?: number
    amount?: Decimal | DecimalJsLike | number | string | null
    transaction_type?: string | null
    transaction_date?: Date | string
  }

  export type transactionsUpdateWithoutAccountInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateWithoutAccountInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutAccountInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loan_paymentsCreateManyLoanInput = {
    payment_id?: number
    amount?: Decimal | DecimalJsLike | number | string | null
    payment_date?: Date | string
  }

  export type loan_paymentsUpdateWithoutLoanInput = {
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loan_paymentsUncheckedUpdateWithoutLoanInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loan_paymentsUncheckedUpdateManyWithoutLoanInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}