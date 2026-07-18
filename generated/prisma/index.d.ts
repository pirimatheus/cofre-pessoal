
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Transacao
 * 
 */
export type Transacao = $Result.DefaultSelection<Prisma.$TransacaoPayload>
/**
 * Model Meta
 * 
 */
export type Meta = $Result.DefaultSelection<Prisma.$MetaPayload>
/**
 * Model LimiteOrcamento
 * 
 */
export type LimiteOrcamento = $Result.DefaultSelection<Prisma.$LimiteOrcamentoPayload>
/**
 * Model UsuarioPin
 * 
 */
export type UsuarioPin = $Result.DefaultSelection<Prisma.$UsuarioPinPayload>
/**
 * Model DispositivoConfiavel
 * 
 */
export type DispositivoConfiavel = $Result.DefaultSelection<Prisma.$DispositivoConfiavelPayload>
/**
 * Model LogLogin
 * 
 */
export type LogLogin = $Result.DefaultSelection<Prisma.$LogLoginPayload>
/**
 * Model ConsentimentoUsuario
 * 
 */
export type ConsentimentoUsuario = $Result.DefaultSelection<Prisma.$ConsentimentoUsuarioPayload>
/**
 * Model LayoutDashboard
 * 
 */
export type LayoutDashboard = $Result.DefaultSelection<Prisma.$LayoutDashboardPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>
/**
 * Model PushSubscription
 * 
 */
export type PushSubscription = $Result.DefaultSelection<Prisma.$PushSubscriptionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Transacaos
 * const transacaos = await prisma.transacao.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Transacaos
   * const transacaos = await prisma.transacao.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.transacao`: Exposes CRUD operations for the **Transacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transacaos
    * const transacaos = await prisma.transacao.findMany()
    * ```
    */
  get transacao(): Prisma.TransacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meta`: Exposes CRUD operations for the **Meta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metas
    * const metas = await prisma.meta.findMany()
    * ```
    */
  get meta(): Prisma.MetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.limiteOrcamento`: Exposes CRUD operations for the **LimiteOrcamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LimiteOrcamentos
    * const limiteOrcamentos = await prisma.limiteOrcamento.findMany()
    * ```
    */
  get limiteOrcamento(): Prisma.LimiteOrcamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioPin`: Exposes CRUD operations for the **UsuarioPin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioPins
    * const usuarioPins = await prisma.usuarioPin.findMany()
    * ```
    */
  get usuarioPin(): Prisma.UsuarioPinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispositivoConfiavel`: Exposes CRUD operations for the **DispositivoConfiavel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DispositivoConfiavels
    * const dispositivoConfiavels = await prisma.dispositivoConfiavel.findMany()
    * ```
    */
  get dispositivoConfiavel(): Prisma.DispositivoConfiavelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logLogin`: Exposes CRUD operations for the **LogLogin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogLogins
    * const logLogins = await prisma.logLogin.findMany()
    * ```
    */
  get logLogin(): Prisma.LogLoginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consentimentoUsuario`: Exposes CRUD operations for the **ConsentimentoUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsentimentoUsuarios
    * const consentimentoUsuarios = await prisma.consentimentoUsuario.findMany()
    * ```
    */
  get consentimentoUsuario(): Prisma.ConsentimentoUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layoutDashboard`: Exposes CRUD operations for the **LayoutDashboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LayoutDashboards
    * const layoutDashboards = await prisma.layoutDashboard.findMany()
    * ```
    */
  get layoutDashboard(): Prisma.LayoutDashboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pushSubscription`: Exposes CRUD operations for the **PushSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushSubscriptions
    * const pushSubscriptions = await prisma.pushSubscription.findMany()
    * ```
    */
  get pushSubscription(): Prisma.PushSubscriptionDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Transacao: 'Transacao',
    Meta: 'Meta',
    LimiteOrcamento: 'LimiteOrcamento',
    UsuarioPin: 'UsuarioPin',
    DispositivoConfiavel: 'DispositivoConfiavel',
    LogLogin: 'LogLogin',
    ConsentimentoUsuario: 'ConsentimentoUsuario',
    LayoutDashboard: 'LayoutDashboard',
    Notificacao: 'Notificacao',
    PushSubscription: 'PushSubscription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "transacao" | "meta" | "limiteOrcamento" | "usuarioPin" | "dispositivoConfiavel" | "logLogin" | "consentimentoUsuario" | "layoutDashboard" | "notificacao" | "pushSubscription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Transacao: {
        payload: Prisma.$TransacaoPayload<ExtArgs>
        fields: Prisma.TransacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findFirst: {
            args: Prisma.TransacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findMany: {
            args: Prisma.TransacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          create: {
            args: Prisma.TransacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          createMany: {
            args: Prisma.TransacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          delete: {
            args: Prisma.TransacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          update: {
            args: Prisma.TransacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          deleteMany: {
            args: Prisma.TransacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          upsert: {
            args: Prisma.TransacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          aggregate: {
            args: Prisma.TransacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransacao>
          }
          groupBy: {
            args: Prisma.TransacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransacaoCountArgs<ExtArgs>
            result: $Utils.Optional<TransacaoCountAggregateOutputType> | number
          }
        }
      }
      Meta: {
        payload: Prisma.$MetaPayload<ExtArgs>
        fields: Prisma.MetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findFirst: {
            args: Prisma.MetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findMany: {
            args: Prisma.MetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          create: {
            args: Prisma.MetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          createMany: {
            args: Prisma.MetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          delete: {
            args: Prisma.MetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          update: {
            args: Prisma.MetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          deleteMany: {
            args: Prisma.MetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          upsert: {
            args: Prisma.MetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          aggregate: {
            args: Prisma.MetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeta>
          }
          groupBy: {
            args: Prisma.MetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaCountArgs<ExtArgs>
            result: $Utils.Optional<MetaCountAggregateOutputType> | number
          }
        }
      }
      LimiteOrcamento: {
        payload: Prisma.$LimiteOrcamentoPayload<ExtArgs>
        fields: Prisma.LimiteOrcamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LimiteOrcamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LimiteOrcamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload>
          }
          findFirst: {
            args: Prisma.LimiteOrcamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LimiteOrcamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload>
          }
          findMany: {
            args: Prisma.LimiteOrcamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload>[]
          }
          create: {
            args: Prisma.LimiteOrcamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload>
          }
          createMany: {
            args: Prisma.LimiteOrcamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LimiteOrcamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload>[]
          }
          delete: {
            args: Prisma.LimiteOrcamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload>
          }
          update: {
            args: Prisma.LimiteOrcamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload>
          }
          deleteMany: {
            args: Prisma.LimiteOrcamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LimiteOrcamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LimiteOrcamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload>[]
          }
          upsert: {
            args: Prisma.LimiteOrcamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimiteOrcamentoPayload>
          }
          aggregate: {
            args: Prisma.LimiteOrcamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLimiteOrcamento>
          }
          groupBy: {
            args: Prisma.LimiteOrcamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LimiteOrcamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LimiteOrcamentoCountArgs<ExtArgs>
            result: $Utils.Optional<LimiteOrcamentoCountAggregateOutputType> | number
          }
        }
      }
      UsuarioPin: {
        payload: Prisma.$UsuarioPinPayload<ExtArgs>
        fields: Prisma.UsuarioPinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioPinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioPinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload>
          }
          findFirst: {
            args: Prisma.UsuarioPinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioPinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload>
          }
          findMany: {
            args: Prisma.UsuarioPinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload>[]
          }
          create: {
            args: Prisma.UsuarioPinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload>
          }
          createMany: {
            args: Prisma.UsuarioPinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioPinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload>[]
          }
          delete: {
            args: Prisma.UsuarioPinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload>
          }
          update: {
            args: Prisma.UsuarioPinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioPinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioPinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioPinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioPinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPinPayload>
          }
          aggregate: {
            args: Prisma.UsuarioPinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioPin>
          }
          groupBy: {
            args: Prisma.UsuarioPinGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioPinGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioPinCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioPinCountAggregateOutputType> | number
          }
        }
      }
      DispositivoConfiavel: {
        payload: Prisma.$DispositivoConfiavelPayload<ExtArgs>
        fields: Prisma.DispositivoConfiavelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispositivoConfiavelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispositivoConfiavelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload>
          }
          findFirst: {
            args: Prisma.DispositivoConfiavelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispositivoConfiavelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload>
          }
          findMany: {
            args: Prisma.DispositivoConfiavelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload>[]
          }
          create: {
            args: Prisma.DispositivoConfiavelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload>
          }
          createMany: {
            args: Prisma.DispositivoConfiavelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DispositivoConfiavelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload>[]
          }
          delete: {
            args: Prisma.DispositivoConfiavelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload>
          }
          update: {
            args: Prisma.DispositivoConfiavelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload>
          }
          deleteMany: {
            args: Prisma.DispositivoConfiavelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DispositivoConfiavelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DispositivoConfiavelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload>[]
          }
          upsert: {
            args: Prisma.DispositivoConfiavelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoConfiavelPayload>
          }
          aggregate: {
            args: Prisma.DispositivoConfiavelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispositivoConfiavel>
          }
          groupBy: {
            args: Prisma.DispositivoConfiavelGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispositivoConfiavelGroupByOutputType>[]
          }
          count: {
            args: Prisma.DispositivoConfiavelCountArgs<ExtArgs>
            result: $Utils.Optional<DispositivoConfiavelCountAggregateOutputType> | number
          }
        }
      }
      LogLogin: {
        payload: Prisma.$LogLoginPayload<ExtArgs>
        fields: Prisma.LogLoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogLoginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogLoginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload>
          }
          findFirst: {
            args: Prisma.LogLoginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogLoginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload>
          }
          findMany: {
            args: Prisma.LogLoginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload>[]
          }
          create: {
            args: Prisma.LogLoginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload>
          }
          createMany: {
            args: Prisma.LogLoginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogLoginCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload>[]
          }
          delete: {
            args: Prisma.LogLoginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload>
          }
          update: {
            args: Prisma.LogLoginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload>
          }
          deleteMany: {
            args: Prisma.LogLoginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogLoginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogLoginUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload>[]
          }
          upsert: {
            args: Prisma.LogLoginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogLoginPayload>
          }
          aggregate: {
            args: Prisma.LogLoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogLogin>
          }
          groupBy: {
            args: Prisma.LogLoginGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogLoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogLoginCountArgs<ExtArgs>
            result: $Utils.Optional<LogLoginCountAggregateOutputType> | number
          }
        }
      }
      ConsentimentoUsuario: {
        payload: Prisma.$ConsentimentoUsuarioPayload<ExtArgs>
        fields: Prisma.ConsentimentoUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsentimentoUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsentimentoUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload>
          }
          findFirst: {
            args: Prisma.ConsentimentoUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsentimentoUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload>
          }
          findMany: {
            args: Prisma.ConsentimentoUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload>[]
          }
          create: {
            args: Prisma.ConsentimentoUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload>
          }
          createMany: {
            args: Prisma.ConsentimentoUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsentimentoUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload>[]
          }
          delete: {
            args: Prisma.ConsentimentoUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload>
          }
          update: {
            args: Prisma.ConsentimentoUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.ConsentimentoUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsentimentoUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsentimentoUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.ConsentimentoUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentimentoUsuarioPayload>
          }
          aggregate: {
            args: Prisma.ConsentimentoUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsentimentoUsuario>
          }
          groupBy: {
            args: Prisma.ConsentimentoUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsentimentoUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsentimentoUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<ConsentimentoUsuarioCountAggregateOutputType> | number
          }
        }
      }
      LayoutDashboard: {
        payload: Prisma.$LayoutDashboardPayload<ExtArgs>
        fields: Prisma.LayoutDashboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayoutDashboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayoutDashboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload>
          }
          findFirst: {
            args: Prisma.LayoutDashboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayoutDashboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload>
          }
          findMany: {
            args: Prisma.LayoutDashboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload>[]
          }
          create: {
            args: Prisma.LayoutDashboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload>
          }
          createMany: {
            args: Prisma.LayoutDashboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayoutDashboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload>[]
          }
          delete: {
            args: Prisma.LayoutDashboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload>
          }
          update: {
            args: Prisma.LayoutDashboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload>
          }
          deleteMany: {
            args: Prisma.LayoutDashboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayoutDashboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LayoutDashboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload>[]
          }
          upsert: {
            args: Prisma.LayoutDashboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutDashboardPayload>
          }
          aggregate: {
            args: Prisma.LayoutDashboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayoutDashboard>
          }
          groupBy: {
            args: Prisma.LayoutDashboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayoutDashboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayoutDashboardCountArgs<ExtArgs>
            result: $Utils.Optional<LayoutDashboardCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
          }
        }
      }
      PushSubscription: {
        payload: Prisma.$PushSubscriptionPayload<ExtArgs>
        fields: Prisma.PushSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.PushSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findMany: {
            args: Prisma.PushSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          create: {
            args: Prisma.PushSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          createMany: {
            args: Prisma.PushSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PushSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.PushSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          update: {
            args: Prisma.PushSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.PushSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.PushSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.PushSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushSubscription>
          }
          groupBy: {
            args: Prisma.PushSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    transacao?: TransacaoOmit
    meta?: MetaOmit
    limiteOrcamento?: LimiteOrcamentoOmit
    usuarioPin?: UsuarioPinOmit
    dispositivoConfiavel?: DispositivoConfiavelOmit
    logLogin?: LogLoginOmit
    consentimentoUsuario?: ConsentimentoUsuarioOmit
    layoutDashboard?: LayoutDashboardOmit
    notificacao?: NotificacaoOmit
    pushSubscription?: PushSubscriptionOmit
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
   * Models
   */

  /**
   * Model Transacao
   */

  export type AggregateTransacao = {
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  export type TransacaoAvgAggregateOutputType = {
    id: number | null
  }

  export type TransacaoSumAggregateOutputType = {
    id: number | null
  }

  export type TransacaoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    data: Date | null
    tipo: string | null
    valor: string | null
    icone: string | null
    cor: string | null
    userId: string | null
  }

  export type TransacaoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    data: Date | null
    tipo: string | null
    valor: string | null
    icone: string | null
    cor: string | null
    userId: string | null
  }

  export type TransacaoCountAggregateOutputType = {
    id: number
    nome: number
    data: number
    tipo: number
    valor: number
    icone: number
    cor: number
    userId: number
    _all: number
  }


  export type TransacaoAvgAggregateInputType = {
    id?: true
  }

  export type TransacaoSumAggregateInputType = {
    id?: true
  }

  export type TransacaoMinAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    tipo?: true
    valor?: true
    icone?: true
    cor?: true
    userId?: true
  }

  export type TransacaoMaxAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    tipo?: true
    valor?: true
    icone?: true
    cor?: true
    userId?: true
  }

  export type TransacaoCountAggregateInputType = {
    id?: true
    nome?: true
    data?: true
    tipo?: true
    valor?: true
    icone?: true
    cor?: true
    userId?: true
    _all?: true
  }

  export type TransacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacao to aggregate.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transacaos
    **/
    _count?: true | TransacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransacaoMaxAggregateInputType
  }

  export type GetTransacaoAggregateType<T extends TransacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTransacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransacao[P]>
      : GetScalarType<T[P], AggregateTransacao[P]>
  }




  export type TransacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithAggregationInput | TransacaoOrderByWithAggregationInput[]
    by: TransacaoScalarFieldEnum[] | TransacaoScalarFieldEnum
    having?: TransacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransacaoCountAggregateInputType | true
    _avg?: TransacaoAvgAggregateInputType
    _sum?: TransacaoSumAggregateInputType
    _min?: TransacaoMinAggregateInputType
    _max?: TransacaoMaxAggregateInputType
  }

  export type TransacaoGroupByOutputType = {
    id: number
    nome: string
    data: Date
    tipo: string
    valor: string
    icone: string
    cor: string
    userId: string
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  type GetTransacaoGroupByPayload<T extends TransacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
            : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
        }
      >
    >


  export type TransacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data?: boolean
    tipo?: boolean
    valor?: boolean
    icone?: boolean
    cor?: boolean
    userId?: boolean
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data?: boolean
    tipo?: boolean
    valor?: boolean
    icone?: boolean
    cor?: boolean
    userId?: boolean
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    data?: boolean
    tipo?: boolean
    valor?: boolean
    icone?: boolean
    cor?: boolean
    userId?: boolean
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectScalar = {
    id?: boolean
    nome?: boolean
    data?: boolean
    tipo?: boolean
    valor?: boolean
    icone?: boolean
    cor?: boolean
    userId?: boolean
  }

  export type TransacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "data" | "tipo" | "valor" | "icone" | "cor" | "userId", ExtArgs["result"]["transacao"]>

  export type $TransacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transacao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      data: Date
      tipo: string
      valor: string
      icone: string
      cor: string
      userId: string
    }, ExtArgs["result"]["transacao"]>
    composites: {}
  }

  type TransacaoGetPayload<S extends boolean | null | undefined | TransacaoDefaultArgs> = $Result.GetResult<Prisma.$TransacaoPayload, S>

  type TransacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransacaoCountAggregateInputType | true
    }

  export interface TransacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transacao'], meta: { name: 'Transacao' } }
    /**
     * Find zero or one Transacao that matches the filter.
     * @param {TransacaoFindUniqueArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransacaoFindUniqueArgs>(args: SelectSubset<T, TransacaoFindUniqueArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransacaoFindUniqueOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, TransacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransacaoFindFirstArgs>(args?: SelectSubset<T, TransacaoFindFirstArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, TransacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transacaos
     * const transacaos = await prisma.transacao.findMany()
     * 
     * // Get first 10 Transacaos
     * const transacaos = await prisma.transacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transacaoWithIdOnly = await prisma.transacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransacaoFindManyArgs>(args?: SelectSubset<T, TransacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transacao.
     * @param {TransacaoCreateArgs} args - Arguments to create a Transacao.
     * @example
     * // Create one Transacao
     * const Transacao = await prisma.transacao.create({
     *   data: {
     *     // ... data to create a Transacao
     *   }
     * })
     * 
     */
    create<T extends TransacaoCreateArgs>(args: SelectSubset<T, TransacaoCreateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transacaos.
     * @param {TransacaoCreateManyArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransacaoCreateManyArgs>(args?: SelectSubset<T, TransacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transacaos and returns the data saved in the database.
     * @param {TransacaoCreateManyAndReturnArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transacaos and only return the `id`
     * const transacaoWithIdOnly = await prisma.transacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, TransacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transacao.
     * @param {TransacaoDeleteArgs} args - Arguments to delete one Transacao.
     * @example
     * // Delete one Transacao
     * const Transacao = await prisma.transacao.delete({
     *   where: {
     *     // ... filter to delete one Transacao
     *   }
     * })
     * 
     */
    delete<T extends TransacaoDeleteArgs>(args: SelectSubset<T, TransacaoDeleteArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transacao.
     * @param {TransacaoUpdateArgs} args - Arguments to update one Transacao.
     * @example
     * // Update one Transacao
     * const transacao = await prisma.transacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransacaoUpdateArgs>(args: SelectSubset<T, TransacaoUpdateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transacaos.
     * @param {TransacaoDeleteManyArgs} args - Arguments to filter Transacaos to delete.
     * @example
     * // Delete a few Transacaos
     * const { count } = await prisma.transacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransacaoDeleteManyArgs>(args?: SelectSubset<T, TransacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transacaos
     * const transacao = await prisma.transacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransacaoUpdateManyArgs>(args: SelectSubset<T, TransacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacaos and returns the data updated in the database.
     * @param {TransacaoUpdateManyAndReturnArgs} args - Arguments to update many Transacaos.
     * @example
     * // Update many Transacaos
     * const transacao = await prisma.transacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transacaos and only return the `id`
     * const transacaoWithIdOnly = await prisma.transacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, TransacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transacao.
     * @param {TransacaoUpsertArgs} args - Arguments to update or create a Transacao.
     * @example
     * // Update or create a Transacao
     * const transacao = await prisma.transacao.upsert({
     *   create: {
     *     // ... data to create a Transacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transacao we want to update
     *   }
     * })
     */
    upsert<T extends TransacaoUpsertArgs>(args: SelectSubset<T, TransacaoUpsertArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoCountArgs} args - Arguments to filter Transacaos to count.
     * @example
     * // Count the number of Transacaos
     * const count = await prisma.transacao.count({
     *   where: {
     *     // ... the filter for the Transacaos we want to count
     *   }
     * })
    **/
    count<T extends TransacaoCountArgs>(
      args?: Subset<T, TransacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransacaoAggregateArgs>(args: Subset<T, TransacaoAggregateArgs>): Prisma.PrismaPromise<GetTransacaoAggregateType<T>>

    /**
     * Group by Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoGroupByArgs} args - Group by arguments.
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
      T extends TransacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransacaoGroupByArgs['orderBy'] }
        : { orderBy?: TransacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transacao model
   */
  readonly fields: TransacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Transacao model
   */
  interface TransacaoFieldRefs {
    readonly id: FieldRef<"Transacao", 'Int'>
    readonly nome: FieldRef<"Transacao", 'String'>
    readonly data: FieldRef<"Transacao", 'DateTime'>
    readonly tipo: FieldRef<"Transacao", 'String'>
    readonly valor: FieldRef<"Transacao", 'String'>
    readonly icone: FieldRef<"Transacao", 'String'>
    readonly cor: FieldRef<"Transacao", 'String'>
    readonly userId: FieldRef<"Transacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transacao findUnique
   */
  export type TransacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findUniqueOrThrow
   */
  export type TransacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findFirst
   */
  export type TransacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findFirstOrThrow
   */
  export type TransacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findMany
   */
  export type TransacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Filter, which Transacaos to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao create
   */
  export type TransacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Transacao.
     */
    data: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
  }

  /**
   * Transacao createMany
   */
  export type TransacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transacao createManyAndReturn
   */
  export type TransacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transacao update
   */
  export type TransacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Transacao.
     */
    data: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
    /**
     * Choose, which Transacao to update.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao updateMany
   */
  export type TransacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transacaos.
     */
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyInput>
    /**
     * Filter which Transacaos to update
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to update.
     */
    limit?: number
  }

  /**
   * Transacao updateManyAndReturn
   */
  export type TransacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * The data used to update Transacaos.
     */
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyInput>
    /**
     * Filter which Transacaos to update
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to update.
     */
    limit?: number
  }

  /**
   * Transacao upsert
   */
  export type TransacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Transacao to update in case it exists.
     */
    where: TransacaoWhereUniqueInput
    /**
     * In case the Transacao found by the `where` argument doesn't exist, create a new Transacao with this data.
     */
    create: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
    /**
     * In case the Transacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
  }

  /**
   * Transacao delete
   */
  export type TransacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
    /**
     * Filter which Transacao to delete.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao deleteMany
   */
  export type TransacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacaos to delete
     */
    where?: TransacaoWhereInput
    /**
     * Limit how many Transacaos to delete.
     */
    limit?: number
  }

  /**
   * Transacao without action
   */
  export type TransacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transacao
     */
    omit?: TransacaoOmit<ExtArgs> | null
  }


  /**
   * Model Meta
   */

  export type AggregateMeta = {
    _count: MetaCountAggregateOutputType | null
    _avg: MetaAvgAggregateOutputType | null
    _sum: MetaSumAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  export type MetaAvgAggregateOutputType = {
    id: number | null
  }

  export type MetaSumAggregateOutputType = {
    id: number | null
  }

  export type MetaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    valorAtual: string | null
    valorObjetivo: string | null
    possuiPrazo: boolean | null
    dataLimite: Date | null
    icone: string | null
    dataCriacao: Date | null
    userId: string | null
  }

  export type MetaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    valorAtual: string | null
    valorObjetivo: string | null
    possuiPrazo: boolean | null
    dataLimite: Date | null
    icone: string | null
    dataCriacao: Date | null
    userId: string | null
  }

  export type MetaCountAggregateOutputType = {
    id: number
    nome: number
    valorAtual: number
    valorObjetivo: number
    possuiPrazo: number
    dataLimite: number
    icone: number
    dataCriacao: number
    userId: number
    _all: number
  }


  export type MetaAvgAggregateInputType = {
    id?: true
  }

  export type MetaSumAggregateInputType = {
    id?: true
  }

  export type MetaMinAggregateInputType = {
    id?: true
    nome?: true
    valorAtual?: true
    valorObjetivo?: true
    possuiPrazo?: true
    dataLimite?: true
    icone?: true
    dataCriacao?: true
    userId?: true
  }

  export type MetaMaxAggregateInputType = {
    id?: true
    nome?: true
    valorAtual?: true
    valorObjetivo?: true
    possuiPrazo?: true
    dataLimite?: true
    icone?: true
    dataCriacao?: true
    userId?: true
  }

  export type MetaCountAggregateInputType = {
    id?: true
    nome?: true
    valorAtual?: true
    valorObjetivo?: true
    possuiPrazo?: true
    dataLimite?: true
    icone?: true
    dataCriacao?: true
    userId?: true
    _all?: true
  }

  export type MetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meta to aggregate.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metas
    **/
    _count?: true | MetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaMaxAggregateInputType
  }

  export type GetMetaAggregateType<T extends MetaAggregateArgs> = {
        [P in keyof T & keyof AggregateMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeta[P]>
      : GetScalarType<T[P], AggregateMeta[P]>
  }




  export type MetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaWhereInput
    orderBy?: MetaOrderByWithAggregationInput | MetaOrderByWithAggregationInput[]
    by: MetaScalarFieldEnum[] | MetaScalarFieldEnum
    having?: MetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaCountAggregateInputType | true
    _avg?: MetaAvgAggregateInputType
    _sum?: MetaSumAggregateInputType
    _min?: MetaMinAggregateInputType
    _max?: MetaMaxAggregateInputType
  }

  export type MetaGroupByOutputType = {
    id: number
    nome: string
    valorAtual: string
    valorObjetivo: string
    possuiPrazo: boolean
    dataLimite: Date | null
    icone: string
    dataCriacao: Date
    userId: string
    _count: MetaCountAggregateOutputType | null
    _avg: MetaAvgAggregateOutputType | null
    _sum: MetaSumAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  type GetMetaGroupByPayload<T extends MetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaGroupByOutputType[P]>
            : GetScalarType<T[P], MetaGroupByOutputType[P]>
        }
      >
    >


  export type MetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    valorAtual?: boolean
    valorObjetivo?: boolean
    possuiPrazo?: boolean
    dataLimite?: boolean
    icone?: boolean
    dataCriacao?: boolean
    userId?: boolean
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    valorAtual?: boolean
    valorObjetivo?: boolean
    possuiPrazo?: boolean
    dataLimite?: boolean
    icone?: boolean
    dataCriacao?: boolean
    userId?: boolean
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    valorAtual?: boolean
    valorObjetivo?: boolean
    possuiPrazo?: boolean
    dataLimite?: boolean
    icone?: boolean
    dataCriacao?: boolean
    userId?: boolean
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectScalar = {
    id?: boolean
    nome?: boolean
    valorAtual?: boolean
    valorObjetivo?: boolean
    possuiPrazo?: boolean
    dataLimite?: boolean
    icone?: boolean
    dataCriacao?: boolean
    userId?: boolean
  }

  export type MetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "valorAtual" | "valorObjetivo" | "possuiPrazo" | "dataLimite" | "icone" | "dataCriacao" | "userId", ExtArgs["result"]["meta"]>

  export type $MetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      valorAtual: string
      valorObjetivo: string
      possuiPrazo: boolean
      dataLimite: Date | null
      icone: string
      dataCriacao: Date
      userId: string
    }, ExtArgs["result"]["meta"]>
    composites: {}
  }

  type MetaGetPayload<S extends boolean | null | undefined | MetaDefaultArgs> = $Result.GetResult<Prisma.$MetaPayload, S>

  type MetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaCountAggregateInputType | true
    }

  export interface MetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meta'], meta: { name: 'Meta' } }
    /**
     * Find zero or one Meta that matches the filter.
     * @param {MetaFindUniqueArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaFindUniqueArgs>(args: SelectSubset<T, MetaFindUniqueArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaFindUniqueOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaFindFirstArgs>(args?: SelectSubset<T, MetaFindFirstArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metas
     * const metas = await prisma.meta.findMany()
     * 
     * // Get first 10 Metas
     * const metas = await prisma.meta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaWithIdOnly = await prisma.meta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetaFindManyArgs>(args?: SelectSubset<T, MetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meta.
     * @param {MetaCreateArgs} args - Arguments to create a Meta.
     * @example
     * // Create one Meta
     * const Meta = await prisma.meta.create({
     *   data: {
     *     // ... data to create a Meta
     *   }
     * })
     * 
     */
    create<T extends MetaCreateArgs>(args: SelectSubset<T, MetaCreateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metas.
     * @param {MetaCreateManyArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaCreateManyArgs>(args?: SelectSubset<T, MetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metas and returns the data saved in the database.
     * @param {MetaCreateManyAndReturnArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metas and only return the `id`
     * const metaWithIdOnly = await prisma.meta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetaCreateManyAndReturnArgs>(args?: SelectSubset<T, MetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meta.
     * @param {MetaDeleteArgs} args - Arguments to delete one Meta.
     * @example
     * // Delete one Meta
     * const Meta = await prisma.meta.delete({
     *   where: {
     *     // ... filter to delete one Meta
     *   }
     * })
     * 
     */
    delete<T extends MetaDeleteArgs>(args: SelectSubset<T, MetaDeleteArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meta.
     * @param {MetaUpdateArgs} args - Arguments to update one Meta.
     * @example
     * // Update one Meta
     * const meta = await prisma.meta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaUpdateArgs>(args: SelectSubset<T, MetaUpdateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metas.
     * @param {MetaDeleteManyArgs} args - Arguments to filter Metas to delete.
     * @example
     * // Delete a few Metas
     * const { count } = await prisma.meta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaDeleteManyArgs>(args?: SelectSubset<T, MetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaUpdateManyArgs>(args: SelectSubset<T, MetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas and returns the data updated in the database.
     * @param {MetaUpdateManyAndReturnArgs} args - Arguments to update many Metas.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metas and only return the `id`
     * const metaWithIdOnly = await prisma.meta.updateManyAndReturn({
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
    updateManyAndReturn<T extends MetaUpdateManyAndReturnArgs>(args: SelectSubset<T, MetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meta.
     * @param {MetaUpsertArgs} args - Arguments to update or create a Meta.
     * @example
     * // Update or create a Meta
     * const meta = await prisma.meta.upsert({
     *   create: {
     *     // ... data to create a Meta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meta we want to update
     *   }
     * })
     */
    upsert<T extends MetaUpsertArgs>(args: SelectSubset<T, MetaUpsertArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaCountArgs} args - Arguments to filter Metas to count.
     * @example
     * // Count the number of Metas
     * const count = await prisma.meta.count({
     *   where: {
     *     // ... the filter for the Metas we want to count
     *   }
     * })
    **/
    count<T extends MetaCountArgs>(
      args?: Subset<T, MetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetaAggregateArgs>(args: Subset<T, MetaAggregateArgs>): Prisma.PrismaPromise<GetMetaAggregateType<T>>

    /**
     * Group by Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaGroupByArgs} args - Group by arguments.
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
      T extends MetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaGroupByArgs['orderBy'] }
        : { orderBy?: MetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meta model
   */
  readonly fields: MetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Meta model
   */
  interface MetaFieldRefs {
    readonly id: FieldRef<"Meta", 'Int'>
    readonly nome: FieldRef<"Meta", 'String'>
    readonly valorAtual: FieldRef<"Meta", 'String'>
    readonly valorObjetivo: FieldRef<"Meta", 'String'>
    readonly possuiPrazo: FieldRef<"Meta", 'Boolean'>
    readonly dataLimite: FieldRef<"Meta", 'DateTime'>
    readonly icone: FieldRef<"Meta", 'String'>
    readonly dataCriacao: FieldRef<"Meta", 'DateTime'>
    readonly userId: FieldRef<"Meta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Meta findUnique
   */
  export type MetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findUniqueOrThrow
   */
  export type MetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findFirst
   */
  export type MetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findFirstOrThrow
   */
  export type MetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findMany
   */
  export type MetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter, which Metas to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta create
   */
  export type MetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data needed to create a Meta.
     */
    data: XOR<MetaCreateInput, MetaUncheckedCreateInput>
  }

  /**
   * Meta createMany
   */
  export type MetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meta createManyAndReturn
   */
  export type MetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meta update
   */
  export type MetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data needed to update a Meta.
     */
    data: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
    /**
     * Choose, which Meta to update.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta updateMany
   */
  export type MetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
  }

  /**
   * Meta updateManyAndReturn
   */
  export type MetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
  }

  /**
   * Meta upsert
   */
  export type MetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The filter to search for the Meta to update in case it exists.
     */
    where: MetaWhereUniqueInput
    /**
     * In case the Meta found by the `where` argument doesn't exist, create a new Meta with this data.
     */
    create: XOR<MetaCreateInput, MetaUncheckedCreateInput>
    /**
     * In case the Meta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
  }

  /**
   * Meta delete
   */
  export type MetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Filter which Meta to delete.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta deleteMany
   */
  export type MetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metas to delete
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to delete.
     */
    limit?: number
  }

  /**
   * Meta without action
   */
  export type MetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
  }


  /**
   * Model LimiteOrcamento
   */

  export type AggregateLimiteOrcamento = {
    _count: LimiteOrcamentoCountAggregateOutputType | null
    _avg: LimiteOrcamentoAvgAggregateOutputType | null
    _sum: LimiteOrcamentoSumAggregateOutputType | null
    _min: LimiteOrcamentoMinAggregateOutputType | null
    _max: LimiteOrcamentoMaxAggregateOutputType | null
  }

  export type LimiteOrcamentoAvgAggregateOutputType = {
    id: number | null
  }

  export type LimiteOrcamentoSumAggregateOutputType = {
    id: number | null
  }

  export type LimiteOrcamentoMinAggregateOutputType = {
    id: number | null
    categoria: string | null
    limite: string | null
    cor: string | null
    userId: string | null
  }

  export type LimiteOrcamentoMaxAggregateOutputType = {
    id: number | null
    categoria: string | null
    limite: string | null
    cor: string | null
    userId: string | null
  }

  export type LimiteOrcamentoCountAggregateOutputType = {
    id: number
    categoria: number
    limite: number
    cor: number
    userId: number
    _all: number
  }


  export type LimiteOrcamentoAvgAggregateInputType = {
    id?: true
  }

  export type LimiteOrcamentoSumAggregateInputType = {
    id?: true
  }

  export type LimiteOrcamentoMinAggregateInputType = {
    id?: true
    categoria?: true
    limite?: true
    cor?: true
    userId?: true
  }

  export type LimiteOrcamentoMaxAggregateInputType = {
    id?: true
    categoria?: true
    limite?: true
    cor?: true
    userId?: true
  }

  export type LimiteOrcamentoCountAggregateInputType = {
    id?: true
    categoria?: true
    limite?: true
    cor?: true
    userId?: true
    _all?: true
  }

  export type LimiteOrcamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LimiteOrcamento to aggregate.
     */
    where?: LimiteOrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LimiteOrcamentos to fetch.
     */
    orderBy?: LimiteOrcamentoOrderByWithRelationInput | LimiteOrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LimiteOrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LimiteOrcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LimiteOrcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LimiteOrcamentos
    **/
    _count?: true | LimiteOrcamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LimiteOrcamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LimiteOrcamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LimiteOrcamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LimiteOrcamentoMaxAggregateInputType
  }

  export type GetLimiteOrcamentoAggregateType<T extends LimiteOrcamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateLimiteOrcamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLimiteOrcamento[P]>
      : GetScalarType<T[P], AggregateLimiteOrcamento[P]>
  }




  export type LimiteOrcamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LimiteOrcamentoWhereInput
    orderBy?: LimiteOrcamentoOrderByWithAggregationInput | LimiteOrcamentoOrderByWithAggregationInput[]
    by: LimiteOrcamentoScalarFieldEnum[] | LimiteOrcamentoScalarFieldEnum
    having?: LimiteOrcamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LimiteOrcamentoCountAggregateInputType | true
    _avg?: LimiteOrcamentoAvgAggregateInputType
    _sum?: LimiteOrcamentoSumAggregateInputType
    _min?: LimiteOrcamentoMinAggregateInputType
    _max?: LimiteOrcamentoMaxAggregateInputType
  }

  export type LimiteOrcamentoGroupByOutputType = {
    id: number
    categoria: string
    limite: string
    cor: string
    userId: string
    _count: LimiteOrcamentoCountAggregateOutputType | null
    _avg: LimiteOrcamentoAvgAggregateOutputType | null
    _sum: LimiteOrcamentoSumAggregateOutputType | null
    _min: LimiteOrcamentoMinAggregateOutputType | null
    _max: LimiteOrcamentoMaxAggregateOutputType | null
  }

  type GetLimiteOrcamentoGroupByPayload<T extends LimiteOrcamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LimiteOrcamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LimiteOrcamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LimiteOrcamentoGroupByOutputType[P]>
            : GetScalarType<T[P], LimiteOrcamentoGroupByOutputType[P]>
        }
      >
    >


  export type LimiteOrcamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoria?: boolean
    limite?: boolean
    cor?: boolean
    userId?: boolean
  }, ExtArgs["result"]["limiteOrcamento"]>

  export type LimiteOrcamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoria?: boolean
    limite?: boolean
    cor?: boolean
    userId?: boolean
  }, ExtArgs["result"]["limiteOrcamento"]>

  export type LimiteOrcamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoria?: boolean
    limite?: boolean
    cor?: boolean
    userId?: boolean
  }, ExtArgs["result"]["limiteOrcamento"]>

  export type LimiteOrcamentoSelectScalar = {
    id?: boolean
    categoria?: boolean
    limite?: boolean
    cor?: boolean
    userId?: boolean
  }

  export type LimiteOrcamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoria" | "limite" | "cor" | "userId", ExtArgs["result"]["limiteOrcamento"]>

  export type $LimiteOrcamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LimiteOrcamento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoria: string
      limite: string
      cor: string
      userId: string
    }, ExtArgs["result"]["limiteOrcamento"]>
    composites: {}
  }

  type LimiteOrcamentoGetPayload<S extends boolean | null | undefined | LimiteOrcamentoDefaultArgs> = $Result.GetResult<Prisma.$LimiteOrcamentoPayload, S>

  type LimiteOrcamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LimiteOrcamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LimiteOrcamentoCountAggregateInputType | true
    }

  export interface LimiteOrcamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LimiteOrcamento'], meta: { name: 'LimiteOrcamento' } }
    /**
     * Find zero or one LimiteOrcamento that matches the filter.
     * @param {LimiteOrcamentoFindUniqueArgs} args - Arguments to find a LimiteOrcamento
     * @example
     * // Get one LimiteOrcamento
     * const limiteOrcamento = await prisma.limiteOrcamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LimiteOrcamentoFindUniqueArgs>(args: SelectSubset<T, LimiteOrcamentoFindUniqueArgs<ExtArgs>>): Prisma__LimiteOrcamentoClient<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LimiteOrcamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LimiteOrcamentoFindUniqueOrThrowArgs} args - Arguments to find a LimiteOrcamento
     * @example
     * // Get one LimiteOrcamento
     * const limiteOrcamento = await prisma.limiteOrcamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LimiteOrcamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, LimiteOrcamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LimiteOrcamentoClient<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LimiteOrcamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimiteOrcamentoFindFirstArgs} args - Arguments to find a LimiteOrcamento
     * @example
     * // Get one LimiteOrcamento
     * const limiteOrcamento = await prisma.limiteOrcamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LimiteOrcamentoFindFirstArgs>(args?: SelectSubset<T, LimiteOrcamentoFindFirstArgs<ExtArgs>>): Prisma__LimiteOrcamentoClient<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LimiteOrcamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimiteOrcamentoFindFirstOrThrowArgs} args - Arguments to find a LimiteOrcamento
     * @example
     * // Get one LimiteOrcamento
     * const limiteOrcamento = await prisma.limiteOrcamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LimiteOrcamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, LimiteOrcamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LimiteOrcamentoClient<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LimiteOrcamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimiteOrcamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LimiteOrcamentos
     * const limiteOrcamentos = await prisma.limiteOrcamento.findMany()
     * 
     * // Get first 10 LimiteOrcamentos
     * const limiteOrcamentos = await prisma.limiteOrcamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const limiteOrcamentoWithIdOnly = await prisma.limiteOrcamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LimiteOrcamentoFindManyArgs>(args?: SelectSubset<T, LimiteOrcamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LimiteOrcamento.
     * @param {LimiteOrcamentoCreateArgs} args - Arguments to create a LimiteOrcamento.
     * @example
     * // Create one LimiteOrcamento
     * const LimiteOrcamento = await prisma.limiteOrcamento.create({
     *   data: {
     *     // ... data to create a LimiteOrcamento
     *   }
     * })
     * 
     */
    create<T extends LimiteOrcamentoCreateArgs>(args: SelectSubset<T, LimiteOrcamentoCreateArgs<ExtArgs>>): Prisma__LimiteOrcamentoClient<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LimiteOrcamentos.
     * @param {LimiteOrcamentoCreateManyArgs} args - Arguments to create many LimiteOrcamentos.
     * @example
     * // Create many LimiteOrcamentos
     * const limiteOrcamento = await prisma.limiteOrcamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LimiteOrcamentoCreateManyArgs>(args?: SelectSubset<T, LimiteOrcamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LimiteOrcamentos and returns the data saved in the database.
     * @param {LimiteOrcamentoCreateManyAndReturnArgs} args - Arguments to create many LimiteOrcamentos.
     * @example
     * // Create many LimiteOrcamentos
     * const limiteOrcamento = await prisma.limiteOrcamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LimiteOrcamentos and only return the `id`
     * const limiteOrcamentoWithIdOnly = await prisma.limiteOrcamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LimiteOrcamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, LimiteOrcamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LimiteOrcamento.
     * @param {LimiteOrcamentoDeleteArgs} args - Arguments to delete one LimiteOrcamento.
     * @example
     * // Delete one LimiteOrcamento
     * const LimiteOrcamento = await prisma.limiteOrcamento.delete({
     *   where: {
     *     // ... filter to delete one LimiteOrcamento
     *   }
     * })
     * 
     */
    delete<T extends LimiteOrcamentoDeleteArgs>(args: SelectSubset<T, LimiteOrcamentoDeleteArgs<ExtArgs>>): Prisma__LimiteOrcamentoClient<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LimiteOrcamento.
     * @param {LimiteOrcamentoUpdateArgs} args - Arguments to update one LimiteOrcamento.
     * @example
     * // Update one LimiteOrcamento
     * const limiteOrcamento = await prisma.limiteOrcamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LimiteOrcamentoUpdateArgs>(args: SelectSubset<T, LimiteOrcamentoUpdateArgs<ExtArgs>>): Prisma__LimiteOrcamentoClient<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LimiteOrcamentos.
     * @param {LimiteOrcamentoDeleteManyArgs} args - Arguments to filter LimiteOrcamentos to delete.
     * @example
     * // Delete a few LimiteOrcamentos
     * const { count } = await prisma.limiteOrcamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LimiteOrcamentoDeleteManyArgs>(args?: SelectSubset<T, LimiteOrcamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LimiteOrcamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimiteOrcamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LimiteOrcamentos
     * const limiteOrcamento = await prisma.limiteOrcamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LimiteOrcamentoUpdateManyArgs>(args: SelectSubset<T, LimiteOrcamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LimiteOrcamentos and returns the data updated in the database.
     * @param {LimiteOrcamentoUpdateManyAndReturnArgs} args - Arguments to update many LimiteOrcamentos.
     * @example
     * // Update many LimiteOrcamentos
     * const limiteOrcamento = await prisma.limiteOrcamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LimiteOrcamentos and only return the `id`
     * const limiteOrcamentoWithIdOnly = await prisma.limiteOrcamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends LimiteOrcamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, LimiteOrcamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LimiteOrcamento.
     * @param {LimiteOrcamentoUpsertArgs} args - Arguments to update or create a LimiteOrcamento.
     * @example
     * // Update or create a LimiteOrcamento
     * const limiteOrcamento = await prisma.limiteOrcamento.upsert({
     *   create: {
     *     // ... data to create a LimiteOrcamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LimiteOrcamento we want to update
     *   }
     * })
     */
    upsert<T extends LimiteOrcamentoUpsertArgs>(args: SelectSubset<T, LimiteOrcamentoUpsertArgs<ExtArgs>>): Prisma__LimiteOrcamentoClient<$Result.GetResult<Prisma.$LimiteOrcamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LimiteOrcamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimiteOrcamentoCountArgs} args - Arguments to filter LimiteOrcamentos to count.
     * @example
     * // Count the number of LimiteOrcamentos
     * const count = await prisma.limiteOrcamento.count({
     *   where: {
     *     // ... the filter for the LimiteOrcamentos we want to count
     *   }
     * })
    **/
    count<T extends LimiteOrcamentoCountArgs>(
      args?: Subset<T, LimiteOrcamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LimiteOrcamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LimiteOrcamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimiteOrcamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LimiteOrcamentoAggregateArgs>(args: Subset<T, LimiteOrcamentoAggregateArgs>): Prisma.PrismaPromise<GetLimiteOrcamentoAggregateType<T>>

    /**
     * Group by LimiteOrcamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimiteOrcamentoGroupByArgs} args - Group by arguments.
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
      T extends LimiteOrcamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LimiteOrcamentoGroupByArgs['orderBy'] }
        : { orderBy?: LimiteOrcamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LimiteOrcamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLimiteOrcamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LimiteOrcamento model
   */
  readonly fields: LimiteOrcamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LimiteOrcamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LimiteOrcamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LimiteOrcamento model
   */
  interface LimiteOrcamentoFieldRefs {
    readonly id: FieldRef<"LimiteOrcamento", 'Int'>
    readonly categoria: FieldRef<"LimiteOrcamento", 'String'>
    readonly limite: FieldRef<"LimiteOrcamento", 'String'>
    readonly cor: FieldRef<"LimiteOrcamento", 'String'>
    readonly userId: FieldRef<"LimiteOrcamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LimiteOrcamento findUnique
   */
  export type LimiteOrcamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * Filter, which LimiteOrcamento to fetch.
     */
    where: LimiteOrcamentoWhereUniqueInput
  }

  /**
   * LimiteOrcamento findUniqueOrThrow
   */
  export type LimiteOrcamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * Filter, which LimiteOrcamento to fetch.
     */
    where: LimiteOrcamentoWhereUniqueInput
  }

  /**
   * LimiteOrcamento findFirst
   */
  export type LimiteOrcamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * Filter, which LimiteOrcamento to fetch.
     */
    where?: LimiteOrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LimiteOrcamentos to fetch.
     */
    orderBy?: LimiteOrcamentoOrderByWithRelationInput | LimiteOrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LimiteOrcamentos.
     */
    cursor?: LimiteOrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LimiteOrcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LimiteOrcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LimiteOrcamentos.
     */
    distinct?: LimiteOrcamentoScalarFieldEnum | LimiteOrcamentoScalarFieldEnum[]
  }

  /**
   * LimiteOrcamento findFirstOrThrow
   */
  export type LimiteOrcamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * Filter, which LimiteOrcamento to fetch.
     */
    where?: LimiteOrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LimiteOrcamentos to fetch.
     */
    orderBy?: LimiteOrcamentoOrderByWithRelationInput | LimiteOrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LimiteOrcamentos.
     */
    cursor?: LimiteOrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LimiteOrcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LimiteOrcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LimiteOrcamentos.
     */
    distinct?: LimiteOrcamentoScalarFieldEnum | LimiteOrcamentoScalarFieldEnum[]
  }

  /**
   * LimiteOrcamento findMany
   */
  export type LimiteOrcamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * Filter, which LimiteOrcamentos to fetch.
     */
    where?: LimiteOrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LimiteOrcamentos to fetch.
     */
    orderBy?: LimiteOrcamentoOrderByWithRelationInput | LimiteOrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LimiteOrcamentos.
     */
    cursor?: LimiteOrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LimiteOrcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LimiteOrcamentos.
     */
    skip?: number
    distinct?: LimiteOrcamentoScalarFieldEnum | LimiteOrcamentoScalarFieldEnum[]
  }

  /**
   * LimiteOrcamento create
   */
  export type LimiteOrcamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * The data needed to create a LimiteOrcamento.
     */
    data: XOR<LimiteOrcamentoCreateInput, LimiteOrcamentoUncheckedCreateInput>
  }

  /**
   * LimiteOrcamento createMany
   */
  export type LimiteOrcamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LimiteOrcamentos.
     */
    data: LimiteOrcamentoCreateManyInput | LimiteOrcamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LimiteOrcamento createManyAndReturn
   */
  export type LimiteOrcamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * The data used to create many LimiteOrcamentos.
     */
    data: LimiteOrcamentoCreateManyInput | LimiteOrcamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LimiteOrcamento update
   */
  export type LimiteOrcamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * The data needed to update a LimiteOrcamento.
     */
    data: XOR<LimiteOrcamentoUpdateInput, LimiteOrcamentoUncheckedUpdateInput>
    /**
     * Choose, which LimiteOrcamento to update.
     */
    where: LimiteOrcamentoWhereUniqueInput
  }

  /**
   * LimiteOrcamento updateMany
   */
  export type LimiteOrcamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LimiteOrcamentos.
     */
    data: XOR<LimiteOrcamentoUpdateManyMutationInput, LimiteOrcamentoUncheckedUpdateManyInput>
    /**
     * Filter which LimiteOrcamentos to update
     */
    where?: LimiteOrcamentoWhereInput
    /**
     * Limit how many LimiteOrcamentos to update.
     */
    limit?: number
  }

  /**
   * LimiteOrcamento updateManyAndReturn
   */
  export type LimiteOrcamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * The data used to update LimiteOrcamentos.
     */
    data: XOR<LimiteOrcamentoUpdateManyMutationInput, LimiteOrcamentoUncheckedUpdateManyInput>
    /**
     * Filter which LimiteOrcamentos to update
     */
    where?: LimiteOrcamentoWhereInput
    /**
     * Limit how many LimiteOrcamentos to update.
     */
    limit?: number
  }

  /**
   * LimiteOrcamento upsert
   */
  export type LimiteOrcamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * The filter to search for the LimiteOrcamento to update in case it exists.
     */
    where: LimiteOrcamentoWhereUniqueInput
    /**
     * In case the LimiteOrcamento found by the `where` argument doesn't exist, create a new LimiteOrcamento with this data.
     */
    create: XOR<LimiteOrcamentoCreateInput, LimiteOrcamentoUncheckedCreateInput>
    /**
     * In case the LimiteOrcamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LimiteOrcamentoUpdateInput, LimiteOrcamentoUncheckedUpdateInput>
  }

  /**
   * LimiteOrcamento delete
   */
  export type LimiteOrcamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
    /**
     * Filter which LimiteOrcamento to delete.
     */
    where: LimiteOrcamentoWhereUniqueInput
  }

  /**
   * LimiteOrcamento deleteMany
   */
  export type LimiteOrcamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LimiteOrcamentos to delete
     */
    where?: LimiteOrcamentoWhereInput
    /**
     * Limit how many LimiteOrcamentos to delete.
     */
    limit?: number
  }

  /**
   * LimiteOrcamento without action
   */
  export type LimiteOrcamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimiteOrcamento
     */
    select?: LimiteOrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimiteOrcamento
     */
    omit?: LimiteOrcamentoOmit<ExtArgs> | null
  }


  /**
   * Model UsuarioPin
   */

  export type AggregateUsuarioPin = {
    _count: UsuarioPinCountAggregateOutputType | null
    _avg: UsuarioPinAvgAggregateOutputType | null
    _sum: UsuarioPinSumAggregateOutputType | null
    _min: UsuarioPinMinAggregateOutputType | null
    _max: UsuarioPinMaxAggregateOutputType | null
  }

  export type UsuarioPinAvgAggregateOutputType = {
    id: number | null
    tentativas: number | null
  }

  export type UsuarioPinSumAggregateOutputType = {
    id: number | null
    tentativas: number | null
  }

  export type UsuarioPinMinAggregateOutputType = {
    id: number | null
    userId: string | null
    pinHash: string | null
    tentativas: number | null
    bloqueadoAte: Date | null
    criadoEm: Date | null
  }

  export type UsuarioPinMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    pinHash: string | null
    tentativas: number | null
    bloqueadoAte: Date | null
    criadoEm: Date | null
  }

  export type UsuarioPinCountAggregateOutputType = {
    id: number
    userId: number
    pinHash: number
    tentativas: number
    bloqueadoAte: number
    criadoEm: number
    _all: number
  }


  export type UsuarioPinAvgAggregateInputType = {
    id?: true
    tentativas?: true
  }

  export type UsuarioPinSumAggregateInputType = {
    id?: true
    tentativas?: true
  }

  export type UsuarioPinMinAggregateInputType = {
    id?: true
    userId?: true
    pinHash?: true
    tentativas?: true
    bloqueadoAte?: true
    criadoEm?: true
  }

  export type UsuarioPinMaxAggregateInputType = {
    id?: true
    userId?: true
    pinHash?: true
    tentativas?: true
    bloqueadoAte?: true
    criadoEm?: true
  }

  export type UsuarioPinCountAggregateInputType = {
    id?: true
    userId?: true
    pinHash?: true
    tentativas?: true
    bloqueadoAte?: true
    criadoEm?: true
    _all?: true
  }

  export type UsuarioPinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioPin to aggregate.
     */
    where?: UsuarioPinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPins to fetch.
     */
    orderBy?: UsuarioPinOrderByWithRelationInput | UsuarioPinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioPinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioPins
    **/
    _count?: true | UsuarioPinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioPinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioPinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioPinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioPinMaxAggregateInputType
  }

  export type GetUsuarioPinAggregateType<T extends UsuarioPinAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioPin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioPin[P]>
      : GetScalarType<T[P], AggregateUsuarioPin[P]>
  }




  export type UsuarioPinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioPinWhereInput
    orderBy?: UsuarioPinOrderByWithAggregationInput | UsuarioPinOrderByWithAggregationInput[]
    by: UsuarioPinScalarFieldEnum[] | UsuarioPinScalarFieldEnum
    having?: UsuarioPinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioPinCountAggregateInputType | true
    _avg?: UsuarioPinAvgAggregateInputType
    _sum?: UsuarioPinSumAggregateInputType
    _min?: UsuarioPinMinAggregateInputType
    _max?: UsuarioPinMaxAggregateInputType
  }

  export type UsuarioPinGroupByOutputType = {
    id: number
    userId: string
    pinHash: string
    tentativas: number
    bloqueadoAte: Date | null
    criadoEm: Date
    _count: UsuarioPinCountAggregateOutputType | null
    _avg: UsuarioPinAvgAggregateOutputType | null
    _sum: UsuarioPinSumAggregateOutputType | null
    _min: UsuarioPinMinAggregateOutputType | null
    _max: UsuarioPinMaxAggregateOutputType | null
  }

  type GetUsuarioPinGroupByPayload<T extends UsuarioPinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioPinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioPinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioPinGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioPinGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioPinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pinHash?: boolean
    tentativas?: boolean
    bloqueadoAte?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuarioPin"]>

  export type UsuarioPinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pinHash?: boolean
    tentativas?: boolean
    bloqueadoAte?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuarioPin"]>

  export type UsuarioPinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pinHash?: boolean
    tentativas?: boolean
    bloqueadoAte?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuarioPin"]>

  export type UsuarioPinSelectScalar = {
    id?: boolean
    userId?: boolean
    pinHash?: boolean
    tentativas?: boolean
    bloqueadoAte?: boolean
    criadoEm?: boolean
  }

  export type UsuarioPinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "pinHash" | "tentativas" | "bloqueadoAte" | "criadoEm", ExtArgs["result"]["usuarioPin"]>

  export type $UsuarioPinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioPin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      pinHash: string
      tentativas: number
      bloqueadoAte: Date | null
      criadoEm: Date
    }, ExtArgs["result"]["usuarioPin"]>
    composites: {}
  }

  type UsuarioPinGetPayload<S extends boolean | null | undefined | UsuarioPinDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPinPayload, S>

  type UsuarioPinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioPinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioPinCountAggregateInputType | true
    }

  export interface UsuarioPinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioPin'], meta: { name: 'UsuarioPin' } }
    /**
     * Find zero or one UsuarioPin that matches the filter.
     * @param {UsuarioPinFindUniqueArgs} args - Arguments to find a UsuarioPin
     * @example
     * // Get one UsuarioPin
     * const usuarioPin = await prisma.usuarioPin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioPinFindUniqueArgs>(args: SelectSubset<T, UsuarioPinFindUniqueArgs<ExtArgs>>): Prisma__UsuarioPinClient<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioPin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioPinFindUniqueOrThrowArgs} args - Arguments to find a UsuarioPin
     * @example
     * // Get one UsuarioPin
     * const usuarioPin = await prisma.usuarioPin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioPinFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioPinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioPinClient<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioPin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPinFindFirstArgs} args - Arguments to find a UsuarioPin
     * @example
     * // Get one UsuarioPin
     * const usuarioPin = await prisma.usuarioPin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioPinFindFirstArgs>(args?: SelectSubset<T, UsuarioPinFindFirstArgs<ExtArgs>>): Prisma__UsuarioPinClient<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioPin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPinFindFirstOrThrowArgs} args - Arguments to find a UsuarioPin
     * @example
     * // Get one UsuarioPin
     * const usuarioPin = await prisma.usuarioPin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioPinFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioPinFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioPinClient<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioPins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioPins
     * const usuarioPins = await prisma.usuarioPin.findMany()
     * 
     * // Get first 10 UsuarioPins
     * const usuarioPins = await prisma.usuarioPin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioPinWithIdOnly = await prisma.usuarioPin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioPinFindManyArgs>(args?: SelectSubset<T, UsuarioPinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioPin.
     * @param {UsuarioPinCreateArgs} args - Arguments to create a UsuarioPin.
     * @example
     * // Create one UsuarioPin
     * const UsuarioPin = await prisma.usuarioPin.create({
     *   data: {
     *     // ... data to create a UsuarioPin
     *   }
     * })
     * 
     */
    create<T extends UsuarioPinCreateArgs>(args: SelectSubset<T, UsuarioPinCreateArgs<ExtArgs>>): Prisma__UsuarioPinClient<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioPins.
     * @param {UsuarioPinCreateManyArgs} args - Arguments to create many UsuarioPins.
     * @example
     * // Create many UsuarioPins
     * const usuarioPin = await prisma.usuarioPin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioPinCreateManyArgs>(args?: SelectSubset<T, UsuarioPinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioPins and returns the data saved in the database.
     * @param {UsuarioPinCreateManyAndReturnArgs} args - Arguments to create many UsuarioPins.
     * @example
     * // Create many UsuarioPins
     * const usuarioPin = await prisma.usuarioPin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioPins and only return the `id`
     * const usuarioPinWithIdOnly = await prisma.usuarioPin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioPinCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioPinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioPin.
     * @param {UsuarioPinDeleteArgs} args - Arguments to delete one UsuarioPin.
     * @example
     * // Delete one UsuarioPin
     * const UsuarioPin = await prisma.usuarioPin.delete({
     *   where: {
     *     // ... filter to delete one UsuarioPin
     *   }
     * })
     * 
     */
    delete<T extends UsuarioPinDeleteArgs>(args: SelectSubset<T, UsuarioPinDeleteArgs<ExtArgs>>): Prisma__UsuarioPinClient<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioPin.
     * @param {UsuarioPinUpdateArgs} args - Arguments to update one UsuarioPin.
     * @example
     * // Update one UsuarioPin
     * const usuarioPin = await prisma.usuarioPin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioPinUpdateArgs>(args: SelectSubset<T, UsuarioPinUpdateArgs<ExtArgs>>): Prisma__UsuarioPinClient<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioPins.
     * @param {UsuarioPinDeleteManyArgs} args - Arguments to filter UsuarioPins to delete.
     * @example
     * // Delete a few UsuarioPins
     * const { count } = await prisma.usuarioPin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioPinDeleteManyArgs>(args?: SelectSubset<T, UsuarioPinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioPins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioPins
     * const usuarioPin = await prisma.usuarioPin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioPinUpdateManyArgs>(args: SelectSubset<T, UsuarioPinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioPins and returns the data updated in the database.
     * @param {UsuarioPinUpdateManyAndReturnArgs} args - Arguments to update many UsuarioPins.
     * @example
     * // Update many UsuarioPins
     * const usuarioPin = await prisma.usuarioPin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioPins and only return the `id`
     * const usuarioPinWithIdOnly = await prisma.usuarioPin.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioPinUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioPinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioPin.
     * @param {UsuarioPinUpsertArgs} args - Arguments to update or create a UsuarioPin.
     * @example
     * // Update or create a UsuarioPin
     * const usuarioPin = await prisma.usuarioPin.upsert({
     *   create: {
     *     // ... data to create a UsuarioPin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioPin we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioPinUpsertArgs>(args: SelectSubset<T, UsuarioPinUpsertArgs<ExtArgs>>): Prisma__UsuarioPinClient<$Result.GetResult<Prisma.$UsuarioPinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioPins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPinCountArgs} args - Arguments to filter UsuarioPins to count.
     * @example
     * // Count the number of UsuarioPins
     * const count = await prisma.usuarioPin.count({
     *   where: {
     *     // ... the filter for the UsuarioPins we want to count
     *   }
     * })
    **/
    count<T extends UsuarioPinCountArgs>(
      args?: Subset<T, UsuarioPinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioPinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioPin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioPinAggregateArgs>(args: Subset<T, UsuarioPinAggregateArgs>): Prisma.PrismaPromise<GetUsuarioPinAggregateType<T>>

    /**
     * Group by UsuarioPin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPinGroupByArgs} args - Group by arguments.
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
      T extends UsuarioPinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioPinGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioPinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioPinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioPinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioPin model
   */
  readonly fields: UsuarioPinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioPin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioPinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UsuarioPin model
   */
  interface UsuarioPinFieldRefs {
    readonly id: FieldRef<"UsuarioPin", 'Int'>
    readonly userId: FieldRef<"UsuarioPin", 'String'>
    readonly pinHash: FieldRef<"UsuarioPin", 'String'>
    readonly tentativas: FieldRef<"UsuarioPin", 'Int'>
    readonly bloqueadoAte: FieldRef<"UsuarioPin", 'DateTime'>
    readonly criadoEm: FieldRef<"UsuarioPin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioPin findUnique
   */
  export type UsuarioPinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * Filter, which UsuarioPin to fetch.
     */
    where: UsuarioPinWhereUniqueInput
  }

  /**
   * UsuarioPin findUniqueOrThrow
   */
  export type UsuarioPinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * Filter, which UsuarioPin to fetch.
     */
    where: UsuarioPinWhereUniqueInput
  }

  /**
   * UsuarioPin findFirst
   */
  export type UsuarioPinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * Filter, which UsuarioPin to fetch.
     */
    where?: UsuarioPinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPins to fetch.
     */
    orderBy?: UsuarioPinOrderByWithRelationInput | UsuarioPinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioPins.
     */
    cursor?: UsuarioPinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioPins.
     */
    distinct?: UsuarioPinScalarFieldEnum | UsuarioPinScalarFieldEnum[]
  }

  /**
   * UsuarioPin findFirstOrThrow
   */
  export type UsuarioPinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * Filter, which UsuarioPin to fetch.
     */
    where?: UsuarioPinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPins to fetch.
     */
    orderBy?: UsuarioPinOrderByWithRelationInput | UsuarioPinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioPins.
     */
    cursor?: UsuarioPinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioPins.
     */
    distinct?: UsuarioPinScalarFieldEnum | UsuarioPinScalarFieldEnum[]
  }

  /**
   * UsuarioPin findMany
   */
  export type UsuarioPinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * Filter, which UsuarioPins to fetch.
     */
    where?: UsuarioPinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPins to fetch.
     */
    orderBy?: UsuarioPinOrderByWithRelationInput | UsuarioPinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioPins.
     */
    cursor?: UsuarioPinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPins.
     */
    skip?: number
    distinct?: UsuarioPinScalarFieldEnum | UsuarioPinScalarFieldEnum[]
  }

  /**
   * UsuarioPin create
   */
  export type UsuarioPinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * The data needed to create a UsuarioPin.
     */
    data: XOR<UsuarioPinCreateInput, UsuarioPinUncheckedCreateInput>
  }

  /**
   * UsuarioPin createMany
   */
  export type UsuarioPinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioPins.
     */
    data: UsuarioPinCreateManyInput | UsuarioPinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioPin createManyAndReturn
   */
  export type UsuarioPinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioPins.
     */
    data: UsuarioPinCreateManyInput | UsuarioPinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioPin update
   */
  export type UsuarioPinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * The data needed to update a UsuarioPin.
     */
    data: XOR<UsuarioPinUpdateInput, UsuarioPinUncheckedUpdateInput>
    /**
     * Choose, which UsuarioPin to update.
     */
    where: UsuarioPinWhereUniqueInput
  }

  /**
   * UsuarioPin updateMany
   */
  export type UsuarioPinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioPins.
     */
    data: XOR<UsuarioPinUpdateManyMutationInput, UsuarioPinUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioPins to update
     */
    where?: UsuarioPinWhereInput
    /**
     * Limit how many UsuarioPins to update.
     */
    limit?: number
  }

  /**
   * UsuarioPin updateManyAndReturn
   */
  export type UsuarioPinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioPins.
     */
    data: XOR<UsuarioPinUpdateManyMutationInput, UsuarioPinUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioPins to update
     */
    where?: UsuarioPinWhereInput
    /**
     * Limit how many UsuarioPins to update.
     */
    limit?: number
  }

  /**
   * UsuarioPin upsert
   */
  export type UsuarioPinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * The filter to search for the UsuarioPin to update in case it exists.
     */
    where: UsuarioPinWhereUniqueInput
    /**
     * In case the UsuarioPin found by the `where` argument doesn't exist, create a new UsuarioPin with this data.
     */
    create: XOR<UsuarioPinCreateInput, UsuarioPinUncheckedCreateInput>
    /**
     * In case the UsuarioPin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioPinUpdateInput, UsuarioPinUncheckedUpdateInput>
  }

  /**
   * UsuarioPin delete
   */
  export type UsuarioPinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
    /**
     * Filter which UsuarioPin to delete.
     */
    where: UsuarioPinWhereUniqueInput
  }

  /**
   * UsuarioPin deleteMany
   */
  export type UsuarioPinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioPins to delete
     */
    where?: UsuarioPinWhereInput
    /**
     * Limit how many UsuarioPins to delete.
     */
    limit?: number
  }

  /**
   * UsuarioPin without action
   */
  export type UsuarioPinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPin
     */
    select?: UsuarioPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPin
     */
    omit?: UsuarioPinOmit<ExtArgs> | null
  }


  /**
   * Model DispositivoConfiavel
   */

  export type AggregateDispositivoConfiavel = {
    _count: DispositivoConfiavelCountAggregateOutputType | null
    _avg: DispositivoConfiavelAvgAggregateOutputType | null
    _sum: DispositivoConfiavelSumAggregateOutputType | null
    _min: DispositivoConfiavelMinAggregateOutputType | null
    _max: DispositivoConfiavelMaxAggregateOutputType | null
  }

  export type DispositivoConfiavelAvgAggregateOutputType = {
    id: number | null
  }

  export type DispositivoConfiavelSumAggregateOutputType = {
    id: number | null
  }

  export type DispositivoConfiavelMinAggregateOutputType = {
    id: number | null
    userId: string | null
    tokenHash: string | null
    criadoEm: Date | null
    expiraEm: Date | null
  }

  export type DispositivoConfiavelMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    tokenHash: string | null
    criadoEm: Date | null
    expiraEm: Date | null
  }

  export type DispositivoConfiavelCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    criadoEm: number
    expiraEm: number
    _all: number
  }


  export type DispositivoConfiavelAvgAggregateInputType = {
    id?: true
  }

  export type DispositivoConfiavelSumAggregateInputType = {
    id?: true
  }

  export type DispositivoConfiavelMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    criadoEm?: true
    expiraEm?: true
  }

  export type DispositivoConfiavelMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    criadoEm?: true
    expiraEm?: true
  }

  export type DispositivoConfiavelCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    criadoEm?: true
    expiraEm?: true
    _all?: true
  }

  export type DispositivoConfiavelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DispositivoConfiavel to aggregate.
     */
    where?: DispositivoConfiavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispositivoConfiavels to fetch.
     */
    orderBy?: DispositivoConfiavelOrderByWithRelationInput | DispositivoConfiavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispositivoConfiavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispositivoConfiavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispositivoConfiavels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DispositivoConfiavels
    **/
    _count?: true | DispositivoConfiavelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DispositivoConfiavelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DispositivoConfiavelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispositivoConfiavelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispositivoConfiavelMaxAggregateInputType
  }

  export type GetDispositivoConfiavelAggregateType<T extends DispositivoConfiavelAggregateArgs> = {
        [P in keyof T & keyof AggregateDispositivoConfiavel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispositivoConfiavel[P]>
      : GetScalarType<T[P], AggregateDispositivoConfiavel[P]>
  }




  export type DispositivoConfiavelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispositivoConfiavelWhereInput
    orderBy?: DispositivoConfiavelOrderByWithAggregationInput | DispositivoConfiavelOrderByWithAggregationInput[]
    by: DispositivoConfiavelScalarFieldEnum[] | DispositivoConfiavelScalarFieldEnum
    having?: DispositivoConfiavelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispositivoConfiavelCountAggregateInputType | true
    _avg?: DispositivoConfiavelAvgAggregateInputType
    _sum?: DispositivoConfiavelSumAggregateInputType
    _min?: DispositivoConfiavelMinAggregateInputType
    _max?: DispositivoConfiavelMaxAggregateInputType
  }

  export type DispositivoConfiavelGroupByOutputType = {
    id: number
    userId: string
    tokenHash: string
    criadoEm: Date
    expiraEm: Date
    _count: DispositivoConfiavelCountAggregateOutputType | null
    _avg: DispositivoConfiavelAvgAggregateOutputType | null
    _sum: DispositivoConfiavelSumAggregateOutputType | null
    _min: DispositivoConfiavelMinAggregateOutputType | null
    _max: DispositivoConfiavelMaxAggregateOutputType | null
  }

  type GetDispositivoConfiavelGroupByPayload<T extends DispositivoConfiavelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispositivoConfiavelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispositivoConfiavelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispositivoConfiavelGroupByOutputType[P]>
            : GetScalarType<T[P], DispositivoConfiavelGroupByOutputType[P]>
        }
      >
    >


  export type DispositivoConfiavelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    criadoEm?: boolean
    expiraEm?: boolean
  }, ExtArgs["result"]["dispositivoConfiavel"]>

  export type DispositivoConfiavelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    criadoEm?: boolean
    expiraEm?: boolean
  }, ExtArgs["result"]["dispositivoConfiavel"]>

  export type DispositivoConfiavelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    criadoEm?: boolean
    expiraEm?: boolean
  }, ExtArgs["result"]["dispositivoConfiavel"]>

  export type DispositivoConfiavelSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    criadoEm?: boolean
    expiraEm?: boolean
  }

  export type DispositivoConfiavelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "criadoEm" | "expiraEm", ExtArgs["result"]["dispositivoConfiavel"]>

  export type $DispositivoConfiavelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DispositivoConfiavel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      tokenHash: string
      criadoEm: Date
      expiraEm: Date
    }, ExtArgs["result"]["dispositivoConfiavel"]>
    composites: {}
  }

  type DispositivoConfiavelGetPayload<S extends boolean | null | undefined | DispositivoConfiavelDefaultArgs> = $Result.GetResult<Prisma.$DispositivoConfiavelPayload, S>

  type DispositivoConfiavelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DispositivoConfiavelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DispositivoConfiavelCountAggregateInputType | true
    }

  export interface DispositivoConfiavelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DispositivoConfiavel'], meta: { name: 'DispositivoConfiavel' } }
    /**
     * Find zero or one DispositivoConfiavel that matches the filter.
     * @param {DispositivoConfiavelFindUniqueArgs} args - Arguments to find a DispositivoConfiavel
     * @example
     * // Get one DispositivoConfiavel
     * const dispositivoConfiavel = await prisma.dispositivoConfiavel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DispositivoConfiavelFindUniqueArgs>(args: SelectSubset<T, DispositivoConfiavelFindUniqueArgs<ExtArgs>>): Prisma__DispositivoConfiavelClient<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DispositivoConfiavel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DispositivoConfiavelFindUniqueOrThrowArgs} args - Arguments to find a DispositivoConfiavel
     * @example
     * // Get one DispositivoConfiavel
     * const dispositivoConfiavel = await prisma.dispositivoConfiavel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DispositivoConfiavelFindUniqueOrThrowArgs>(args: SelectSubset<T, DispositivoConfiavelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DispositivoConfiavelClient<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DispositivoConfiavel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoConfiavelFindFirstArgs} args - Arguments to find a DispositivoConfiavel
     * @example
     * // Get one DispositivoConfiavel
     * const dispositivoConfiavel = await prisma.dispositivoConfiavel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DispositivoConfiavelFindFirstArgs>(args?: SelectSubset<T, DispositivoConfiavelFindFirstArgs<ExtArgs>>): Prisma__DispositivoConfiavelClient<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DispositivoConfiavel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoConfiavelFindFirstOrThrowArgs} args - Arguments to find a DispositivoConfiavel
     * @example
     * // Get one DispositivoConfiavel
     * const dispositivoConfiavel = await prisma.dispositivoConfiavel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DispositivoConfiavelFindFirstOrThrowArgs>(args?: SelectSubset<T, DispositivoConfiavelFindFirstOrThrowArgs<ExtArgs>>): Prisma__DispositivoConfiavelClient<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DispositivoConfiavels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoConfiavelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DispositivoConfiavels
     * const dispositivoConfiavels = await prisma.dispositivoConfiavel.findMany()
     * 
     * // Get first 10 DispositivoConfiavels
     * const dispositivoConfiavels = await prisma.dispositivoConfiavel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispositivoConfiavelWithIdOnly = await prisma.dispositivoConfiavel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DispositivoConfiavelFindManyArgs>(args?: SelectSubset<T, DispositivoConfiavelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DispositivoConfiavel.
     * @param {DispositivoConfiavelCreateArgs} args - Arguments to create a DispositivoConfiavel.
     * @example
     * // Create one DispositivoConfiavel
     * const DispositivoConfiavel = await prisma.dispositivoConfiavel.create({
     *   data: {
     *     // ... data to create a DispositivoConfiavel
     *   }
     * })
     * 
     */
    create<T extends DispositivoConfiavelCreateArgs>(args: SelectSubset<T, DispositivoConfiavelCreateArgs<ExtArgs>>): Prisma__DispositivoConfiavelClient<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DispositivoConfiavels.
     * @param {DispositivoConfiavelCreateManyArgs} args - Arguments to create many DispositivoConfiavels.
     * @example
     * // Create many DispositivoConfiavels
     * const dispositivoConfiavel = await prisma.dispositivoConfiavel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DispositivoConfiavelCreateManyArgs>(args?: SelectSubset<T, DispositivoConfiavelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DispositivoConfiavels and returns the data saved in the database.
     * @param {DispositivoConfiavelCreateManyAndReturnArgs} args - Arguments to create many DispositivoConfiavels.
     * @example
     * // Create many DispositivoConfiavels
     * const dispositivoConfiavel = await prisma.dispositivoConfiavel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DispositivoConfiavels and only return the `id`
     * const dispositivoConfiavelWithIdOnly = await prisma.dispositivoConfiavel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DispositivoConfiavelCreateManyAndReturnArgs>(args?: SelectSubset<T, DispositivoConfiavelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DispositivoConfiavel.
     * @param {DispositivoConfiavelDeleteArgs} args - Arguments to delete one DispositivoConfiavel.
     * @example
     * // Delete one DispositivoConfiavel
     * const DispositivoConfiavel = await prisma.dispositivoConfiavel.delete({
     *   where: {
     *     // ... filter to delete one DispositivoConfiavel
     *   }
     * })
     * 
     */
    delete<T extends DispositivoConfiavelDeleteArgs>(args: SelectSubset<T, DispositivoConfiavelDeleteArgs<ExtArgs>>): Prisma__DispositivoConfiavelClient<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DispositivoConfiavel.
     * @param {DispositivoConfiavelUpdateArgs} args - Arguments to update one DispositivoConfiavel.
     * @example
     * // Update one DispositivoConfiavel
     * const dispositivoConfiavel = await prisma.dispositivoConfiavel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DispositivoConfiavelUpdateArgs>(args: SelectSubset<T, DispositivoConfiavelUpdateArgs<ExtArgs>>): Prisma__DispositivoConfiavelClient<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DispositivoConfiavels.
     * @param {DispositivoConfiavelDeleteManyArgs} args - Arguments to filter DispositivoConfiavels to delete.
     * @example
     * // Delete a few DispositivoConfiavels
     * const { count } = await prisma.dispositivoConfiavel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DispositivoConfiavelDeleteManyArgs>(args?: SelectSubset<T, DispositivoConfiavelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DispositivoConfiavels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoConfiavelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DispositivoConfiavels
     * const dispositivoConfiavel = await prisma.dispositivoConfiavel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DispositivoConfiavelUpdateManyArgs>(args: SelectSubset<T, DispositivoConfiavelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DispositivoConfiavels and returns the data updated in the database.
     * @param {DispositivoConfiavelUpdateManyAndReturnArgs} args - Arguments to update many DispositivoConfiavels.
     * @example
     * // Update many DispositivoConfiavels
     * const dispositivoConfiavel = await prisma.dispositivoConfiavel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DispositivoConfiavels and only return the `id`
     * const dispositivoConfiavelWithIdOnly = await prisma.dispositivoConfiavel.updateManyAndReturn({
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
    updateManyAndReturn<T extends DispositivoConfiavelUpdateManyAndReturnArgs>(args: SelectSubset<T, DispositivoConfiavelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DispositivoConfiavel.
     * @param {DispositivoConfiavelUpsertArgs} args - Arguments to update or create a DispositivoConfiavel.
     * @example
     * // Update or create a DispositivoConfiavel
     * const dispositivoConfiavel = await prisma.dispositivoConfiavel.upsert({
     *   create: {
     *     // ... data to create a DispositivoConfiavel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DispositivoConfiavel we want to update
     *   }
     * })
     */
    upsert<T extends DispositivoConfiavelUpsertArgs>(args: SelectSubset<T, DispositivoConfiavelUpsertArgs<ExtArgs>>): Prisma__DispositivoConfiavelClient<$Result.GetResult<Prisma.$DispositivoConfiavelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DispositivoConfiavels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoConfiavelCountArgs} args - Arguments to filter DispositivoConfiavels to count.
     * @example
     * // Count the number of DispositivoConfiavels
     * const count = await prisma.dispositivoConfiavel.count({
     *   where: {
     *     // ... the filter for the DispositivoConfiavels we want to count
     *   }
     * })
    **/
    count<T extends DispositivoConfiavelCountArgs>(
      args?: Subset<T, DispositivoConfiavelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispositivoConfiavelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DispositivoConfiavel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoConfiavelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DispositivoConfiavelAggregateArgs>(args: Subset<T, DispositivoConfiavelAggregateArgs>): Prisma.PrismaPromise<GetDispositivoConfiavelAggregateType<T>>

    /**
     * Group by DispositivoConfiavel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoConfiavelGroupByArgs} args - Group by arguments.
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
      T extends DispositivoConfiavelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispositivoConfiavelGroupByArgs['orderBy'] }
        : { orderBy?: DispositivoConfiavelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DispositivoConfiavelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispositivoConfiavelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DispositivoConfiavel model
   */
  readonly fields: DispositivoConfiavelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DispositivoConfiavel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispositivoConfiavelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DispositivoConfiavel model
   */
  interface DispositivoConfiavelFieldRefs {
    readonly id: FieldRef<"DispositivoConfiavel", 'Int'>
    readonly userId: FieldRef<"DispositivoConfiavel", 'String'>
    readonly tokenHash: FieldRef<"DispositivoConfiavel", 'String'>
    readonly criadoEm: FieldRef<"DispositivoConfiavel", 'DateTime'>
    readonly expiraEm: FieldRef<"DispositivoConfiavel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DispositivoConfiavel findUnique
   */
  export type DispositivoConfiavelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * Filter, which DispositivoConfiavel to fetch.
     */
    where: DispositivoConfiavelWhereUniqueInput
  }

  /**
   * DispositivoConfiavel findUniqueOrThrow
   */
  export type DispositivoConfiavelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * Filter, which DispositivoConfiavel to fetch.
     */
    where: DispositivoConfiavelWhereUniqueInput
  }

  /**
   * DispositivoConfiavel findFirst
   */
  export type DispositivoConfiavelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * Filter, which DispositivoConfiavel to fetch.
     */
    where?: DispositivoConfiavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispositivoConfiavels to fetch.
     */
    orderBy?: DispositivoConfiavelOrderByWithRelationInput | DispositivoConfiavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DispositivoConfiavels.
     */
    cursor?: DispositivoConfiavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispositivoConfiavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispositivoConfiavels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DispositivoConfiavels.
     */
    distinct?: DispositivoConfiavelScalarFieldEnum | DispositivoConfiavelScalarFieldEnum[]
  }

  /**
   * DispositivoConfiavel findFirstOrThrow
   */
  export type DispositivoConfiavelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * Filter, which DispositivoConfiavel to fetch.
     */
    where?: DispositivoConfiavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispositivoConfiavels to fetch.
     */
    orderBy?: DispositivoConfiavelOrderByWithRelationInput | DispositivoConfiavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DispositivoConfiavels.
     */
    cursor?: DispositivoConfiavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispositivoConfiavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispositivoConfiavels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DispositivoConfiavels.
     */
    distinct?: DispositivoConfiavelScalarFieldEnum | DispositivoConfiavelScalarFieldEnum[]
  }

  /**
   * DispositivoConfiavel findMany
   */
  export type DispositivoConfiavelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * Filter, which DispositivoConfiavels to fetch.
     */
    where?: DispositivoConfiavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispositivoConfiavels to fetch.
     */
    orderBy?: DispositivoConfiavelOrderByWithRelationInput | DispositivoConfiavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DispositivoConfiavels.
     */
    cursor?: DispositivoConfiavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispositivoConfiavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispositivoConfiavels.
     */
    skip?: number
    distinct?: DispositivoConfiavelScalarFieldEnum | DispositivoConfiavelScalarFieldEnum[]
  }

  /**
   * DispositivoConfiavel create
   */
  export type DispositivoConfiavelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * The data needed to create a DispositivoConfiavel.
     */
    data: XOR<DispositivoConfiavelCreateInput, DispositivoConfiavelUncheckedCreateInput>
  }

  /**
   * DispositivoConfiavel createMany
   */
  export type DispositivoConfiavelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DispositivoConfiavels.
     */
    data: DispositivoConfiavelCreateManyInput | DispositivoConfiavelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DispositivoConfiavel createManyAndReturn
   */
  export type DispositivoConfiavelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * The data used to create many DispositivoConfiavels.
     */
    data: DispositivoConfiavelCreateManyInput | DispositivoConfiavelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DispositivoConfiavel update
   */
  export type DispositivoConfiavelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * The data needed to update a DispositivoConfiavel.
     */
    data: XOR<DispositivoConfiavelUpdateInput, DispositivoConfiavelUncheckedUpdateInput>
    /**
     * Choose, which DispositivoConfiavel to update.
     */
    where: DispositivoConfiavelWhereUniqueInput
  }

  /**
   * DispositivoConfiavel updateMany
   */
  export type DispositivoConfiavelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DispositivoConfiavels.
     */
    data: XOR<DispositivoConfiavelUpdateManyMutationInput, DispositivoConfiavelUncheckedUpdateManyInput>
    /**
     * Filter which DispositivoConfiavels to update
     */
    where?: DispositivoConfiavelWhereInput
    /**
     * Limit how many DispositivoConfiavels to update.
     */
    limit?: number
  }

  /**
   * DispositivoConfiavel updateManyAndReturn
   */
  export type DispositivoConfiavelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * The data used to update DispositivoConfiavels.
     */
    data: XOR<DispositivoConfiavelUpdateManyMutationInput, DispositivoConfiavelUncheckedUpdateManyInput>
    /**
     * Filter which DispositivoConfiavels to update
     */
    where?: DispositivoConfiavelWhereInput
    /**
     * Limit how many DispositivoConfiavels to update.
     */
    limit?: number
  }

  /**
   * DispositivoConfiavel upsert
   */
  export type DispositivoConfiavelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * The filter to search for the DispositivoConfiavel to update in case it exists.
     */
    where: DispositivoConfiavelWhereUniqueInput
    /**
     * In case the DispositivoConfiavel found by the `where` argument doesn't exist, create a new DispositivoConfiavel with this data.
     */
    create: XOR<DispositivoConfiavelCreateInput, DispositivoConfiavelUncheckedCreateInput>
    /**
     * In case the DispositivoConfiavel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispositivoConfiavelUpdateInput, DispositivoConfiavelUncheckedUpdateInput>
  }

  /**
   * DispositivoConfiavel delete
   */
  export type DispositivoConfiavelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
    /**
     * Filter which DispositivoConfiavel to delete.
     */
    where: DispositivoConfiavelWhereUniqueInput
  }

  /**
   * DispositivoConfiavel deleteMany
   */
  export type DispositivoConfiavelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DispositivoConfiavels to delete
     */
    where?: DispositivoConfiavelWhereInput
    /**
     * Limit how many DispositivoConfiavels to delete.
     */
    limit?: number
  }

  /**
   * DispositivoConfiavel without action
   */
  export type DispositivoConfiavelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoConfiavel
     */
    select?: DispositivoConfiavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispositivoConfiavel
     */
    omit?: DispositivoConfiavelOmit<ExtArgs> | null
  }


  /**
   * Model LogLogin
   */

  export type AggregateLogLogin = {
    _count: LogLoginCountAggregateOutputType | null
    _avg: LogLoginAvgAggregateOutputType | null
    _sum: LogLoginSumAggregateOutputType | null
    _min: LogLoginMinAggregateOutputType | null
    _max: LogLoginMaxAggregateOutputType | null
  }

  export type LogLoginAvgAggregateOutputType = {
    id: number | null
  }

  export type LogLoginSumAggregateOutputType = {
    id: number | null
  }

  export type LogLoginMinAggregateOutputType = {
    id: number | null
    userId: string | null
    ip: string | null
    sucesso: boolean | null
    criadoEm: Date | null
  }

  export type LogLoginMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    ip: string | null
    sucesso: boolean | null
    criadoEm: Date | null
  }

  export type LogLoginCountAggregateOutputType = {
    id: number
    userId: number
    ip: number
    sucesso: number
    criadoEm: number
    _all: number
  }


  export type LogLoginAvgAggregateInputType = {
    id?: true
  }

  export type LogLoginSumAggregateInputType = {
    id?: true
  }

  export type LogLoginMinAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    sucesso?: true
    criadoEm?: true
  }

  export type LogLoginMaxAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    sucesso?: true
    criadoEm?: true
  }

  export type LogLoginCountAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    sucesso?: true
    criadoEm?: true
    _all?: true
  }

  export type LogLoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogLogin to aggregate.
     */
    where?: LogLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogLogins to fetch.
     */
    orderBy?: LogLoginOrderByWithRelationInput | LogLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogLogins
    **/
    _count?: true | LogLoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogLoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogLoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogLoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogLoginMaxAggregateInputType
  }

  export type GetLogLoginAggregateType<T extends LogLoginAggregateArgs> = {
        [P in keyof T & keyof AggregateLogLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogLogin[P]>
      : GetScalarType<T[P], AggregateLogLogin[P]>
  }




  export type LogLoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogLoginWhereInput
    orderBy?: LogLoginOrderByWithAggregationInput | LogLoginOrderByWithAggregationInput[]
    by: LogLoginScalarFieldEnum[] | LogLoginScalarFieldEnum
    having?: LogLoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogLoginCountAggregateInputType | true
    _avg?: LogLoginAvgAggregateInputType
    _sum?: LogLoginSumAggregateInputType
    _min?: LogLoginMinAggregateInputType
    _max?: LogLoginMaxAggregateInputType
  }

  export type LogLoginGroupByOutputType = {
    id: number
    userId: string
    ip: string | null
    sucesso: boolean
    criadoEm: Date
    _count: LogLoginCountAggregateOutputType | null
    _avg: LogLoginAvgAggregateOutputType | null
    _sum: LogLoginSumAggregateOutputType | null
    _min: LogLoginMinAggregateOutputType | null
    _max: LogLoginMaxAggregateOutputType | null
  }

  type GetLogLoginGroupByPayload<T extends LogLoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogLoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogLoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogLoginGroupByOutputType[P]>
            : GetScalarType<T[P], LogLoginGroupByOutputType[P]>
        }
      >
    >


  export type LogLoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    sucesso?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["logLogin"]>

  export type LogLoginSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    sucesso?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["logLogin"]>

  export type LogLoginSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    sucesso?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["logLogin"]>

  export type LogLoginSelectScalar = {
    id?: boolean
    userId?: boolean
    ip?: boolean
    sucesso?: boolean
    criadoEm?: boolean
  }

  export type LogLoginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ip" | "sucesso" | "criadoEm", ExtArgs["result"]["logLogin"]>

  export type $LogLoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogLogin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      ip: string | null
      sucesso: boolean
      criadoEm: Date
    }, ExtArgs["result"]["logLogin"]>
    composites: {}
  }

  type LogLoginGetPayload<S extends boolean | null | undefined | LogLoginDefaultArgs> = $Result.GetResult<Prisma.$LogLoginPayload, S>

  type LogLoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogLoginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogLoginCountAggregateInputType | true
    }

  export interface LogLoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogLogin'], meta: { name: 'LogLogin' } }
    /**
     * Find zero or one LogLogin that matches the filter.
     * @param {LogLoginFindUniqueArgs} args - Arguments to find a LogLogin
     * @example
     * // Get one LogLogin
     * const logLogin = await prisma.logLogin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogLoginFindUniqueArgs>(args: SelectSubset<T, LogLoginFindUniqueArgs<ExtArgs>>): Prisma__LogLoginClient<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogLogin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogLoginFindUniqueOrThrowArgs} args - Arguments to find a LogLogin
     * @example
     * // Get one LogLogin
     * const logLogin = await prisma.logLogin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogLoginFindUniqueOrThrowArgs>(args: SelectSubset<T, LogLoginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogLoginClient<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogLogin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogLoginFindFirstArgs} args - Arguments to find a LogLogin
     * @example
     * // Get one LogLogin
     * const logLogin = await prisma.logLogin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogLoginFindFirstArgs>(args?: SelectSubset<T, LogLoginFindFirstArgs<ExtArgs>>): Prisma__LogLoginClient<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogLogin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogLoginFindFirstOrThrowArgs} args - Arguments to find a LogLogin
     * @example
     * // Get one LogLogin
     * const logLogin = await prisma.logLogin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogLoginFindFirstOrThrowArgs>(args?: SelectSubset<T, LogLoginFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogLoginClient<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogLoginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogLogins
     * const logLogins = await prisma.logLogin.findMany()
     * 
     * // Get first 10 LogLogins
     * const logLogins = await prisma.logLogin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logLoginWithIdOnly = await prisma.logLogin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogLoginFindManyArgs>(args?: SelectSubset<T, LogLoginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogLogin.
     * @param {LogLoginCreateArgs} args - Arguments to create a LogLogin.
     * @example
     * // Create one LogLogin
     * const LogLogin = await prisma.logLogin.create({
     *   data: {
     *     // ... data to create a LogLogin
     *   }
     * })
     * 
     */
    create<T extends LogLoginCreateArgs>(args: SelectSubset<T, LogLoginCreateArgs<ExtArgs>>): Prisma__LogLoginClient<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogLogins.
     * @param {LogLoginCreateManyArgs} args - Arguments to create many LogLogins.
     * @example
     * // Create many LogLogins
     * const logLogin = await prisma.logLogin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogLoginCreateManyArgs>(args?: SelectSubset<T, LogLoginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogLogins and returns the data saved in the database.
     * @param {LogLoginCreateManyAndReturnArgs} args - Arguments to create many LogLogins.
     * @example
     * // Create many LogLogins
     * const logLogin = await prisma.logLogin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogLogins and only return the `id`
     * const logLoginWithIdOnly = await prisma.logLogin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogLoginCreateManyAndReturnArgs>(args?: SelectSubset<T, LogLoginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogLogin.
     * @param {LogLoginDeleteArgs} args - Arguments to delete one LogLogin.
     * @example
     * // Delete one LogLogin
     * const LogLogin = await prisma.logLogin.delete({
     *   where: {
     *     // ... filter to delete one LogLogin
     *   }
     * })
     * 
     */
    delete<T extends LogLoginDeleteArgs>(args: SelectSubset<T, LogLoginDeleteArgs<ExtArgs>>): Prisma__LogLoginClient<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogLogin.
     * @param {LogLoginUpdateArgs} args - Arguments to update one LogLogin.
     * @example
     * // Update one LogLogin
     * const logLogin = await prisma.logLogin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogLoginUpdateArgs>(args: SelectSubset<T, LogLoginUpdateArgs<ExtArgs>>): Prisma__LogLoginClient<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogLogins.
     * @param {LogLoginDeleteManyArgs} args - Arguments to filter LogLogins to delete.
     * @example
     * // Delete a few LogLogins
     * const { count } = await prisma.logLogin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogLoginDeleteManyArgs>(args?: SelectSubset<T, LogLoginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogLoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogLogins
     * const logLogin = await prisma.logLogin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogLoginUpdateManyArgs>(args: SelectSubset<T, LogLoginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogLogins and returns the data updated in the database.
     * @param {LogLoginUpdateManyAndReturnArgs} args - Arguments to update many LogLogins.
     * @example
     * // Update many LogLogins
     * const logLogin = await prisma.logLogin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogLogins and only return the `id`
     * const logLoginWithIdOnly = await prisma.logLogin.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogLoginUpdateManyAndReturnArgs>(args: SelectSubset<T, LogLoginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogLogin.
     * @param {LogLoginUpsertArgs} args - Arguments to update or create a LogLogin.
     * @example
     * // Update or create a LogLogin
     * const logLogin = await prisma.logLogin.upsert({
     *   create: {
     *     // ... data to create a LogLogin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogLogin we want to update
     *   }
     * })
     */
    upsert<T extends LogLoginUpsertArgs>(args: SelectSubset<T, LogLoginUpsertArgs<ExtArgs>>): Prisma__LogLoginClient<$Result.GetResult<Prisma.$LogLoginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogLoginCountArgs} args - Arguments to filter LogLogins to count.
     * @example
     * // Count the number of LogLogins
     * const count = await prisma.logLogin.count({
     *   where: {
     *     // ... the filter for the LogLogins we want to count
     *   }
     * })
    **/
    count<T extends LogLoginCountArgs>(
      args?: Subset<T, LogLoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogLoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogLoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogLoginAggregateArgs>(args: Subset<T, LogLoginAggregateArgs>): Prisma.PrismaPromise<GetLogLoginAggregateType<T>>

    /**
     * Group by LogLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogLoginGroupByArgs} args - Group by arguments.
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
      T extends LogLoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogLoginGroupByArgs['orderBy'] }
        : { orderBy?: LogLoginGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogLoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogLogin model
   */
  readonly fields: LogLoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogLogin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogLoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LogLogin model
   */
  interface LogLoginFieldRefs {
    readonly id: FieldRef<"LogLogin", 'Int'>
    readonly userId: FieldRef<"LogLogin", 'String'>
    readonly ip: FieldRef<"LogLogin", 'String'>
    readonly sucesso: FieldRef<"LogLogin", 'Boolean'>
    readonly criadoEm: FieldRef<"LogLogin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogLogin findUnique
   */
  export type LogLoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * Filter, which LogLogin to fetch.
     */
    where: LogLoginWhereUniqueInput
  }

  /**
   * LogLogin findUniqueOrThrow
   */
  export type LogLoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * Filter, which LogLogin to fetch.
     */
    where: LogLoginWhereUniqueInput
  }

  /**
   * LogLogin findFirst
   */
  export type LogLoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * Filter, which LogLogin to fetch.
     */
    where?: LogLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogLogins to fetch.
     */
    orderBy?: LogLoginOrderByWithRelationInput | LogLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogLogins.
     */
    cursor?: LogLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogLogins.
     */
    distinct?: LogLoginScalarFieldEnum | LogLoginScalarFieldEnum[]
  }

  /**
   * LogLogin findFirstOrThrow
   */
  export type LogLoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * Filter, which LogLogin to fetch.
     */
    where?: LogLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogLogins to fetch.
     */
    orderBy?: LogLoginOrderByWithRelationInput | LogLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogLogins.
     */
    cursor?: LogLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogLogins.
     */
    distinct?: LogLoginScalarFieldEnum | LogLoginScalarFieldEnum[]
  }

  /**
   * LogLogin findMany
   */
  export type LogLoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * Filter, which LogLogins to fetch.
     */
    where?: LogLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogLogins to fetch.
     */
    orderBy?: LogLoginOrderByWithRelationInput | LogLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogLogins.
     */
    cursor?: LogLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogLogins.
     */
    skip?: number
    distinct?: LogLoginScalarFieldEnum | LogLoginScalarFieldEnum[]
  }

  /**
   * LogLogin create
   */
  export type LogLoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * The data needed to create a LogLogin.
     */
    data: XOR<LogLoginCreateInput, LogLoginUncheckedCreateInput>
  }

  /**
   * LogLogin createMany
   */
  export type LogLoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogLogins.
     */
    data: LogLoginCreateManyInput | LogLoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogLogin createManyAndReturn
   */
  export type LogLoginCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * The data used to create many LogLogins.
     */
    data: LogLoginCreateManyInput | LogLoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogLogin update
   */
  export type LogLoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * The data needed to update a LogLogin.
     */
    data: XOR<LogLoginUpdateInput, LogLoginUncheckedUpdateInput>
    /**
     * Choose, which LogLogin to update.
     */
    where: LogLoginWhereUniqueInput
  }

  /**
   * LogLogin updateMany
   */
  export type LogLoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogLogins.
     */
    data: XOR<LogLoginUpdateManyMutationInput, LogLoginUncheckedUpdateManyInput>
    /**
     * Filter which LogLogins to update
     */
    where?: LogLoginWhereInput
    /**
     * Limit how many LogLogins to update.
     */
    limit?: number
  }

  /**
   * LogLogin updateManyAndReturn
   */
  export type LogLoginUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * The data used to update LogLogins.
     */
    data: XOR<LogLoginUpdateManyMutationInput, LogLoginUncheckedUpdateManyInput>
    /**
     * Filter which LogLogins to update
     */
    where?: LogLoginWhereInput
    /**
     * Limit how many LogLogins to update.
     */
    limit?: number
  }

  /**
   * LogLogin upsert
   */
  export type LogLoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * The filter to search for the LogLogin to update in case it exists.
     */
    where: LogLoginWhereUniqueInput
    /**
     * In case the LogLogin found by the `where` argument doesn't exist, create a new LogLogin with this data.
     */
    create: XOR<LogLoginCreateInput, LogLoginUncheckedCreateInput>
    /**
     * In case the LogLogin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogLoginUpdateInput, LogLoginUncheckedUpdateInput>
  }

  /**
   * LogLogin delete
   */
  export type LogLoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
    /**
     * Filter which LogLogin to delete.
     */
    where: LogLoginWhereUniqueInput
  }

  /**
   * LogLogin deleteMany
   */
  export type LogLoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogLogins to delete
     */
    where?: LogLoginWhereInput
    /**
     * Limit how many LogLogins to delete.
     */
    limit?: number
  }

  /**
   * LogLogin without action
   */
  export type LogLoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogLogin
     */
    select?: LogLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogLogin
     */
    omit?: LogLoginOmit<ExtArgs> | null
  }


  /**
   * Model ConsentimentoUsuario
   */

  export type AggregateConsentimentoUsuario = {
    _count: ConsentimentoUsuarioCountAggregateOutputType | null
    _avg: ConsentimentoUsuarioAvgAggregateOutputType | null
    _sum: ConsentimentoUsuarioSumAggregateOutputType | null
    _min: ConsentimentoUsuarioMinAggregateOutputType | null
    _max: ConsentimentoUsuarioMaxAggregateOutputType | null
  }

  export type ConsentimentoUsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type ConsentimentoUsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type ConsentimentoUsuarioMinAggregateOutputType = {
    id: number | null
    userId: string | null
    aceitoEm: Date | null
  }

  export type ConsentimentoUsuarioMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    aceitoEm: Date | null
  }

  export type ConsentimentoUsuarioCountAggregateOutputType = {
    id: number
    userId: number
    aceitoEm: number
    _all: number
  }


  export type ConsentimentoUsuarioAvgAggregateInputType = {
    id?: true
  }

  export type ConsentimentoUsuarioSumAggregateInputType = {
    id?: true
  }

  export type ConsentimentoUsuarioMinAggregateInputType = {
    id?: true
    userId?: true
    aceitoEm?: true
  }

  export type ConsentimentoUsuarioMaxAggregateInputType = {
    id?: true
    userId?: true
    aceitoEm?: true
  }

  export type ConsentimentoUsuarioCountAggregateInputType = {
    id?: true
    userId?: true
    aceitoEm?: true
    _all?: true
  }

  export type ConsentimentoUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsentimentoUsuario to aggregate.
     */
    where?: ConsentimentoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsentimentoUsuarios to fetch.
     */
    orderBy?: ConsentimentoUsuarioOrderByWithRelationInput | ConsentimentoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsentimentoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsentimentoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsentimentoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsentimentoUsuarios
    **/
    _count?: true | ConsentimentoUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsentimentoUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsentimentoUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsentimentoUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsentimentoUsuarioMaxAggregateInputType
  }

  export type GetConsentimentoUsuarioAggregateType<T extends ConsentimentoUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateConsentimentoUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsentimentoUsuario[P]>
      : GetScalarType<T[P], AggregateConsentimentoUsuario[P]>
  }




  export type ConsentimentoUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsentimentoUsuarioWhereInput
    orderBy?: ConsentimentoUsuarioOrderByWithAggregationInput | ConsentimentoUsuarioOrderByWithAggregationInput[]
    by: ConsentimentoUsuarioScalarFieldEnum[] | ConsentimentoUsuarioScalarFieldEnum
    having?: ConsentimentoUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsentimentoUsuarioCountAggregateInputType | true
    _avg?: ConsentimentoUsuarioAvgAggregateInputType
    _sum?: ConsentimentoUsuarioSumAggregateInputType
    _min?: ConsentimentoUsuarioMinAggregateInputType
    _max?: ConsentimentoUsuarioMaxAggregateInputType
  }

  export type ConsentimentoUsuarioGroupByOutputType = {
    id: number
    userId: string
    aceitoEm: Date
    _count: ConsentimentoUsuarioCountAggregateOutputType | null
    _avg: ConsentimentoUsuarioAvgAggregateOutputType | null
    _sum: ConsentimentoUsuarioSumAggregateOutputType | null
    _min: ConsentimentoUsuarioMinAggregateOutputType | null
    _max: ConsentimentoUsuarioMaxAggregateOutputType | null
  }

  type GetConsentimentoUsuarioGroupByPayload<T extends ConsentimentoUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsentimentoUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsentimentoUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsentimentoUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], ConsentimentoUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type ConsentimentoUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    aceitoEm?: boolean
  }, ExtArgs["result"]["consentimentoUsuario"]>

  export type ConsentimentoUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    aceitoEm?: boolean
  }, ExtArgs["result"]["consentimentoUsuario"]>

  export type ConsentimentoUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    aceitoEm?: boolean
  }, ExtArgs["result"]["consentimentoUsuario"]>

  export type ConsentimentoUsuarioSelectScalar = {
    id?: boolean
    userId?: boolean
    aceitoEm?: boolean
  }

  export type ConsentimentoUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "aceitoEm", ExtArgs["result"]["consentimentoUsuario"]>

  export type $ConsentimentoUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsentimentoUsuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      aceitoEm: Date
    }, ExtArgs["result"]["consentimentoUsuario"]>
    composites: {}
  }

  type ConsentimentoUsuarioGetPayload<S extends boolean | null | undefined | ConsentimentoUsuarioDefaultArgs> = $Result.GetResult<Prisma.$ConsentimentoUsuarioPayload, S>

  type ConsentimentoUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsentimentoUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsentimentoUsuarioCountAggregateInputType | true
    }

  export interface ConsentimentoUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsentimentoUsuario'], meta: { name: 'ConsentimentoUsuario' } }
    /**
     * Find zero or one ConsentimentoUsuario that matches the filter.
     * @param {ConsentimentoUsuarioFindUniqueArgs} args - Arguments to find a ConsentimentoUsuario
     * @example
     * // Get one ConsentimentoUsuario
     * const consentimentoUsuario = await prisma.consentimentoUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsentimentoUsuarioFindUniqueArgs>(args: SelectSubset<T, ConsentimentoUsuarioFindUniqueArgs<ExtArgs>>): Prisma__ConsentimentoUsuarioClient<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsentimentoUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsentimentoUsuarioFindUniqueOrThrowArgs} args - Arguments to find a ConsentimentoUsuario
     * @example
     * // Get one ConsentimentoUsuario
     * const consentimentoUsuario = await prisma.consentimentoUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsentimentoUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsentimentoUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsentimentoUsuarioClient<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsentimentoUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentimentoUsuarioFindFirstArgs} args - Arguments to find a ConsentimentoUsuario
     * @example
     * // Get one ConsentimentoUsuario
     * const consentimentoUsuario = await prisma.consentimentoUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsentimentoUsuarioFindFirstArgs>(args?: SelectSubset<T, ConsentimentoUsuarioFindFirstArgs<ExtArgs>>): Prisma__ConsentimentoUsuarioClient<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsentimentoUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentimentoUsuarioFindFirstOrThrowArgs} args - Arguments to find a ConsentimentoUsuario
     * @example
     * // Get one ConsentimentoUsuario
     * const consentimentoUsuario = await prisma.consentimentoUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsentimentoUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsentimentoUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsentimentoUsuarioClient<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsentimentoUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentimentoUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsentimentoUsuarios
     * const consentimentoUsuarios = await prisma.consentimentoUsuario.findMany()
     * 
     * // Get first 10 ConsentimentoUsuarios
     * const consentimentoUsuarios = await prisma.consentimentoUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consentimentoUsuarioWithIdOnly = await prisma.consentimentoUsuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsentimentoUsuarioFindManyArgs>(args?: SelectSubset<T, ConsentimentoUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsentimentoUsuario.
     * @param {ConsentimentoUsuarioCreateArgs} args - Arguments to create a ConsentimentoUsuario.
     * @example
     * // Create one ConsentimentoUsuario
     * const ConsentimentoUsuario = await prisma.consentimentoUsuario.create({
     *   data: {
     *     // ... data to create a ConsentimentoUsuario
     *   }
     * })
     * 
     */
    create<T extends ConsentimentoUsuarioCreateArgs>(args: SelectSubset<T, ConsentimentoUsuarioCreateArgs<ExtArgs>>): Prisma__ConsentimentoUsuarioClient<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsentimentoUsuarios.
     * @param {ConsentimentoUsuarioCreateManyArgs} args - Arguments to create many ConsentimentoUsuarios.
     * @example
     * // Create many ConsentimentoUsuarios
     * const consentimentoUsuario = await prisma.consentimentoUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsentimentoUsuarioCreateManyArgs>(args?: SelectSubset<T, ConsentimentoUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsentimentoUsuarios and returns the data saved in the database.
     * @param {ConsentimentoUsuarioCreateManyAndReturnArgs} args - Arguments to create many ConsentimentoUsuarios.
     * @example
     * // Create many ConsentimentoUsuarios
     * const consentimentoUsuario = await prisma.consentimentoUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsentimentoUsuarios and only return the `id`
     * const consentimentoUsuarioWithIdOnly = await prisma.consentimentoUsuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsentimentoUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsentimentoUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsentimentoUsuario.
     * @param {ConsentimentoUsuarioDeleteArgs} args - Arguments to delete one ConsentimentoUsuario.
     * @example
     * // Delete one ConsentimentoUsuario
     * const ConsentimentoUsuario = await prisma.consentimentoUsuario.delete({
     *   where: {
     *     // ... filter to delete one ConsentimentoUsuario
     *   }
     * })
     * 
     */
    delete<T extends ConsentimentoUsuarioDeleteArgs>(args: SelectSubset<T, ConsentimentoUsuarioDeleteArgs<ExtArgs>>): Prisma__ConsentimentoUsuarioClient<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsentimentoUsuario.
     * @param {ConsentimentoUsuarioUpdateArgs} args - Arguments to update one ConsentimentoUsuario.
     * @example
     * // Update one ConsentimentoUsuario
     * const consentimentoUsuario = await prisma.consentimentoUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsentimentoUsuarioUpdateArgs>(args: SelectSubset<T, ConsentimentoUsuarioUpdateArgs<ExtArgs>>): Prisma__ConsentimentoUsuarioClient<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsentimentoUsuarios.
     * @param {ConsentimentoUsuarioDeleteManyArgs} args - Arguments to filter ConsentimentoUsuarios to delete.
     * @example
     * // Delete a few ConsentimentoUsuarios
     * const { count } = await prisma.consentimentoUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsentimentoUsuarioDeleteManyArgs>(args?: SelectSubset<T, ConsentimentoUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsentimentoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentimentoUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsentimentoUsuarios
     * const consentimentoUsuario = await prisma.consentimentoUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsentimentoUsuarioUpdateManyArgs>(args: SelectSubset<T, ConsentimentoUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsentimentoUsuarios and returns the data updated in the database.
     * @param {ConsentimentoUsuarioUpdateManyAndReturnArgs} args - Arguments to update many ConsentimentoUsuarios.
     * @example
     * // Update many ConsentimentoUsuarios
     * const consentimentoUsuario = await prisma.consentimentoUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsentimentoUsuarios and only return the `id`
     * const consentimentoUsuarioWithIdOnly = await prisma.consentimentoUsuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsentimentoUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsentimentoUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsentimentoUsuario.
     * @param {ConsentimentoUsuarioUpsertArgs} args - Arguments to update or create a ConsentimentoUsuario.
     * @example
     * // Update or create a ConsentimentoUsuario
     * const consentimentoUsuario = await prisma.consentimentoUsuario.upsert({
     *   create: {
     *     // ... data to create a ConsentimentoUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsentimentoUsuario we want to update
     *   }
     * })
     */
    upsert<T extends ConsentimentoUsuarioUpsertArgs>(args: SelectSubset<T, ConsentimentoUsuarioUpsertArgs<ExtArgs>>): Prisma__ConsentimentoUsuarioClient<$Result.GetResult<Prisma.$ConsentimentoUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsentimentoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentimentoUsuarioCountArgs} args - Arguments to filter ConsentimentoUsuarios to count.
     * @example
     * // Count the number of ConsentimentoUsuarios
     * const count = await prisma.consentimentoUsuario.count({
     *   where: {
     *     // ... the filter for the ConsentimentoUsuarios we want to count
     *   }
     * })
    **/
    count<T extends ConsentimentoUsuarioCountArgs>(
      args?: Subset<T, ConsentimentoUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsentimentoUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsentimentoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentimentoUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsentimentoUsuarioAggregateArgs>(args: Subset<T, ConsentimentoUsuarioAggregateArgs>): Prisma.PrismaPromise<GetConsentimentoUsuarioAggregateType<T>>

    /**
     * Group by ConsentimentoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentimentoUsuarioGroupByArgs} args - Group by arguments.
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
      T extends ConsentimentoUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsentimentoUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: ConsentimentoUsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsentimentoUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsentimentoUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsentimentoUsuario model
   */
  readonly fields: ConsentimentoUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsentimentoUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsentimentoUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ConsentimentoUsuario model
   */
  interface ConsentimentoUsuarioFieldRefs {
    readonly id: FieldRef<"ConsentimentoUsuario", 'Int'>
    readonly userId: FieldRef<"ConsentimentoUsuario", 'String'>
    readonly aceitoEm: FieldRef<"ConsentimentoUsuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsentimentoUsuario findUnique
   */
  export type ConsentimentoUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which ConsentimentoUsuario to fetch.
     */
    where: ConsentimentoUsuarioWhereUniqueInput
  }

  /**
   * ConsentimentoUsuario findUniqueOrThrow
   */
  export type ConsentimentoUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which ConsentimentoUsuario to fetch.
     */
    where: ConsentimentoUsuarioWhereUniqueInput
  }

  /**
   * ConsentimentoUsuario findFirst
   */
  export type ConsentimentoUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which ConsentimentoUsuario to fetch.
     */
    where?: ConsentimentoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsentimentoUsuarios to fetch.
     */
    orderBy?: ConsentimentoUsuarioOrderByWithRelationInput | ConsentimentoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsentimentoUsuarios.
     */
    cursor?: ConsentimentoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsentimentoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsentimentoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsentimentoUsuarios.
     */
    distinct?: ConsentimentoUsuarioScalarFieldEnum | ConsentimentoUsuarioScalarFieldEnum[]
  }

  /**
   * ConsentimentoUsuario findFirstOrThrow
   */
  export type ConsentimentoUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which ConsentimentoUsuario to fetch.
     */
    where?: ConsentimentoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsentimentoUsuarios to fetch.
     */
    orderBy?: ConsentimentoUsuarioOrderByWithRelationInput | ConsentimentoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsentimentoUsuarios.
     */
    cursor?: ConsentimentoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsentimentoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsentimentoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsentimentoUsuarios.
     */
    distinct?: ConsentimentoUsuarioScalarFieldEnum | ConsentimentoUsuarioScalarFieldEnum[]
  }

  /**
   * ConsentimentoUsuario findMany
   */
  export type ConsentimentoUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which ConsentimentoUsuarios to fetch.
     */
    where?: ConsentimentoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsentimentoUsuarios to fetch.
     */
    orderBy?: ConsentimentoUsuarioOrderByWithRelationInput | ConsentimentoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsentimentoUsuarios.
     */
    cursor?: ConsentimentoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsentimentoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsentimentoUsuarios.
     */
    skip?: number
    distinct?: ConsentimentoUsuarioScalarFieldEnum | ConsentimentoUsuarioScalarFieldEnum[]
  }

  /**
   * ConsentimentoUsuario create
   */
  export type ConsentimentoUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a ConsentimentoUsuario.
     */
    data: XOR<ConsentimentoUsuarioCreateInput, ConsentimentoUsuarioUncheckedCreateInput>
  }

  /**
   * ConsentimentoUsuario createMany
   */
  export type ConsentimentoUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsentimentoUsuarios.
     */
    data: ConsentimentoUsuarioCreateManyInput | ConsentimentoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsentimentoUsuario createManyAndReturn
   */
  export type ConsentimentoUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many ConsentimentoUsuarios.
     */
    data: ConsentimentoUsuarioCreateManyInput | ConsentimentoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsentimentoUsuario update
   */
  export type ConsentimentoUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a ConsentimentoUsuario.
     */
    data: XOR<ConsentimentoUsuarioUpdateInput, ConsentimentoUsuarioUncheckedUpdateInput>
    /**
     * Choose, which ConsentimentoUsuario to update.
     */
    where: ConsentimentoUsuarioWhereUniqueInput
  }

  /**
   * ConsentimentoUsuario updateMany
   */
  export type ConsentimentoUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsentimentoUsuarios.
     */
    data: XOR<ConsentimentoUsuarioUpdateManyMutationInput, ConsentimentoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ConsentimentoUsuarios to update
     */
    where?: ConsentimentoUsuarioWhereInput
    /**
     * Limit how many ConsentimentoUsuarios to update.
     */
    limit?: number
  }

  /**
   * ConsentimentoUsuario updateManyAndReturn
   */
  export type ConsentimentoUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update ConsentimentoUsuarios.
     */
    data: XOR<ConsentimentoUsuarioUpdateManyMutationInput, ConsentimentoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ConsentimentoUsuarios to update
     */
    where?: ConsentimentoUsuarioWhereInput
    /**
     * Limit how many ConsentimentoUsuarios to update.
     */
    limit?: number
  }

  /**
   * ConsentimentoUsuario upsert
   */
  export type ConsentimentoUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the ConsentimentoUsuario to update in case it exists.
     */
    where: ConsentimentoUsuarioWhereUniqueInput
    /**
     * In case the ConsentimentoUsuario found by the `where` argument doesn't exist, create a new ConsentimentoUsuario with this data.
     */
    create: XOR<ConsentimentoUsuarioCreateInput, ConsentimentoUsuarioUncheckedCreateInput>
    /**
     * In case the ConsentimentoUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsentimentoUsuarioUpdateInput, ConsentimentoUsuarioUncheckedUpdateInput>
  }

  /**
   * ConsentimentoUsuario delete
   */
  export type ConsentimentoUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
    /**
     * Filter which ConsentimentoUsuario to delete.
     */
    where: ConsentimentoUsuarioWhereUniqueInput
  }

  /**
   * ConsentimentoUsuario deleteMany
   */
  export type ConsentimentoUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsentimentoUsuarios to delete
     */
    where?: ConsentimentoUsuarioWhereInput
    /**
     * Limit how many ConsentimentoUsuarios to delete.
     */
    limit?: number
  }

  /**
   * ConsentimentoUsuario without action
   */
  export type ConsentimentoUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsentimentoUsuario
     */
    select?: ConsentimentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsentimentoUsuario
     */
    omit?: ConsentimentoUsuarioOmit<ExtArgs> | null
  }


  /**
   * Model LayoutDashboard
   */

  export type AggregateLayoutDashboard = {
    _count: LayoutDashboardCountAggregateOutputType | null
    _avg: LayoutDashboardAvgAggregateOutputType | null
    _sum: LayoutDashboardSumAggregateOutputType | null
    _min: LayoutDashboardMinAggregateOutputType | null
    _max: LayoutDashboardMaxAggregateOutputType | null
  }

  export type LayoutDashboardAvgAggregateOutputType = {
    id: number | null
  }

  export type LayoutDashboardSumAggregateOutputType = {
    id: number | null
  }

  export type LayoutDashboardMinAggregateOutputType = {
    id: number | null
    userId: string | null
  }

  export type LayoutDashboardMaxAggregateOutputType = {
    id: number | null
    userId: string | null
  }

  export type LayoutDashboardCountAggregateOutputType = {
    id: number
    userId: number
    ordem: number
    _all: number
  }


  export type LayoutDashboardAvgAggregateInputType = {
    id?: true
  }

  export type LayoutDashboardSumAggregateInputType = {
    id?: true
  }

  export type LayoutDashboardMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LayoutDashboardMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LayoutDashboardCountAggregateInputType = {
    id?: true
    userId?: true
    ordem?: true
    _all?: true
  }

  export type LayoutDashboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayoutDashboard to aggregate.
     */
    where?: LayoutDashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayoutDashboards to fetch.
     */
    orderBy?: LayoutDashboardOrderByWithRelationInput | LayoutDashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayoutDashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayoutDashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayoutDashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LayoutDashboards
    **/
    _count?: true | LayoutDashboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayoutDashboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayoutDashboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayoutDashboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayoutDashboardMaxAggregateInputType
  }

  export type GetLayoutDashboardAggregateType<T extends LayoutDashboardAggregateArgs> = {
        [P in keyof T & keyof AggregateLayoutDashboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayoutDashboard[P]>
      : GetScalarType<T[P], AggregateLayoutDashboard[P]>
  }




  export type LayoutDashboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayoutDashboardWhereInput
    orderBy?: LayoutDashboardOrderByWithAggregationInput | LayoutDashboardOrderByWithAggregationInput[]
    by: LayoutDashboardScalarFieldEnum[] | LayoutDashboardScalarFieldEnum
    having?: LayoutDashboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayoutDashboardCountAggregateInputType | true
    _avg?: LayoutDashboardAvgAggregateInputType
    _sum?: LayoutDashboardSumAggregateInputType
    _min?: LayoutDashboardMinAggregateInputType
    _max?: LayoutDashboardMaxAggregateInputType
  }

  export type LayoutDashboardGroupByOutputType = {
    id: number
    userId: string
    ordem: string[]
    _count: LayoutDashboardCountAggregateOutputType | null
    _avg: LayoutDashboardAvgAggregateOutputType | null
    _sum: LayoutDashboardSumAggregateOutputType | null
    _min: LayoutDashboardMinAggregateOutputType | null
    _max: LayoutDashboardMaxAggregateOutputType | null
  }

  type GetLayoutDashboardGroupByPayload<T extends LayoutDashboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayoutDashboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayoutDashboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayoutDashboardGroupByOutputType[P]>
            : GetScalarType<T[P], LayoutDashboardGroupByOutputType[P]>
        }
      >
    >


  export type LayoutDashboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ordem?: boolean
  }, ExtArgs["result"]["layoutDashboard"]>

  export type LayoutDashboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ordem?: boolean
  }, ExtArgs["result"]["layoutDashboard"]>

  export type LayoutDashboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ordem?: boolean
  }, ExtArgs["result"]["layoutDashboard"]>

  export type LayoutDashboardSelectScalar = {
    id?: boolean
    userId?: boolean
    ordem?: boolean
  }

  export type LayoutDashboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ordem", ExtArgs["result"]["layoutDashboard"]>

  export type $LayoutDashboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LayoutDashboard"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      ordem: string[]
    }, ExtArgs["result"]["layoutDashboard"]>
    composites: {}
  }

  type LayoutDashboardGetPayload<S extends boolean | null | undefined | LayoutDashboardDefaultArgs> = $Result.GetResult<Prisma.$LayoutDashboardPayload, S>

  type LayoutDashboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayoutDashboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayoutDashboardCountAggregateInputType | true
    }

  export interface LayoutDashboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LayoutDashboard'], meta: { name: 'LayoutDashboard' } }
    /**
     * Find zero or one LayoutDashboard that matches the filter.
     * @param {LayoutDashboardFindUniqueArgs} args - Arguments to find a LayoutDashboard
     * @example
     * // Get one LayoutDashboard
     * const layoutDashboard = await prisma.layoutDashboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayoutDashboardFindUniqueArgs>(args: SelectSubset<T, LayoutDashboardFindUniqueArgs<ExtArgs>>): Prisma__LayoutDashboardClient<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LayoutDashboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayoutDashboardFindUniqueOrThrowArgs} args - Arguments to find a LayoutDashboard
     * @example
     * // Get one LayoutDashboard
     * const layoutDashboard = await prisma.layoutDashboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayoutDashboardFindUniqueOrThrowArgs>(args: SelectSubset<T, LayoutDashboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayoutDashboardClient<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayoutDashboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutDashboardFindFirstArgs} args - Arguments to find a LayoutDashboard
     * @example
     * // Get one LayoutDashboard
     * const layoutDashboard = await prisma.layoutDashboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayoutDashboardFindFirstArgs>(args?: SelectSubset<T, LayoutDashboardFindFirstArgs<ExtArgs>>): Prisma__LayoutDashboardClient<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayoutDashboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutDashboardFindFirstOrThrowArgs} args - Arguments to find a LayoutDashboard
     * @example
     * // Get one LayoutDashboard
     * const layoutDashboard = await prisma.layoutDashboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayoutDashboardFindFirstOrThrowArgs>(args?: SelectSubset<T, LayoutDashboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayoutDashboardClient<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LayoutDashboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutDashboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LayoutDashboards
     * const layoutDashboards = await prisma.layoutDashboard.findMany()
     * 
     * // Get first 10 LayoutDashboards
     * const layoutDashboards = await prisma.layoutDashboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layoutDashboardWithIdOnly = await prisma.layoutDashboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayoutDashboardFindManyArgs>(args?: SelectSubset<T, LayoutDashboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LayoutDashboard.
     * @param {LayoutDashboardCreateArgs} args - Arguments to create a LayoutDashboard.
     * @example
     * // Create one LayoutDashboard
     * const LayoutDashboard = await prisma.layoutDashboard.create({
     *   data: {
     *     // ... data to create a LayoutDashboard
     *   }
     * })
     * 
     */
    create<T extends LayoutDashboardCreateArgs>(args: SelectSubset<T, LayoutDashboardCreateArgs<ExtArgs>>): Prisma__LayoutDashboardClient<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LayoutDashboards.
     * @param {LayoutDashboardCreateManyArgs} args - Arguments to create many LayoutDashboards.
     * @example
     * // Create many LayoutDashboards
     * const layoutDashboard = await prisma.layoutDashboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayoutDashboardCreateManyArgs>(args?: SelectSubset<T, LayoutDashboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LayoutDashboards and returns the data saved in the database.
     * @param {LayoutDashboardCreateManyAndReturnArgs} args - Arguments to create many LayoutDashboards.
     * @example
     * // Create many LayoutDashboards
     * const layoutDashboard = await prisma.layoutDashboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LayoutDashboards and only return the `id`
     * const layoutDashboardWithIdOnly = await prisma.layoutDashboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayoutDashboardCreateManyAndReturnArgs>(args?: SelectSubset<T, LayoutDashboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LayoutDashboard.
     * @param {LayoutDashboardDeleteArgs} args - Arguments to delete one LayoutDashboard.
     * @example
     * // Delete one LayoutDashboard
     * const LayoutDashboard = await prisma.layoutDashboard.delete({
     *   where: {
     *     // ... filter to delete one LayoutDashboard
     *   }
     * })
     * 
     */
    delete<T extends LayoutDashboardDeleteArgs>(args: SelectSubset<T, LayoutDashboardDeleteArgs<ExtArgs>>): Prisma__LayoutDashboardClient<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LayoutDashboard.
     * @param {LayoutDashboardUpdateArgs} args - Arguments to update one LayoutDashboard.
     * @example
     * // Update one LayoutDashboard
     * const layoutDashboard = await prisma.layoutDashboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayoutDashboardUpdateArgs>(args: SelectSubset<T, LayoutDashboardUpdateArgs<ExtArgs>>): Prisma__LayoutDashboardClient<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LayoutDashboards.
     * @param {LayoutDashboardDeleteManyArgs} args - Arguments to filter LayoutDashboards to delete.
     * @example
     * // Delete a few LayoutDashboards
     * const { count } = await prisma.layoutDashboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayoutDashboardDeleteManyArgs>(args?: SelectSubset<T, LayoutDashboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayoutDashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutDashboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LayoutDashboards
     * const layoutDashboard = await prisma.layoutDashboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayoutDashboardUpdateManyArgs>(args: SelectSubset<T, LayoutDashboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayoutDashboards and returns the data updated in the database.
     * @param {LayoutDashboardUpdateManyAndReturnArgs} args - Arguments to update many LayoutDashboards.
     * @example
     * // Update many LayoutDashboards
     * const layoutDashboard = await prisma.layoutDashboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LayoutDashboards and only return the `id`
     * const layoutDashboardWithIdOnly = await prisma.layoutDashboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends LayoutDashboardUpdateManyAndReturnArgs>(args: SelectSubset<T, LayoutDashboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LayoutDashboard.
     * @param {LayoutDashboardUpsertArgs} args - Arguments to update or create a LayoutDashboard.
     * @example
     * // Update or create a LayoutDashboard
     * const layoutDashboard = await prisma.layoutDashboard.upsert({
     *   create: {
     *     // ... data to create a LayoutDashboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LayoutDashboard we want to update
     *   }
     * })
     */
    upsert<T extends LayoutDashboardUpsertArgs>(args: SelectSubset<T, LayoutDashboardUpsertArgs<ExtArgs>>): Prisma__LayoutDashboardClient<$Result.GetResult<Prisma.$LayoutDashboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LayoutDashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutDashboardCountArgs} args - Arguments to filter LayoutDashboards to count.
     * @example
     * // Count the number of LayoutDashboards
     * const count = await prisma.layoutDashboard.count({
     *   where: {
     *     // ... the filter for the LayoutDashboards we want to count
     *   }
     * })
    **/
    count<T extends LayoutDashboardCountArgs>(
      args?: Subset<T, LayoutDashboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayoutDashboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LayoutDashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutDashboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayoutDashboardAggregateArgs>(args: Subset<T, LayoutDashboardAggregateArgs>): Prisma.PrismaPromise<GetLayoutDashboardAggregateType<T>>

    /**
     * Group by LayoutDashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutDashboardGroupByArgs} args - Group by arguments.
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
      T extends LayoutDashboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayoutDashboardGroupByArgs['orderBy'] }
        : { orderBy?: LayoutDashboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LayoutDashboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayoutDashboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LayoutDashboard model
   */
  readonly fields: LayoutDashboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LayoutDashboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayoutDashboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LayoutDashboard model
   */
  interface LayoutDashboardFieldRefs {
    readonly id: FieldRef<"LayoutDashboard", 'Int'>
    readonly userId: FieldRef<"LayoutDashboard", 'String'>
    readonly ordem: FieldRef<"LayoutDashboard", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * LayoutDashboard findUnique
   */
  export type LayoutDashboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * Filter, which LayoutDashboard to fetch.
     */
    where: LayoutDashboardWhereUniqueInput
  }

  /**
   * LayoutDashboard findUniqueOrThrow
   */
  export type LayoutDashboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * Filter, which LayoutDashboard to fetch.
     */
    where: LayoutDashboardWhereUniqueInput
  }

  /**
   * LayoutDashboard findFirst
   */
  export type LayoutDashboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * Filter, which LayoutDashboard to fetch.
     */
    where?: LayoutDashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayoutDashboards to fetch.
     */
    orderBy?: LayoutDashboardOrderByWithRelationInput | LayoutDashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayoutDashboards.
     */
    cursor?: LayoutDashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayoutDashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayoutDashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayoutDashboards.
     */
    distinct?: LayoutDashboardScalarFieldEnum | LayoutDashboardScalarFieldEnum[]
  }

  /**
   * LayoutDashboard findFirstOrThrow
   */
  export type LayoutDashboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * Filter, which LayoutDashboard to fetch.
     */
    where?: LayoutDashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayoutDashboards to fetch.
     */
    orderBy?: LayoutDashboardOrderByWithRelationInput | LayoutDashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayoutDashboards.
     */
    cursor?: LayoutDashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayoutDashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayoutDashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayoutDashboards.
     */
    distinct?: LayoutDashboardScalarFieldEnum | LayoutDashboardScalarFieldEnum[]
  }

  /**
   * LayoutDashboard findMany
   */
  export type LayoutDashboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * Filter, which LayoutDashboards to fetch.
     */
    where?: LayoutDashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayoutDashboards to fetch.
     */
    orderBy?: LayoutDashboardOrderByWithRelationInput | LayoutDashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LayoutDashboards.
     */
    cursor?: LayoutDashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayoutDashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayoutDashboards.
     */
    skip?: number
    distinct?: LayoutDashboardScalarFieldEnum | LayoutDashboardScalarFieldEnum[]
  }

  /**
   * LayoutDashboard create
   */
  export type LayoutDashboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * The data needed to create a LayoutDashboard.
     */
    data: XOR<LayoutDashboardCreateInput, LayoutDashboardUncheckedCreateInput>
  }

  /**
   * LayoutDashboard createMany
   */
  export type LayoutDashboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LayoutDashboards.
     */
    data: LayoutDashboardCreateManyInput | LayoutDashboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LayoutDashboard createManyAndReturn
   */
  export type LayoutDashboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * The data used to create many LayoutDashboards.
     */
    data: LayoutDashboardCreateManyInput | LayoutDashboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LayoutDashboard update
   */
  export type LayoutDashboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * The data needed to update a LayoutDashboard.
     */
    data: XOR<LayoutDashboardUpdateInput, LayoutDashboardUncheckedUpdateInput>
    /**
     * Choose, which LayoutDashboard to update.
     */
    where: LayoutDashboardWhereUniqueInput
  }

  /**
   * LayoutDashboard updateMany
   */
  export type LayoutDashboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LayoutDashboards.
     */
    data: XOR<LayoutDashboardUpdateManyMutationInput, LayoutDashboardUncheckedUpdateManyInput>
    /**
     * Filter which LayoutDashboards to update
     */
    where?: LayoutDashboardWhereInput
    /**
     * Limit how many LayoutDashboards to update.
     */
    limit?: number
  }

  /**
   * LayoutDashboard updateManyAndReturn
   */
  export type LayoutDashboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * The data used to update LayoutDashboards.
     */
    data: XOR<LayoutDashboardUpdateManyMutationInput, LayoutDashboardUncheckedUpdateManyInput>
    /**
     * Filter which LayoutDashboards to update
     */
    where?: LayoutDashboardWhereInput
    /**
     * Limit how many LayoutDashboards to update.
     */
    limit?: number
  }

  /**
   * LayoutDashboard upsert
   */
  export type LayoutDashboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * The filter to search for the LayoutDashboard to update in case it exists.
     */
    where: LayoutDashboardWhereUniqueInput
    /**
     * In case the LayoutDashboard found by the `where` argument doesn't exist, create a new LayoutDashboard with this data.
     */
    create: XOR<LayoutDashboardCreateInput, LayoutDashboardUncheckedCreateInput>
    /**
     * In case the LayoutDashboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayoutDashboardUpdateInput, LayoutDashboardUncheckedUpdateInput>
  }

  /**
   * LayoutDashboard delete
   */
  export type LayoutDashboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
    /**
     * Filter which LayoutDashboard to delete.
     */
    where: LayoutDashboardWhereUniqueInput
  }

  /**
   * LayoutDashboard deleteMany
   */
  export type LayoutDashboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayoutDashboards to delete
     */
    where?: LayoutDashboardWhereInput
    /**
     * Limit how many LayoutDashboards to delete.
     */
    limit?: number
  }

  /**
   * LayoutDashboard without action
   */
  export type LayoutDashboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutDashboard
     */
    select?: LayoutDashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayoutDashboard
     */
    omit?: LayoutDashboardOmit<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificacaoSumAggregateOutputType = {
    id: number | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: number | null
    userId: string | null
    mensagem: string | null
    lida: boolean | null
    criadoEm: Date | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    mensagem: string | null
    lida: boolean | null
    criadoEm: Date | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    userId: number
    mensagem: number
    lida: number
    criadoEm: number
    _all: number
  }


  export type NotificacaoAvgAggregateInputType = {
    id?: true
  }

  export type NotificacaoSumAggregateInputType = {
    id?: true
  }

  export type NotificacaoMinAggregateInputType = {
    id?: true
    userId?: true
    mensagem?: true
    lida?: true
    criadoEm?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    userId?: true
    mensagem?: true
    lida?: true
    criadoEm?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    userId?: true
    mensagem?: true
    lida?: true
    criadoEm?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _avg?: NotificacaoAvgAggregateInputType
    _sum?: NotificacaoSumAggregateInputType
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: number
    userId: string
    mensagem: string
    lida: boolean
    criadoEm: Date
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mensagem?: boolean
    lida?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mensagem?: boolean
    lida?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mensagem?: boolean
    lida?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectScalar = {
    id?: boolean
    userId?: boolean
    mensagem?: boolean
    lida?: boolean
    criadoEm?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mensagem" | "lida" | "criadoEm", ExtArgs["result"]["notificacao"]>

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      mensagem: string
      lida: boolean
      criadoEm: Date
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacaos and returns the data saved in the database.
     * @param {NotificacaoCreateManyAndReturnArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos and returns the data updated in the database.
     * @param {NotificacaoUpdateManyAndReturnArgs} args - Arguments to update many Notificacaos.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
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
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'Int'>
    readonly userId: FieldRef<"Notificacao", 'String'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly lida: FieldRef<"Notificacao", 'Boolean'>
    readonly criadoEm: FieldRef<"Notificacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao createManyAndReturn
   */
  export type NotificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao updateManyAndReturn
   */
  export type NotificacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
  }


  /**
   * Model PushSubscription
   */

  export type AggregatePushSubscription = {
    _count: PushSubscriptionCountAggregateOutputType | null
    _avg: PushSubscriptionAvgAggregateOutputType | null
    _sum: PushSubscriptionSumAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  export type PushSubscriptionAvgAggregateOutputType = {
    id: number | null
  }

  export type PushSubscriptionSumAggregateOutputType = {
    id: number | null
  }

  export type PushSubscriptionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    criadoEm: Date | null
  }

  export type PushSubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    endpoint: string | null
    p256dh: string | null
    auth: string | null
    criadoEm: Date | null
  }

  export type PushSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    endpoint: number
    p256dh: number
    auth: number
    criadoEm: number
    _all: number
  }


  export type PushSubscriptionAvgAggregateInputType = {
    id?: true
  }

  export type PushSubscriptionSumAggregateInputType = {
    id?: true
  }

  export type PushSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    criadoEm?: true
  }

  export type PushSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    criadoEm?: true
  }

  export type PushSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    p256dh?: true
    auth?: true
    criadoEm?: true
    _all?: true
  }

  export type PushSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscription to aggregate.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushSubscriptions
    **/
    _count?: true | PushSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PushSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PushSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type GetPushSubscriptionAggregateType<T extends PushSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePushSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushSubscription[P]>
      : GetScalarType<T[P], AggregatePushSubscription[P]>
  }




  export type PushSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithAggregationInput | PushSubscriptionOrderByWithAggregationInput[]
    by: PushSubscriptionScalarFieldEnum[] | PushSubscriptionScalarFieldEnum
    having?: PushSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushSubscriptionCountAggregateInputType | true
    _avg?: PushSubscriptionAvgAggregateInputType
    _sum?: PushSubscriptionSumAggregateInputType
    _min?: PushSubscriptionMinAggregateInputType
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type PushSubscriptionGroupByOutputType = {
    id: number
    userId: string
    endpoint: string
    p256dh: string
    auth: string
    criadoEm: Date
    _count: PushSubscriptionCountAggregateOutputType | null
    _avg: PushSubscriptionAvgAggregateOutputType | null
    _sum: PushSubscriptionSumAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  type GetPushSubscriptionGroupByPayload<T extends PushSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type PushSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["pushSubscription"]>

  export type PushSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    p256dh?: boolean
    auth?: boolean
    criadoEm?: boolean
  }

  export type PushSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "endpoint" | "p256dh" | "auth" | "criadoEm", ExtArgs["result"]["pushSubscription"]>

  export type $PushSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushSubscription"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      endpoint: string
      p256dh: string
      auth: string
      criadoEm: Date
    }, ExtArgs["result"]["pushSubscription"]>
    composites: {}
  }

  type PushSubscriptionGetPayload<S extends boolean | null | undefined | PushSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$PushSubscriptionPayload, S>

  type PushSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PushSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PushSubscriptionCountAggregateInputType | true
    }

  export interface PushSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushSubscription'], meta: { name: 'PushSubscription' } }
    /**
     * Find zero or one PushSubscription that matches the filter.
     * @param {PushSubscriptionFindUniqueArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushSubscriptionFindUniqueArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PushSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PushSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushSubscriptionFindFirstArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PushSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany()
     * 
     * // Get first 10 PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushSubscriptionFindManyArgs>(args?: SelectSubset<T, PushSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PushSubscription.
     * @param {PushSubscriptionCreateArgs} args - Arguments to create a PushSubscription.
     * @example
     * // Create one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.create({
     *   data: {
     *     // ... data to create a PushSubscription
     *   }
     * })
     * 
     */
    create<T extends PushSubscriptionCreateArgs>(args: SelectSubset<T, PushSubscriptionCreateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PushSubscriptions.
     * @param {PushSubscriptionCreateManyArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushSubscriptionCreateManyArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PushSubscriptions and returns the data saved in the database.
     * @param {PushSubscriptionCreateManyAndReturnArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PushSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PushSubscription.
     * @param {PushSubscriptionDeleteArgs} args - Arguments to delete one PushSubscription.
     * @example
     * // Delete one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.delete({
     *   where: {
     *     // ... filter to delete one PushSubscription
     *   }
     * })
     * 
     */
    delete<T extends PushSubscriptionDeleteArgs>(args: SelectSubset<T, PushSubscriptionDeleteArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PushSubscription.
     * @param {PushSubscriptionUpdateArgs} args - Arguments to update one PushSubscription.
     * @example
     * // Update one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushSubscriptionUpdateArgs>(args: SelectSubset<T, PushSubscriptionUpdateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PushSubscriptions.
     * @param {PushSubscriptionDeleteManyArgs} args - Arguments to filter PushSubscriptions to delete.
     * @example
     * // Delete a few PushSubscriptions
     * const { count } = await prisma.pushSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushSubscriptionDeleteManyArgs>(args?: SelectSubset<T, PushSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushSubscriptionUpdateManyArgs>(args: SelectSubset<T, PushSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushSubscriptions and returns the data updated in the database.
     * @param {PushSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many PushSubscriptions.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PushSubscriptions and only return the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends PushSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PushSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PushSubscription.
     * @param {PushSubscriptionUpsertArgs} args - Arguments to update or create a PushSubscription.
     * @example
     * // Update or create a PushSubscription
     * const pushSubscription = await prisma.pushSubscription.upsert({
     *   create: {
     *     // ... data to create a PushSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushSubscription we want to update
     *   }
     * })
     */
    upsert<T extends PushSubscriptionUpsertArgs>(args: SelectSubset<T, PushSubscriptionUpsertArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionCountArgs} args - Arguments to filter PushSubscriptions to count.
     * @example
     * // Count the number of PushSubscriptions
     * const count = await prisma.pushSubscription.count({
     *   where: {
     *     // ... the filter for the PushSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends PushSubscriptionCountArgs>(
      args?: Subset<T, PushSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PushSubscriptionAggregateArgs>(args: Subset<T, PushSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetPushSubscriptionAggregateType<T>>

    /**
     * Group by PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends PushSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: PushSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PushSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushSubscription model
   */
  readonly fields: PushSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PushSubscription model
   */
  interface PushSubscriptionFieldRefs {
    readonly id: FieldRef<"PushSubscription", 'Int'>
    readonly userId: FieldRef<"PushSubscription", 'String'>
    readonly endpoint: FieldRef<"PushSubscription", 'String'>
    readonly p256dh: FieldRef<"PushSubscription", 'String'>
    readonly auth: FieldRef<"PushSubscription", 'String'>
    readonly criadoEm: FieldRef<"PushSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PushSubscription findUnique
   */
  export type PushSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findUniqueOrThrow
   */
  export type PushSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findFirst
   */
  export type PushSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findFirstOrThrow
   */
  export type PushSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findMany
   */
  export type PushSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which PushSubscriptions to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription create
   */
  export type PushSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to create a PushSubscription.
     */
    data: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
  }

  /**
   * PushSubscription createMany
   */
  export type PushSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushSubscription createManyAndReturn
   */
  export type PushSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushSubscription update
   */
  export type PushSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to update a PushSubscription.
     */
    data: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which PushSubscription to update.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription updateMany
   */
  export type PushSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number
  }

  /**
   * PushSubscription updateManyAndReturn
   */
  export type PushSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number
  }

  /**
   * PushSubscription upsert
   */
  export type PushSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * The filter to search for the PushSubscription to update in case it exists.
     */
    where: PushSubscriptionWhereUniqueInput
    /**
     * In case the PushSubscription found by the `where` argument doesn't exist, create a new PushSubscription with this data.
     */
    create: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
    /**
     * In case the PushSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
  }

  /**
   * PushSubscription delete
   */
  export type PushSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Filter which PushSubscription to delete.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription deleteMany
   */
  export type PushSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscriptions to delete
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * PushSubscription without action
   */
  export type PushSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
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


  export const TransacaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    data: 'data',
    tipo: 'tipo',
    valor: 'valor',
    icone: 'icone',
    cor: 'cor',
    userId: 'userId'
  };

  export type TransacaoScalarFieldEnum = (typeof TransacaoScalarFieldEnum)[keyof typeof TransacaoScalarFieldEnum]


  export const MetaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    valorAtual: 'valorAtual',
    valorObjetivo: 'valorObjetivo',
    possuiPrazo: 'possuiPrazo',
    dataLimite: 'dataLimite',
    icone: 'icone',
    dataCriacao: 'dataCriacao',
    userId: 'userId'
  };

  export type MetaScalarFieldEnum = (typeof MetaScalarFieldEnum)[keyof typeof MetaScalarFieldEnum]


  export const LimiteOrcamentoScalarFieldEnum: {
    id: 'id',
    categoria: 'categoria',
    limite: 'limite',
    cor: 'cor',
    userId: 'userId'
  };

  export type LimiteOrcamentoScalarFieldEnum = (typeof LimiteOrcamentoScalarFieldEnum)[keyof typeof LimiteOrcamentoScalarFieldEnum]


  export const UsuarioPinScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pinHash: 'pinHash',
    tentativas: 'tentativas',
    bloqueadoAte: 'bloqueadoAte',
    criadoEm: 'criadoEm'
  };

  export type UsuarioPinScalarFieldEnum = (typeof UsuarioPinScalarFieldEnum)[keyof typeof UsuarioPinScalarFieldEnum]


  export const DispositivoConfiavelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    criadoEm: 'criadoEm',
    expiraEm: 'expiraEm'
  };

  export type DispositivoConfiavelScalarFieldEnum = (typeof DispositivoConfiavelScalarFieldEnum)[keyof typeof DispositivoConfiavelScalarFieldEnum]


  export const LogLoginScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ip: 'ip',
    sucesso: 'sucesso',
    criadoEm: 'criadoEm'
  };

  export type LogLoginScalarFieldEnum = (typeof LogLoginScalarFieldEnum)[keyof typeof LogLoginScalarFieldEnum]


  export const ConsentimentoUsuarioScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    aceitoEm: 'aceitoEm'
  };

  export type ConsentimentoUsuarioScalarFieldEnum = (typeof ConsentimentoUsuarioScalarFieldEnum)[keyof typeof ConsentimentoUsuarioScalarFieldEnum]


  export const LayoutDashboardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ordem: 'ordem'
  };

  export type LayoutDashboardScalarFieldEnum = (typeof LayoutDashboardScalarFieldEnum)[keyof typeof LayoutDashboardScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mensagem: 'mensagem',
    lida: 'lida',
    criadoEm: 'criadoEm'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const PushSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    endpoint: 'endpoint',
    p256dh: 'p256dh',
    auth: 'auth',
    criadoEm: 'criadoEm'
  };

  export type PushSubscriptionScalarFieldEnum = (typeof PushSubscriptionScalarFieldEnum)[keyof typeof PushSubscriptionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type TransacaoWhereInput = {
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    id?: IntFilter<"Transacao"> | number
    nome?: StringFilter<"Transacao"> | string
    data?: DateTimeFilter<"Transacao"> | Date | string
    tipo?: StringFilter<"Transacao"> | string
    valor?: StringFilter<"Transacao"> | string
    icone?: StringFilter<"Transacao"> | string
    cor?: StringFilter<"Transacao"> | string
    userId?: StringFilter<"Transacao"> | string
  }

  export type TransacaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    icone?: SortOrder
    cor?: SortOrder
    userId?: SortOrder
  }

  export type TransacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    nome?: StringFilter<"Transacao"> | string
    data?: DateTimeFilter<"Transacao"> | Date | string
    tipo?: StringFilter<"Transacao"> | string
    valor?: StringFilter<"Transacao"> | string
    icone?: StringFilter<"Transacao"> | string
    cor?: StringFilter<"Transacao"> | string
    userId?: StringFilter<"Transacao"> | string
  }, "id">

  export type TransacaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    icone?: SortOrder
    cor?: SortOrder
    userId?: SortOrder
    _count?: TransacaoCountOrderByAggregateInput
    _avg?: TransacaoAvgOrderByAggregateInput
    _max?: TransacaoMaxOrderByAggregateInput
    _min?: TransacaoMinOrderByAggregateInput
    _sum?: TransacaoSumOrderByAggregateInput
  }

  export type TransacaoScalarWhereWithAggregatesInput = {
    AND?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    OR?: TransacaoScalarWhereWithAggregatesInput[]
    NOT?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transacao"> | number
    nome?: StringWithAggregatesFilter<"Transacao"> | string
    data?: DateTimeWithAggregatesFilter<"Transacao"> | Date | string
    tipo?: StringWithAggregatesFilter<"Transacao"> | string
    valor?: StringWithAggregatesFilter<"Transacao"> | string
    icone?: StringWithAggregatesFilter<"Transacao"> | string
    cor?: StringWithAggregatesFilter<"Transacao"> | string
    userId?: StringWithAggregatesFilter<"Transacao"> | string
  }

  export type MetaWhereInput = {
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    id?: IntFilter<"Meta"> | number
    nome?: StringFilter<"Meta"> | string
    valorAtual?: StringFilter<"Meta"> | string
    valorObjetivo?: StringFilter<"Meta"> | string
    possuiPrazo?: BoolFilter<"Meta"> | boolean
    dataLimite?: DateTimeNullableFilter<"Meta"> | Date | string | null
    icone?: StringFilter<"Meta"> | string
    dataCriacao?: DateTimeFilter<"Meta"> | Date | string
    userId?: StringFilter<"Meta"> | string
  }

  export type MetaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    valorAtual?: SortOrder
    valorObjetivo?: SortOrder
    possuiPrazo?: SortOrder
    dataLimite?: SortOrderInput | SortOrder
    icone?: SortOrder
    dataCriacao?: SortOrder
    userId?: SortOrder
  }

  export type MetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    nome?: StringFilter<"Meta"> | string
    valorAtual?: StringFilter<"Meta"> | string
    valorObjetivo?: StringFilter<"Meta"> | string
    possuiPrazo?: BoolFilter<"Meta"> | boolean
    dataLimite?: DateTimeNullableFilter<"Meta"> | Date | string | null
    icone?: StringFilter<"Meta"> | string
    dataCriacao?: DateTimeFilter<"Meta"> | Date | string
    userId?: StringFilter<"Meta"> | string
  }, "id">

  export type MetaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    valorAtual?: SortOrder
    valorObjetivo?: SortOrder
    possuiPrazo?: SortOrder
    dataLimite?: SortOrderInput | SortOrder
    icone?: SortOrder
    dataCriacao?: SortOrder
    userId?: SortOrder
    _count?: MetaCountOrderByAggregateInput
    _avg?: MetaAvgOrderByAggregateInput
    _max?: MetaMaxOrderByAggregateInput
    _min?: MetaMinOrderByAggregateInput
    _sum?: MetaSumOrderByAggregateInput
  }

  export type MetaScalarWhereWithAggregatesInput = {
    AND?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    OR?: MetaScalarWhereWithAggregatesInput[]
    NOT?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meta"> | number
    nome?: StringWithAggregatesFilter<"Meta"> | string
    valorAtual?: StringWithAggregatesFilter<"Meta"> | string
    valorObjetivo?: StringWithAggregatesFilter<"Meta"> | string
    possuiPrazo?: BoolWithAggregatesFilter<"Meta"> | boolean
    dataLimite?: DateTimeNullableWithAggregatesFilter<"Meta"> | Date | string | null
    icone?: StringWithAggregatesFilter<"Meta"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
    userId?: StringWithAggregatesFilter<"Meta"> | string
  }

  export type LimiteOrcamentoWhereInput = {
    AND?: LimiteOrcamentoWhereInput | LimiteOrcamentoWhereInput[]
    OR?: LimiteOrcamentoWhereInput[]
    NOT?: LimiteOrcamentoWhereInput | LimiteOrcamentoWhereInput[]
    id?: IntFilter<"LimiteOrcamento"> | number
    categoria?: StringFilter<"LimiteOrcamento"> | string
    limite?: StringFilter<"LimiteOrcamento"> | string
    cor?: StringFilter<"LimiteOrcamento"> | string
    userId?: StringFilter<"LimiteOrcamento"> | string
  }

  export type LimiteOrcamentoOrderByWithRelationInput = {
    id?: SortOrder
    categoria?: SortOrder
    limite?: SortOrder
    cor?: SortOrder
    userId?: SortOrder
  }

  export type LimiteOrcamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    categoria_userId?: LimiteOrcamentoCategoriaUserIdCompoundUniqueInput
    AND?: LimiteOrcamentoWhereInput | LimiteOrcamentoWhereInput[]
    OR?: LimiteOrcamentoWhereInput[]
    NOT?: LimiteOrcamentoWhereInput | LimiteOrcamentoWhereInput[]
    categoria?: StringFilter<"LimiteOrcamento"> | string
    limite?: StringFilter<"LimiteOrcamento"> | string
    cor?: StringFilter<"LimiteOrcamento"> | string
    userId?: StringFilter<"LimiteOrcamento"> | string
  }, "id" | "categoria_userId">

  export type LimiteOrcamentoOrderByWithAggregationInput = {
    id?: SortOrder
    categoria?: SortOrder
    limite?: SortOrder
    cor?: SortOrder
    userId?: SortOrder
    _count?: LimiteOrcamentoCountOrderByAggregateInput
    _avg?: LimiteOrcamentoAvgOrderByAggregateInput
    _max?: LimiteOrcamentoMaxOrderByAggregateInput
    _min?: LimiteOrcamentoMinOrderByAggregateInput
    _sum?: LimiteOrcamentoSumOrderByAggregateInput
  }

  export type LimiteOrcamentoScalarWhereWithAggregatesInput = {
    AND?: LimiteOrcamentoScalarWhereWithAggregatesInput | LimiteOrcamentoScalarWhereWithAggregatesInput[]
    OR?: LimiteOrcamentoScalarWhereWithAggregatesInput[]
    NOT?: LimiteOrcamentoScalarWhereWithAggregatesInput | LimiteOrcamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LimiteOrcamento"> | number
    categoria?: StringWithAggregatesFilter<"LimiteOrcamento"> | string
    limite?: StringWithAggregatesFilter<"LimiteOrcamento"> | string
    cor?: StringWithAggregatesFilter<"LimiteOrcamento"> | string
    userId?: StringWithAggregatesFilter<"LimiteOrcamento"> | string
  }

  export type UsuarioPinWhereInput = {
    AND?: UsuarioPinWhereInput | UsuarioPinWhereInput[]
    OR?: UsuarioPinWhereInput[]
    NOT?: UsuarioPinWhereInput | UsuarioPinWhereInput[]
    id?: IntFilter<"UsuarioPin"> | number
    userId?: StringFilter<"UsuarioPin"> | string
    pinHash?: StringFilter<"UsuarioPin"> | string
    tentativas?: IntFilter<"UsuarioPin"> | number
    bloqueadoAte?: DateTimeNullableFilter<"UsuarioPin"> | Date | string | null
    criadoEm?: DateTimeFilter<"UsuarioPin"> | Date | string
  }

  export type UsuarioPinOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pinHash?: SortOrder
    tentativas?: SortOrder
    bloqueadoAte?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioPinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UsuarioPinWhereInput | UsuarioPinWhereInput[]
    OR?: UsuarioPinWhereInput[]
    NOT?: UsuarioPinWhereInput | UsuarioPinWhereInput[]
    pinHash?: StringFilter<"UsuarioPin"> | string
    tentativas?: IntFilter<"UsuarioPin"> | number
    bloqueadoAte?: DateTimeNullableFilter<"UsuarioPin"> | Date | string | null
    criadoEm?: DateTimeFilter<"UsuarioPin"> | Date | string
  }, "id" | "userId">

  export type UsuarioPinOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pinHash?: SortOrder
    tentativas?: SortOrder
    bloqueadoAte?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: UsuarioPinCountOrderByAggregateInput
    _avg?: UsuarioPinAvgOrderByAggregateInput
    _max?: UsuarioPinMaxOrderByAggregateInput
    _min?: UsuarioPinMinOrderByAggregateInput
    _sum?: UsuarioPinSumOrderByAggregateInput
  }

  export type UsuarioPinScalarWhereWithAggregatesInput = {
    AND?: UsuarioPinScalarWhereWithAggregatesInput | UsuarioPinScalarWhereWithAggregatesInput[]
    OR?: UsuarioPinScalarWhereWithAggregatesInput[]
    NOT?: UsuarioPinScalarWhereWithAggregatesInput | UsuarioPinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuarioPin"> | number
    userId?: StringWithAggregatesFilter<"UsuarioPin"> | string
    pinHash?: StringWithAggregatesFilter<"UsuarioPin"> | string
    tentativas?: IntWithAggregatesFilter<"UsuarioPin"> | number
    bloqueadoAte?: DateTimeNullableWithAggregatesFilter<"UsuarioPin"> | Date | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"UsuarioPin"> | Date | string
  }

  export type DispositivoConfiavelWhereInput = {
    AND?: DispositivoConfiavelWhereInput | DispositivoConfiavelWhereInput[]
    OR?: DispositivoConfiavelWhereInput[]
    NOT?: DispositivoConfiavelWhereInput | DispositivoConfiavelWhereInput[]
    id?: IntFilter<"DispositivoConfiavel"> | number
    userId?: StringFilter<"DispositivoConfiavel"> | string
    tokenHash?: StringFilter<"DispositivoConfiavel"> | string
    criadoEm?: DateTimeFilter<"DispositivoConfiavel"> | Date | string
    expiraEm?: DateTimeFilter<"DispositivoConfiavel"> | Date | string
  }

  export type DispositivoConfiavelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    criadoEm?: SortOrder
    expiraEm?: SortOrder
  }

  export type DispositivoConfiavelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DispositivoConfiavelWhereInput | DispositivoConfiavelWhereInput[]
    OR?: DispositivoConfiavelWhereInput[]
    NOT?: DispositivoConfiavelWhereInput | DispositivoConfiavelWhereInput[]
    userId?: StringFilter<"DispositivoConfiavel"> | string
    tokenHash?: StringFilter<"DispositivoConfiavel"> | string
    criadoEm?: DateTimeFilter<"DispositivoConfiavel"> | Date | string
    expiraEm?: DateTimeFilter<"DispositivoConfiavel"> | Date | string
  }, "id">

  export type DispositivoConfiavelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    criadoEm?: SortOrder
    expiraEm?: SortOrder
    _count?: DispositivoConfiavelCountOrderByAggregateInput
    _avg?: DispositivoConfiavelAvgOrderByAggregateInput
    _max?: DispositivoConfiavelMaxOrderByAggregateInput
    _min?: DispositivoConfiavelMinOrderByAggregateInput
    _sum?: DispositivoConfiavelSumOrderByAggregateInput
  }

  export type DispositivoConfiavelScalarWhereWithAggregatesInput = {
    AND?: DispositivoConfiavelScalarWhereWithAggregatesInput | DispositivoConfiavelScalarWhereWithAggregatesInput[]
    OR?: DispositivoConfiavelScalarWhereWithAggregatesInput[]
    NOT?: DispositivoConfiavelScalarWhereWithAggregatesInput | DispositivoConfiavelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DispositivoConfiavel"> | number
    userId?: StringWithAggregatesFilter<"DispositivoConfiavel"> | string
    tokenHash?: StringWithAggregatesFilter<"DispositivoConfiavel"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"DispositivoConfiavel"> | Date | string
    expiraEm?: DateTimeWithAggregatesFilter<"DispositivoConfiavel"> | Date | string
  }

  export type LogLoginWhereInput = {
    AND?: LogLoginWhereInput | LogLoginWhereInput[]
    OR?: LogLoginWhereInput[]
    NOT?: LogLoginWhereInput | LogLoginWhereInput[]
    id?: IntFilter<"LogLogin"> | number
    userId?: StringFilter<"LogLogin"> | string
    ip?: StringNullableFilter<"LogLogin"> | string | null
    sucesso?: BoolFilter<"LogLogin"> | boolean
    criadoEm?: DateTimeFilter<"LogLogin"> | Date | string
  }

  export type LogLoginOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrderInput | SortOrder
    sucesso?: SortOrder
    criadoEm?: SortOrder
  }

  export type LogLoginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogLoginWhereInput | LogLoginWhereInput[]
    OR?: LogLoginWhereInput[]
    NOT?: LogLoginWhereInput | LogLoginWhereInput[]
    userId?: StringFilter<"LogLogin"> | string
    ip?: StringNullableFilter<"LogLogin"> | string | null
    sucesso?: BoolFilter<"LogLogin"> | boolean
    criadoEm?: DateTimeFilter<"LogLogin"> | Date | string
  }, "id">

  export type LogLoginOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrderInput | SortOrder
    sucesso?: SortOrder
    criadoEm?: SortOrder
    _count?: LogLoginCountOrderByAggregateInput
    _avg?: LogLoginAvgOrderByAggregateInput
    _max?: LogLoginMaxOrderByAggregateInput
    _min?: LogLoginMinOrderByAggregateInput
    _sum?: LogLoginSumOrderByAggregateInput
  }

  export type LogLoginScalarWhereWithAggregatesInput = {
    AND?: LogLoginScalarWhereWithAggregatesInput | LogLoginScalarWhereWithAggregatesInput[]
    OR?: LogLoginScalarWhereWithAggregatesInput[]
    NOT?: LogLoginScalarWhereWithAggregatesInput | LogLoginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LogLogin"> | number
    userId?: StringWithAggregatesFilter<"LogLogin"> | string
    ip?: StringNullableWithAggregatesFilter<"LogLogin"> | string | null
    sucesso?: BoolWithAggregatesFilter<"LogLogin"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"LogLogin"> | Date | string
  }

  export type ConsentimentoUsuarioWhereInput = {
    AND?: ConsentimentoUsuarioWhereInput | ConsentimentoUsuarioWhereInput[]
    OR?: ConsentimentoUsuarioWhereInput[]
    NOT?: ConsentimentoUsuarioWhereInput | ConsentimentoUsuarioWhereInput[]
    id?: IntFilter<"ConsentimentoUsuario"> | number
    userId?: StringFilter<"ConsentimentoUsuario"> | string
    aceitoEm?: DateTimeFilter<"ConsentimentoUsuario"> | Date | string
  }

  export type ConsentimentoUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    aceitoEm?: SortOrder
  }

  export type ConsentimentoUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: ConsentimentoUsuarioWhereInput | ConsentimentoUsuarioWhereInput[]
    OR?: ConsentimentoUsuarioWhereInput[]
    NOT?: ConsentimentoUsuarioWhereInput | ConsentimentoUsuarioWhereInput[]
    aceitoEm?: DateTimeFilter<"ConsentimentoUsuario"> | Date | string
  }, "id" | "userId">

  export type ConsentimentoUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    aceitoEm?: SortOrder
    _count?: ConsentimentoUsuarioCountOrderByAggregateInput
    _avg?: ConsentimentoUsuarioAvgOrderByAggregateInput
    _max?: ConsentimentoUsuarioMaxOrderByAggregateInput
    _min?: ConsentimentoUsuarioMinOrderByAggregateInput
    _sum?: ConsentimentoUsuarioSumOrderByAggregateInput
  }

  export type ConsentimentoUsuarioScalarWhereWithAggregatesInput = {
    AND?: ConsentimentoUsuarioScalarWhereWithAggregatesInput | ConsentimentoUsuarioScalarWhereWithAggregatesInput[]
    OR?: ConsentimentoUsuarioScalarWhereWithAggregatesInput[]
    NOT?: ConsentimentoUsuarioScalarWhereWithAggregatesInput | ConsentimentoUsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConsentimentoUsuario"> | number
    userId?: StringWithAggregatesFilter<"ConsentimentoUsuario"> | string
    aceitoEm?: DateTimeWithAggregatesFilter<"ConsentimentoUsuario"> | Date | string
  }

  export type LayoutDashboardWhereInput = {
    AND?: LayoutDashboardWhereInput | LayoutDashboardWhereInput[]
    OR?: LayoutDashboardWhereInput[]
    NOT?: LayoutDashboardWhereInput | LayoutDashboardWhereInput[]
    id?: IntFilter<"LayoutDashboard"> | number
    userId?: StringFilter<"LayoutDashboard"> | string
    ordem?: StringNullableListFilter<"LayoutDashboard">
  }

  export type LayoutDashboardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ordem?: SortOrder
  }

  export type LayoutDashboardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: LayoutDashboardWhereInput | LayoutDashboardWhereInput[]
    OR?: LayoutDashboardWhereInput[]
    NOT?: LayoutDashboardWhereInput | LayoutDashboardWhereInput[]
    ordem?: StringNullableListFilter<"LayoutDashboard">
  }, "id" | "userId">

  export type LayoutDashboardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ordem?: SortOrder
    _count?: LayoutDashboardCountOrderByAggregateInput
    _avg?: LayoutDashboardAvgOrderByAggregateInput
    _max?: LayoutDashboardMaxOrderByAggregateInput
    _min?: LayoutDashboardMinOrderByAggregateInput
    _sum?: LayoutDashboardSumOrderByAggregateInput
  }

  export type LayoutDashboardScalarWhereWithAggregatesInput = {
    AND?: LayoutDashboardScalarWhereWithAggregatesInput | LayoutDashboardScalarWhereWithAggregatesInput[]
    OR?: LayoutDashboardScalarWhereWithAggregatesInput[]
    NOT?: LayoutDashboardScalarWhereWithAggregatesInput | LayoutDashboardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LayoutDashboard"> | number
    userId?: StringWithAggregatesFilter<"LayoutDashboard"> | string
    ordem?: StringNullableListFilter<"LayoutDashboard">
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: IntFilter<"Notificacao"> | number
    userId?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    criadoEm?: DateTimeFilter<"Notificacao"> | Date | string
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    criadoEm?: SortOrder
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    userId?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    criadoEm?: DateTimeFilter<"Notificacao"> | Date | string
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    criadoEm?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _avg?: NotificacaoAvgOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
    _sum?: NotificacaoSumOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notificacao"> | number
    userId?: StringWithAggregatesFilter<"Notificacao"> | string
    mensagem?: StringWithAggregatesFilter<"Notificacao"> | string
    lida?: BoolWithAggregatesFilter<"Notificacao"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
  }

  export type PushSubscriptionWhereInput = {
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    id?: IntFilter<"PushSubscription"> | number
    userId?: StringFilter<"PushSubscription"> | string
    endpoint?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    criadoEm?: DateTimeFilter<"PushSubscription"> | Date | string
  }

  export type PushSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    criadoEm?: SortOrder
  }

  export type PushSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    endpoint?: string
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    userId?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    criadoEm?: DateTimeFilter<"PushSubscription"> | Date | string
  }, "id" | "endpoint">

  export type PushSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    criadoEm?: SortOrder
    _count?: PushSubscriptionCountOrderByAggregateInput
    _avg?: PushSubscriptionAvgOrderByAggregateInput
    _max?: PushSubscriptionMaxOrderByAggregateInput
    _min?: PushSubscriptionMinOrderByAggregateInput
    _sum?: PushSubscriptionSumOrderByAggregateInput
  }

  export type PushSubscriptionScalarWhereWithAggregatesInput = {
    AND?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    OR?: PushSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PushSubscription"> | number
    userId?: StringWithAggregatesFilter<"PushSubscription"> | string
    endpoint?: StringWithAggregatesFilter<"PushSubscription"> | string
    p256dh?: StringWithAggregatesFilter<"PushSubscription"> | string
    auth?: StringWithAggregatesFilter<"PushSubscription"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"PushSubscription"> | Date | string
  }

  export type TransacaoCreateInput = {
    nome: string
    data: Date | string
    tipo: string
    valor: string
    icone: string
    cor: string
    userId: string
  }

  export type TransacaoUncheckedCreateInput = {
    id?: number
    nome: string
    data: Date | string
    tipo: string
    valor: string
    icone: string
    cor: string
    userId: string
  }

  export type TransacaoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransacaoCreateManyInput = {
    id?: number
    nome: string
    data: Date | string
    tipo: string
    valor: string
    icone: string
    cor: string
    userId: string
  }

  export type TransacaoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    icone?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MetaCreateInput = {
    nome: string
    valorAtual: string
    valorObjetivo: string
    possuiPrazo: boolean
    dataLimite?: Date | string | null
    icone: string
    dataCriacao: Date | string
    userId: string
  }

  export type MetaUncheckedCreateInput = {
    id?: number
    nome: string
    valorAtual: string
    valorObjetivo: string
    possuiPrazo: boolean
    dataLimite?: Date | string | null
    icone: string
    dataCriacao: Date | string
    userId: string
  }

  export type MetaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: StringFieldUpdateOperationsInput | string
    valorObjetivo?: StringFieldUpdateOperationsInput | string
    possuiPrazo?: BoolFieldUpdateOperationsInput | boolean
    dataLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icone?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: StringFieldUpdateOperationsInput | string
    valorObjetivo?: StringFieldUpdateOperationsInput | string
    possuiPrazo?: BoolFieldUpdateOperationsInput | boolean
    dataLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icone?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MetaCreateManyInput = {
    id?: number
    nome: string
    valorAtual: string
    valorObjetivo: string
    possuiPrazo: boolean
    dataLimite?: Date | string | null
    icone: string
    dataCriacao: Date | string
    userId: string
  }

  export type MetaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: StringFieldUpdateOperationsInput | string
    valorObjetivo?: StringFieldUpdateOperationsInput | string
    possuiPrazo?: BoolFieldUpdateOperationsInput | boolean
    dataLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icone?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valorAtual?: StringFieldUpdateOperationsInput | string
    valorObjetivo?: StringFieldUpdateOperationsInput | string
    possuiPrazo?: BoolFieldUpdateOperationsInput | boolean
    dataLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icone?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LimiteOrcamentoCreateInput = {
    categoria: string
    limite: string
    cor: string
    userId: string
  }

  export type LimiteOrcamentoUncheckedCreateInput = {
    id?: number
    categoria: string
    limite: string
    cor: string
    userId: string
  }

  export type LimiteOrcamentoUpdateInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LimiteOrcamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LimiteOrcamentoCreateManyInput = {
    id?: number
    categoria: string
    limite: string
    cor: string
    userId: string
  }

  export type LimiteOrcamentoUpdateManyMutationInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LimiteOrcamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioPinCreateInput = {
    userId: string
    pinHash: string
    tentativas?: number
    bloqueadoAte?: Date | string | null
    criadoEm?: Date | string
  }

  export type UsuarioPinUncheckedCreateInput = {
    id?: number
    userId: string
    pinHash: string
    tentativas?: number
    bloqueadoAte?: Date | string | null
    criadoEm?: Date | string
  }

  export type UsuarioPinUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    pinHash?: StringFieldUpdateOperationsInput | string
    tentativas?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioPinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    pinHash?: StringFieldUpdateOperationsInput | string
    tentativas?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioPinCreateManyInput = {
    id?: number
    userId: string
    pinHash: string
    tentativas?: number
    bloqueadoAte?: Date | string | null
    criadoEm?: Date | string
  }

  export type UsuarioPinUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    pinHash?: StringFieldUpdateOperationsInput | string
    tentativas?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioPinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    pinHash?: StringFieldUpdateOperationsInput | string
    tentativas?: IntFieldUpdateOperationsInput | number
    bloqueadoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispositivoConfiavelCreateInput = {
    userId: string
    tokenHash: string
    criadoEm?: Date | string
    expiraEm: Date | string
  }

  export type DispositivoConfiavelUncheckedCreateInput = {
    id?: number
    userId: string
    tokenHash: string
    criadoEm?: Date | string
    expiraEm: Date | string
  }

  export type DispositivoConfiavelUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispositivoConfiavelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispositivoConfiavelCreateManyInput = {
    id?: number
    userId: string
    tokenHash: string
    criadoEm?: Date | string
    expiraEm: Date | string
  }

  export type DispositivoConfiavelUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispositivoConfiavelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    expiraEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogLoginCreateInput = {
    userId: string
    ip?: string | null
    sucesso: boolean
    criadoEm?: Date | string
  }

  export type LogLoginUncheckedCreateInput = {
    id?: number
    userId: string
    ip?: string | null
    sucesso: boolean
    criadoEm?: Date | string
  }

  export type LogLoginUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sucesso?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogLoginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sucesso?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogLoginCreateManyInput = {
    id?: number
    userId: string
    ip?: string | null
    sucesso: boolean
    criadoEm?: Date | string
  }

  export type LogLoginUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sucesso?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogLoginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sucesso?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentimentoUsuarioCreateInput = {
    userId: string
    aceitoEm?: Date | string
  }

  export type ConsentimentoUsuarioUncheckedCreateInput = {
    id?: number
    userId: string
    aceitoEm?: Date | string
  }

  export type ConsentimentoUsuarioUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    aceitoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentimentoUsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    aceitoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentimentoUsuarioCreateManyInput = {
    id?: number
    userId: string
    aceitoEm?: Date | string
  }

  export type ConsentimentoUsuarioUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    aceitoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentimentoUsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    aceitoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutDashboardCreateInput = {
    userId: string
    ordem?: LayoutDashboardCreateordemInput | string[]
  }

  export type LayoutDashboardUncheckedCreateInput = {
    id?: number
    userId: string
    ordem?: LayoutDashboardCreateordemInput | string[]
  }

  export type LayoutDashboardUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ordem?: LayoutDashboardUpdateordemInput | string[]
  }

  export type LayoutDashboardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    ordem?: LayoutDashboardUpdateordemInput | string[]
  }

  export type LayoutDashboardCreateManyInput = {
    id?: number
    userId: string
    ordem?: LayoutDashboardCreateordemInput | string[]
  }

  export type LayoutDashboardUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ordem?: LayoutDashboardUpdateordemInput | string[]
  }

  export type LayoutDashboardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    ordem?: LayoutDashboardUpdateordemInput | string[]
  }

  export type NotificacaoCreateInput = {
    userId: string
    mensagem: string
    lida?: boolean
    criadoEm?: Date | string
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: number
    userId: string
    mensagem: string
    lida?: boolean
    criadoEm?: Date | string
  }

  export type NotificacaoUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateManyInput = {
    id?: number
    userId: string
    mensagem: string
    lida?: boolean
    criadoEm?: Date | string
  }

  export type NotificacaoUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionCreateInput = {
    userId: string
    endpoint: string
    p256dh: string
    auth: string
    criadoEm?: Date | string
  }

  export type PushSubscriptionUncheckedCreateInput = {
    id?: number
    userId: string
    endpoint: string
    p256dh: string
    auth: string
    criadoEm?: Date | string
  }

  export type PushSubscriptionUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionCreateManyInput = {
    id?: number
    userId: string
    endpoint: string
    p256dh: string
    auth: string
    criadoEm?: Date | string
  }

  export type PushSubscriptionUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TransacaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    icone?: SortOrder
    cor?: SortOrder
    userId?: SortOrder
  }

  export type TransacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TransacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    icone?: SortOrder
    cor?: SortOrder
    userId?: SortOrder
  }

  export type TransacaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    icone?: SortOrder
    cor?: SortOrder
    userId?: SortOrder
  }

  export type TransacaoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MetaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valorAtual?: SortOrder
    valorObjetivo?: SortOrder
    possuiPrazo?: SortOrder
    dataLimite?: SortOrder
    icone?: SortOrder
    dataCriacao?: SortOrder
    userId?: SortOrder
  }

  export type MetaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MetaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valorAtual?: SortOrder
    valorObjetivo?: SortOrder
    possuiPrazo?: SortOrder
    dataLimite?: SortOrder
    icone?: SortOrder
    dataCriacao?: SortOrder
    userId?: SortOrder
  }

  export type MetaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valorAtual?: SortOrder
    valorObjetivo?: SortOrder
    possuiPrazo?: SortOrder
    dataLimite?: SortOrder
    icone?: SortOrder
    dataCriacao?: SortOrder
    userId?: SortOrder
  }

  export type MetaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type LimiteOrcamentoCategoriaUserIdCompoundUniqueInput = {
    categoria: string
    userId: string
  }

  export type LimiteOrcamentoCountOrderByAggregateInput = {
    id?: SortOrder
    categoria?: SortOrder
    limite?: SortOrder
    cor?: SortOrder
    userId?: SortOrder
  }

  export type LimiteOrcamentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LimiteOrcamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    categoria?: SortOrder
    limite?: SortOrder
    cor?: SortOrder
    userId?: SortOrder
  }

  export type LimiteOrcamentoMinOrderByAggregateInput = {
    id?: SortOrder
    categoria?: SortOrder
    limite?: SortOrder
    cor?: SortOrder
    userId?: SortOrder
  }

  export type LimiteOrcamentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioPinCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pinHash?: SortOrder
    tentativas?: SortOrder
    bloqueadoAte?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioPinAvgOrderByAggregateInput = {
    id?: SortOrder
    tentativas?: SortOrder
  }

  export type UsuarioPinMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pinHash?: SortOrder
    tentativas?: SortOrder
    bloqueadoAte?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioPinMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pinHash?: SortOrder
    tentativas?: SortOrder
    bloqueadoAte?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioPinSumOrderByAggregateInput = {
    id?: SortOrder
    tentativas?: SortOrder
  }

  export type DispositivoConfiavelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    criadoEm?: SortOrder
    expiraEm?: SortOrder
  }

  export type DispositivoConfiavelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DispositivoConfiavelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    criadoEm?: SortOrder
    expiraEm?: SortOrder
  }

  export type DispositivoConfiavelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    criadoEm?: SortOrder
    expiraEm?: SortOrder
  }

  export type DispositivoConfiavelSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type LogLoginCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    sucesso?: SortOrder
    criadoEm?: SortOrder
  }

  export type LogLoginAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LogLoginMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    sucesso?: SortOrder
    criadoEm?: SortOrder
  }

  export type LogLoginMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    sucesso?: SortOrder
    criadoEm?: SortOrder
  }

  export type LogLoginSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ConsentimentoUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    aceitoEm?: SortOrder
  }

  export type ConsentimentoUsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConsentimentoUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    aceitoEm?: SortOrder
  }

  export type ConsentimentoUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    aceitoEm?: SortOrder
  }

  export type ConsentimentoUsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LayoutDashboardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ordem?: SortOrder
  }

  export type LayoutDashboardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LayoutDashboardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LayoutDashboardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LayoutDashboardSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    criadoEm?: SortOrder
  }

  export type NotificacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    criadoEm?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    criadoEm?: SortOrder
  }

  export type NotificacaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PushSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    criadoEm?: SortOrder
  }

  export type PushSubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PushSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    criadoEm?: SortOrder
  }

  export type PushSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    criadoEm?: SortOrder
  }

  export type PushSubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LayoutDashboardCreateordemInput = {
    set: string[]
  }

  export type LayoutDashboardUpdateordemInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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