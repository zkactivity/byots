declare namespace ts {
    /**
     * Type of objects whose values are all of the same type.
     * The `in` and `for-in` operators can *not* be safely used,
     * since `Object.prototype` may be modified by outside code.
     */
    interface MapLike<T> {
        [index: string]: T;
    }
    /** ES6 Map interface, only read methods included. */
    interface ReadonlyMap<T> {
        get(key: string): T | undefined;
        has(key: string): boolean;
        forEach(action: (value: T, key: string) => void): void;
        readonly size: number;
        keys(): Iterator<string>;
        values(): Iterator<T>;
        entries(): Iterator<[string, T]>;
    }
    /** ES6 Map interface. */
    interface Map<T> extends ReadonlyMap<T> {
        set(key: string, value: T): this;
        delete(key: string): boolean;
        clear(): void;
    }
    /** ES6 Iterator type. */
    interface Iterator<T> {
        next(): {
            value: T;
            done: false;
        } | {
            value: never;
            done: true;
        };
    }
    /** Array that is only intended to be pushed to, never read. */
    interface Push<T> {
        push(...values: T[]): void;
    }
    type Path = string & {
        __pathBrand: any;
    };
    interface TextRange {
        pos: number;
        end: number;
    }
    enum SyntaxKind {
        Unknown = 0,
        EndOfFileToken = 1,
        SingleLineCommentTrivia = 2,
        MultiLineCommentTrivia = 3,
        NewLineTrivia = 4,
        WhitespaceTrivia = 5,
        ShebangTrivia = 6,
        ConflictMarkerTrivia = 7,
        NumericLiteral = 8,
        StringLiteral = 9,
        JsxText = 10,
        JsxTextAllWhiteSpaces = 11,
        RegularExpressionLiteral = 12,
        NoSubstitutionTemplateLiteral = 13,
        TemplateHead = 14,
        TemplateMiddle = 15,
        TemplateTail = 16,
        OpenBraceToken = 17,
        CloseBraceToken = 18,
        OpenParenToken = 19,
        CloseParenToken = 20,
        OpenBracketToken = 21,
        CloseBracketToken = 22,
        DotToken = 23,
        DotDotDotToken = 24,
        SemicolonToken = 25,
        CommaToken = 26,
        LessThanToken = 27,
        LessThanSlashToken = 28,
        GreaterThanToken = 29,
        LessThanEqualsToken = 30,
        GreaterThanEqualsToken = 31,
        EqualsEqualsToken = 32,
        ExclamationEqualsToken = 33,
        EqualsEqualsEqualsToken = 34,
        ExclamationEqualsEqualsToken = 35,
        EqualsGreaterThanToken = 36,
        PlusToken = 37,
        MinusToken = 38,
        AsteriskToken = 39,
        AsteriskAsteriskToken = 40,
        SlashToken = 41,
        PercentToken = 42,
        PlusPlusToken = 43,
        MinusMinusToken = 44,
        LessThanLessThanToken = 45,
        GreaterThanGreaterThanToken = 46,
        GreaterThanGreaterThanGreaterThanToken = 47,
        AmpersandToken = 48,
        BarToken = 49,
        CaretToken = 50,
        ExclamationToken = 51,
        TildeToken = 52,
        AmpersandAmpersandToken = 53,
        BarBarToken = 54,
        QuestionToken = 55,
        ColonToken = 56,
        AtToken = 57,
        EqualsToken = 58,
        PlusEqualsToken = 59,
        MinusEqualsToken = 60,
        AsteriskEqualsToken = 61,
        AsteriskAsteriskEqualsToken = 62,
        SlashEqualsToken = 63,
        PercentEqualsToken = 64,
        LessThanLessThanEqualsToken = 65,
        GreaterThanGreaterThanEqualsToken = 66,
        GreaterThanGreaterThanGreaterThanEqualsToken = 67,
        AmpersandEqualsToken = 68,
        BarEqualsToken = 69,
        CaretEqualsToken = 70,
        Identifier = 71,
        BreakKeyword = 72,
        CaseKeyword = 73,
        CatchKeyword = 74,
        ClassKeyword = 75,
        ConstKeyword = 76,
        ContinueKeyword = 77,
        DebuggerKeyword = 78,
        DefaultKeyword = 79,
        DeleteKeyword = 80,
        DoKeyword = 81,
        ElseKeyword = 82,
        EnumKeyword = 83,
        ExportKeyword = 84,
        ExtendsKeyword = 85,
        FalseKeyword = 86,
        FinallyKeyword = 87,
        ForKeyword = 88,
        FunctionKeyword = 89,
        IfKeyword = 90,
        ImportKeyword = 91,
        InKeyword = 92,
        InstanceOfKeyword = 93,
        NewKeyword = 94,
        NullKeyword = 95,
        ReturnKeyword = 96,
        SuperKeyword = 97,
        SwitchKeyword = 98,
        ThisKeyword = 99,
        ThrowKeyword = 100,
        TrueKeyword = 101,
        TryKeyword = 102,
        TypeOfKeyword = 103,
        VarKeyword = 104,
        VoidKeyword = 105,
        WhileKeyword = 106,
        WithKeyword = 107,
        ImplementsKeyword = 108,
        InterfaceKeyword = 109,
        LetKeyword = 110,
        PackageKeyword = 111,
        PrivateKeyword = 112,
        ProtectedKeyword = 113,
        PublicKeyword = 114,
        StaticKeyword = 115,
        YieldKeyword = 116,
        AbstractKeyword = 117,
        AsKeyword = 118,
        AnyKeyword = 119,
        AsyncKeyword = 120,
        AwaitKeyword = 121,
        BooleanKeyword = 122,
        ConstructorKeyword = 123,
        DeclareKeyword = 124,
        GetKeyword = 125,
        IsKeyword = 126,
        KeyOfKeyword = 127,
        ModuleKeyword = 128,
        NamespaceKeyword = 129,
        NeverKeyword = 130,
        ReadonlyKeyword = 131,
        RequireKeyword = 132,
        NumberKeyword = 133,
        ObjectKeyword = 134,
        SetKeyword = 135,
        StringKeyword = 136,
        SymbolKeyword = 137,
        TypeKeyword = 138,
        UndefinedKeyword = 139,
        FromKeyword = 140,
        GlobalKeyword = 141,
        OfKeyword = 142,
        QualifiedName = 143,
        ComputedPropertyName = 144,
        TypeParameter = 145,
        Parameter = 146,
        Decorator = 147,
        PropertySignature = 148,
        PropertyDeclaration = 149,
        MethodSignature = 150,
        MethodDeclaration = 151,
        Constructor = 152,
        GetAccessor = 153,
        SetAccessor = 154,
        CallSignature = 155,
        ConstructSignature = 156,
        IndexSignature = 157,
        TypePredicate = 158,
        TypeReference = 159,
        FunctionType = 160,
        ConstructorType = 161,
        TypeQuery = 162,
        TypeLiteral = 163,
        ArrayType = 164,
        TupleType = 165,
        UnionType = 166,
        IntersectionType = 167,
        ParenthesizedType = 168,
        ThisType = 169,
        TypeOperator = 170,
        IndexedAccessType = 171,
        MappedType = 172,
        LiteralType = 173,
        ObjectBindingPattern = 174,
        ArrayBindingPattern = 175,
        BindingElement = 176,
        ArrayLiteralExpression = 177,
        ObjectLiteralExpression = 178,
        PropertyAccessExpression = 179,
        ElementAccessExpression = 180,
        CallExpression = 181,
        NewExpression = 182,
        TaggedTemplateExpression = 183,
        TypeAssertionExpression = 184,
        ParenthesizedExpression = 185,
        FunctionExpression = 186,
        ArrowFunction = 187,
        DeleteExpression = 188,
        TypeOfExpression = 189,
        VoidExpression = 190,
        AwaitExpression = 191,
        PrefixUnaryExpression = 192,
        PostfixUnaryExpression = 193,
        BinaryExpression = 194,
        ConditionalExpression = 195,
        TemplateExpression = 196,
        YieldExpression = 197,
        SpreadElement = 198,
        ClassExpression = 199,
        OmittedExpression = 200,
        ExpressionWithTypeArguments = 201,
        AsExpression = 202,
        NonNullExpression = 203,
        MetaProperty = 204,
        TemplateSpan = 205,
        SemicolonClassElement = 206,
        Block = 207,
        VariableStatement = 208,
        EmptyStatement = 209,
        ExpressionStatement = 210,
        IfStatement = 211,
        DoStatement = 212,
        WhileStatement = 213,
        ForStatement = 214,
        ForInStatement = 215,
        ForOfStatement = 216,
        ContinueStatement = 217,
        BreakStatement = 218,
        ReturnStatement = 219,
        WithStatement = 220,
        SwitchStatement = 221,
        LabeledStatement = 222,
        ThrowStatement = 223,
        TryStatement = 224,
        DebuggerStatement = 225,
        VariableDeclaration = 226,
        VariableDeclarationList = 227,
        FunctionDeclaration = 228,
        ClassDeclaration = 229,
        InterfaceDeclaration = 230,
        TypeAliasDeclaration = 231,
        EnumDeclaration = 232,
        ModuleDeclaration = 233,
        ModuleBlock = 234,
        CaseBlock = 235,
        NamespaceExportDeclaration = 236,
        ImportEqualsDeclaration = 237,
        ImportDeclaration = 238,
        ImportClause = 239,
        NamespaceImport = 240,
        NamedImports = 241,
        ImportSpecifier = 242,
        ExportAssignment = 243,
        ExportDeclaration = 244,
        NamedExports = 245,
        ExportSpecifier = 246,
        MissingDeclaration = 247,
        ExternalModuleReference = 248,
        JsxElement = 249,
        JsxSelfClosingElement = 250,
        JsxOpeningElement = 251,
        JsxClosingElement = 252,
        JsxFragment = 253,
        JsxOpeningFragment = 254,
        JsxClosingFragment = 255,
        JsxAttribute = 256,
        JsxAttributes = 257,
        JsxSpreadAttribute = 258,
        JsxExpression = 259,
        CaseClause = 260,
        DefaultClause = 261,
        HeritageClause = 262,
        CatchClause = 263,
        PropertyAssignment = 264,
        ShorthandPropertyAssignment = 265,
        SpreadAssignment = 266,
        EnumMember = 267,
        SourceFile = 268,
        Bundle = 269,
        JSDocTypeExpression = 270,
        JSDocAllType = 271,
        JSDocUnknownType = 272,
        JSDocNullableType = 273,
        JSDocNonNullableType = 274,
        JSDocOptionalType = 275,
        JSDocFunctionType = 276,
        JSDocVariadicType = 277,
        JSDocComment = 278,
        JSDocTypeLiteral = 279,
        JSDocTag = 280,
        JSDocAugmentsTag = 281,
        JSDocClassTag = 282,
        JSDocParameterTag = 283,
        JSDocReturnTag = 284,
        JSDocTypeTag = 285,
        JSDocTemplateTag = 286,
        JSDocTypedefTag = 287,
        JSDocPropertyTag = 288,
        SyntaxList = 289,
        NotEmittedStatement = 290,
        PartiallyEmittedExpression = 291,
        CommaListExpression = 292,
        MergeDeclarationMarker = 293,
        EndOfDeclarationMarker = 294,
        Count = 295,
        FirstAssignment = 58,
        LastAssignment = 70,
        FirstCompoundAssignment = 59,
        LastCompoundAssignment = 70,
        FirstReservedWord = 72,
        LastReservedWord = 107,
        FirstKeyword = 72,
        LastKeyword = 142,
        FirstFutureReservedWord = 108,
        LastFutureReservedWord = 116,
        FirstTypeNode = 158,
        LastTypeNode = 173,
        FirstPunctuation = 17,
        LastPunctuation = 70,
        FirstToken = 0,
        LastToken = 142,
        FirstTriviaToken = 2,
        LastTriviaToken = 7,
        FirstLiteralToken = 8,
        LastLiteralToken = 13,
        FirstTemplateToken = 13,
        LastTemplateToken = 16,
        FirstBinaryOperator = 27,
        LastBinaryOperator = 70,
        FirstNode = 143,
        FirstJSDocNode = 270,
        LastJSDocNode = 288,
        FirstJSDocTagNode = 280,
        LastJSDocTagNode = 288,
    }
    enum NodeFlags {
        None = 0,
        Let = 1,
        Const = 2,
        NestedNamespace = 4,
        Synthesized = 8,
        Namespace = 16,
        ExportContext = 32,
        ContainsThis = 64,
        HasImplicitReturn = 128,
        HasExplicitReturn = 256,
        GlobalAugmentation = 512,
        HasAsyncFunctions = 1024,
        DisallowInContext = 2048,
        YieldContext = 4096,
        DecoratorContext = 8192,
        AwaitContext = 16384,
        ThisNodeHasError = 32768,
        JavaScriptFile = 65536,
        ThisNodeOrAnySubNodesHasError = 131072,
        HasAggregatedChildData = 262144,
        PossiblyContainsDynamicImport = 524288,
        JSDoc = 1048576,
        Ambient = 2097152,
        InWithStatement = 4194304,
        BlockScoped = 3,
        ReachabilityCheckFlags = 384,
        ReachabilityAndEmitFlags = 1408,
        ContextFlags = 6387712,
        TypeExcludesFlags = 20480,
    }
    enum ModifierFlags {
        None = 0,
        Export = 1,
        Ambient = 2,
        Public = 4,
        Private = 8,
        Protected = 16,
        Static = 32,
        Readonly = 64,
        Abstract = 128,
        Async = 256,
        Default = 512,
        Const = 2048,
        HasComputedFlags = 536870912,
        AccessibilityModifier = 28,
        ParameterPropertyModifier = 92,
        NonPublicAccessibilityModifier = 24,
        TypeScriptModifier = 2270,
        ExportDefault = 513,
    }
    enum JsxFlags {
        None = 0,
        /** An element from a named property of the JSX.IntrinsicElements interface */
        IntrinsicNamedElement = 1,
        /** An element inferred from the string index signature of the JSX.IntrinsicElements interface */
        IntrinsicIndexedElement = 2,
        IntrinsicElement = 3,
    }
    enum RelationComparisonResult {
        Succeeded = 1,
        Failed = 2,
        FailedAndReported = 3,
    }
    interface Node extends TextRange {
        kind: SyntaxKind;
        flags: NodeFlags;
        modifierFlagsCache?: ModifierFlags;
        transformFlags?: TransformFlags;
        decorators?: NodeArray<Decorator>;
        modifiers?: ModifiersArray;
        id?: number;
        parent?: Node;
        original?: Node;
        startsOnNewLine?: boolean;
        symbol?: Symbol;
        locals?: SymbolTable;
        nextContainer?: Node;
        localSymbol?: Symbol;
        flowNode?: FlowNode;
        emitNode?: EmitNode;
        contextualType?: Type;
        contextualMapper?: TypeMapper;
    }
    interface JSDocContainer {
        jsDoc?: JSDoc[];
        jsDocCache?: ReadonlyArray<JSDocTag>;
    }
    type HasJSDoc = ParameterDeclaration | CallSignatureDeclaration | ConstructSignatureDeclaration | MethodSignature | PropertySignature | ArrowFunction | ParenthesizedExpression | SpreadAssignment | ShorthandPropertyAssignment | PropertyAssignment | FunctionExpression | LabeledStatement | ExpressionStatement | VariableStatement | FunctionDeclaration | ConstructorDeclaration | MethodDeclaration | PropertyDeclaration | AccessorDeclaration | ClassLikeDeclaration | InterfaceDeclaration | TypeAliasDeclaration | EnumMember | EnumDeclaration | ModuleDeclaration | ImportEqualsDeclaration | IndexSignatureDeclaration | FunctionTypeNode | ConstructorTypeNode | JSDocFunctionType | EndOfFileToken;
    type MutableNodeArray<T extends Node> = NodeArray<T> & T[];
    interface NodeArray<T extends Node> extends ReadonlyArray<T>, TextRange {
        hasTrailingComma?: boolean;
        transformFlags?: TransformFlags;
    }
    interface Token<TKind extends SyntaxKind> extends Node {
        kind: TKind;
    }
    type DotDotDotToken = Token<SyntaxKind.DotDotDotToken>;
    type QuestionToken = Token<SyntaxKind.QuestionToken>;
    type ColonToken = Token<SyntaxKind.ColonToken>;
    type EqualsToken = Token<SyntaxKind.EqualsToken>;
    type AsteriskToken = Token<SyntaxKind.AsteriskToken>;
    type EqualsGreaterThanToken = Token<SyntaxKind.EqualsGreaterThanToken>;
    type EndOfFileToken = Token<SyntaxKind.EndOfFileToken> & JSDocContainer;
    type AtToken = Token<SyntaxKind.AtToken>;
    type ReadonlyToken = Token<SyntaxKind.ReadonlyKeyword>;
    type AwaitKeywordToken = Token<SyntaxKind.AwaitKeyword>;
    type Modifier = Token<SyntaxKind.AbstractKeyword> | Token<SyntaxKind.AsyncKeyword> | Token<SyntaxKind.ConstKeyword> | Token<SyntaxKind.DeclareKeyword> | Token<SyntaxKind.DefaultKeyword> | Token<SyntaxKind.ExportKeyword> | Token<SyntaxKind.PublicKeyword> | Token<SyntaxKind.PrivateKeyword> | Token<SyntaxKind.ProtectedKeyword> | Token<SyntaxKind.ReadonlyKeyword> | Token<SyntaxKind.StaticKeyword>;
    type ModifiersArray = NodeArray<Modifier>;
    enum GeneratedIdentifierKind {
        None = 0,
        Auto = 1,
        Loop = 2,
        Unique = 3,
        Node = 4,
    }
    interface Identifier extends PrimaryExpression {
        kind: SyntaxKind.Identifier;
        /**
         * Prefer to use `id.unescapedText`. (Note: This is available only in services, not internally to the TypeScript compiler.)
         * Text of identifier, but if the identifier begins with two underscores, this will begin with three.
         */
        escapedText: __String;
        originalKeywordKind?: SyntaxKind;
        autoGenerateKind?: GeneratedIdentifierKind;
        autoGenerateId?: number;
        isInJSDocNamespace?: boolean;
        typeArguments?: NodeArray<TypeNode>;
        jsdocDotPos?: number;
    }
    interface TransientIdentifier extends Identifier {
        resolvedSymbol: Symbol;
    }
    interface GeneratedIdentifier extends Identifier {
        autoGenerateKind: GeneratedIdentifierKind.Auto | GeneratedIdentifierKind.Loop | GeneratedIdentifierKind.Unique | GeneratedIdentifierKind.Node;
    }
    interface QualifiedName extends Node {
        kind: SyntaxKind.QualifiedName;
        left: EntityName;
        right: Identifier;
        jsdocDotPos?: number;
    }
    type EntityName = Identifier | QualifiedName;
    type PropertyName = Identifier | StringLiteral | NumericLiteral | ComputedPropertyName;
    type DeclarationName = Identifier | StringLiteral | NumericLiteral | ComputedPropertyName | BindingPattern;
    interface Declaration extends Node {
        _declarationBrand: any;
    }
    interface NamedDeclaration extends Declaration {
        name?: DeclarationName;
    }
    interface DeclarationStatement extends NamedDeclaration, Statement {
        name?: Identifier | StringLiteral | NumericLiteral;
    }
    interface ComputedPropertyName extends Node {
        kind: SyntaxKind.ComputedPropertyName;
        expression: Expression;
    }
    interface Decorator extends Node {
        kind: SyntaxKind.Decorator;
        parent?: NamedDeclaration;
        expression: LeftHandSideExpression;
    }
    interface TypeParameterDeclaration extends NamedDeclaration {
        kind: SyntaxKind.TypeParameter;
        parent?: DeclarationWithTypeParameters;
        name: Identifier;
        constraint?: TypeNode;
        default?: TypeNode;
        expression?: Expression;
    }
    interface SignatureDeclarationBase extends NamedDeclaration, JSDocContainer {
        kind: SignatureDeclaration["kind"];
        name?: PropertyName;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        parameters: NodeArray<ParameterDeclaration>;
        type: TypeNode | undefined;
    }
    type SignatureDeclaration = CallSignatureDeclaration | ConstructSignatureDeclaration | MethodSignature | IndexSignatureDeclaration | FunctionTypeNode | ConstructorTypeNode | JSDocFunctionType | FunctionDeclaration | MethodDeclaration | ConstructorDeclaration | AccessorDeclaration | FunctionExpression | ArrowFunction;
    interface CallSignatureDeclaration extends SignatureDeclarationBase, TypeElement {
        kind: SyntaxKind.CallSignature;
    }
    interface ConstructSignatureDeclaration extends SignatureDeclarationBase, TypeElement {
        kind: SyntaxKind.ConstructSignature;
    }
    type BindingName = Identifier | BindingPattern;
    interface VariableDeclaration extends NamedDeclaration {
        kind: SyntaxKind.VariableDeclaration;
        parent?: VariableDeclarationList | CatchClause;
        name: BindingName;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface VariableDeclarationList extends Node {
        kind: SyntaxKind.VariableDeclarationList;
        parent?: VariableStatement | ForStatement | ForOfStatement | ForInStatement;
        declarations: NodeArray<VariableDeclaration>;
    }
    interface ParameterDeclaration extends NamedDeclaration, JSDocContainer {
        kind: SyntaxKind.Parameter;
        parent?: SignatureDeclaration;
        dotDotDotToken?: DotDotDotToken;
        name: BindingName;
        questionToken?: QuestionToken;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface BindingElement extends NamedDeclaration {
        kind: SyntaxKind.BindingElement;
        parent?: BindingPattern;
        propertyName?: PropertyName;
        dotDotDotToken?: DotDotDotToken;
        name: BindingName;
        initializer?: Expression;
    }
    interface PropertySignature extends TypeElement, JSDocContainer {
        kind: SyntaxKind.PropertySignature;
        name: PropertyName;
        questionToken?: QuestionToken;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface PropertyDeclaration extends ClassElement, JSDocContainer {
        kind: SyntaxKind.PropertyDeclaration;
        questionToken?: QuestionToken;
        name: PropertyName;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface ObjectLiteralElement extends NamedDeclaration {
        _objectLiteralBrandBrand: any;
        name?: PropertyName;
    }
    type ObjectLiteralElementLike = PropertyAssignment | ShorthandPropertyAssignment | SpreadAssignment | MethodDeclaration | AccessorDeclaration;
    interface PropertyAssignment extends ObjectLiteralElement, JSDocContainer {
        parent: ObjectLiteralExpression;
        kind: SyntaxKind.PropertyAssignment;
        name: PropertyName;
        questionToken?: QuestionToken;
        initializer: Expression;
    }
    interface ShorthandPropertyAssignment extends ObjectLiteralElement, JSDocContainer {
        parent: ObjectLiteralExpression;
        kind: SyntaxKind.ShorthandPropertyAssignment;
        name: Identifier;
        questionToken?: QuestionToken;
        equalsToken?: Token<SyntaxKind.EqualsToken>;
        objectAssignmentInitializer?: Expression;
    }
    interface SpreadAssignment extends ObjectLiteralElement, JSDocContainer {
        parent: ObjectLiteralExpression;
        kind: SyntaxKind.SpreadAssignment;
        expression: Expression;
    }
    interface VariableLikeDeclaration extends NamedDeclaration {
        propertyName?: PropertyName;
        dotDotDotToken?: DotDotDotToken;
        name: DeclarationName;
        questionToken?: QuestionToken;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface PropertyLikeDeclaration extends NamedDeclaration {
        name: PropertyName;
    }
    interface ObjectBindingPattern extends Node {
        kind: SyntaxKind.ObjectBindingPattern;
        parent?: VariableDeclaration | ParameterDeclaration | BindingElement;
        elements: NodeArray<BindingElement>;
    }
    interface ArrayBindingPattern extends Node {
        kind: SyntaxKind.ArrayBindingPattern;
        parent?: VariableDeclaration | ParameterDeclaration | BindingElement;
        elements: NodeArray<ArrayBindingElement>;
    }
    type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;
    type ArrayBindingElement = BindingElement | OmittedExpression;
    /**
     * Several node kinds share function-like features such as a signature,
     * a name, and a body. These nodes should extend FunctionLikeDeclarationBase.
     * Examples:
     * - FunctionDeclaration
     * - MethodDeclaration
     * - AccessorDeclaration
     */
    interface FunctionLikeDeclarationBase extends SignatureDeclarationBase {
        _functionLikeDeclarationBrand: any;
        asteriskToken?: AsteriskToken;
        questionToken?: QuestionToken;
        body?: Block | Expression;
    }
    type FunctionLikeDeclaration = FunctionDeclaration | MethodDeclaration | ConstructorDeclaration | GetAccessorDeclaration | SetAccessorDeclaration | FunctionExpression | ArrowFunction;
    type FunctionLike = FunctionLikeDeclaration | FunctionTypeNode | ConstructorTypeNode | IndexSignatureDeclaration | MethodSignature | ConstructSignatureDeclaration | CallSignatureDeclaration;
    interface FunctionDeclaration extends FunctionLikeDeclarationBase, DeclarationStatement {
        kind: SyntaxKind.FunctionDeclaration;
        name?: Identifier;
        body?: FunctionBody;
    }
    interface MethodSignature extends SignatureDeclarationBase, TypeElement {
        kind: SyntaxKind.MethodSignature;
        name: PropertyName;
    }
    interface MethodDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement, JSDocContainer {
        kind: SyntaxKind.MethodDeclaration;
        name: PropertyName;
        body?: FunctionBody;
    }
    interface ConstructorDeclaration extends FunctionLikeDeclarationBase, ClassElement, JSDocContainer {
        kind: SyntaxKind.Constructor;
        parent?: ClassDeclaration | ClassExpression;
        body?: FunctionBody;
    }
    /** For when we encounter a semicolon in a class declaration. ES6 allows these as class elements. */
    interface SemicolonClassElement extends ClassElement {
        kind: SyntaxKind.SemicolonClassElement;
        parent?: ClassDeclaration | ClassExpression;
    }
    interface GetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement, JSDocContainer {
        kind: SyntaxKind.GetAccessor;
        parent?: ClassDeclaration | ClassExpression | ObjectLiteralExpression;
        name: PropertyName;
        body: FunctionBody;
    }
    interface SetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement, JSDocContainer {
        kind: SyntaxKind.SetAccessor;
        parent?: ClassDeclaration | ClassExpression | ObjectLiteralExpression;
        name: PropertyName;
        body: FunctionBody;
    }
    type AccessorDeclaration = GetAccessorDeclaration | SetAccessorDeclaration;
    interface IndexSignatureDeclaration extends SignatureDeclarationBase, ClassElement, TypeElement {
        kind: SyntaxKind.IndexSignature;
        parent?: ClassDeclaration | ClassExpression | InterfaceDeclaration | TypeLiteralNode;
    }
    interface TypeNode extends Node {
        _typeNodeBrand: any;
    }
    interface KeywordTypeNode extends TypeNode {
        kind: SyntaxKind.AnyKeyword | SyntaxKind.NumberKeyword | SyntaxKind.ObjectKeyword | SyntaxKind.BooleanKeyword | SyntaxKind.StringKeyword | SyntaxKind.SymbolKeyword | SyntaxKind.ThisKeyword | SyntaxKind.VoidKeyword | SyntaxKind.UndefinedKeyword | SyntaxKind.NullKeyword | SyntaxKind.NeverKeyword;
    }
    interface ThisTypeNode extends TypeNode {
        kind: SyntaxKind.ThisType;
    }
    type FunctionOrConstructorTypeNode = FunctionTypeNode | ConstructorTypeNode;
    interface FunctionTypeNode extends TypeNode, SignatureDeclarationBase {
        kind: SyntaxKind.FunctionType;
    }
    interface ConstructorTypeNode extends TypeNode, SignatureDeclarationBase {
        kind: SyntaxKind.ConstructorType;
    }
    type TypeReferenceType = TypeReferenceNode | ExpressionWithTypeArguments;
    interface TypeReferenceNode extends TypeNode {
        kind: SyntaxKind.TypeReference;
        typeName: EntityName;
        typeArguments?: NodeArray<TypeNode>;
    }
    interface TypePredicateNode extends TypeNode {
        kind: SyntaxKind.TypePredicate;
        parent?: SignatureDeclaration;
        parameterName: Identifier | ThisTypeNode;
        type: TypeNode;
    }
    interface TypeQueryNode extends TypeNode {
        kind: SyntaxKind.TypeQuery;
        exprName: EntityName;
    }
    interface TypeLiteralNode extends TypeNode, Declaration {
        kind: SyntaxKind.TypeLiteral;
        members: NodeArray<TypeElement>;
    }
    interface ArrayTypeNode extends TypeNode {
        kind: SyntaxKind.ArrayType;
        elementType: TypeNode;
    }
    interface TupleTypeNode extends TypeNode {
        kind: SyntaxKind.TupleType;
        elementTypes: NodeArray<TypeNode>;
    }
    type UnionOrIntersectionTypeNode = UnionTypeNode | IntersectionTypeNode;
    interface UnionTypeNode extends TypeNode {
        kind: SyntaxKind.UnionType;
        types: NodeArray<TypeNode>;
    }
    interface IntersectionTypeNode extends TypeNode {
        kind: SyntaxKind.IntersectionType;
        types: NodeArray<TypeNode>;
    }
    interface ParenthesizedTypeNode extends TypeNode {
        kind: SyntaxKind.ParenthesizedType;
        type: TypeNode;
    }
    interface TypeOperatorNode extends TypeNode {
        kind: SyntaxKind.TypeOperator;
        operator: SyntaxKind.KeyOfKeyword;
        type: TypeNode;
    }
    interface IndexedAccessTypeNode extends TypeNode {
        kind: SyntaxKind.IndexedAccessType;
        objectType: TypeNode;
        indexType: TypeNode;
    }
    interface MappedTypeNode extends TypeNode, Declaration {
        kind: SyntaxKind.MappedType;
        readonlyToken?: ReadonlyToken;
        typeParameter: TypeParameterDeclaration;
        questionToken?: QuestionToken;
        type?: TypeNode;
    }
    interface LiteralTypeNode extends TypeNode {
        kind: SyntaxKind.LiteralType;
        literal: BooleanLiteral | LiteralExpression | PrefixUnaryExpression;
    }
    interface StringLiteral extends LiteralExpression {
        kind: SyntaxKind.StringLiteral;
        textSourceNode?: Identifier | StringLiteral | NumericLiteral;
        /** Note: this is only set when synthesizing a node, not during parsing. */
        singleQuote?: boolean;
    }
    interface Expression extends Node {
        _expressionBrand: any;
    }
    interface OmittedExpression extends Expression {
        kind: SyntaxKind.OmittedExpression;
    }
    interface PartiallyEmittedExpression extends LeftHandSideExpression {
        kind: SyntaxKind.PartiallyEmittedExpression;
        expression: Expression;
    }
    interface UnaryExpression extends Expression {
        _unaryExpressionBrand: any;
    }
    /** Deprecated, please use UpdateExpression */
    type IncrementExpression = UpdateExpression;
    interface UpdateExpression extends UnaryExpression {
        _updateExpressionBrand: any;
    }
    type PrefixUnaryOperator = SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken | SyntaxKind.PlusToken | SyntaxKind.MinusToken | SyntaxKind.TildeToken | SyntaxKind.ExclamationToken;
    interface PrefixUnaryExpression extends UpdateExpression {
        kind: SyntaxKind.PrefixUnaryExpression;
        operator: PrefixUnaryOperator;
        operand: UnaryExpression;
    }
    type PostfixUnaryOperator = SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken;
    interface PostfixUnaryExpression extends UpdateExpression {
        kind: SyntaxKind.PostfixUnaryExpression;
        operand: LeftHandSideExpression;
        operator: PostfixUnaryOperator;
    }
    interface LeftHandSideExpression extends UpdateExpression {
        _leftHandSideExpressionBrand: any;
    }
    interface MemberExpression extends LeftHandSideExpression {
        _memberExpressionBrand: any;
    }
    interface PrimaryExpression extends MemberExpression {
        _primaryExpressionBrand: any;
    }
    interface NullLiteral extends PrimaryExpression, TypeNode {
        kind: SyntaxKind.NullKeyword;
    }
    interface BooleanLiteral extends PrimaryExpression, TypeNode {
        kind: SyntaxKind.TrueKeyword | SyntaxKind.FalseKeyword;
    }
    interface ThisExpression extends PrimaryExpression, KeywordTypeNode {
        kind: SyntaxKind.ThisKeyword;
    }
    interface SuperExpression extends PrimaryExpression {
        kind: SyntaxKind.SuperKeyword;
    }
    interface ImportExpression extends PrimaryExpression {
        kind: SyntaxKind.ImportKeyword;
    }
    interface DeleteExpression extends UnaryExpression {
        kind: SyntaxKind.DeleteExpression;
        expression: UnaryExpression;
    }
    interface TypeOfExpression extends UnaryExpression {
        kind: SyntaxKind.TypeOfExpression;
        expression: UnaryExpression;
    }
    interface VoidExpression extends UnaryExpression {
        kind: SyntaxKind.VoidExpression;
        expression: UnaryExpression;
    }
    interface AwaitExpression extends UnaryExpression {
        kind: SyntaxKind.AwaitExpression;
        expression: UnaryExpression;
    }
    interface YieldExpression extends Expression {
        kind: SyntaxKind.YieldExpression;
        asteriskToken?: AsteriskToken;
        expression?: Expression;
    }
    type ExponentiationOperator = SyntaxKind.AsteriskAsteriskToken;
    type MultiplicativeOperator = SyntaxKind.AsteriskToken | SyntaxKind.SlashToken | SyntaxKind.PercentToken;
    type MultiplicativeOperatorOrHigher = ExponentiationOperator | MultiplicativeOperator;
    type AdditiveOperator = SyntaxKind.PlusToken | SyntaxKind.MinusToken;
    type AdditiveOperatorOrHigher = MultiplicativeOperatorOrHigher | AdditiveOperator;
    type ShiftOperator = SyntaxKind.LessThanLessThanToken | SyntaxKind.GreaterThanGreaterThanToken | SyntaxKind.GreaterThanGreaterThanGreaterThanToken;
    type ShiftOperatorOrHigher = AdditiveOperatorOrHigher | ShiftOperator;
    type RelationalOperator = SyntaxKind.LessThanToken | SyntaxKind.LessThanEqualsToken | SyntaxKind.GreaterThanToken | SyntaxKind.GreaterThanEqualsToken | SyntaxKind.InstanceOfKeyword | SyntaxKind.InKeyword;
    type RelationalOperatorOrHigher = ShiftOperatorOrHigher | RelationalOperator;
    type EqualityOperator = SyntaxKind.EqualsEqualsToken | SyntaxKind.EqualsEqualsEqualsToken | SyntaxKind.ExclamationEqualsEqualsToken | SyntaxKind.ExclamationEqualsToken;
    type EqualityOperatorOrHigher = RelationalOperatorOrHigher | EqualityOperator;
    type BitwiseOperator = SyntaxKind.AmpersandToken | SyntaxKind.BarToken | SyntaxKind.CaretToken;
    type BitwiseOperatorOrHigher = EqualityOperatorOrHigher | BitwiseOperator;
    type LogicalOperator = SyntaxKind.AmpersandAmpersandToken | SyntaxKind.BarBarToken;
    type LogicalOperatorOrHigher = BitwiseOperatorOrHigher | LogicalOperator;
    type CompoundAssignmentOperator = SyntaxKind.PlusEqualsToken | SyntaxKind.MinusEqualsToken | SyntaxKind.AsteriskAsteriskEqualsToken | SyntaxKind.AsteriskEqualsToken | SyntaxKind.SlashEqualsToken | SyntaxKind.PercentEqualsToken | SyntaxKind.AmpersandEqualsToken | SyntaxKind.BarEqualsToken | SyntaxKind.CaretEqualsToken | SyntaxKind.LessThanLessThanEqualsToken | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken | SyntaxKind.GreaterThanGreaterThanEqualsToken;
    type AssignmentOperator = SyntaxKind.EqualsToken | CompoundAssignmentOperator;
    type AssignmentOperatorOrHigher = LogicalOperatorOrHigher | AssignmentOperator;
    type BinaryOperator = AssignmentOperatorOrHigher | SyntaxKind.CommaToken;
    type BinaryOperatorToken = Token<BinaryOperator>;
    interface BinaryExpression extends Expression, Declaration {
        kind: SyntaxKind.BinaryExpression;
        left: Expression;
        operatorToken: BinaryOperatorToken;
        right: Expression;
    }
    type AssignmentOperatorToken = Token<AssignmentOperator>;
    interface AssignmentExpression<TOperator extends AssignmentOperatorToken> extends BinaryExpression {
        left: LeftHandSideExpression;
        operatorToken: TOperator;
    }
    interface ObjectDestructuringAssignment extends AssignmentExpression<EqualsToken> {
        left: ObjectLiteralExpression;
    }
    interface ArrayDestructuringAssignment extends AssignmentExpression<EqualsToken> {
        left: ArrayLiteralExpression;
    }
    type DestructuringAssignment = ObjectDestructuringAssignment | ArrayDestructuringAssignment;
    type BindingOrAssignmentElement = VariableDeclaration | ParameterDeclaration | BindingElement | PropertyAssignment | ShorthandPropertyAssignment | SpreadAssignment | OmittedExpression | SpreadElement | ArrayLiteralExpression | ObjectLiteralExpression | AssignmentExpression<EqualsToken> | Identifier | PropertyAccessExpression | ElementAccessExpression;
    type BindingOrAssignmentElementRestIndicator = DotDotDotToken | SpreadElement | SpreadAssignment;
    type BindingOrAssignmentElementTarget = BindingOrAssignmentPattern | Expression;
    type ObjectBindingOrAssignmentPattern = ObjectBindingPattern | ObjectLiteralExpression;
    type ArrayBindingOrAssignmentPattern = ArrayBindingPattern | ArrayLiteralExpression;
    type AssignmentPattern = ObjectLiteralExpression | ArrayLiteralExpression;
    type BindingOrAssignmentPattern = ObjectBindingOrAssignmentPattern | ArrayBindingOrAssignmentPattern;
    interface ConditionalExpression extends Expression {
        kind: SyntaxKind.ConditionalExpression;
        condition: Expression;
        questionToken: QuestionToken;
        whenTrue: Expression;
        colonToken: ColonToken;
        whenFalse: Expression;
    }
    type FunctionBody = Block;
    type ConciseBody = FunctionBody | Expression;
    interface FunctionExpression extends PrimaryExpression, FunctionLikeDeclarationBase, JSDocContainer {
        kind: SyntaxKind.FunctionExpression;
        name?: Identifier;
        body: FunctionBody;
    }
    interface ArrowFunction extends Expression, FunctionLikeDeclarationBase, JSDocContainer {
        kind: SyntaxKind.ArrowFunction;
        equalsGreaterThanToken: EqualsGreaterThanToken;
        body: ConciseBody;
    }
    interface LiteralLikeNode extends Node {
        text: string;
        isUnterminated?: boolean;
        hasExtendedUnicodeEscape?: boolean;
    }
    interface LiteralExpression extends LiteralLikeNode, PrimaryExpression {
        _literalExpressionBrand: any;
    }
    interface RegularExpressionLiteral extends LiteralExpression {
        kind: SyntaxKind.RegularExpressionLiteral;
    }
    interface NoSubstitutionTemplateLiteral extends LiteralExpression {
        kind: SyntaxKind.NoSubstitutionTemplateLiteral;
    }
    enum NumericLiteralFlags {
        None = 0,
        Scientific = 2,
        Octal = 4,
        HexSpecifier = 8,
        BinarySpecifier = 16,
        OctalSpecifier = 32,
        BinaryOrOctalSpecifier = 48,
    }
    interface NumericLiteral extends LiteralExpression {
        kind: SyntaxKind.NumericLiteral;
        numericLiteralFlags?: NumericLiteralFlags;
    }
    interface TemplateHead extends LiteralLikeNode {
        kind: SyntaxKind.TemplateHead;
        parent?: TemplateExpression;
    }
    interface TemplateMiddle extends LiteralLikeNode {
        kind: SyntaxKind.TemplateMiddle;
        parent?: TemplateSpan;
    }
    interface TemplateTail extends LiteralLikeNode {
        kind: SyntaxKind.TemplateTail;
        parent?: TemplateSpan;
    }
    type TemplateLiteral = TemplateExpression | NoSubstitutionTemplateLiteral;
    interface TemplateExpression extends PrimaryExpression {
        kind: SyntaxKind.TemplateExpression;
        head: TemplateHead;
        templateSpans: NodeArray<TemplateSpan>;
    }
    interface TemplateSpan extends Node {
        kind: SyntaxKind.TemplateSpan;
        parent?: TemplateExpression;
        expression: Expression;
        literal: TemplateMiddle | TemplateTail;
    }
    interface ParenthesizedExpression extends PrimaryExpression, JSDocContainer {
        kind: SyntaxKind.ParenthesizedExpression;
        expression: Expression;
    }
    interface ArrayLiteralExpression extends PrimaryExpression {
        kind: SyntaxKind.ArrayLiteralExpression;
        elements: NodeArray<Expression>;
        multiLine?: boolean;
    }
    interface SpreadElement extends Expression {
        kind: SyntaxKind.SpreadElement;
        parent?: ArrayLiteralExpression | CallExpression | NewExpression;
        expression: Expression;
    }
    /**
     * This interface is a base interface for ObjectLiteralExpression and JSXAttributes to extend from. JSXAttributes is similar to
     * ObjectLiteralExpression in that it contains array of properties; however, JSXAttributes' properties can only be
     * JSXAttribute or JSXSpreadAttribute. ObjectLiteralExpression, on the other hand, can only have properties of type
     * ObjectLiteralElement (e.g. PropertyAssignment, ShorthandPropertyAssignment etc.)
     */
    interface ObjectLiteralExpressionBase<T extends ObjectLiteralElement> extends PrimaryExpression, Declaration {
        properties: NodeArray<T>;
    }
    interface ObjectLiteralExpression extends ObjectLiteralExpressionBase<ObjectLiteralElementLike> {
        kind: SyntaxKind.ObjectLiteralExpression;
        multiLine?: boolean;
    }
    type EntityNameExpression = Identifier | PropertyAccessEntityNameExpression | ParenthesizedExpression;
    type EntityNameOrEntityNameExpression = EntityName | EntityNameExpression;
    interface PropertyAccessExpression extends MemberExpression, NamedDeclaration {
        kind: SyntaxKind.PropertyAccessExpression;
        expression: LeftHandSideExpression;
        name: Identifier;
    }
    interface SuperPropertyAccessExpression extends PropertyAccessExpression {
        expression: SuperExpression;
    }
    /** Brand for a PropertyAccessExpression which, like a QualifiedName, consists of a sequence of identifiers separated by dots. */
    interface PropertyAccessEntityNameExpression extends PropertyAccessExpression {
        _propertyAccessExpressionLikeQualifiedNameBrand?: any;
        expression: EntityNameExpression;
    }
    interface ElementAccessExpression extends MemberExpression {
        kind: SyntaxKind.ElementAccessExpression;
        expression: LeftHandSideExpression;
        argumentExpression?: Expression;
    }
    interface SuperElementAccessExpression extends ElementAccessExpression {
        expression: SuperExpression;
    }
    type SuperProperty = SuperPropertyAccessExpression | SuperElementAccessExpression;
    interface CallExpression extends LeftHandSideExpression, Declaration {
        kind: SyntaxKind.CallExpression;
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
        arguments: NodeArray<Expression>;
    }
    interface SuperCall extends CallExpression {
        expression: SuperExpression;
    }
    interface ImportCall extends CallExpression {
        expression: ImportExpression;
    }
    interface ExpressionWithTypeArguments extends TypeNode {
        kind: SyntaxKind.ExpressionWithTypeArguments;
        parent?: HeritageClause;
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
    }
    interface NewExpression extends PrimaryExpression, Declaration {
        kind: SyntaxKind.NewExpression;
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
        arguments?: NodeArray<Expression>;
    }
    interface TaggedTemplateExpression extends MemberExpression {
        kind: SyntaxKind.TaggedTemplateExpression;
        tag: LeftHandSideExpression;
        template: TemplateLiteral;
    }
    type CallLikeExpression = CallExpression | NewExpression | TaggedTemplateExpression | Decorator | JsxOpeningLikeElement;
    interface AsExpression extends Expression {
        kind: SyntaxKind.AsExpression;
        expression: Expression;
        type: TypeNode;
    }
    interface TypeAssertion extends UnaryExpression {
        kind: SyntaxKind.TypeAssertionExpression;
        type: TypeNode;
        expression: UnaryExpression;
    }
    type AssertionExpression = TypeAssertion | AsExpression;
    interface NonNullExpression extends LeftHandSideExpression {
        kind: SyntaxKind.NonNullExpression;
        expression: Expression;
    }
    interface MetaProperty extends PrimaryExpression {
        kind: SyntaxKind.MetaProperty;
        keywordToken: SyntaxKind.NewKeyword;
        name: Identifier;
    }
    interface JsxElement extends PrimaryExpression {
        kind: SyntaxKind.JsxElement;
        openingElement: JsxOpeningElement;
        children: NodeArray<JsxChild>;
        closingElement: JsxClosingElement;
    }
    type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;
    type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;
    type JsxTagNameExpression = PrimaryExpression | PropertyAccessExpression;
    interface JsxAttributes extends ObjectLiteralExpressionBase<JsxAttributeLike> {
        parent?: JsxOpeningLikeElement;
    }
    interface JsxOpeningElement extends Expression {
        kind: SyntaxKind.JsxOpeningElement;
        parent?: JsxElement;
        tagName: JsxTagNameExpression;
        attributes: JsxAttributes;
    }
    interface JsxSelfClosingElement extends PrimaryExpression {
        kind: SyntaxKind.JsxSelfClosingElement;
        tagName: JsxTagNameExpression;
        attributes: JsxAttributes;
    }
    interface JsxFragment extends PrimaryExpression {
        kind: SyntaxKind.JsxFragment;
        openingFragment: JsxOpeningFragment;
        children: NodeArray<JsxChild>;
        closingFragment: JsxClosingFragment;
    }
    interface JsxOpeningFragment extends Expression {
        kind: SyntaxKind.JsxOpeningFragment;
        parent?: JsxFragment;
    }
    interface JsxClosingFragment extends Expression {
        kind: SyntaxKind.JsxClosingFragment;
        parent?: JsxFragment;
    }
    interface JsxAttribute extends ObjectLiteralElement {
        kind: SyntaxKind.JsxAttribute;
        parent?: JsxAttributes;
        name: Identifier;
        initializer?: StringLiteral | JsxExpression;
    }
    interface JsxSpreadAttribute extends ObjectLiteralElement {
        kind: SyntaxKind.JsxSpreadAttribute;
        parent?: JsxAttributes;
        expression: Expression;
    }
    interface JsxClosingElement extends Node {
        kind: SyntaxKind.JsxClosingElement;
        parent?: JsxElement;
        tagName: JsxTagNameExpression;
    }
    interface JsxExpression extends Expression {
        kind: SyntaxKind.JsxExpression;
        parent?: JsxElement | JsxAttributeLike;
        dotDotDotToken?: Token<SyntaxKind.DotDotDotToken>;
        expression?: Expression;
    }
    interface JsxText extends Node {
        kind: SyntaxKind.JsxText;
        containsOnlyWhiteSpaces: boolean;
        parent?: JsxElement;
    }
    type JsxChild = JsxText | JsxExpression | JsxElement | JsxSelfClosingElement | JsxFragment;
    interface Statement extends Node {
        _statementBrand: any;
    }
    interface NotEmittedStatement extends Statement {
        kind: SyntaxKind.NotEmittedStatement;
    }
    /**
     * Marks the end of transformed declaration to properly emit exports.
     */
    interface EndOfDeclarationMarker extends Statement {
        kind: SyntaxKind.EndOfDeclarationMarker;
    }
    /**
     * A list of comma-seperated expressions. This node is only created by transformations.
     */
    interface CommaListExpression extends Expression {
        kind: SyntaxKind.CommaListExpression;
        elements: NodeArray<Expression>;
    }
    /**
     * Marks the beginning of a merged transformed declaration.
     */
    interface MergeDeclarationMarker extends Statement {
        kind: SyntaxKind.MergeDeclarationMarker;
    }
    interface EmptyStatement extends Statement {
        kind: SyntaxKind.EmptyStatement;
    }
    interface DebuggerStatement extends Statement {
        kind: SyntaxKind.DebuggerStatement;
    }
    interface MissingDeclaration extends DeclarationStatement, ClassElement, ObjectLiteralElement, TypeElement {
        kind: SyntaxKind.MissingDeclaration;
        name?: Identifier;
    }
    type BlockLike = SourceFile | Block | ModuleBlock | CaseOrDefaultClause;
    interface Block extends Statement {
        kind: SyntaxKind.Block;
        statements: NodeArray<Statement>;
        multiLine?: boolean;
    }
    interface VariableStatement extends Statement, JSDocContainer {
        kind: SyntaxKind.VariableStatement;
        declarationList: VariableDeclarationList;
    }
    interface ExpressionStatement extends Statement, JSDocContainer {
        kind: SyntaxKind.ExpressionStatement;
        expression: Expression;
    }
    interface PrologueDirective extends ExpressionStatement {
        expression: StringLiteral;
    }
    interface IfStatement extends Statement {
        kind: SyntaxKind.IfStatement;
        expression: Expression;
        thenStatement: Statement;
        elseStatement?: Statement;
    }
    interface IterationStatement extends Statement {
        statement: Statement;
    }
    interface DoStatement extends IterationStatement {
        kind: SyntaxKind.DoStatement;
        expression: Expression;
    }
    interface WhileStatement extends IterationStatement {
        kind: SyntaxKind.WhileStatement;
        expression: Expression;
    }
    type ForInitializer = VariableDeclarationList | Expression;
    interface ForStatement extends IterationStatement {
        kind: SyntaxKind.ForStatement;
        initializer?: ForInitializer;
        condition?: Expression;
        incrementor?: Expression;
    }
    type ForInOrOfStatement = ForInStatement | ForOfStatement;
    interface ForInStatement extends IterationStatement {
        kind: SyntaxKind.ForInStatement;
        initializer: ForInitializer;
        expression: Expression;
    }
    interface ForOfStatement extends IterationStatement {
        kind: SyntaxKind.ForOfStatement;
        awaitModifier?: AwaitKeywordToken;
        initializer: ForInitializer;
        expression: Expression;
    }
    interface BreakStatement extends Statement {
        kind: SyntaxKind.BreakStatement;
        label?: Identifier;
    }
    interface ContinueStatement extends Statement {
        kind: SyntaxKind.ContinueStatement;
        label?: Identifier;
    }
    type BreakOrContinueStatement = BreakStatement | ContinueStatement;
    interface ReturnStatement extends Statement {
        kind: SyntaxKind.ReturnStatement;
        expression?: Expression;
    }
    interface WithStatement extends Statement {
        kind: SyntaxKind.WithStatement;
        expression: Expression;
        statement: Statement;
    }
    interface SwitchStatement extends Statement {
        kind: SyntaxKind.SwitchStatement;
        expression: Expression;
        caseBlock: CaseBlock;
        possiblyExhaustive?: boolean;
    }
    interface CaseBlock extends Node {
        kind: SyntaxKind.CaseBlock;
        parent?: SwitchStatement;
        clauses: NodeArray<CaseOrDefaultClause>;
    }
    interface CaseClause extends Node {
        kind: SyntaxKind.CaseClause;
        parent?: CaseBlock;
        expression: Expression;
        statements: NodeArray<Statement>;
    }
    interface DefaultClause extends Node {
        kind: SyntaxKind.DefaultClause;
        parent?: CaseBlock;
        statements: NodeArray<Statement>;
    }
    type CaseOrDefaultClause = CaseClause | DefaultClause;
    interface LabeledStatement extends Statement, JSDocContainer {
        kind: SyntaxKind.LabeledStatement;
        label: Identifier;
        statement: Statement;
    }
    interface ThrowStatement extends Statement {
        kind: SyntaxKind.ThrowStatement;
        expression: Expression;
    }
    interface TryStatement extends Statement {
        kind: SyntaxKind.TryStatement;
        tryBlock: Block;
        catchClause?: CatchClause;
        finallyBlock?: Block;
    }
    interface CatchClause extends Node {
        kind: SyntaxKind.CatchClause;
        parent?: TryStatement;
        variableDeclaration?: VariableDeclaration;
        block: Block;
    }
    type DeclarationWithTypeParameters = SignatureDeclaration | ClassLikeDeclaration | InterfaceDeclaration | TypeAliasDeclaration | JSDocTemplateTag;
    interface ClassLikeDeclarationBase extends NamedDeclaration, JSDocContainer {
        kind: SyntaxKind.ClassDeclaration | SyntaxKind.ClassExpression;
        name?: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<ClassElement>;
    }
    interface ClassDeclaration extends ClassLikeDeclarationBase, DeclarationStatement {
        kind: SyntaxKind.ClassDeclaration;
        name?: Identifier;
    }
    interface ClassExpression extends ClassLikeDeclarationBase, PrimaryExpression {
        kind: SyntaxKind.ClassExpression;
    }
    type ClassLikeDeclaration = ClassDeclaration | ClassExpression;
    interface ClassElement extends NamedDeclaration {
        _classElementBrand: any;
        name?: PropertyName;
    }
    interface TypeElement extends NamedDeclaration {
        _typeElementBrand: any;
        name?: PropertyName;
        questionToken?: QuestionToken;
    }
    interface InterfaceDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.InterfaceDeclaration;
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<TypeElement>;
    }
    interface HeritageClause extends Node {
        kind: SyntaxKind.HeritageClause;
        parent?: InterfaceDeclaration | ClassDeclaration | ClassExpression;
        token: SyntaxKind.ExtendsKeyword | SyntaxKind.ImplementsKeyword;
        types: NodeArray<ExpressionWithTypeArguments>;
    }
    interface TypeAliasDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.TypeAliasDeclaration;
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        type: TypeNode;
    }
    interface EnumMember extends NamedDeclaration, JSDocContainer {
        kind: SyntaxKind.EnumMember;
        parent?: EnumDeclaration;
        name: PropertyName;
        initializer?: Expression;
    }
    interface EnumDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.EnumDeclaration;
        name: Identifier;
        members: NodeArray<EnumMember>;
    }
    type ModuleName = Identifier | StringLiteral;
    type ModuleBody = NamespaceBody | JSDocNamespaceBody;
    interface ModuleDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.ModuleDeclaration;
        parent?: ModuleBody | SourceFile;
        name: ModuleName;
        body?: ModuleBody | JSDocNamespaceDeclaration;
    }
    type NamespaceBody = ModuleBlock | NamespaceDeclaration;
    interface NamespaceDeclaration extends ModuleDeclaration {
        name: Identifier;
        body: NamespaceBody;
    }
    type JSDocNamespaceBody = Identifier | JSDocNamespaceDeclaration;
    interface JSDocNamespaceDeclaration extends ModuleDeclaration {
        name: Identifier;
        body: JSDocNamespaceBody;
    }
    interface ModuleBlock extends Node, Statement {
        kind: SyntaxKind.ModuleBlock;
        parent?: ModuleDeclaration;
        statements: NodeArray<Statement>;
    }
    type ModuleReference = EntityName | ExternalModuleReference;
    /**
     * One of:
     * - import x = require("mod");
     * - import x = M.x;
     */
    interface ImportEqualsDeclaration extends DeclarationStatement, JSDocContainer {
        kind: SyntaxKind.ImportEqualsDeclaration;
        parent?: SourceFile | ModuleBlock;
        name: Identifier;
        moduleReference: ModuleReference;
    }
    interface ExternalModuleReference extends Node {
        kind: SyntaxKind.ExternalModuleReference;
        parent?: ImportEqualsDeclaration;
        expression?: Expression;
    }
    interface ImportDeclaration extends Statement {
        kind: SyntaxKind.ImportDeclaration;
        parent?: SourceFile | ModuleBlock;
        importClause?: ImportClause;
        /** If this is not a StringLiteral it will be a grammar error. */
        moduleSpecifier: Expression;
    }
    type NamedImportBindings = NamespaceImport | NamedImports;
    interface ImportClause extends NamedDeclaration {
        kind: SyntaxKind.ImportClause;
        parent?: ImportDeclaration;
        name?: Identifier;
        namedBindings?: NamedImportBindings;
    }
    interface NamespaceImport extends NamedDeclaration {
        kind: SyntaxKind.NamespaceImport;
        parent?: ImportClause;
        name: Identifier;
    }
    interface NamespaceExportDeclaration extends DeclarationStatement {
        kind: SyntaxKind.NamespaceExportDeclaration;
        name: Identifier;
    }
    interface ExportDeclaration extends DeclarationStatement {
        kind: SyntaxKind.ExportDeclaration;
        parent?: SourceFile | ModuleBlock;
        exportClause?: NamedExports;
        /** If this is not a StringLiteral it will be a grammar error. */
        moduleSpecifier?: Expression;
    }
    interface NamedImports extends Node {
        kind: SyntaxKind.NamedImports;
        parent?: ImportClause;
        elements: NodeArray<ImportSpecifier>;
    }
    interface NamedExports extends Node {
        kind: SyntaxKind.NamedExports;
        parent?: ExportDeclaration;
        elements: NodeArray<ExportSpecifier>;
    }
    type NamedImportsOrExports = NamedImports | NamedExports;
    interface ImportSpecifier extends NamedDeclaration {
        kind: SyntaxKind.ImportSpecifier;
        parent?: NamedImports;
        propertyName?: Identifier;
        name: Identifier;
    }
    interface ExportSpecifier extends NamedDeclaration {
        kind: SyntaxKind.ExportSpecifier;
        parent?: NamedExports;
        propertyName?: Identifier;
        name: Identifier;
    }
    type ImportOrExportSpecifier = ImportSpecifier | ExportSpecifier;
    interface ExportAssignment extends DeclarationStatement {
        kind: SyntaxKind.ExportAssignment;
        parent?: SourceFile;
        isExportEquals?: boolean;
        expression: Expression;
    }
    interface FileReference extends TextRange {
        fileName: string;
    }
    interface CheckJsDirective extends TextRange {
        enabled: boolean;
    }
    type CommentKind = SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia;
    interface CommentRange extends TextRange {
        hasTrailingNewLine?: boolean;
        kind: CommentKind;
    }
    interface SynthesizedComment extends CommentRange {
        text: string;
        pos: -1;
        end: -1;
    }
    interface JSDocTypeExpression extends TypeNode {
        kind: SyntaxKind.JSDocTypeExpression;
        type: TypeNode;
    }
    interface JSDocType extends TypeNode {
        _jsDocTypeBrand: any;
    }
    interface JSDocAllType extends JSDocType {
        kind: SyntaxKind.JSDocAllType;
    }
    interface JSDocUnknownType extends JSDocType {
        kind: SyntaxKind.JSDocUnknownType;
    }
    interface JSDocNonNullableType extends JSDocType {
        kind: SyntaxKind.JSDocNonNullableType;
        type: TypeNode;
    }
    interface JSDocNullableType extends JSDocType {
        kind: SyntaxKind.JSDocNullableType;
        type: TypeNode;
    }
    interface JSDocOptionalType extends JSDocType {
        kind: SyntaxKind.JSDocOptionalType;
        type: TypeNode;
    }
    interface JSDocFunctionType extends JSDocType, SignatureDeclarationBase {
        kind: SyntaxKind.JSDocFunctionType;
    }
    interface JSDocVariadicType extends JSDocType {
        kind: SyntaxKind.JSDocVariadicType;
        type: TypeNode;
    }
    type JSDocTypeReferencingNode = JSDocVariadicType | JSDocOptionalType | JSDocNullableType | JSDocNonNullableType;
    interface JSDoc extends Node {
        kind: SyntaxKind.JSDocComment;
        parent?: HasJSDoc;
        tags: NodeArray<JSDocTag> | undefined;
        comment: string | undefined;
    }
    interface JSDocTag extends Node {
        parent: JSDoc;
        atToken: AtToken;
        tagName: Identifier;
        comment: string | undefined;
    }
    interface JSDocUnknownTag extends JSDocTag {
        kind: SyntaxKind.JSDocTag;
    }
    /**
     * Note that `@extends` is a synonym of `@augments`.
     * Both tags are represented by this interface.
     */
    interface JSDocAugmentsTag extends JSDocTag {
        kind: SyntaxKind.JSDocAugmentsTag;
        class: ExpressionWithTypeArguments & {
            expression: Identifier | PropertyAccessEntityNameExpression;
        };
    }
    interface JSDocClassTag extends JSDocTag {
        kind: SyntaxKind.JSDocClassTag;
    }
    interface JSDocTemplateTag extends JSDocTag {
        kind: SyntaxKind.JSDocTemplateTag;
        typeParameters: NodeArray<TypeParameterDeclaration>;
    }
    interface JSDocReturnTag extends JSDocTag {
        kind: SyntaxKind.JSDocReturnTag;
        typeExpression: JSDocTypeExpression;
    }
    interface JSDocTypeTag extends JSDocTag {
        kind: SyntaxKind.JSDocTypeTag;
        typeExpression: JSDocTypeExpression;
    }
    interface JSDocTypedefTag extends JSDocTag, NamedDeclaration {
        parent: JSDoc;
        kind: SyntaxKind.JSDocTypedefTag;
        fullName?: JSDocNamespaceDeclaration | Identifier;
        name?: Identifier;
        typeExpression?: JSDocTypeExpression | JSDocTypeLiteral;
    }
    interface JSDocPropertyLikeTag extends JSDocTag, Declaration {
        parent: JSDoc;
        name: EntityName;
        typeExpression?: JSDocTypeExpression;
        /** Whether the property name came before the type -- non-standard for JSDoc, but Typescript-like */
        isNameFirst: boolean;
        isBracketed: boolean;
    }
    interface JSDocPropertyTag extends JSDocPropertyLikeTag {
        kind: SyntaxKind.JSDocPropertyTag;
    }
    interface JSDocParameterTag extends JSDocPropertyLikeTag {
        kind: SyntaxKind.JSDocParameterTag;
    }
    interface JSDocTypeLiteral extends JSDocType {
        kind: SyntaxKind.JSDocTypeLiteral;
        jsDocPropertyTags?: ReadonlyArray<JSDocPropertyLikeTag>;
        /** If true, then this type literal represents an *array* of its type. */
        isArrayType?: boolean;
    }
    enum FlowFlags {
        Unreachable = 1,
        Start = 2,
        BranchLabel = 4,
        LoopLabel = 8,
        Assignment = 16,
        TrueCondition = 32,
        FalseCondition = 64,
        SwitchClause = 128,
        ArrayMutation = 256,
        Referenced = 512,
        Shared = 1024,
        PreFinally = 2048,
        AfterFinally = 4096,
        Label = 12,
        Condition = 96,
    }
    interface FlowLock {
        locked?: boolean;
    }
    interface AfterFinallyFlow extends FlowNodeBase, FlowLock {
        antecedent: FlowNode;
    }
    interface PreFinallyFlow extends FlowNodeBase {
        antecedent: FlowNode;
        lock: FlowLock;
    }
    type FlowNode = AfterFinallyFlow | PreFinallyFlow | FlowStart | FlowLabel | FlowAssignment | FlowCondition | FlowSwitchClause | FlowArrayMutation;
    interface FlowNodeBase {
        flags: FlowFlags;
        id?: number;
    }
    interface FlowStart extends FlowNodeBase {
        container?: FunctionExpression | ArrowFunction | MethodDeclaration;
    }
    interface FlowLabel extends FlowNodeBase {
        antecedents: FlowNode[];
    }
    interface FlowAssignment extends FlowNodeBase {
        node: Expression | VariableDeclaration | BindingElement;
        antecedent: FlowNode;
    }
    interface FlowCondition extends FlowNodeBase {
        expression: Expression;
        antecedent: FlowNode;
    }
    interface FlowSwitchClause extends FlowNodeBase {
        switchStatement: SwitchStatement;
        clauseStart: number;
        clauseEnd: number;
        antecedent: FlowNode;
    }
    interface FlowArrayMutation extends FlowNodeBase {
        node: CallExpression | BinaryExpression;
        antecedent: FlowNode;
    }
    type FlowType = Type | IncompleteType;
    interface IncompleteType {
        flags: TypeFlags;
        type: Type;
    }
    interface AmdDependency {
        path: string;
        name: string;
    }
    /**
     * Subset of properties from SourceFile that are used in multiple utility functions
     */
    interface SourceFileLike {
        readonly text: string;
        lineMap: ReadonlyArray<number>;
    }
    interface RedirectInfo {
        /** Source file this redirects to. */
        readonly redirectTarget: SourceFile;
        /**
         * Source file for the duplicate package. This will not be used by the Program,
         * but we need to keep this around so we can watch for changes in underlying.
         */
        readonly unredirected: SourceFile;
    }
    interface SourceFile extends Declaration {
        kind: SyntaxKind.SourceFile;
        statements: NodeArray<Statement>;
        endOfFileToken: Token<SyntaxKind.EndOfFileToken>;
        fileName: string;
        path: Path;
        text: string;
        /**
         * If two source files are for the same version of the same package, one will redirect to the other.
         * (See `createRedirectSourceFile` in program.ts.)
         * The redirect will have this set. The other will not have anything set, but see Program#sourceFileIsRedirectedTo.
         */
        redirectInfo?: RedirectInfo | undefined;
        amdDependencies: ReadonlyArray<AmdDependency>;
        moduleName: string;
        referencedFiles: ReadonlyArray<FileReference>;
        typeReferenceDirectives: ReadonlyArray<FileReference>;
        languageVariant: LanguageVariant;
        isDeclarationFile: boolean;
        renamedDependencies?: ReadonlyMap<string>;
        /**
         * lib.d.ts should have a reference comment like
         *
         *  /// <reference no-default-lib="true"/>
         *
         * If any other file has this comment, it signals not to include lib.d.ts
         * because this containing file is intended to act as a default library.
         */
        hasNoDefaultLib: boolean;
        languageVersion: ScriptTarget;
        scriptKind: ScriptKind;
        externalModuleIndicator: Node;
        commonJsModuleIndicator: Node;
        identifiers: Map<string>;
        nodeCount: number;
        identifierCount: number;
        symbolCount: number;
        parseDiagnostics: Diagnostic[];
        bindDiagnostics: Diagnostic[];
        jsDocDiagnostics?: Diagnostic[];
        additionalSyntacticDiagnostics?: ReadonlyArray<Diagnostic>;
        lineMap: ReadonlyArray<number>;
        classifiableNames?: ReadonlyUnderscoreEscapedMap<true>;
        resolvedModules: Map<ResolvedModuleFull>;
        resolvedTypeReferenceDirectiveNames: Map<ResolvedTypeReferenceDirective>;
        imports: ReadonlyArray<StringLiteral>;
        moduleAugmentations: ReadonlyArray<StringLiteral | Identifier>;
        patternAmbientModules?: PatternAmbientModule[];
        ambientModuleNames: ReadonlyArray<string>;
        checkJsDirective: CheckJsDirective | undefined;
        version: string;
    }
    interface Bundle extends Node {
        kind: SyntaxKind.Bundle;
        sourceFiles: ReadonlyArray<SourceFile>;
    }
    interface JsonSourceFile extends SourceFile {
        jsonObject?: ObjectLiteralExpression;
        extendedSourceFiles?: string[];
    }
    interface ScriptReferenceHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFile(fileName: string): SourceFile;
        getSourceFileByPath(path: Path): SourceFile;
        getCurrentDirectory(): string;
    }
    interface ParseConfigHost {
        useCaseSensitiveFileNames: boolean;
        readDirectory(rootDir: string, extensions: ReadonlyArray<string>, excludes: ReadonlyArray<string>, includes: ReadonlyArray<string>, depth: number): string[];
        /**
         * Gets a value indicating whether the specified path exists and is a file.
         * @param path The path to test.
         */
        fileExists(path: string): boolean;
        readFile(path: string): string | undefined;
    }
    type WriteFileCallback = (fileName: string, data: string, writeByteOrderMark: boolean, onError: ((message: string) => void) | undefined, sourceFiles: ReadonlyArray<SourceFile>) => void;
    class OperationCanceledException {
    }
    interface CancellationToken {
        isCancellationRequested(): boolean;
        /** @throws OperationCanceledException if isCancellationRequested is true */
        throwIfCancellationRequested(): void;
    }
    interface Program extends ScriptReferenceHost {
        /**
         * Get a list of root file names that were passed to a 'createProgram'
         */
        getRootFileNames(): ReadonlyArray<string>;
        /**
         * Get a list of files in the program
         */
        getSourceFiles(): ReadonlyArray<SourceFile>;
        /**
         * Get a list of file names that were passed to 'createProgram' or referenced in a
         * program source file but could not be located.
         */
        getMissingFilePaths(): ReadonlyArray<Path>;
        /**
         * Emits the JavaScript and declaration files.  If targetSourceFile is not specified, then
         * the JavaScript and declaration files will be produced for all the files in this program.
         * If targetSourceFile is specified, then only the JavaScript and declaration for that
         * specific file will be generated.
         *
         * If writeFile is not specified then the writeFile callback from the compiler host will be
         * used for writing the JavaScript and declaration files.  Otherwise, the writeFile parameter
         * will be invoked when writing the JavaScript and declaration files.
         */
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): EmitResult;
        getOptionsDiagnostics(cancellationToken?: CancellationToken): ReadonlyArray<Diagnostic>;
        getGlobalDiagnostics(cancellationToken?: CancellationToken): ReadonlyArray<Diagnostic>;
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): ReadonlyArray<Diagnostic>;
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): ReadonlyArray<Diagnostic>;
        getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): ReadonlyArray<Diagnostic>;
        /**
         * Gets a type checker that can be used to semantically analyze source files in the program.
         */
        getTypeChecker(): TypeChecker;
        getCommonSourceDirectory(): string;
        getDiagnosticsProducingTypeChecker(): TypeChecker;
        dropDiagnosticsProducingTypeChecker(): void;
        getClassifiableNames(): UnderscoreEscapedMap<true>;
        getNodeCount(): number;
        getIdentifierCount(): number;
        getSymbolCount(): number;
        getTypeCount(): number;
        getFileProcessingDiagnostics(): DiagnosticCollection;
        getResolvedTypeReferenceDirectives(): Map<ResolvedTypeReferenceDirective>;
        isSourceFileFromExternalLibrary(file: SourceFile): boolean;
        isSourceFileDefaultLibrary(file: SourceFile): boolean;
        structureIsReused?: StructureIsReused;
        getSourceFileFromReference(referencingFile: SourceFile, ref: FileReference): SourceFile | undefined;
        /** Given a source file, get the name of the package it was imported from. */
        sourceFileToPackageName: Map<string>;
        /** Set of all source files that some other source file redirects to. */
        redirectTargetsSet: Map<true>;
    }
    enum StructureIsReused {
        Not = 0,
        SafeModules = 1,
        Completely = 2,
    }
    interface CustomTransformers {
        /** Custom transformers to evaluate before built-in transformations. */
        before?: TransformerFactory<SourceFile>[];
        /** Custom transformers to evaluate after built-in transformations. */
        after?: TransformerFactory<SourceFile>[];
    }
    interface SourceMapSpan {
        /** Line number in the .js file. */
        emittedLine: number;
        /** Column number in the .js file. */
        emittedColumn: number;
        /** Line number in the .ts file. */
        sourceLine: number;
        /** Column number in the .ts file. */
        sourceColumn: number;
        /** Optional name (index into names array) associated with this span. */
        nameIndex?: number;
        /** .ts file (index into sources array) associated with this span */
        sourceIndex: number;
    }
    interface SourceMapData {
        sourceMapFilePath: string;
        jsSourceMappingURL: string;
        sourceMapFile: string;
        sourceMapSourceRoot: string;
        sourceMapSources: string[];
        sourceMapSourcesContent?: string[];
        inputSourceFileNames: string[];
        sourceMapNames?: string[];
        sourceMapMappings: string;
        sourceMapDecodedMappings: SourceMapSpan[];
    }
    /** Return code used by getEmitOutput function to indicate status of the function */
    enum ExitStatus {
        Success = 0,
        DiagnosticsPresent_OutputsSkipped = 1,
        DiagnosticsPresent_OutputsGenerated = 2,
    }
    interface EmitResult {
        emitSkipped: boolean;
        /** Contains declaration emit diagnostics */
        diagnostics: ReadonlyArray<Diagnostic>;
        emittedFiles: string[];
        sourceMaps: SourceMapData[];
    }
    interface TypeCheckerHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFiles(): ReadonlyArray<SourceFile>;
        getSourceFile(fileName: string): SourceFile;
        getResolvedTypeReferenceDirectives(): ReadonlyMap<ResolvedTypeReferenceDirective>;
    }
    interface TypeChecker {
        getTypeOfSymbolAtLocation(symbol: Symbol, node: Node): Type;
        getDeclaredTypeOfSymbol(symbol: Symbol): Type;
        getPropertiesOfType(type: Type): Symbol[];
        getPropertyOfType(type: Type, propertyName: string): Symbol | undefined;
        getIndexInfoOfType(type: Type, kind: IndexKind): IndexInfo | undefined;
        getSignaturesOfType(type: Type, kind: SignatureKind): Signature[];
        getIndexTypeOfType(type: Type, kind: IndexKind): Type | undefined;
        getBaseTypes(type: InterfaceType): BaseType[];
        getBaseTypeOfLiteralType(type: Type): Type;
        getWidenedType(type: Type): Type;
        getReturnTypeOfSignature(signature: Signature): Type;
        /**
         * Gets the type of a parameter at a given position in a signature.
         * Returns `any` if the index is not valid.
         */
        getParameterType(signature: Signature, parameterIndex: number): Type;
        getNullableType(type: Type, flags: TypeFlags): Type;
        getNonNullableType(type: Type): Type;
        /** Note that the resulting nodes cannot be checked. */
        typeToTypeNode(type: Type, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): TypeNode;
        /** Note that the resulting nodes cannot be checked. */
        signatureToSignatureDeclaration(signature: Signature, kind: SyntaxKind, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): SignatureDeclaration;
        /** Note that the resulting nodes cannot be checked. */
        indexInfoToIndexSignatureDeclaration(indexInfo: IndexInfo, kind: IndexKind, enclosingDeclaration?: Node, flags?: NodeBuilderFlags): IndexSignatureDeclaration;
        getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[];
        getSymbolAtLocation(node: Node): Symbol | undefined;
        getSymbolsOfParameterPropertyDeclaration(parameter: ParameterDeclaration, parameterName: string): Symbol[];
        getShorthandAssignmentValueSymbol(location: Node): Symbol | undefined;
        getExportSpecifierLocalTargetSymbol(location: ExportSpecifier): Symbol | undefined;
        /**
         * If a symbol is a local symbol with an associated exported symbol, returns the exported symbol.
         * Otherwise returns its input.
         * For example, at `export type T = number;`:
         *     - `getSymbolAtLocation` at the location `T` will return the exported symbol for `T`.
         *     - But the result of `getSymbolsInScope` will contain the *local* symbol for `T`, not the exported symbol.
         *     - Calling `getExportSymbolOfSymbol` on that local symbol will return the exported symbol.
         */
        getExportSymbolOfSymbol(symbol: Symbol): Symbol;
        getPropertySymbolOfDestructuringAssignment(location: Identifier): Symbol | undefined;
        getTypeAtLocation(node: Node): Type;
        getTypeFromTypeNode(node: TypeNode): Type;
        signatureToString(signature: Signature, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind): string;
        typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): string;
        /**
         * @deprecated Use the createX factory functions or XToY typechecker methods and `createPrinter` or the `xToString` methods instead
         * This will be removed in a future version.
         */
        getSymbolDisplayBuilder(): SymbolDisplayBuilder;
        getFullyQualifiedName(symbol: Symbol): string;
        getAugmentedPropertiesOfType(type: Type): Symbol[];
        getRootSymbols(symbol: Symbol): Symbol[];
        getContextualType(node: Expression): Type | undefined;
        /**
         * returns unknownSignature in the case of an error.
         * @param argumentCount Apparent number of arguments, passed in case of a possibly incomplete call. This should come from an ArgumentListInfo. See `signatureHelp.ts`.
         */
        getResolvedSignature(node: CallLikeExpression, candidatesOutArray?: Signature[], argumentCount?: number): Signature;
        getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature | undefined;
        isImplementationOfOverload(node: FunctionLike): boolean | undefined;
        isUndefinedSymbol(symbol: Symbol): boolean;
        isArgumentsSymbol(symbol: Symbol): boolean;
        isUnknownSymbol(symbol: Symbol): boolean;
        getMergedSymbol(symbol: Symbol): Symbol;
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): string | number | undefined;
        isValidPropertyAccess(node: PropertyAccessExpression | QualifiedName, propertyName: string): boolean;
        /** Follow all aliases to get the original symbol. */
        getAliasedSymbol(symbol: Symbol): Symbol;
        /** Follow a *single* alias to get the immediately aliased symbol. */
        getImmediateAliasedSymbol(symbol: Symbol): Symbol;
        getExportsOfModule(moduleSymbol: Symbol): Symbol[];
        /** Unlike `getExportsOfModule`, this includes properties of an `export =` value. */
        getExportsAndPropertiesOfModule(moduleSymbol: Symbol): Symbol[];
        getAllAttributesTypeFromJsxOpeningLikeElement(elementNode: JsxOpeningLikeElement): Type | undefined;
        getJsxIntrinsicTagNames(): Symbol[];
        isOptionalParameter(node: ParameterDeclaration): boolean;
        getAmbientModules(): Symbol[];
        tryGetMemberInModuleExports(memberName: string, moduleSymbol: Symbol): Symbol | undefined;
        /** Unlike `tryGetMemberInModuleExports`, this includes properties of an `export =` value. */
        tryGetMemberInModuleExportsAndProperties(memberName: string, moduleSymbol: Symbol): Symbol | undefined;
        getApparentType(type: Type): Type;
        getSuggestionForNonexistentProperty(node: Identifier, containingType: Type): string | undefined;
        getSuggestionForNonexistentSymbol(location: Node, name: string, meaning: SymbolFlags): string | undefined;
        getBaseConstraintOfType(type: Type): Type | undefined;
        getAnyType(): Type;
        getStringType(): Type;
        getNumberType(): Type;
        getBooleanType(): Type;
        getVoidType(): Type;
        getUndefinedType(): Type;
        getNullType(): Type;
        getESSymbolType(): Type;
        getNeverType(): Type;
        getUnionType(types: Type[], subtypeReduction?: boolean): Type;
        createArrayType(elementType: Type): Type;
        createPromiseType(type: Type): Type;
        createAnonymousType(symbol: Symbol, members: SymbolTable, callSignatures: Signature[], constructSignatures: Signature[], stringIndexInfo: IndexInfo, numberIndexInfo: IndexInfo): Type;
        createSignature(declaration: SignatureDeclaration, typeParameters: TypeParameter[], thisParameter: Symbol | undefined, parameters: Symbol[], resolvedReturnType: Type, typePredicate: TypePredicate, minArgumentCount: number, hasRestParameter: boolean, hasLiteralTypes: boolean): Signature;
        createSymbol(flags: SymbolFlags, name: __String): TransientSymbol;
        createIndexInfo(type: Type, isReadonly: boolean, declaration?: SignatureDeclaration): IndexInfo;
        isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node, meaning: SymbolFlags, shouldComputeAliasToMarkVisible: boolean): SymbolAccessibilityResult;
        tryFindAmbientModuleWithoutAugmentations(moduleName: string): Symbol | undefined;
        getSymbolWalker(accept?: (symbol: Symbol) => boolean): SymbolWalker;
        getDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        getGlobalDiagnostics(): Diagnostic[];
        getEmitResolver(sourceFile?: SourceFile, cancellationToken?: CancellationToken): EmitResolver;
        getNodeCount(): number;
        getIdentifierCount(): number;
        getSymbolCount(): number;
        getTypeCount(): number;
        /**
         * For a union, will include a property if it's defined in *any* of the member types.
         * So for `{ a } | { b }`, this will include both `a` and `b`.
         * Does not include properties of primitive types.
         */
        isArrayLikeType(type: Type): boolean;
        getAllPossiblePropertiesOfTypes(type: ReadonlyArray<Type>): Symbol[];
        resolveName(name: string, location: Node, meaning: SymbolFlags): Symbol | undefined;
        getJsxNamespace(): string;
    }
    enum NodeBuilderFlags {
        None = 0,
        NoTruncation = 1,
        WriteArrayAsGenericType = 2,
        WriteTypeArgumentsOfSignature = 32,
        UseFullyQualifiedType = 64,
        SuppressAnyReturnType = 256,
        WriteTypeParametersInQualifiedName = 512,
        AllowThisInObjectLiteral = 1024,
        AllowQualifedNameInPlaceOfIdentifier = 2048,
        AllowAnonymousIdentifier = 8192,
        AllowEmptyUnionOrIntersection = 16384,
        AllowEmptyTuple = 32768,
        IgnoreErrors = 60416,
        InObjectTypeLiteral = 1048576,
        InTypeAlias = 8388608,
    }
    interface SymbolWalker {
        /** Note: Return values are not ordered. */
        walkType(root: Type): {
            visitedTypes: ReadonlyArray<Type>;
            visitedSymbols: ReadonlyArray<Symbol>;
        };
        /** Note: Return values are not ordered. */
        walkSymbol(root: Symbol): {
            visitedTypes: ReadonlyArray<Type>;
            visitedSymbols: ReadonlyArray<Symbol>;
        };
    }
    interface SymbolDisplayBuilder {
        buildTypeDisplay(type: Type, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildSymbolDisplay(symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): void;
        buildSignatureDisplay(signature: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind): void;
        buildIndexSignatureDisplay(info: IndexInfo, writer: SymbolWriter, kind: IndexKind, enclosingDeclaration?: Node, globalFlags?: TypeFormatFlags, symbolStack?: Symbol[]): void;
        buildParameterDisplay(parameter: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplay(tp: TypeParameter, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypePredicateDisplay(predicate: TypePredicate, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplayFromSymbol(symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForParametersAndDelimiters(thisParameter: Symbol, parameters: Symbol[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForTypeParametersAndDelimiters(typeParameters: TypeParameter[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildReturnTypeDisplay(signature: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
    }
    interface SymbolWriter {
        writeKeyword(text: string): void;
        writeOperator(text: string): void;
        writePunctuation(text: string): void;
        writeSpace(text: string): void;
        writeStringLiteral(text: string): void;
        writeParameter(text: string): void;
        writeProperty(text: string): void;
        writeSymbol(text: string, symbol: Symbol): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        clear(): void;
        trackSymbol(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): void;
        reportInaccessibleThisError(): void;
        reportPrivateInBaseOfClassExpression(propertyName: string): void;
    }
    enum TypeFormatFlags {
        None = 0,
        WriteArrayAsGenericType = 1,
        UseTypeOfFunction = 4,
        NoTruncation = 8,
        WriteArrowStyleSignature = 16,
        WriteOwnNameForAnyLike = 32,
        WriteTypeArgumentsOfSignature = 64,
        InElementType = 128,
        UseFullyQualifiedType = 256,
        InFirstTypeArgument = 512,
        InTypeAlias = 1024,
        SuppressAnyReturnType = 4096,
        AddUndefined = 8192,
        WriteClassExpressionAsTypeLiteral = 16384,
        InArrayType = 32768,
        UseAliasDefinedOutsideCurrentScope = 65536,
    }
    enum SymbolFormatFlags {
        None = 0,
        WriteTypeParametersOrArguments = 1,
        UseOnlyExternalAliasing = 2,
    }
    enum SymbolAccessibility {
        Accessible = 0,
        NotAccessible = 1,
        CannotBeNamed = 2,
    }
    enum SyntheticSymbolKind {
        UnionOrIntersection = 0,
        Spread = 1,
    }
    enum TypePredicateKind {
        This = 0,
        Identifier = 1,
    }
    interface TypePredicateBase {
        kind: TypePredicateKind;
        type: Type;
    }
    interface ThisTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.This;
    }
    interface IdentifierTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.Identifier;
        parameterName: string;
        parameterIndex: number;
    }
    type TypePredicate = IdentifierTypePredicate | ThisTypePredicate;
    type AnyImportSyntax = ImportDeclaration | ImportEqualsDeclaration;
    interface SymbolVisibilityResult {
        accessibility: SymbolAccessibility;
        aliasesToMakeVisible?: AnyImportSyntax[];
        errorSymbolName?: string;
        errorNode?: Node;
    }
    interface SymbolAccessibilityResult extends SymbolVisibilityResult {
        errorModuleName?: string;
    }
    /** Indicates how to serialize the name for a TypeReferenceNode when emitting decorator metadata */
    enum TypeReferenceSerializationKind {
        Unknown = 0,
        TypeWithConstructSignatureAndValue = 1,
        VoidNullableOrNeverType = 2,
        NumberLikeType = 3,
        StringLikeType = 4,
        BooleanType = 5,
        ArrayLikeType = 6,
        ESSymbolType = 7,
        Promise = 8,
        TypeWithCallSignature = 9,
        ObjectType = 10,
    }
    interface EmitResolver {
        hasGlobalName(name: string): boolean;
        getReferencedExportContainer(node: Identifier, prefixLocals?: boolean): SourceFile | ModuleDeclaration | EnumDeclaration;
        getReferencedImportDeclaration(node: Identifier): Declaration;
        getReferencedDeclarationWithCollidingName(node: Identifier): Declaration;
        isDeclarationWithCollidingName(node: Declaration): boolean;
        isValueAliasDeclaration(node: Node): boolean;
        isReferencedAliasDeclaration(node: Node, checkChildren?: boolean): boolean;
        isTopLevelValueImportEqualsWithEntityName(node: ImportEqualsDeclaration): boolean;
        getNodeCheckFlags(node: Node): NodeCheckFlags;
        isDeclarationVisible(node: Declaration): boolean;
        collectLinkedAliases(node: Identifier): Node[];
        isImplementationOfOverload(node: FunctionLikeDeclaration): boolean | undefined;
        isRequiredInitializedParameter(node: ParameterDeclaration): boolean;
        isOptionalUninitializedParameterProperty(node: ParameterDeclaration): boolean;
        writeTypeOfDeclaration(declaration: AccessorDeclaration | VariableLikeDeclaration, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        writeReturnTypeOfSignatureDeclaration(signatureDeclaration: SignatureDeclaration, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        writeTypeOfExpression(expr: Expression, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node, meaning: SymbolFlags, shouldComputeAliasToMarkVisible: boolean): SymbolAccessibilityResult;
        isEntityNameVisible(entityName: EntityNameOrEntityNameExpression, enclosingDeclaration: Node): SymbolVisibilityResult;
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): string | number;
        getReferencedValueDeclaration(reference: Identifier): Declaration;
        getTypeReferenceSerializationKind(typeName: EntityName, location?: Node): TypeReferenceSerializationKind;
        isOptionalParameter(node: ParameterDeclaration): boolean;
        moduleExportsSomeValue(moduleReferenceExpression: Expression): boolean;
        isArgumentsLocalBinding(node: Identifier): boolean;
        getExternalModuleFileFromDeclaration(declaration: ImportEqualsDeclaration | ImportDeclaration | ExportDeclaration | ModuleDeclaration): SourceFile;
        getTypeReferenceDirectivesForEntityName(name: EntityNameOrEntityNameExpression): string[];
        getTypeReferenceDirectivesForSymbol(symbol: Symbol, meaning?: SymbolFlags): string[];
        isLiteralConstDeclaration(node: VariableDeclaration | PropertyDeclaration | PropertySignature | ParameterDeclaration): boolean;
        writeLiteralConstValue(node: VariableDeclaration | PropertyDeclaration | PropertySignature | ParameterDeclaration, writer: SymbolWriter): void;
        getJsxFactoryEntity(): EntityName;
    }
    enum SymbolFlags {
        None = 0,
        FunctionScopedVariable = 1,
        BlockScopedVariable = 2,
        Property = 4,
        EnumMember = 8,
        Function = 16,
        Class = 32,
        Interface = 64,
        ConstEnum = 128,
        RegularEnum = 256,
        ValueModule = 512,
        NamespaceModule = 1024,
        TypeLiteral = 2048,
        ObjectLiteral = 4096,
        Method = 8192,
        Constructor = 16384,
        GetAccessor = 32768,
        SetAccessor = 65536,
        Signature = 131072,
        TypeParameter = 262144,
        TypeAlias = 524288,
        ExportValue = 1048576,
        Alias = 2097152,
        Prototype = 4194304,
        ExportStar = 8388608,
        Optional = 16777216,
        Transient = 33554432,
        Enum = 384,
        Variable = 3,
        Value = 107455,
        Type = 793064,
        Namespace = 1920,
        Module = 1536,
        Accessor = 98304,
        FunctionScopedVariableExcludes = 107454,
        BlockScopedVariableExcludes = 107455,
        ParameterExcludes = 107455,
        PropertyExcludes = 0,
        EnumMemberExcludes = 900095,
        FunctionExcludes = 106927,
        ClassExcludes = 899519,
        InterfaceExcludes = 792968,
        RegularEnumExcludes = 899327,
        ConstEnumExcludes = 899967,
        ValueModuleExcludes = 106639,
        NamespaceModuleExcludes = 0,
        MethodExcludes = 99263,
        GetAccessorExcludes = 41919,
        SetAccessorExcludes = 74687,
        TypeParameterExcludes = 530920,
        TypeAliasExcludes = 793064,
        AliasExcludes = 2097152,
        ModuleMember = 2623475,
        ExportHasLocal = 944,
        HasExports = 1952,
        HasMembers = 6240,
        BlockScoped = 418,
        PropertyOrAccessor = 98308,
        ClassMember = 106500,
        Classifiable = 788448,
    }
    interface Symbol {
        flags: SymbolFlags;
        escapedName: __String;
        declarations?: Declaration[];
        valueDeclaration?: Declaration;
        members?: SymbolTable;
        exports?: SymbolTable;
        globalExports?: SymbolTable;
        id?: number;
        mergeId?: number;
        parent?: Symbol;
        exportSymbol?: Symbol;
        constEnumOnlyModule?: boolean;
        isReferenced?: boolean;
        isReplaceableByMethod?: boolean;
        isAssigned?: boolean;
    }
    interface SymbolLinks {
        immediateTarget?: Symbol;
        target?: Symbol;
        type?: Type;
        declaredType?: Type;
        typeParameters?: TypeParameter[];
        inferredClassType?: Type;
        instantiations?: Map<Type>;
        mapper?: TypeMapper;
        referenced?: boolean;
        containingType?: UnionOrIntersectionType;
        leftSpread?: Symbol;
        rightSpread?: Symbol;
        syntheticOrigin?: Symbol;
        syntheticLiteralTypeOrigin?: StringLiteralType;
        isDiscriminantProperty?: boolean;
        resolvedExports?: SymbolTable;
        exportsChecked?: boolean;
        typeParametersChecked?: boolean;
        isDeclarationWithCollidingName?: boolean;
        bindingElement?: BindingElement;
        exportsSomeValue?: boolean;
        enumKind?: EnumKind;
    }
    enum EnumKind {
        Numeric = 0,
        Literal = 1,
    }
    enum CheckFlags {
        Instantiated = 1,
        SyntheticProperty = 2,
        SyntheticMethod = 4,
        Readonly = 8,
        Partial = 16,
        HasNonUniformType = 32,
        ContainsPublic = 64,
        ContainsProtected = 128,
        ContainsPrivate = 256,
        ContainsStatic = 512,
        Synthetic = 6,
    }
    interface TransientSymbol extends Symbol, SymbolLinks {
        checkFlags: CheckFlags;
        isRestParameter?: boolean;
    }
    enum InternalSymbolName {
        Call = "__call",
        Constructor = "__constructor",
        New = "__new",
        Index = "__index",
        ExportStar = "__export",
        Global = "__global",
        Missing = "__missing",
        Type = "__type",
        Object = "__object",
        JSXAttributes = "__jsxAttributes",
        Class = "__class",
        Function = "__function",
        Computed = "__computed",
        Resolving = "__resolving__",
        ExportEquals = "export=",
        Default = "default",
    }
    /**
     * This represents a string whose leading underscore have been escaped by adding extra leading underscores.
     * The shape of this brand is rather unique compared to others we've used.
     * Instead of just an intersection of a string and an object, it is that union-ed
     * with an intersection of void and an object. This makes it wholly incompatible
     * with a normal string (which is good, it cannot be misused on assignment or on usage),
     * while still being comparable with a normal string via === (also good) and castable from a string.
     */
    type __String = (string & {
        __escapedIdentifier: void;
    }) | (void & {
        __escapedIdentifier: void;
    }) | InternalSymbolName;
    /** ReadonlyMap where keys are `__String`s. */
    interface ReadonlyUnderscoreEscapedMap<T> {
        get(key: __String): T | undefined;
        has(key: __String): boolean;
        forEach(action: (value: T, key: __String) => void): void;
        readonly size: number;
        keys(): Iterator<__String>;
        values(): Iterator<T>;
        entries(): Iterator<[__String, T]>;
    }
    /** Map where keys are `__String`s. */
    interface UnderscoreEscapedMap<T> extends ReadonlyUnderscoreEscapedMap<T> {
        set(key: __String, value: T): this;
        delete(key: __String): boolean;
        clear(): void;
    }
    /** SymbolTable based on ES6 Map interface. */
    type SymbolTable = UnderscoreEscapedMap<Symbol>;
    /** Represents a "prefix*suffix" pattern. */
    interface Pattern {
        prefix: string;
        suffix: string;
    }
    /** Used to track a `declare module "foo*"`-like declaration. */
    interface PatternAmbientModule {
        pattern: Pattern;
        symbol: Symbol;
    }
    enum NodeCheckFlags {
        TypeChecked = 1,
        LexicalThis = 2,
        CaptureThis = 4,
        CaptureNewTarget = 8,
        SuperInstance = 256,
        SuperStatic = 512,
        ContextChecked = 1024,
        AsyncMethodWithSuper = 2048,
        AsyncMethodWithSuperBinding = 4096,
        CaptureArguments = 8192,
        EnumValuesComputed = 16384,
        LexicalModuleMergesWithClass = 32768,
        LoopWithCapturedBlockScopedBinding = 65536,
        CapturedBlockScopedBinding = 131072,
        BlockScopedBindingInLoop = 262144,
        ClassWithBodyScopedClassBinding = 524288,
        BodyScopedClassBinding = 1048576,
        NeedsLoopOutParameter = 2097152,
        AssignmentsMarked = 4194304,
        ClassWithConstructorReference = 8388608,
        ConstructorReferenceInClass = 16777216,
    }
    interface NodeLinks {
        flags?: NodeCheckFlags;
        resolvedType?: Type;
        resolvedSignature?: Signature;
        resolvedSymbol?: Symbol;
        resolvedIndexInfo?: IndexInfo;
        maybeTypePredicate?: boolean;
        enumMemberValue?: string | number;
        isVisible?: boolean;
        containsArgumentsReference?: boolean;
        hasReportedStatementInAmbientContext?: boolean;
        jsxFlags?: JsxFlags;
        resolvedJsxElementAttributesType?: Type;
        resolvedJsxElementAllAttributesType?: Type;
        hasSuperCall?: boolean;
        superCall?: ExpressionStatement;
        switchTypes?: Type[];
    }
    enum TypeFlags {
        Any = 1,
        String = 2,
        Number = 4,
        Boolean = 8,
        Enum = 16,
        StringLiteral = 32,
        NumberLiteral = 64,
        BooleanLiteral = 128,
        EnumLiteral = 256,
        ESSymbol = 512,
        Void = 1024,
        Undefined = 2048,
        Null = 4096,
        Never = 8192,
        TypeParameter = 16384,
        Object = 32768,
        Union = 65536,
        Intersection = 131072,
        Index = 262144,
        IndexedAccess = 524288,
        FreshLiteral = 1048576,
        ContainsWideningType = 2097152,
        ContainsObjectLiteral = 4194304,
        ContainsAnyFunctionType = 8388608,
        NonPrimitive = 16777216,
        JsxAttributes = 33554432,
        MarkerType = 67108864,
        Nullable = 6144,
        Literal = 224,
        Unit = 6368,
        StringOrNumberLiteral = 96,
        DefinitelyFalsy = 7392,
        PossiblyFalsy = 7406,
        Intrinsic = 16793231,
        Primitive = 8190,
        StringLike = 262178,
        NumberLike = 84,
        BooleanLike = 136,
        EnumLike = 272,
        UnionOrIntersection = 196608,
        StructuredType = 229376,
        StructuredOrTypeVariable = 1032192,
        TypeVariable = 540672,
        Narrowable = 17810175,
        NotUnionOrUnit = 16810497,
        RequiresWidening = 6291456,
        PropagatingFlags = 14680064,
    }
    type DestructuringPattern = BindingPattern | ObjectLiteralExpression | ArrayLiteralExpression;
    interface Type {
        flags: TypeFlags;
        id: number;
        checker: TypeChecker;
        symbol?: Symbol;
        pattern?: DestructuringPattern;
        aliasSymbol?: Symbol;
        aliasTypeArguments?: Type[];
    }
    interface IntrinsicType extends Type {
        intrinsicName: string;
    }
    interface LiteralType extends Type {
        value: string | number;
        freshType?: LiteralType;
        regularType?: LiteralType;
    }
    interface StringLiteralType extends LiteralType {
        value: string;
    }
    interface NumberLiteralType extends LiteralType {
        value: number;
    }
    interface EnumType extends Type {
    }
    enum ObjectFlags {
        Class = 1,
        Interface = 2,
        Reference = 4,
        Tuple = 8,
        Anonymous = 16,
        Mapped = 32,
        Instantiated = 64,
        ObjectLiteral = 128,
        EvolvingArray = 256,
        ObjectLiteralPatternWithComputedProperties = 512,
        ContainsSpread = 1024,
        ClassOrInterface = 3,
    }
    interface ObjectType extends Type {
        objectFlags: ObjectFlags;
    }
    /** Class and interface types (ObjectFlags.Class and ObjectFlags.Interface). */
    interface InterfaceType extends ObjectType {
        typeParameters: TypeParameter[];
        outerTypeParameters: TypeParameter[];
        localTypeParameters: TypeParameter[];
        thisType: TypeParameter;
        resolvedBaseConstructorType?: Type;
        resolvedBaseTypes: BaseType[];
    }
    type BaseType = ObjectType | IntersectionType;
    interface InterfaceTypeWithDeclaredMembers extends InterfaceType {
        declaredProperties: Symbol[];
        declaredCallSignatures: Signature[];
        declaredConstructSignatures: Signature[];
        declaredStringIndexInfo: IndexInfo;
        declaredNumberIndexInfo: IndexInfo;
    }
    /**
     * Type references (ObjectFlags.Reference). When a class or interface has type parameters or
     * a "this" type, references to the class or interface are made using type references. The
     * typeArguments property specifies the types to substitute for the type parameters of the
     * class or interface and optionally includes an extra element that specifies the type to
     * substitute for "this" in the resulting instantiation. When no extra argument is present,
     * the type reference itself is substituted for "this". The typeArguments property is undefined
     * if the class or interface has no type parameters and the reference isn't specifying an
     * explicit "this" argument.
     */
    interface TypeReference extends ObjectType {
        target: GenericType;
        typeArguments?: Type[];
    }
    enum Variance {
        Invariant = 0,
        Covariant = 1,
        Contravariant = 2,
        Bivariant = 3,
        Independent = 4,
    }
    interface GenericType extends InterfaceType, TypeReference {
        instantiations: Map<TypeReference>;
        variances?: Variance[];
    }
    interface UnionOrIntersectionType extends Type {
        types: Type[];
        propertyCache: SymbolTable;
        resolvedProperties: Symbol[];
        resolvedIndexType: IndexType;
        resolvedBaseConstraint: Type;
        couldContainTypeVariables: boolean;
    }
    interface UnionType extends UnionOrIntersectionType {
    }
    interface IntersectionType extends UnionOrIntersectionType {
        resolvedApparentType: Type;
    }
    type StructuredType = ObjectType | UnionType | IntersectionType;
    interface AnonymousType extends ObjectType {
        target?: AnonymousType;
        mapper?: TypeMapper;
    }
    interface MappedType extends AnonymousType {
        declaration: MappedTypeNode;
        typeParameter?: TypeParameter;
        constraintType?: Type;
        templateType?: Type;
        modifiersType?: Type;
    }
    interface EvolvingArrayType extends ObjectType {
        elementType: Type;
        finalArrayType?: Type;
    }
    interface ResolvedType extends ObjectType, UnionOrIntersectionType {
        members: SymbolTable;
        properties: Symbol[];
        callSignatures: Signature[];
        constructSignatures: Signature[];
        stringIndexInfo?: IndexInfo;
        numberIndexInfo?: IndexInfo;
    }
    interface FreshObjectLiteralType extends ResolvedType {
        regularType: ResolvedType;
    }
    interface IterableOrIteratorType extends ObjectType, UnionType {
        iteratedTypeOfIterable?: Type;
        iteratedTypeOfIterator?: Type;
        iteratedTypeOfAsyncIterable?: Type;
        iteratedTypeOfAsyncIterator?: Type;
    }
    interface PromiseOrAwaitableType extends ObjectType, UnionType {
        promiseTypeOfPromiseConstructor?: Type;
        promisedTypeOfPromise?: Type;
        awaitedTypeOfType?: Type;
    }
    interface SyntheticDefaultModuleType extends Type {
        syntheticType?: Type;
    }
    interface TypeVariable extends Type {
        resolvedBaseConstraint: Type;
        resolvedIndexType: IndexType;
    }
    interface TypeParameter extends TypeVariable {
        /** Retrieve using getConstraintFromTypeParameter */
        constraint: Type;
        default?: Type;
        target?: TypeParameter;
        mapper?: TypeMapper;
        isThisType?: boolean;
        resolvedDefaultType?: Type;
    }
    interface IndexedAccessType extends TypeVariable {
        objectType: Type;
        indexType: Type;
        constraint?: Type;
    }
    interface IndexType extends Type {
        type: TypeVariable | UnionOrIntersectionType;
    }
    enum SignatureKind {
        Call = 0,
        Construct = 1,
    }
    interface Signature {
        declaration: SignatureDeclaration;
        typeParameters?: TypeParameter[];
        parameters: Symbol[];
        thisParameter?: Symbol;
        resolvedReturnType: Type;
        minArgumentCount: number;
        hasRestParameter: boolean;
        hasLiteralTypes: boolean;
        target?: Signature;
        mapper?: TypeMapper;
        unionSignatures?: Signature[];
        erasedSignatureCache?: Signature;
        canonicalSignatureCache?: Signature;
        isolatedSignatureType?: ObjectType;
        typePredicate?: TypePredicate;
        instantiations?: Map<Signature>;
    }
    enum IndexKind {
        String = 0,
        Number = 1,
    }
    interface IndexInfo {
        type: Type;
        isReadonly: boolean;
        declaration?: SignatureDeclaration;
    }
    type TypeMapper = (t: TypeParameter) => Type;
    enum InferencePriority {
        Contravariant = 1,
        NakedTypeVariable = 2,
        MappedType = 4,
        ReturnType = 8,
    }
    interface InferenceInfo {
        typeParameter: TypeParameter;
        candidates: Type[];
        inferredType: Type;
        priority: InferencePriority;
        topLevel: boolean;
        isFixed: boolean;
    }
    enum InferenceFlags {
        InferUnionTypes = 1,
        NoDefault = 2,
        AnyDefault = 4,
    }
    /**
     * Ternary values are defined such that
     * x & y is False if either x or y is False.
     * x & y is Maybe if either x or y is Maybe, but neither x or y is False.
     * x & y is True if both x and y are True.
     * x | y is False if both x and y are False.
     * x | y is Maybe if either x or y is Maybe, but neither x or y is True.
     * x | y is True if either x or y is True.
     */
    enum Ternary {
        False = 0,
        Maybe = 1,
        True = -1,
    }
    type TypeComparer = (s: Type, t: Type, reportErrors?: boolean) => Ternary;
    interface InferenceContext extends TypeMapper {
        signature: Signature;
        inferences: InferenceInfo[];
        flags: InferenceFlags;
        compareTypes: TypeComparer;
    }
    interface WideningContext {
        parent?: WideningContext;
        propertyName?: __String;
        siblings?: Type[];
        resolvedPropertyNames?: __String[];
    }
    enum SpecialPropertyAssignmentKind {
        None = 0,
        ExportsProperty = 1,
        ModuleExports = 2,
        PrototypeProperty = 3,
        ThisProperty = 4,
        Property = 5,
    }
    interface JsFileExtensionInfo {
        extension: string;
        isMixedContent: boolean;
        scriptKind?: ScriptKind;
    }
    interface DiagnosticMessage {
        key: string;
        category: DiagnosticCategory;
        code: number;
        message: string;
    }
    /**
     * A linked list of formatted diagnostic messages to be used as part of a multiline message.
     * It is built from the bottom up, leaving the head to be the "main" diagnostic.
     * While it seems that DiagnosticMessageChain is structurally similar to DiagnosticMessage,
     * the difference is that messages are all preformatted in DMC.
     */
    interface DiagnosticMessageChain {
        messageText: string;
        category: DiagnosticCategory;
        code: number;
        next?: DiagnosticMessageChain;
    }
    interface Diagnostic {
        file: SourceFile | undefined;
        start: number | undefined;
        length: number | undefined;
        messageText: string | DiagnosticMessageChain;
        category: DiagnosticCategory;
        code: number;
        source?: string;
    }
    enum DiagnosticCategory {
        Warning = 0,
        Error = 1,
        Message = 2,
    }
    enum ModuleResolutionKind {
        Classic = 1,
        NodeJs = 2,
    }
    interface PluginImport {
        name: string;
    }
    type CompilerOptionsValue = string | number | boolean | (string | number)[] | string[] | MapLike<string[]> | PluginImport[] | null | undefined;
    interface CompilerOptions {
        all?: boolean;
        allowJs?: boolean;
        allowNonTsExtensions?: boolean;
        allowSyntheticDefaultImports?: boolean;
        allowUnreachableCode?: boolean;
        allowUnusedLabels?: boolean;
        alwaysStrict?: boolean;
        baseUrl?: string;
        charset?: string;
        checkJs?: boolean;
        configFilePath?: string;
        /** configFile is set as non enumerable property so as to avoid checking of json source files */
        readonly configFile?: JsonSourceFile;
        declaration?: boolean;
        declarationDir?: string;
        diagnostics?: boolean;
        extendedDiagnostics?: boolean;
        disableSizeLimit?: boolean;
        downlevelIteration?: boolean;
        emitBOM?: boolean;
        emitDecoratorMetadata?: boolean;
        experimentalDecorators?: boolean;
        forceConsistentCasingInFileNames?: boolean;
        help?: boolean;
        importHelpers?: boolean;
        init?: boolean;
        inlineSourceMap?: boolean;
        inlineSources?: boolean;
        isolatedModules?: boolean;
        jsx?: JsxEmit;
        lib?: string[];
        listEmittedFiles?: boolean;
        listFiles?: boolean;
        locale?: string;
        mapRoot?: string;
        maxNodeModuleJsDepth?: number;
        module?: ModuleKind;
        moduleResolution?: ModuleResolutionKind;
        newLine?: NewLineKind;
        noEmit?: boolean;
        noEmitForJsFiles?: boolean;
        noEmitHelpers?: boolean;
        noEmitOnError?: boolean;
        noErrorTruncation?: boolean;
        noFallthroughCasesInSwitch?: boolean;
        noImplicitAny?: boolean;
        noImplicitReturns?: boolean;
        noImplicitThis?: boolean;
        noStrictGenericChecks?: boolean;
        noUnusedLocals?: boolean;
        noUnusedParameters?: boolean;
        noImplicitUseStrict?: boolean;
        noLib?: boolean;
        noResolve?: boolean;
        out?: string;
        outDir?: string;
        outFile?: string;
        paths?: MapLike<string[]>;
        plugins?: PluginImport[];
        preserveConstEnums?: boolean;
        preserveSymlinks?: boolean;
        project?: string;
        pretty?: DiagnosticStyle;
        reactNamespace?: string;
        jsxFactory?: string;
        removeComments?: boolean;
        rootDir?: string;
        rootDirs?: string[];
        skipLibCheck?: boolean;
        skipDefaultLibCheck?: boolean;
        sourceMap?: boolean;
        sourceRoot?: string;
        strict?: boolean;
        strictFunctionTypes?: boolean;
        strictNullChecks?: boolean;
        stripInternal?: boolean;
        suppressExcessPropertyErrors?: boolean;
        suppressImplicitAnyIndexErrors?: boolean;
        suppressOutputPathCheck?: boolean;
        target?: ScriptTarget;
        traceResolution?: boolean;
        types?: string[];
        /** Paths used to compute primary types search locations */
        typeRoots?: string[];
        version?: boolean;
        watch?: boolean;
        [option: string]: CompilerOptionsValue | JsonSourceFile | undefined;
    }
    interface TypeAcquisition {
        enableAutoDiscovery?: boolean;
        enable?: boolean;
        include?: string[];
        exclude?: string[];
        [option: string]: string[] | boolean | undefined;
    }
    interface DiscoverTypingsInfo {
        fileNames: string[];
        projectRootPath: string;
        safeListPath: string;
        packageNameToTypingLocation: Map<string>;
        typeAcquisition: TypeAcquisition;
        compilerOptions: CompilerOptions;
        unresolvedImports: ReadonlyArray<string>;
    }
    enum ModuleKind {
        None = 0,
        CommonJS = 1,
        AMD = 2,
        UMD = 3,
        System = 4,
        ES2015 = 5,
        ESNext = 6,
    }
    enum JsxEmit {
        None = 0,
        Preserve = 1,
        React = 2,
        ReactNative = 3,
    }
    enum NewLineKind {
        CarriageReturnLineFeed = 0,
        LineFeed = 1,
    }
    interface LineAndCharacter {
        /** 0-based. */
        line: number;
        character: number;
    }
    enum ScriptKind {
        Unknown = 0,
        JS = 1,
        JSX = 2,
        TS = 3,
        TSX = 4,
        External = 5,
        JSON = 6,
    }
    enum ScriptTarget {
        ES3 = 0,
        ES5 = 1,
        ES2015 = 2,
        ES2016 = 3,
        ES2017 = 4,
        ESNext = 5,
        Latest = 5,
    }
    enum LanguageVariant {
        Standard = 0,
        JSX = 1,
    }
    enum DiagnosticStyle {
        Simple = 0,
        Pretty = 1,
    }
    /** Either a parsed command line or a parsed tsconfig.json */
    interface ParsedCommandLine {
        options: CompilerOptions;
        typeAcquisition?: TypeAcquisition;
        fileNames: string[];
        raw?: any;
        errors: Diagnostic[];
        wildcardDirectories?: MapLike<WatchDirectoryFlags>;
        compileOnSave?: boolean;
        configFileSpecs?: ConfigFileSpecs;
    }
    enum WatchDirectoryFlags {
        None = 0,
        Recursive = 1,
    }
    interface ConfigFileSpecs {
        filesSpecs: ReadonlyArray<string>;
        /**
         * Present to report errors (user specified specs), validatedIncludeSpecs are used for file name matching
         */
        includeSpecs: ReadonlyArray<string>;
        /**
         * Present to report errors (user specified specs), validatedExcludeSpecs are used for file name matching
         */
        excludeSpecs: ReadonlyArray<string>;
        validatedIncludeSpecs: ReadonlyArray<string>;
        validatedExcludeSpecs: ReadonlyArray<string>;
        wildcardDirectories: MapLike<WatchDirectoryFlags>;
    }
    interface ExpandResult {
        fileNames: string[];
        wildcardDirectories: MapLike<WatchDirectoryFlags>;
        spec: ConfigFileSpecs;
    }
    interface CommandLineOptionBase {
        name: string;
        type: "string" | "number" | "boolean" | "object" | "list" | Map<number | string>;
        isFilePath?: boolean;
        shortName?: string;
        description?: DiagnosticMessage;
        paramType?: DiagnosticMessage;
        isTSConfigOnly?: boolean;
        isCommandLineOnly?: boolean;
        showInSimplifiedHelpView?: boolean;
        category?: DiagnosticMessage;
    }
    interface CommandLineOptionOfPrimitiveType extends CommandLineOptionBase {
        type: "string" | "number" | "boolean";
    }
    interface CommandLineOptionOfCustomType extends CommandLineOptionBase {
        type: Map<number | string>;
    }
    interface TsConfigOnlyOption extends CommandLineOptionBase {
        type: "object";
        elementOptions?: Map<CommandLineOption>;
        extraKeyDiagnosticMessage?: DiagnosticMessage;
    }
    interface CommandLineOptionOfListType extends CommandLineOptionBase {
        type: "list";
        element: CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType | TsConfigOnlyOption;
    }
    type CommandLineOption = CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType | TsConfigOnlyOption | CommandLineOptionOfListType;
    enum CharacterCodes {
        nullCharacter = 0,
        maxAsciiCharacter = 127,
        lineFeed = 10,
        carriageReturn = 13,
        lineSeparator = 8232,
        paragraphSeparator = 8233,
        nextLine = 133,
        space = 32,
        nonBreakingSpace = 160,
        enQuad = 8192,
        emQuad = 8193,
        enSpace = 8194,
        emSpace = 8195,
        threePerEmSpace = 8196,
        fourPerEmSpace = 8197,
        sixPerEmSpace = 8198,
        figureSpace = 8199,
        punctuationSpace = 8200,
        thinSpace = 8201,
        hairSpace = 8202,
        zeroWidthSpace = 8203,
        narrowNoBreakSpace = 8239,
        ideographicSpace = 12288,
        mathematicalSpace = 8287,
        ogham = 5760,
        _ = 95,
        $ = 36,
        _0 = 48,
        _1 = 49,
        _2 = 50,
        _3 = 51,
        _4 = 52,
        _5 = 53,
        _6 = 54,
        _7 = 55,
        _8 = 56,
        _9 = 57,
        a = 97,
        b = 98,
        c = 99,
        d = 100,
        e = 101,
        f = 102,
        g = 103,
        h = 104,
        i = 105,
        j = 106,
        k = 107,
        l = 108,
        m = 109,
        n = 110,
        o = 111,
        p = 112,
        q = 113,
        r = 114,
        s = 115,
        t = 116,
        u = 117,
        v = 118,
        w = 119,
        x = 120,
        y = 121,
        z = 122,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        ampersand = 38,
        asterisk = 42,
        at = 64,
        backslash = 92,
        backtick = 96,
        bar = 124,
        caret = 94,
        closeBrace = 125,
        closeBracket = 93,
        closeParen = 41,
        colon = 58,
        comma = 44,
        dot = 46,
        doubleQuote = 34,
        equals = 61,
        exclamation = 33,
        greaterThan = 62,
        hash = 35,
        lessThan = 60,
        minus = 45,
        openBrace = 123,
        openBracket = 91,
        openParen = 40,
        percent = 37,
        plus = 43,
        question = 63,
        semicolon = 59,
        singleQuote = 39,
        slash = 47,
        tilde = 126,
        backspace = 8,
        formFeed = 12,
        byteOrderMark = 65279,
        tab = 9,
        verticalTab = 11,
    }
    interface ModuleResolutionHost {
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string | undefined;
        trace?(s: string): void;
        directoryExists?(directoryName: string): boolean;
        /**
         * Resolve a symbolic link.
         * @see https://nodejs.org/api/fs.html#fs_fs_realpathsync_path_options
         */
        realpath?(path: string): string;
        getCurrentDirectory?(): string;
        getDirectories?(path: string): string[];
    }
    /**
     * Represents the result of module resolution.
     * Module resolution will pick up tsx/jsx/js files even if '--jsx' and '--allowJs' are turned off.
     * The Program will then filter results based on these flags.
     *
     * Prefer to return a `ResolvedModuleFull` so that the file type does not have to be inferred.
     */
    interface ResolvedModule {
        /** Path of the file the module was resolved to. */
        resolvedFileName: string;
        /** True if `resolvedFileName` comes from `node_modules`. */
        isExternalLibraryImport?: boolean;
    }
    /**
     * ResolvedModule with an explicitly provided `extension` property.
     * Prefer this over `ResolvedModule`.
     * If changing this, remember to change `moduleResolutionIsEqualTo`.
     */
    interface ResolvedModuleFull extends ResolvedModule {
        /**
         * Extension of resolvedFileName. This must match what's at the end of resolvedFileName.
         * This is optional for backwards-compatibility, but will be added if not provided.
         */
        extension: Extension;
        packageId?: PackageId;
    }
    /**
     * Unique identifier with a package name and version.
     * If changing this, remember to change `packageIdIsEqual`.
     */
    interface PackageId {
        /**
         * Name of the package.
         * Should not include `@types`.
         * If accessing a non-index file, this should include its name e.g. "foo/bar".
         */
        name: string;
        /**
         * Name of a submodule within this package.
         * May be "".
         */
        subModuleName: string;
        /** Version of the package, e.g. "1.2.3" */
        version: string;
    }
    enum Extension {
        Ts = ".ts",
        Tsx = ".tsx",
        Dts = ".d.ts",
        Js = ".js",
        Jsx = ".jsx",
        Json = ".json",
    }
    interface ResolvedModuleWithFailedLookupLocations {
        readonly resolvedModule: ResolvedModuleFull | undefined;
        readonly failedLookupLocations: ReadonlyArray<string>;
    }
    interface ResolvedTypeReferenceDirective {
        primary: boolean;
        resolvedFileName: string | undefined;
        packageId?: PackageId;
    }
    interface ResolvedTypeReferenceDirectiveWithFailedLookupLocations {
        readonly resolvedTypeReferenceDirective: ResolvedTypeReferenceDirective;
        readonly failedLookupLocations: ReadonlyArray<string>;
    }
    type HasInvalidatedResolution = (sourceFile: Path) => boolean;
    interface CompilerHost extends ModuleResolutionHost {
        getSourceFile(fileName: string, languageVersion: ScriptTarget, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile | undefined;
        getSourceFileByPath?(fileName: string, path: Path, languageVersion: ScriptTarget, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile | undefined;
        getCancellationToken?(): CancellationToken;
        getDefaultLibFileName(options: CompilerOptions): string;
        getDefaultLibLocation?(): string;
        writeFile: WriteFileCallback;
        getCurrentDirectory(): string;
        getDirectories(path: string): string[];
        getCanonicalFileName(fileName: string): string;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
        resolveModuleNames?(moduleNames: string[], containingFile: string, reusedNames?: string[]): ResolvedModule[];
        /**
         * This method is a companion for 'resolveModuleNames' and is used to resolve 'types' references to actual type declaration files
         */
        resolveTypeReferenceDirectives?(typeReferenceDirectiveNames: string[], containingFile: string): ResolvedTypeReferenceDirective[];
        getEnvironmentVariable?(name: string): string;
        onReleaseOldSourceFile?(oldSourceFile: SourceFile, oldOptions: CompilerOptions): void;
        hasInvalidatedResolution?: HasInvalidatedResolution;
        hasChangedAutomaticTypeDirectiveNames?: boolean;
    }
    enum TransformFlags {
        None = 0,
        TypeScript = 1,
        ContainsTypeScript = 2,
        ContainsJsx = 4,
        ContainsESNext = 8,
        ContainsES2017 = 16,
        ContainsES2016 = 32,
        ES2015 = 64,
        ContainsES2015 = 128,
        Generator = 256,
        ContainsGenerator = 512,
        DestructuringAssignment = 1024,
        ContainsDestructuringAssignment = 2048,
        ContainsDecorators = 4096,
        ContainsPropertyInitializer = 8192,
        ContainsLexicalThis = 16384,
        ContainsCapturedLexicalThis = 32768,
        ContainsLexicalThisInComputedPropertyName = 65536,
        ContainsDefaultValueAssignments = 131072,
        ContainsParameterPropertyAssignments = 262144,
        ContainsSpread = 524288,
        ContainsObjectSpread = 1048576,
        ContainsRest = 524288,
        ContainsObjectRest = 1048576,
        ContainsComputedPropertyName = 2097152,
        ContainsBlockScopedBinding = 4194304,
        ContainsBindingPattern = 8388608,
        ContainsYield = 16777216,
        ContainsHoistedDeclarationOrCompletion = 33554432,
        ContainsDynamicImport = 67108864,
        HasComputedFlags = 536870912,
        AssertTypeScript = 3,
        AssertJsx = 4,
        AssertESNext = 8,
        AssertES2017 = 16,
        AssertES2016 = 32,
        AssertES2015 = 192,
        AssertGenerator = 768,
        AssertDestructuringAssignment = 3072,
        NodeExcludes = 536872257,
        ArrowFunctionExcludes = 601249089,
        FunctionExcludes = 601281857,
        ConstructorExcludes = 601015617,
        MethodOrAccessorExcludes = 601015617,
        ClassExcludes = 539358529,
        ModuleExcludes = 574674241,
        TypeExcludes = -3,
        ObjectLiteralExcludes = 540087617,
        ArrayLiteralOrCallOrNewExcludes = 537396545,
        VariableDeclarationListExcludes = 546309441,
        ParameterExcludes = 536872257,
        CatchClauseExcludes = 537920833,
        BindingPatternExcludes = 537396545,
        TypeScriptClassSyntaxMask = 274432,
        ES2015FunctionSyntaxMask = 163840,
    }
    interface SourceMapRange extends TextRange {
        source?: SourceMapSource;
    }
    interface SourceMapSource {
        fileName: string;
        text: string;
        lineMap: ReadonlyArray<number>;
        skipTrivia?: (pos: number) => number;
    }
    interface EmitNode {
        annotatedNodes?: Node[];
        flags?: EmitFlags;
        leadingComments?: SynthesizedComment[];
        trailingComments?: SynthesizedComment[];
        commentRange?: TextRange;
        sourceMapRange?: SourceMapRange;
        tokenSourceMapRanges?: SourceMapRange[];
        constantValue?: string | number;
        externalHelpersModuleName?: Identifier;
        helpers?: EmitHelper[];
    }
    enum EmitFlags {
        SingleLine = 1,
        AdviseOnEmitNode = 2,
        NoSubstitution = 4,
        CapturesThis = 8,
        NoLeadingSourceMap = 16,
        NoTrailingSourceMap = 32,
        NoSourceMap = 48,
        NoNestedSourceMaps = 64,
        NoTokenLeadingSourceMaps = 128,
        NoTokenTrailingSourceMaps = 256,
        NoTokenSourceMaps = 384,
        NoLeadingComments = 512,
        NoTrailingComments = 1024,
        NoComments = 1536,
        NoNestedComments = 2048,
        HelperName = 4096,
        ExportName = 8192,
        LocalName = 16384,
        InternalName = 32768,
        Indented = 65536,
        NoIndentation = 131072,
        AsyncFunctionBody = 262144,
        ReuseTempVariableScope = 524288,
        CustomPrologue = 1048576,
        NoHoisting = 2097152,
        HasEndOfDeclarationMarker = 4194304,
        Iterator = 8388608,
        NoAsciiEscaping = 16777216,
        TypeScriptClassWrapper = 33554432,
    }
    interface EmitHelper {
        readonly name: string;
        readonly scoped: boolean;
        readonly text: string;
        readonly priority?: number;
    }
    /**
     * Used by the checker, this enum keeps track of external emit helpers that should be type
     * checked.
     */
    enum ExternalEmitHelpers {
        Extends = 1,
        Assign = 2,
        Rest = 4,
        Decorate = 8,
        Metadata = 16,
        Param = 32,
        Awaiter = 64,
        Generator = 128,
        Values = 256,
        Read = 512,
        Spread = 1024,
        Await = 2048,
        AsyncGenerator = 4096,
        AsyncDelegator = 8192,
        AsyncValues = 16384,
        ExportStar = 32768,
        MakeTemplateObject = 65536,
        FirstEmitHelper = 1,
        LastEmitHelper = 65536,
        ForOfIncludes = 256,
        ForAwaitOfIncludes = 16384,
        AsyncGeneratorIncludes = 6144,
        AsyncDelegatorIncludes = 26624,
        SpreadIncludes = 1536,
    }
    enum EmitHint {
        SourceFile = 0,
        Expression = 1,
        IdentifierName = 2,
        MappedTypeParameter = 3,
        Unspecified = 4,
    }
    interface EmitHost extends ScriptReferenceHost {
        getSourceFiles(): ReadonlyArray<SourceFile>;
        isSourceFileFromExternalLibrary(file: SourceFile): boolean;
        getCommonSourceDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        getNewLine(): string;
        isEmitBlocked(emitFileName: string): boolean;
        writeFile: WriteFileCallback;
    }
    interface TransformationContext {
        getEmitResolver(): EmitResolver;
        getEmitHost(): EmitHost;
        /** Gets the compiler options supplied to the transformer. */
        getCompilerOptions(): CompilerOptions;
        /** Starts a new lexical environment. */
        startLexicalEnvironment(): void;
        /** Suspends the current lexical environment, usually after visiting a parameter list. */
        suspendLexicalEnvironment(): void;
        /** Resumes a suspended lexical environment, usually before visiting a function body. */
        resumeLexicalEnvironment(): void;
        /** Ends a lexical environment, returning any declarations. */
        endLexicalEnvironment(): Statement[];
        /** Hoists a function declaration to the containing scope. */
        hoistFunctionDeclaration(node: FunctionDeclaration): void;
        /** Hoists a variable declaration to the containing scope. */
        hoistVariableDeclaration(node: Identifier): void;
        /** Records a request for a non-scoped emit helper in the current context. */
        requestEmitHelper(helper: EmitHelper): void;
        /** Gets and resets the requested non-scoped emit helpers. */
        readEmitHelpers(): EmitHelper[] | undefined;
        /** Enables expression substitutions in the pretty printer for the provided SyntaxKind. */
        enableSubstitution(kind: SyntaxKind): void;
        /** Determines whether expression substitutions are enabled for the provided node. */
        isSubstitutionEnabled(node: Node): boolean;
        /**
         * Hook used by transformers to substitute expressions just before they
         * are emitted by the pretty printer.
         *
         * NOTE: Transformation hooks should only be modified during `Transformer` initialization,
         * before returning the `NodeTransformer` callback.
         */
        onSubstituteNode: (hint: EmitHint, node: Node) => Node;
        /**
         * Enables before/after emit notifications in the pretty printer for the provided
         * SyntaxKind.
         */
        enableEmitNotification(kind: SyntaxKind): void;
        /**
         * Determines whether before/after emit notifications should be raised in the pretty
         * printer when it emits a node.
         */
        isEmitNotificationEnabled(node: Node): boolean;
        /**
         * Hook used to allow transformers to capture state before or after
         * the printer emits a node.
         *
         * NOTE: Transformation hooks should only be modified during `Transformer` initialization,
         * before returning the `NodeTransformer` callback.
         */
        onEmitNode: (hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void) => void;
    }
    interface TransformationResult<T extends Node> {
        /** Gets the transformed source files. */
        transformed: T[];
        /** Gets diagnostics for the transformation. */
        diagnostics?: Diagnostic[];
        /**
         * Gets a substitute for a node, if one is available; otherwise, returns the original node.
         *
         * @param hint A hint as to the intended usage of the node.
         * @param node The node to substitute.
         */
        substituteNode(hint: EmitHint, node: Node): Node;
        /**
         * Emits a node with possible notification.
         *
         * @param hint A hint as to the intended usage of the node.
         * @param node The node to emit.
         * @param emitCallback A callback used to emit the node.
         */
        emitNodeWithNotification(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;
        /**
         * Clean up EmitNode entries on any parse-tree nodes.
         */
        dispose(): void;
    }
    /**
     * A function that is used to initialize and return a `Transformer` callback, which in turn
     * will be used to transform one or more nodes.
     */
    type TransformerFactory<T extends Node> = (context: TransformationContext) => Transformer<T>;
    /**
     * A function that transforms a node.
     */
    type Transformer<T extends Node> = (node: T) => T;
    /**
     * A function that accepts and possibly transforms a node.
     */
    type Visitor = (node: Node) => VisitResult<Node>;
    type VisitResult<T extends Node> = T | T[] | undefined;
    interface Printer {
        /**
         * Print a node and its subtree as-is, without any emit transformations.
         * @param hint A value indicating the purpose of a node. This is primarily used to
         * distinguish between an `Identifier` used in an expression position, versus an
         * `Identifier` used as an `IdentifierName` as part of a declaration. For most nodes you
         * should just pass `Unspecified`.
         * @param node The node to print. The node and its subtree are printed as-is, without any
         * emit transformations.
         * @param sourceFile A source file that provides context for the node. The source text of
         * the file is used to emit the original source content for literals and identifiers, while
         * the identifiers of the source file are used when generating unique names to avoid
         * collisions.
         */
        printNode(hint: EmitHint, node: Node, sourceFile: SourceFile): string;
        /**
         * Prints a source file as-is, without any emit transformations.
         */
        printFile(sourceFile: SourceFile): string;
        /**
         * Prints a bundle of source files as-is, without any emit transformations.
         */
        printBundle(bundle: Bundle): string;
        writeNode(hint: EmitHint, node: Node, sourceFile: SourceFile | undefined, writer: EmitTextWriter): void;
        writeFile(sourceFile: SourceFile, writer: EmitTextWriter): void;
        writeBundle(bundle: Bundle, writer: EmitTextWriter): void;
    }
    interface PrintHandlers {
        /**
         * A hook used by the Printer when generating unique names to avoid collisions with
         * globally defined names that exist outside of the current source file.
         */
        hasGlobalName?(name: string): boolean;
        /**
         * A hook used by the Printer to provide notifications prior to emitting a node. A
         * compatible implementation **must** invoke `emitCallback` with the provided `hint` and
         * `node` values.
         * @param hint A hint indicating the intended purpose of the node.
         * @param node The node to emit.
         * @param emitCallback A callback that, when invoked, will emit the node.
         * @example
         * ```ts
         * var printer = createPrinter(printerOptions, {
         *   onEmitNode(hint, node, emitCallback) {
         *     // set up or track state prior to emitting the node...
         *     emitCallback(hint, node);
         *     // restore state after emitting the node...
         *   }
         * });
         * ```
         */
        onEmitNode?(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;
        /**
         * A hook used by the Printer to perform just-in-time substitution of a node. This is
         * primarily used by node transformations that need to substitute one node for another,
         * such as replacing `myExportedVar` with `exports.myExportedVar`.
         * @param hint A hint indicating the intended purpose of the node.
         * @param node The node to emit.
         * @example
         * ```ts
         * var printer = createPrinter(printerOptions, {
         *   substituteNode(hint, node) {
         *     // perform substitution if necessary...
         *     return node;
         *   }
         * });
         * ```
         */
        substituteNode?(hint: EmitHint, node: Node): Node;
        onEmitSourceMapOfNode?: (hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void) => void;
        onEmitSourceMapOfToken?: (node: Node, token: SyntaxKind, pos: number, emitCallback: (token: SyntaxKind, pos: number) => number) => number;
        onEmitSourceMapOfPosition?: (pos: number) => void;
        onEmitHelpers?: (node: Node, writeLines: (text: string) => void) => void;
        onSetSourceFile?: (node: SourceFile) => void;
        onBeforeEmitNodeArray?: (nodes: NodeArray<any>) => void;
        onAfterEmitNodeArray?: (nodes: NodeArray<any>) => void;
        onBeforeEmitToken?: (node: Node) => void;
        onAfterEmitToken?: (node: Node) => void;
    }
    interface PrinterOptions {
        removeComments?: boolean;
        newLine?: NewLineKind;
        sourceMap?: boolean;
        inlineSourceMap?: boolean;
        extendedDiagnostics?: boolean;
    }
    interface EmitTextWriter {
        write(s: string): void;
        writeTextOfNode(text: string, node: Node): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        getText(): string;
        rawWrite(s: string): void;
        writeLiteral(s: string): void;
        getTextPos(): number;
        getLine(): number;
        getColumn(): number;
        getIndent(): number;
        isAtStartOfLine(): boolean;
        reset(): void;
    }
    interface TextSpan {
        start: number;
        length: number;
    }
    interface TextChangeRange {
        span: TextSpan;
        newLength: number;
    }
    interface DiagnosticCollection {
        add(diagnostic: Diagnostic): void;
        getGlobalDiagnostics(): Diagnostic[];
        getDiagnostics(fileName?: string): Diagnostic[];
        getModificationCount(): number;
        reattachFileDiagnostics(newFile: SourceFile): void;
    }
    interface SyntaxList extends Node {
        _children: Node[];
    }
}
declare namespace ts {
    /** Gets a timestamp with (at least) ms resolution */
    const timestamp: () => number;
}
/** Performance measurements for the compiler. */
declare namespace ts.performance {
    /**
     * Marks a performance event.
     *
     * @param markName The name of the mark.
     */
    function mark(markName: string): void;
    /**
     * Adds a performance measurement with the specified name.
     *
     * @param measureName The name of the performance measurement.
     * @param startMarkName The name of the starting mark. If not supplied, the point at which the
     *      profiler was enabled is used.
     * @param endMarkName The name of the ending mark. If not supplied, the current timestamp is
     *      used.
     */
    function measure(measureName: string, startMarkName?: string, endMarkName?: string): void;
    /**
     * Gets the number of times a marker was encountered.
     *
     * @param markName The name of the mark.
     */
    function getCount(markName: string): number;
    /**
     * Gets the total duration of all measurements with the supplied name.
     *
     * @param measureName The name of the measure whose durations should be accumulated.
     */
    function getDuration(measureName: string): number;
    /**
     * Iterate over each measure, performing some action
     *
     * @param cb The action to perform for each measure
     */
    function forEachMeasure(cb: (measureName: string, duration: number) => void): void;
    /** Enables (and resets) performance measurements for the compiler. */
    function enable(): void;
    /** Disables performance measurements for the compiler. */
    function disable(): void;
}
declare namespace ts {
    const versionMajorMinor = "2.7";
    /** The version of the TypeScript compiler release */
    const version: string;
}
declare namespace ts {
    function isExternalModuleNameRelative(moduleName: string): boolean;
}
declare namespace ts {
    const collator: {
        compare(a: string, b: string): number;
    };
    const localeCompareIsCorrect: boolean;
    /** Create a new map. If a template object is provided, the map will copy entries from it. */
    function createMap<T>(): Map<T>;
    /** Create a new escaped identifier map. */
    function createUnderscoreEscapedMap<T>(): UnderscoreEscapedMap<T>;
    function createSymbolTable(symbols?: ReadonlyArray<Symbol>): SymbolTable;
    function createMapFromTemplate<T>(template?: MapLike<T>): Map<T>;
    function toPath(fileName: string, basePath: string, getCanonicalFileName: (path: string) => string): Path;
    enum Comparison {
        LessThan = -1,
        EqualTo = 0,
        GreaterThan = 1,
    }
    function length(array: ReadonlyArray<any>): number;
    /**
     * Iterates through 'array' by index and performs the callback on each element of array until the callback
     * returns a truthy value, then returns that value.
     * If no such value is found, the callback is applied to each element of array and undefined is returned.
     */
    function forEach<T, U>(array: ReadonlyArray<T> | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
    /** Like `forEach`, but suitable for use with numbers and strings (which may be falsy). */
    function firstDefined<T, U>(array: ReadonlyArray<T> | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
    /**
     * Iterates through the parent chain of a node and performs the callback on each parent until the callback
     * returns a truthy value, then returns that value.
     * If no such value is found, it applies the callback until the parent pointer is undefined or the callback returns "quit"
     * At that point findAncestor returns undefined.
     */
    function findAncestor<T extends Node>(node: Node, callback: (element: Node) => element is T): T | undefined;
    function findAncestor(node: Node, callback: (element: Node) => boolean | "quit"): Node | undefined;
    function zipWith<T, U, V>(arrayA: ReadonlyArray<T>, arrayB: ReadonlyArray<U>, callback: (a: T, b: U, index: number) => V): V[];
    function zipToMap<T>(keys: ReadonlyArray<string>, values: ReadonlyArray<T>): Map<T>;
    /**
     * Iterates through `array` by index and performs the callback on each element of array until the callback
     * returns a falsey value, then returns false.
     * If no such value is found, the callback is applied to each element of array and `true` is returned.
     */
    function every<T>(array: ReadonlyArray<T>, callback: (element: T, index: number) => boolean): boolean;
    /** Works like Array.prototype.find, returning `undefined` if no element satisfying the predicate is found. */
    function find<T, U extends T>(array: ReadonlyArray<T>, predicate: (element: T, index: number) => element is U): U | undefined;
    function find<T>(array: ReadonlyArray<T>, predicate: (element: T, index: number) => boolean): T | undefined;
    function findLast<T>(array: ReadonlyArray<T>, predicate: (element: T, index: number) => boolean): T | undefined;
    /** Works like Array.prototype.findIndex, returning `-1` if no element satisfying the predicate is found. */
    function findIndex<T>(array: ReadonlyArray<T>, predicate: (element: T, index: number) => boolean): number;
    /**
     * Returns the first truthy result of `callback`, or else fails.
     * This is like `forEach`, but never returns undefined.
     */
    function findMap<T, U>(array: ReadonlyArray<T>, callback: (element: T, index: number) => U | undefined): U;
    function contains<T>(array: ReadonlyArray<T>, value: T): boolean;
    function indexOf<T>(array: ReadonlyArray<T>, value: T): number;
    function indexOfAnyCharCode(text: string, charCodes: ReadonlyArray<number>, start?: number): number;
    function countWhere<T>(array: ReadonlyArray<T>, predicate: (x: T, i: number) => boolean): number;
    /**
     * Filters an array by a predicate function. Returns the same array instance if the predicate is
     * true for all elements, otherwise returns a new array instance containing the filtered subset.
     */
    function filter<T, U extends T>(array: T[], f: (x: T) => x is U): U[];
    function filter<T>(array: T[], f: (x: T) => boolean): T[];
    function filter<T, U extends T>(array: ReadonlyArray<T>, f: (x: T) => x is U): ReadonlyArray<U>;
    function filter<T, U extends T>(array: ReadonlyArray<T>, f: (x: T) => boolean): ReadonlyArray<T>;
    function filterMutate<T>(array: T[], f: (x: T, i: number, array: T[]) => boolean): void;
    function clear(array: {}[]): void;
    function map<T, U>(array: ReadonlyArray<T>, f: (x: T, i: number) => U): U[];
    function sameMap<T>(array: T[], f: (x: T, i: number) => T): T[];
    function sameMap<T>(array: ReadonlyArray<T>, f: (x: T, i: number) => T): ReadonlyArray<T>;
    /**
     * Flattens an array containing a mix of array or non-array elements.
     *
     * @param array The array to flatten.
     */
    function flatten<T>(array: ReadonlyArray<T | ReadonlyArray<T>>): T[];
    /**
     * Maps an array. If the mapped value is an array, it is spread into the result.
     *
     * @param array The array to map.
     * @param mapfn The callback used to map the result into one or more values.
     */
    function flatMap<T, U>(array: ReadonlyArray<T> | undefined, mapfn: (x: T, i: number) => U | ReadonlyArray<U> | undefined): U[] | undefined;
    function flatMapIter<T, U>(iter: Iterator<T>, mapfn: (x: T) => U | U[] | undefined): U[];
    /**
     * Maps an array. If the mapped value is an array, it is spread into the result.
     * Avoids allocation if all elements map to themselves.
     *
     * @param array The array to map.
     * @param mapfn The callback used to map the result into one or more values.
     */
    function sameFlatMap<T>(array: T[], mapfn: (x: T, i: number) => T | ReadonlyArray<T>): T[];
    function sameFlatMap<T>(array: ReadonlyArray<T>, mapfn: (x: T, i: number) => T | ReadonlyArray<T>): ReadonlyArray<T>;
    function mapDefined<T, U>(array: ReadonlyArray<T> | undefined, mapFn: (x: T, i: number) => U | undefined): U[];
    function mapDefinedIter<T, U>(iter: Iterator<T>, mapFn: (x: T) => U | undefined): U[];
    /**
     * Computes the first matching span of elements and returns a tuple of the first span
     * and the remaining elements.
     */
    function span<T>(array: ReadonlyArray<T>, f: (x: T, i: number) => boolean): [T[], T[]];
    /**
     * Maps contiguous spans of values with the same key.
     *
     * @param array The array to map.
     * @param keyfn A callback used to select the key for an element.
     * @param mapfn A callback used to map a contiguous chunk of values to a single value.
     */
    function spanMap<T, K, U>(array: ReadonlyArray<T>, keyfn: (x: T, i: number) => K, mapfn: (chunk: T[], key: K, start: number, end: number) => U): U[];
    function mapEntries<T, U>(map: ReadonlyMap<T>, f: (key: string, value: T) => [string, U]): Map<U>;
    function some<T>(array: ReadonlyArray<T>, predicate?: (value: T) => boolean): boolean;
    function concatenate<T>(array1: T[], array2: T[]): T[];
    function concatenate<T>(array1: ReadonlyArray<T>, array2: ReadonlyArray<T>): ReadonlyArray<T>;
    function deduplicate<T>(array: ReadonlyArray<T>, areEqual?: (a: T, b: T) => boolean): T[];
    function arrayIsEqualTo<T>(array1: ReadonlyArray<T>, array2: ReadonlyArray<T>, equaler?: (a: T, b: T) => boolean): boolean;
    function changesAffectModuleResolution(oldOptions: CompilerOptions, newOptions: CompilerOptions): boolean;
    /**
     * Compacts an array, removing any falsey elements.
     */
    function compact<T>(array: T[]): T[];
    function compact<T>(array: ReadonlyArray<T>): ReadonlyArray<T>;
    /**
     * Gets the relative complement of `arrayA` with respect to `b`, returning the elements that
     * are not present in `arrayA` but are present in `arrayB`. Assumes both arrays are sorted
     * based on the provided comparer.
     */
    function relativeComplement<T>(arrayA: T[] | undefined, arrayB: T[] | undefined, comparer?: Comparer<T>, offsetA?: number, offsetB?: number): T[] | undefined;
    function sum<T extends Record<K, number>, K extends string>(array: ReadonlyArray<T>, prop: K): number;
    /**
     * Appends a value to an array, returning the array.
     *
     * @param to The array to which `value` is to be appended. If `to` is `undefined`, a new array
     * is created if `value` was appended.
     * @param value The value to append to the array. If `value` is `undefined`, nothing is
     * appended.
     */
    function append<T>(to: T[] | undefined, value: T | undefined): T[] | undefined;
    /**
     * Appends a range of value to an array, returning the array.
     *
     * @param to The array to which `value` is to be appended. If `to` is `undefined`, a new array
     * is created if `value` was appended.
     * @param from The values to append to the array. If `from` is `undefined`, nothing is
     * appended. If an element of `from` is `undefined`, that element is not appended.
     * @param start The offset in `from` at which to start copying values.
     * @param end The offset in `from` at which to stop copying values (non-inclusive).
     */
    function addRange<T>(to: T[] | undefined, from: ReadonlyArray<T> | undefined, start?: number, end?: number): T[] | undefined;
    /**
     * @return Whether the value was added.
     */
    function pushIfUnique<T>(array: T[], toAdd: T): boolean;
    /**
     * Unlike `pushIfUnique`, this can take `undefined` as an input, and returns a new array.
     */
    function appendIfUnique<T>(array: T[] | undefined, toAdd: T): T[];
    /**
     * Stable sort of an array. Elements equal to each other maintain their relative position in the array.
     */
    function stableSort<T>(array: ReadonlyArray<T>, comparer?: Comparer<T>): T[];
    function rangeEquals<T>(array1: ReadonlyArray<T>, array2: ReadonlyArray<T>, pos: number, end: number): boolean;
    /**
     * Returns the element at a specific offset in an array if non-empty, `undefined` otherwise.
     * A negative offset indicates the element should be retrieved from the end of the array.
     */
    function elementAt<T>(array: ReadonlyArray<T> | undefined, offset: number): T | undefined;
    /**
     * Returns the first element of an array if non-empty, `undefined` otherwise.
     */
    function firstOrUndefined<T>(array: ReadonlyArray<T>): T | undefined;
    function first<T>(array: ReadonlyArray<T>): T;
    /**
     * Returns the last element of an array if non-empty, `undefined` otherwise.
     */
    function lastOrUndefined<T>(array: ReadonlyArray<T>): T | undefined;
    function last<T>(array: ReadonlyArray<T>): T;
    /**
     * Returns the only element of an array if it contains only one element, `undefined` otherwise.
     */
    function singleOrUndefined<T>(array: ReadonlyArray<T>): T | undefined;
    /**
     * Returns the only element of an array if it contains only one element; otheriwse, returns the
     * array.
     */
    function singleOrMany<T>(array: T[]): T | T[];
    function singleOrMany<T>(array: ReadonlyArray<T>): T | ReadonlyArray<T>;
    function replaceElement<T>(array: ReadonlyArray<T>, index: number, value: T): T[];
    type Comparer<T> = (a: T, b: T) => Comparison;
    /**
     * Performs a binary search, finding the index at which 'value' occurs in 'array'.
     * If no such index is found, returns the 2's-complement of first index at which
     * number[index] exceeds number.
     * @param array A sorted array whose first element must be no larger than number
     * @param number The value to be searched for in the array.
     */
    function binarySearch<T>(array: ReadonlyArray<T>, value: T, comparer?: Comparer<T>, offset?: number): number;
    function reduceLeft<T, U>(array: ReadonlyArray<T>, f: (memo: U, value: T, i: number) => U, initial: U, start?: number, count?: number): U;
    function reduceLeft<T>(array: ReadonlyArray<T>, f: (memo: T, value: T, i: number) => T): T;
    /**
     * Indicates whether a map-like contains an own property with the specified key.
     *
     * @param map A map-like.
     * @param key A property key.
     */
    function hasProperty(map: MapLike<any>, key: string): boolean;
    /**
     * Gets the value of an owned property in a map-like.
     *
     * @param map A map-like.
     * @param key A property key.
     */
    function getProperty<T>(map: MapLike<T>, key: string): T | undefined;
    /**
     * Gets the owned, enumerable property keys of a map-like.
     */
    function getOwnKeys<T>(map: MapLike<T>): string[];
    function getOwnValues<T>(sparseArray: T[]): T[];
    /** Shims `Array.from`. */
    function arrayFrom<T, U>(iterator: Iterator<T>, map: (t: T) => U): U[];
    function arrayFrom<T>(iterator: Iterator<T>): T[];
    /**
     * Calls `callback` for each entry in the map, returning the first truthy result.
     * Use `map.forEach` instead for normal iteration.
     */
    function forEachEntry<T, U>(map: ReadonlyUnderscoreEscapedMap<T>, callback: (value: T, key: __String) => U | undefined): U | undefined;
    function forEachEntry<T, U>(map: ReadonlyMap<T>, callback: (value: T, key: string) => U | undefined): U | undefined;
    /** `forEachEntry` for just keys. */
    function forEachKey<T>(map: ReadonlyUnderscoreEscapedMap<{}>, callback: (key: __String) => T | undefined): T | undefined;
    function forEachKey<T>(map: ReadonlyMap<{}>, callback: (key: string) => T | undefined): T | undefined;
    /** Copy entries from `source` to `target`. */
    function copyEntries<T>(source: ReadonlyUnderscoreEscapedMap<T>, target: UnderscoreEscapedMap<T>): void;
    function copyEntries<T>(source: ReadonlyMap<T>, target: Map<T>): void;
    function assign<T1 extends MapLike<{}>, T2, T3>(t: T1, arg1: T2, arg2: T3): T1 & T2 & T3;
    function assign<T1 extends MapLike<{}>, T2>(t: T1, arg1: T2): T1 & T2;
    function assign<T1 extends MapLike<{}>>(t: T1, ...args: any[]): any;
    /**
     * Performs a shallow equality comparison of the contents of two map-likes.
     *
     * @param left A map-like whose properties should be compared.
     * @param right A map-like whose properties should be compared.
     */
    function equalOwnProperties<T>(left: MapLike<T>, right: MapLike<T>, equalityComparer?: (left: T, right: T) => boolean): boolean;
    /**
     * Creates a map from the elements of an array.
     *
     * @param array the array of input elements.
     * @param makeKey a function that produces a key for a given element.
     *
     * This function makes no effort to avoid collisions; if any two elements produce
     * the same key with the given 'makeKey' function, then the element with the higher
     * index in the array will be the one associated with the produced key.
     */
    function arrayToMap<T>(array: ReadonlyArray<T>, makeKey: (value: T) => string): Map<T>;
    function arrayToMap<T, U>(array: ReadonlyArray<T>, makeKey: (value: T) => string, makeValue: (value: T) => U): Map<U>;
    function arrayToNumericMap<T>(array: ReadonlyArray<T>, makeKey: (value: T) => number): T[];
    /**
     * Creates a set from the elements of an array.
     *
     * @param array the array of input elements.
     */
    function arrayToSet(array: ReadonlyArray<string>): Map<true>;
    function arrayToSet<T>(array: ReadonlyArray<T>, makeKey: (value: T) => string): Map<true>;
    function cloneMap(map: SymbolTable): SymbolTable;
    function cloneMap<T>(map: ReadonlyMap<T>): Map<T>;
    function clone<T>(object: T): T;
    function extend<T1, T2>(first: T1, second: T2): T1 & T2;
    interface MultiMap<T> extends Map<T[]> {
        /**
         * Adds the value to an array of values associated with the key, and returns the array.
         * Creates the array if it does not already exist.
         */
        add(key: string, value: T): T[];
        /**
         * Removes a value from an array of values associated with the key.
         * Does not preserve the order of those values.
         * Does nothing if `key` is not in `map`, or `value` is not in `map[key]`.
         */
        remove(key: string, value: T): void;
    }
    function createMultiMap<T>(): MultiMap<T>;
    /**
     * Tests whether a value is an array.
     */
    function isArray(value: any): value is ReadonlyArray<any>;
    /**
     * Tests whether a value is string
     */
    function isString(text: any): text is string;
    function tryCast<TOut extends TIn, TIn = any>(value: TIn | undefined, test: (value: TIn) => value is TOut): TOut | undefined;
    function cast<TOut extends TIn, TIn = any>(value: TIn | undefined, test: (value: TIn) => value is TOut): TOut;
    /** Does nothing. */
    function noop(): void;
    /** Do nothing and return false */
    function returnFalse(): false;
    /** Do nothing and return true */
    function returnTrue(): true;
    /** Returns its argument. */
    function identity<T>(x: T): T;
    /** Throws an error because a function is not implemented. */
    function notImplemented(): never;
    function memoize<T>(callback: () => T): () => T;
    /**
     * High-order function, creates a function that executes a function composition.
     * For example, `chain(a, b)` is the equivalent of `x => ((a', b') => y => b'(a'(y)))(a(x), b(x))`
     *
     * @param args The functions to chain.
     */
    function chain<T, U>(...args: ((t: T) => (u: U) => U)[]): (t: T) => (u: U) => U;
    /**
     * High-order function, composes functions. Note that functions are composed inside-out;
     * for example, `compose(a, b)` is the equivalent of `x => b(a(x))`.
     *
     * @param args The functions to compose.
     */
    function compose<T>(...args: ((t: T) => T)[]): (t: T) => T;
    function formatStringFromArgs(text: string, args: {
        [index: number]: string;
    }, baseIndex?: number): string;
    let localizedDiagnosticMessages: MapLike<string>;
    function getLocaleSpecificMessage(message: DiagnosticMessage): string;
    function createFileDiagnostic(file: SourceFile, start: number, length: number, message: DiagnosticMessage, ...args: (string | number)[]): Diagnostic;
    function formatMessage(_dummy: any, message: DiagnosticMessage): string;
    function createCompilerDiagnostic(message: DiagnosticMessage, ...args: (string | number)[]): Diagnostic;
    function createCompilerDiagnosticFromMessageChain(chain: DiagnosticMessageChain): Diagnostic;
    function chainDiagnosticMessages(details: DiagnosticMessageChain, message: DiagnosticMessage, ...args: string[]): DiagnosticMessageChain;
    function concatenateDiagnosticMessageChains(headChain: DiagnosticMessageChain, tailChain: DiagnosticMessageChain): DiagnosticMessageChain;
    function compareValues<T>(a: T, b: T): Comparison;
    function compareStrings(a: string, b: string, ignoreCase?: boolean): Comparison;
    function compareStringsCaseInsensitive(a: string, b: string): Comparison;
    function compareDiagnostics(d1: Diagnostic, d2: Diagnostic): Comparison;
    function sortAndDeduplicateDiagnostics(diagnostics: Diagnostic[]): Diagnostic[];
    function deduplicateSortedDiagnostics(diagnostics: Diagnostic[]): Diagnostic[];
    function normalizeSlashes(path: string): string;
    /**
     * Returns length of path root (i.e. length of "/", "x:/", "//server/share/, file:///user/files")
     */
    function getRootLength(path: string): number;
    /**
     * Internally, we represent paths as strings with '/' as the directory separator.
     * When we make system calls (eg: LanguageServiceHost.getDirectory()),
     * we expect the host to correctly handle paths in our specified format.
     */
    const directorySeparator = "/";
    function normalizePath(path: string): string;
    function normalizePathAndParts(path: string): {
        path: string;
        parts: string[];
    };
    /** A path ending with '/' refers to a directory only, never a file. */
    function pathEndsWithDirectorySeparator(path: string): boolean;
    /**
     * Returns the path except for its basename. Eg:
     *
     * /path/to/file.ext -> /path/to
     */
    function getDirectoryPath(path: Path): Path;
    function getDirectoryPath(path: string): string;
    function isUrl(path: string): boolean;
    function pathIsRelative(path: string): boolean;
    /** @deprecated Use `!isExternalModuleNameRelative(moduleName)` instead. */
    function moduleHasNonRelativeName(moduleName: string): boolean;
    function getEmitScriptTarget(compilerOptions: CompilerOptions): ScriptTarget;
    function getEmitModuleKind(compilerOptions: CompilerOptions): ModuleKind;
    function getEmitModuleResolutionKind(compilerOptions: CompilerOptions): ModuleResolutionKind;
    type StrictOptionName = "noImplicitAny" | "noImplicitThis" | "strictNullChecks" | "strictFunctionTypes" | "alwaysStrict";
    function getStrictOptionValue(compilerOptions: CompilerOptions, flag: StrictOptionName): boolean;
    function hasZeroOrOneAsteriskCharacter(str: string): boolean;
    function isRootedDiskPath(path: string): boolean;
    function convertToRelativePath(absoluteOrRelativePath: string, basePath: string, getCanonicalFileName: (path: string) => string): string;
    function getNormalizedPathComponents(path: string, currentDirectory: string): string[];
    function getNormalizedAbsolutePath(fileName: string, currentDirectory: string): string;
    function getNormalizedPathFromPathComponents(pathComponents: ReadonlyArray<string>): string;
    function getRelativePathToDirectoryOrUrl(directoryPathOrUrl: string, relativeOrAbsolutePath: string, currentDirectory: string, getCanonicalFileName: (fileName: string) => string, isAbsolutePathAnUrl: boolean): string;
    function getBaseFileName(path: string): string;
    function combinePaths(path1: string, path2: string): string;
    /**
     * Removes a trailing directory separator from a path.
     * @param path The path.
     */
    function removeTrailingDirectorySeparator(path: Path): Path;
    function removeTrailingDirectorySeparator(path: string): string;
    /**
     * Adds a trailing directory separator to a path, if it does not already have one.
     * @param path The path.
     */
    function ensureTrailingDirectorySeparator(path: string): string;
    function comparePaths(a: string, b: string, currentDirectory: string, ignoreCase?: boolean): Comparison;
    function containsPath(parent: string, child: string, currentDirectory: string, ignoreCase?: boolean): boolean;
    function startsWith(str: string, prefix: string): boolean;
    function removePrefix(str: string, prefix: string): string;
    function endsWith(str: string, suffix: string): boolean;
    function stringContains(str: string, substring: string): boolean;
    function hasExtension(fileName: string): boolean;
    function fileExtensionIs(path: string, extension: string): boolean;
    function fileExtensionIsOneOf(path: string, extensions: ReadonlyArray<string>): boolean;
    const commonPackageFolders: ReadonlyArray<string>;
    function getRegularExpressionForWildcard(specs: ReadonlyArray<string>, basePath: string, usage: "files" | "directories" | "exclude"): string | undefined;
    /**
     * An "includes" path "foo" is implicitly a glob "foo/** /*" (without the space) if its last component has no extension,
     * and does not contain any glob characters itself.
     */
    function isImplicitGlob(lastPathComponent: string): boolean;
    interface FileSystemEntries {
        readonly files: ReadonlyArray<string>;
        readonly directories: ReadonlyArray<string>;
    }
    interface FileMatcherPatterns {
        /** One pattern for each "include" spec. */
        includeFilePatterns: ReadonlyArray<string>;
        /** One pattern matching one of any of the "include" specs. */
        includeFilePattern: string;
        includeDirectoryPattern: string;
        excludePattern: string;
        basePaths: ReadonlyArray<string>;
    }
    function getFileMatcherPatterns(path: string, excludes: ReadonlyArray<string>, includes: ReadonlyArray<string>, useCaseSensitiveFileNames: boolean, currentDirectory: string): FileMatcherPatterns;
    function matchFiles(path: string, extensions: ReadonlyArray<string>, excludes: ReadonlyArray<string>, includes: ReadonlyArray<string>, useCaseSensitiveFileNames: boolean, currentDirectory: string, depth: number | undefined, getFileSystemEntries: (path: string) => FileSystemEntries): string[];
    function ensureScriptKind(fileName: string, scriptKind: ScriptKind | undefined): ScriptKind;
    function getScriptKindFromFileName(fileName: string): ScriptKind;
    /**
     *  List of supported extensions in order of file resolution precedence.
     */
    const supportedTypeScriptExtensions: ReadonlyArray<Extension>;
    /** Must have ".d.ts" first because if ".ts" goes first, that will be detected as the extension instead of ".d.ts". */
    const supportedTypescriptExtensionsForExtractExtension: ReadonlyArray<Extension>;
    const supportedJavascriptExtensions: ReadonlyArray<Extension>;
    function getSupportedExtensions(options?: CompilerOptions, extraFileExtensions?: ReadonlyArray<JsFileExtensionInfo>): ReadonlyArray<string>;
    function hasJavaScriptFileExtension(fileName: string): boolean;
    function hasTypeScriptFileExtension(fileName: string): boolean;
    function isSupportedSourceFileName(fileName: string, compilerOptions?: CompilerOptions, extraFileExtensions?: ReadonlyArray<JsFileExtensionInfo>): boolean;
    /**
     * Extension boundaries by priority. Lower numbers indicate higher priorities, and are
     * aligned to the offset of the highest priority extension in the
     * allSupportedExtensions array.
     */
    enum ExtensionPriority {
        TypeScriptFiles = 0,
        DeclarationAndJavaScriptFiles = 2,
        Highest = 0,
        Lowest = 2,
    }
    function getExtensionPriority(path: string, supportedExtensions: ReadonlyArray<string>): ExtensionPriority;
    /**
     * Adjusts an extension priority to be the highest priority within the same range.
     */
    function adjustExtensionPriority(extensionPriority: ExtensionPriority, supportedExtensions: ReadonlyArray<string>): ExtensionPriority;
    /**
     * Gets the next lowest extension priority for a given priority.
     */
    function getNextLowestExtensionPriority(extensionPriority: ExtensionPriority, supportedExtensions: ReadonlyArray<string>): ExtensionPriority;
    function removeFileExtension(path: string): string;
    function tryRemoveExtension(path: string, extension: string): string | undefined;
    function removeExtension(path: string, extension: string): string;
    function changeExtension<T extends string | Path>(path: T, newExtension: string): T;
    interface ObjectAllocator {
        getNodeConstructor(): new (kind: SyntaxKind, pos?: number, end?: number) => Node;
        getTokenConstructor(): new <TKind extends SyntaxKind>(kind: TKind, pos?: number, end?: number) => Token<TKind>;
        getIdentifierConstructor(): new (kind: SyntaxKind.Identifier, pos?: number, end?: number) => Identifier;
        getSourceFileConstructor(): new (kind: SyntaxKind.SourceFile, pos?: number, end?: number) => SourceFile;
        getSymbolConstructor(): new (flags: SymbolFlags, name: __String) => Symbol;
        getTypeConstructor(): new (checker: TypeChecker, flags: TypeFlags) => Type;
        getSignatureConstructor(): new (checker: TypeChecker) => Signature;
        getSourceMapSourceConstructor(): new (fileName: string, text: string, skipTrivia?: (pos: number) => number) => SourceMapSource;
    }
    let objectAllocator: ObjectAllocator;
    enum AssertionLevel {
        None = 0,
        Normal = 1,
        Aggressive = 2,
        VeryAggressive = 3,
    }
    namespace Debug {
        let currentAssertionLevel: AssertionLevel;
        let isDebugging: boolean;
        function shouldAssert(level: AssertionLevel): boolean;
        function assert(expression: boolean, message?: string, verboseDebugInfo?: string | (() => string), stackCrawlMark?: Function): void;
        function assertEqual<T>(a: T, b: T, msg?: string, msg2?: string): void;
        function assertLessThan(a: number, b: number, msg?: string): void;
        function assertLessThanOrEqual(a: number, b: number): void;
        function assertGreaterThanOrEqual(a: number, b: number): void;
        function fail(message?: string, stackCrawlMark?: Function): never;
        function assertNever(member: never, message?: string, stackCrawlMark?: Function): never;
        function getFunctionName(func: Function): any;
    }
    /** Remove an item from an array, moving everything to its right one space left. */
    function orderedRemoveItem<T>(array: T[], item: T): boolean;
    /** Remove an item by index from an array, moving everything to its right one space left. */
    function orderedRemoveItemAt<T>(array: T[], index: number): void;
    function unorderedRemoveItemAt<T>(array: T[], index: number): void;
    /** Remove the *first* occurrence of `item` from the array. */
    function unorderedRemoveItem<T>(array: T[], item: T): void;
    function createGetCanonicalFileName(useCaseSensitiveFileNames: boolean): (fileName: string) => string;
    /**
     * patternStrings contains both pattern strings (containing "*") and regular strings.
     * Return an exact match if possible, or a pattern match, or undefined.
     * (These are verified by verifyCompilerOptions to have 0 or 1 "*" characters.)
     */
    function matchPatternOrExact(patternStrings: ReadonlyArray<string>, candidate: string): string | Pattern | undefined;
    function patternText({prefix, suffix}: Pattern): string;
    /**
     * Given that candidate matches pattern, returns the text matching the '*'.
     * E.g.: matchedText(tryParsePattern("foo*baz"), "foobarbaz") === "bar"
     */
    function matchedText(pattern: Pattern, candidate: string): string;
    /** Return the object corresponding to the best pattern to match `candidate`. */
    function findBestPatternMatch<T>(values: ReadonlyArray<T>, getPattern: (value: T) => Pattern, candidate: string): T | undefined;
    function tryParsePattern(pattern: string): Pattern | undefined;
    function positionIsSynthesized(pos: number): boolean;
    /** True if an extension is one of the supported TypeScript extensions. */
    function extensionIsTypeScript(ext: Extension): boolean;
    /**
     * Gets the extension from a path.
     * Path must have a valid extension.
     */
    function extensionFromPath(path: string): Extension;
    function isAnySupportedFileExtension(path: string): boolean;
    function tryGetExtensionFromPath(path: string): Extension | undefined;
    function getAnyExtensionFromPath(path: string): string | undefined;
    function isCheckJsEnabledForFile(sourceFile: SourceFile, compilerOptions: CompilerOptions): boolean;
    function and<T>(f: (arg: T) => boolean, g: (arg: T) => boolean): (arg: T) => boolean;
    function assertTypeIsNever(_: never): void;
    interface FileAndDirectoryExistence {
        fileExists: boolean;
        directoryExists: boolean;
    }
    interface CachedDirectoryStructureHost extends DirectoryStructureHost {
        /** Returns the queried result for the file exists and directory exists if at all it was done */
        addOrDeleteFileOrDirectory(fileOrDirectory: string, fileOrDirectoryPath: Path): FileAndDirectoryExistence | undefined;
        addOrDeleteFile(fileName: string, filePath: Path, eventKind: FileWatcherEventKind): void;
        clearCache(): void;
    }
    function createCachedDirectoryStructureHost(host: DirectoryStructureHost): CachedDirectoryStructureHost;
}
declare function setTimeout(handler: (...args: any[]) => void, timeout: number): any;
declare function clearTimeout(handle: any): void;
declare namespace ts {
    /**
     * Set a high stack trace limit to provide more information in case of an error.
     * Called for command-line and server use cases.
     * Not called if TypeScript is used as a library.
     */
    function setStackTraceLimit(): void;
    enum FileWatcherEventKind {
        Created = 0,
        Changed = 1,
        Deleted = 2,
    }
    type FileWatcherCallback = (fileName: string, eventKind: FileWatcherEventKind) => void;
    type DirectoryWatcherCallback = (fileName: string) => void;
    interface WatchedFile {
        fileName: string;
        callback: FileWatcherCallback;
        mtime?: Date;
    }
    /**
     * Partial interface of the System thats needed to support the caching of directory structure
     */
    interface DirectoryStructureHost {
        newLine: string;
        useCaseSensitiveFileNames: boolean;
        write(s: string): void;
        readFile(path: string, encoding?: string): string | undefined;
        writeFile(path: string, data: string, writeByteOrderMark?: boolean): void;
        fileExists(path: string): boolean;
        directoryExists(path: string): boolean;
        createDirectory(path: string): void;
        getCurrentDirectory(): string;
        getDirectories(path: string): string[];
        readDirectory(path: string, extensions?: ReadonlyArray<string>, exclude?: ReadonlyArray<string>, include?: ReadonlyArray<string>, depth?: number): string[];
        exit(exitCode?: number): void;
    }
    interface System extends DirectoryStructureHost {
        args: string[];
        getFileSize?(path: string): number;
        /**
         * @pollingInterval - this parameter is used in polling-based watchers and ignored in watchers that
         * use native OS file watching
         */
        watchFile?(path: string, callback: FileWatcherCallback, pollingInterval?: number): FileWatcher;
        watchDirectory?(path: string, callback: DirectoryWatcherCallback, recursive?: boolean): FileWatcher;
        resolvePath(path: string): string;
        getExecutingFilePath(): string;
        getModifiedTime?(path: string): Date;
        /**
         * This should be cryptographically secure.
         * A good implementation is node.js' `crypto.createHash`. (https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm)
         */
        createHash?(data: string): string;
        getMemoryUsage?(): number;
        realpath?(path: string): string;
        getEnvironmentVariable(name: string): string;
        tryEnableSourceMapsForHost?(): void;
        debugMode?: boolean;
        setTimeout?(callback: (...args: any[]) => void, ms: number, ...args: any[]): any;
        clearTimeout?(timeoutId: any): void;
    }
    interface FileWatcher {
        close(): void;
    }
    function getNodeMajorVersion(): number;
    let sys: System;
}
declare namespace ts {
    const emptyArray: never[];
    const emptyMap: ReadonlyMap<never>;
    const externalHelpersModuleNameText = "tslib";
    interface ReferencePathMatchResult {
        fileReference?: FileReference;
        diagnosticMessage?: DiagnosticMessage;
        isNoDefaultLib?: boolean;
        isTypeReferenceDirective?: boolean;
    }
    function getDeclarationOfKind<T extends Declaration>(symbol: Symbol, kind: T["kind"]): T;
    interface StringSymbolWriter extends SymbolWriter {
        string(): string;
    }
    function usingSingleLineStringWriter(action: (writer: StringSymbolWriter) => void): string;
    function getFullWidth(node: Node): number;
    function getResolvedModule(sourceFile: SourceFile, moduleNameText: string): ResolvedModuleFull | undefined;
    function setResolvedModule(sourceFile: SourceFile, moduleNameText: string, resolvedModule: ResolvedModuleFull): void;
    function setResolvedTypeReferenceDirective(sourceFile: SourceFile, typeReferenceDirectiveName: string, resolvedTypeReferenceDirective: ResolvedTypeReferenceDirective): void;
    function moduleResolutionIsEqualTo(oldResolution: ResolvedModuleFull, newResolution: ResolvedModuleFull): boolean;
    function typeDirectiveIsEqualTo(oldResolution: ResolvedTypeReferenceDirective, newResolution: ResolvedTypeReferenceDirective): boolean;
    function hasChangesInResolutions<T>(names: ReadonlyArray<string>, newResolutions: ReadonlyArray<T>, oldResolutions: ReadonlyMap<T>, comparer: (oldResolution: T, newResolution: T) => boolean): boolean;
    function containsParseError(node: Node): boolean;
    function getSourceFileOfNode(node: Node): SourceFile;
    function isStatementWithLocals(node: Node): boolean;
    function getStartPositionOfLine(line: number, sourceFile: SourceFileLike): number;
    function nodePosToString(node: Node): string;
    function getEndLinePosition(line: number, sourceFile: SourceFileLike): number;
    function nodeIsMissing(node: Node): boolean;
    function nodeIsPresent(node: Node): boolean;
    /**
     * Determine if the given comment is a triple-slash
     *
     * @return true if the comment is a triple-slash comment else false
     */
    function isRecognizedTripleSlashComment(text: string, commentPos: number, commentEnd: number): boolean;
    function isPinnedComment(text: string, comment: CommentRange): boolean;
    function getTokenPosOfNode(node: Node, sourceFile?: SourceFileLike, includeJsDoc?: boolean): number;
    function getNonDecoratorTokenPosOfNode(node: Node, sourceFile?: SourceFileLike): number;
    function getSourceTextOfNodeFromSourceFile(sourceFile: SourceFile, node: Node, includeTrivia?: boolean): string;
    function getTextOfNodeFromSourceText(sourceText: string, node: Node): string;
    function getTextOfNode(node: Node, includeTrivia?: boolean): string;
    /**
     * Note: it is expected that the `nodeArray` and the `node` are within the same file.
     * For example, searching for a `SourceFile` in a `SourceFile[]` wouldn't work.
     */
    function indexOfNode(nodeArray: ReadonlyArray<Node>, node: Node): number;
    /**
     * Gets flags that control emit behavior of a node.
     */
    function getEmitFlags(node: Node): EmitFlags | undefined;
    function getLiteralText(node: LiteralLikeNode, sourceFile: SourceFile): string;
    function getTextOfConstantValue(value: string | number): string;
    function escapeLeadingUnderscores(identifier: string): __String;
    /**
     * @deprecated Use `id.escapedText` to get the escaped text of an Identifier.
     * @param identifier The identifier to escape
     */
    function escapeIdentifier(identifier: string): string;
    function makeIdentifierFromModuleName(moduleName: string): string;
    function isBlockOrCatchScoped(declaration: Declaration): boolean;
    function isCatchClauseVariableDeclarationOrBindingElement(declaration: Declaration): boolean;
    function isAmbientModule(node: Node): boolean;
    function isModuleWithStringLiteralName(node: Node): node is ModuleDeclaration;
    function isNonGlobalAmbientModule(node: Node): node is ModuleDeclaration & {
        name: StringLiteral;
    };
    /** Given a symbol for a module, checks that it is a shorthand ambient module. */
    function isShorthandAmbientModuleSymbol(moduleSymbol: Symbol): boolean;
    function isBlockScopedContainerTopLevel(node: Node): boolean;
    function isGlobalScopeAugmentation(module: ModuleDeclaration): boolean;
    function isExternalModuleAugmentation(node: Node): boolean;
    function isEffectiveExternalModule(node: SourceFile, compilerOptions: CompilerOptions): boolean;
    function isBlockScope(node: Node, parentNode: Node): boolean;
    function isDeclarationWithTypeParameters(node: Node): node is DeclarationWithTypeParameters;
    function isAnyImportSyntax(node: Node): node is AnyImportSyntax;
    function getEnclosingBlockScopeContainer(node: Node): Node;
    function declarationNameToString(name: DeclarationName): string;
    function getNameFromIndexInfo(info: IndexInfo): string | undefined;
    function getTextOfPropertyName(name: PropertyName): __String;
    function entityNameToString(name: EntityNameOrEntityNameExpression): string;
    function createDiagnosticForNode(node: Node, message: DiagnosticMessage, arg0?: string | number, arg1?: string | number, arg2?: string | number, arg3?: string | number): Diagnostic;
    function createDiagnosticForNodeInSourceFile(sourceFile: SourceFile, node: Node, message: DiagnosticMessage, arg0?: string | number, arg1?: string | number, arg2?: string | number, arg3?: string | number): Diagnostic;
    function createDiagnosticForNodeFromMessageChain(node: Node, messageChain: DiagnosticMessageChain): Diagnostic;
    function getSpanOfTokenAtPosition(sourceFile: SourceFile, pos: number): TextSpan;
    function getErrorSpanForNode(sourceFile: SourceFile, node: Node): TextSpan;
    function isExternalOrCommonJsModule(file: SourceFile): boolean;
    function isConstEnumDeclaration(node: Node): boolean;
    function isConst(node: Node): boolean;
    function isLet(node: Node): boolean;
    function isSuperCall(n: Node): n is SuperCall;
    function isImportCall(n: Node): n is ImportCall;
    function isPrologueDirective(node: Node): node is PrologueDirective;
    function getLeadingCommentRangesOfNode(node: Node, sourceFileOfNode: SourceFile): CommentRange[];
    function getJSDocCommentRanges(node: Node, text: string): CommentRange[];
    const fullTripleSlashReferencePathRegEx: RegExp;
    const fullTripleSlashAMDReferencePathRegEx: RegExp;
    function isPartOfTypeNode(node: Node): boolean;
    function isChildOfNodeWithKind(node: Node, kind: SyntaxKind): boolean;
    function forEachReturnStatement<T>(body: Block, visitor: (stmt: ReturnStatement) => T): T;
    function forEachYieldExpression(body: Block, visitor: (expr: YieldExpression) => void): void;
    /**
     * Gets the most likely element type for a TypeNode. This is not an exhaustive test
     * as it assumes a rest argument can only be an array type (either T[], or Array<T>).
     *
     * @param node The type node.
     */
    function getRestParameterElementType(node: TypeNode): TypeNode;
    function isVariableLike(node: Node): node is VariableLikeDeclaration;
    function introducesArgumentsExoticObject(node: Node): boolean;
    function unwrapInnermostStatementOfLabel(node: LabeledStatement, beforeUnwrapLabelCallback?: (node: LabeledStatement) => void): Statement;
    function isFunctionBlock(node: Node): boolean;
    function isObjectLiteralMethod(node: Node): node is MethodDeclaration;
    function isObjectLiteralOrClassExpressionMethod(node: Node): node is MethodDeclaration;
    function isIdentifierTypePredicate(predicate: TypePredicate): predicate is IdentifierTypePredicate;
    function isThisTypePredicate(predicate: TypePredicate): predicate is ThisTypePredicate;
    function getPropertyAssignment(objectLiteral: ObjectLiteralExpression, key: string, key2?: string): ReadonlyArray<PropertyAssignment>;
    function getContainingFunction(node: Node): FunctionLike;
    function getContainingClass(node: Node): ClassLikeDeclaration;
    function getThisContainer(node: Node, includeArrowFunctions: boolean): Node;
    function getNewTargetContainer(node: Node): Node;
    /**
     * Given an super call/property node, returns the closest node where
     * - a super call/property access is legal in the node and not legal in the parent node the node.
     *   i.e. super call is legal in constructor but not legal in the class body.
     * - the container is an arrow function (so caller might need to call getSuperContainer again in case it needs to climb higher)
     * - a super call/property is definitely illegal in the container (but might be legal in some subnode)
     *   i.e. super property access is illegal in function declaration but can be legal in the statement list
     */
    function getSuperContainer(node: Node, stopOnFunctions: boolean): Node;
    function getImmediatelyInvokedFunctionExpression(func: Node): CallExpression;
    /**
     * Determines whether a node is a property or element access expression for `super`.
     */
    function isSuperProperty(node: Node): node is SuperProperty;
    /**
     * Determines whether a node is a property or element access expression for `this`.
     */
    function isThisProperty(node: Node): boolean;
    function getEntityNameFromTypeNode(node: TypeNode): EntityNameOrEntityNameExpression;
    function getInvokedExpression(node: CallLikeExpression): Expression;
    function nodeCanBeDecorated(node: Node): boolean;
    function nodeIsDecorated(node: Node): boolean;
    function nodeOrChildIsDecorated(node: Node): boolean;
    function childIsDecorated(node: Node): boolean;
    function isJSXTagName(node: Node): boolean;
    function isExpressionNode(node: Node): boolean;
    function isInExpressionContext(node: Node): boolean;
    function isExternalModuleImportEqualsDeclaration(node: Node): boolean;
    function getExternalModuleImportEqualsDeclarationExpression(node: Node): Expression;
    function isInternalModuleImportEqualsDeclaration(node: Node): node is ImportEqualsDeclaration;
    function isSourceFileJavaScript(file: SourceFile): boolean;
    function isInJavaScriptFile(node: Node | undefined): boolean;
    function isInJSDoc(node: Node | undefined): boolean;
    function isJSDocIndexSignature(node: TypeReferenceNode | ExpressionWithTypeArguments): boolean;
    /**
     * Returns true if the node is a CallExpression to the identifier 'require' with
     * exactly one argument (of the form 'require("name")').
     * This function does not test if the node is in a JavaScript file or not.
     */
    function isRequireCall(callExpression: Node, checkArgumentIsStringLiteral: boolean): callExpression is CallExpression;
    function isSingleOrDoubleQuote(charCode: number): boolean;
    function isStringDoubleQuoted(string: StringLiteral, sourceFile: SourceFile): boolean;
    /**
     * Returns true if the node is a variable declaration whose initializer is a function expression.
     * This function does not test if the node is in a JavaScript file or not.
     */
    function isDeclarationOfFunctionOrClassExpression(s: Symbol): boolean;
    function getRightMostAssignedExpression(node: Node): Node;
    function isExportsIdentifier(node: Node): boolean;
    function isModuleExportsPropertyAccessExpression(node: Node): boolean;
    function getSpecialPropertyAssignmentKind(expr: ts.BinaryExpression): SpecialPropertyAssignmentKind;
    function getExternalModuleName(node: Node): Expression;
    function getNamespaceDeclarationNode(node: ImportDeclaration | ImportEqualsDeclaration | ExportDeclaration): ImportEqualsDeclaration | NamespaceImport;
    function isDefaultImport(node: ImportDeclaration | ImportEqualsDeclaration | ExportDeclaration): boolean;
    function hasQuestionToken(node: Node): boolean;
    function isJSDocConstructSignature(node: Node): boolean;
    function getAllJSDocs(node: Node): (JSDoc | JSDocTag)[];
    function getSourceOfAssignment(node: Node): Node;
    function getSingleInitializerOfVariableStatement(node: Node, child?: Node): Node;
    function getSingleVariableOfVariableStatement(node: Node, child?: Node): Node;
    function getNestedModuleDeclaration(node: Node): Node;
    function getJSDocCommentsAndTags(node: Node): (JSDoc | JSDocTag)[];
    /** Does the opposite of `getJSDocParameterTags`: given a JSDoc parameter, finds the parameter corresponding to it. */
    function getParameterSymbolFromJSDoc(node: JSDocParameterTag): Symbol | undefined;
    function getJSDocHost(node: JSDocTag): HasJSDoc;
    function getTypeParameterFromJsDoc(node: TypeParameterDeclaration & {
        parent: JSDocTemplateTag;
    }): TypeParameterDeclaration | undefined;
    function hasRestParameter(s: SignatureDeclaration): boolean;
    function isRestParameter(node: ParameterDeclaration): boolean;
    enum AssignmentKind {
        None = 0,
        Definite = 1,
        Compound = 2,
    }
    function getAssignmentTargetKind(node: Node): AssignmentKind;
    function isAssignmentTarget(node: Node): boolean;
    function isDeleteTarget(node: Node): boolean;
    function isNodeDescendantOf(node: Node, ancestor: Node): boolean;
    function isDeclarationName(name: Node): boolean;
    function isAnyDeclarationName(name: Node): boolean;
    function isLiteralComputedPropertyDeclarationName(node: Node): boolean;
    function isIdentifierName(node: Identifier): boolean;
    function isAliasSymbolDeclaration(node: Node): boolean;
    function exportAssignmentIsAlias(node: ExportAssignment): boolean;
    function getClassExtendsHeritageClauseElement(node: ClassLikeDeclaration | InterfaceDeclaration): ExpressionWithTypeArguments;
    function getClassImplementsHeritageClauseElements(node: ClassLikeDeclaration): NodeArray<ExpressionWithTypeArguments>;
    function getInterfaceBaseTypeNodes(node: InterfaceDeclaration): NodeArray<ExpressionWithTypeArguments>;
    function getHeritageClause(clauses: NodeArray<HeritageClause>, kind: SyntaxKind): HeritageClause;
    function tryResolveScriptReference(host: ScriptReferenceHost, sourceFile: SourceFile, reference: FileReference): SourceFile;
    function getAncestor(node: Node | undefined, kind: SyntaxKind): Node | undefined;
    function getFileReferenceFromReferencePath(comment: string, commentRange: CommentRange): ReferencePathMatchResult;
    function isKeyword(token: SyntaxKind): boolean;
    function isTrivia(token: SyntaxKind): boolean;
    enum FunctionFlags {
        Normal = 0,
        Generator = 1,
        Async = 2,
        Invalid = 4,
        AsyncGenerator = 3,
    }
    function getFunctionFlags(node: FunctionLike | undefined): FunctionFlags;
    function isAsyncFunction(node: Node): boolean;
    function isStringOrNumericLiteral(node: Node): node is StringLiteral | NumericLiteral;
    /**
     * A declaration has a dynamic name if both of the following are true:
     *   1. The declaration has a computed property name
     *   2. The computed name is *not* expressed as Symbol.<name>, where name
     *      is a property of the Symbol constructor that denotes a built in
     *      Symbol.
     */
    function hasDynamicName(declaration: Declaration): boolean;
    function isDynamicName(name: DeclarationName): boolean;
    /**
     * Checks if the expression is of the form:
     *    Symbol.name
     * where Symbol is literally the word "Symbol", and name is any identifierName
     */
    function isWellKnownSymbolSyntactically(node: Expression): boolean;
    function getPropertyNameForPropertyNameNode(name: DeclarationName): __String;
    function getTextOfIdentifierOrLiteral(node: Identifier | LiteralLikeNode): string;
    function getEscapedTextOfIdentifierOrLiteral(node: Identifier | LiteralLikeNode): __String;
    function getPropertyNameForKnownSymbolName(symbolName: string): __String;
    /**
     * Includes the word "Symbol" with unicode escapes
     */
    function isESSymbolIdentifier(node: Node): boolean;
    function isPushOrUnshiftIdentifier(node: Identifier): boolean;
    function isParameterDeclaration(node: VariableLikeDeclaration): boolean;
    function getRootDeclaration(node: Node): Node;
    function nodeStartsNewLexicalEnvironment(node: Node): boolean;
    function nodeIsSynthesized(range: TextRange): boolean;
    function getOriginalSourceFile(sourceFile: SourceFile): SourceFile;
    enum Associativity {
        Left = 0,
        Right = 1,
    }
    function getExpressionAssociativity(expression: Expression): Associativity;
    function getOperatorAssociativity(kind: SyntaxKind, operator: SyntaxKind, hasArguments?: boolean): Associativity;
    function getExpressionPrecedence(expression: Expression): 1 | -1 | 0 | 2 | 4 | 3 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5;
    function getOperator(expression: Expression): SyntaxKind.Unknown | SyntaxKind.EndOfFileToken | SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia | SyntaxKind.NewLineTrivia | SyntaxKind.WhitespaceTrivia | SyntaxKind.ShebangTrivia | SyntaxKind.ConflictMarkerTrivia | SyntaxKind.NumericLiteral | SyntaxKind.StringLiteral | SyntaxKind.JsxText | SyntaxKind.JsxTextAllWhiteSpaces | SyntaxKind.RegularExpressionLiteral | SyntaxKind.NoSubstitutionTemplateLiteral | SyntaxKind.TemplateHead | SyntaxKind.TemplateMiddle | SyntaxKind.TemplateTail | SyntaxKind.OpenBraceToken | SyntaxKind.CloseBraceToken | SyntaxKind.OpenParenToken | SyntaxKind.CloseParenToken | SyntaxKind.OpenBracketToken | SyntaxKind.CloseBracketToken | SyntaxKind.DotToken | SyntaxKind.DotDotDotToken | SyntaxKind.SemicolonToken | SyntaxKind.CommaToken | SyntaxKind.LessThanToken | SyntaxKind.LessThanSlashToken | SyntaxKind.GreaterThanToken | SyntaxKind.LessThanEqualsToken | SyntaxKind.GreaterThanEqualsToken | SyntaxKind.EqualsEqualsToken | SyntaxKind.ExclamationEqualsToken | SyntaxKind.EqualsEqualsEqualsToken | SyntaxKind.ExclamationEqualsEqualsToken | SyntaxKind.EqualsGreaterThanToken | SyntaxKind.PlusToken | SyntaxKind.MinusToken | SyntaxKind.AsteriskToken | SyntaxKind.AsteriskAsteriskToken | SyntaxKind.SlashToken | SyntaxKind.PercentToken | SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken | SyntaxKind.LessThanLessThanToken | SyntaxKind.GreaterThanGreaterThanToken | SyntaxKind.GreaterThanGreaterThanGreaterThanToken | SyntaxKind.AmpersandToken | SyntaxKind.BarToken | SyntaxKind.CaretToken | SyntaxKind.ExclamationToken | SyntaxKind.TildeToken | SyntaxKind.AmpersandAmpersandToken | SyntaxKind.BarBarToken | SyntaxKind.QuestionToken | SyntaxKind.ColonToken | SyntaxKind.AtToken | SyntaxKind.EqualsToken | SyntaxKind.PlusEqualsToken | SyntaxKind.MinusEqualsToken | SyntaxKind.AsteriskEqualsToken | SyntaxKind.AsteriskAsteriskEqualsToken | SyntaxKind.SlashEqualsToken | SyntaxKind.PercentEqualsToken | SyntaxKind.LessThanLessThanEqualsToken | SyntaxKind.GreaterThanGreaterThanEqualsToken | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken | SyntaxKind.AmpersandEqualsToken | SyntaxKind.BarEqualsToken | SyntaxKind.CaretEqualsToken | SyntaxKind.Identifier | SyntaxKind.BreakKeyword | SyntaxKind.CaseKeyword | SyntaxKind.CatchKeyword | SyntaxKind.ClassKeyword | SyntaxKind.ConstKeyword | SyntaxKind.ContinueKeyword | SyntaxKind.DebuggerKeyword | SyntaxKind.DefaultKeyword | SyntaxKind.DeleteKeyword | SyntaxKind.DoKeyword | SyntaxKind.ElseKeyword | SyntaxKind.EnumKeyword | SyntaxKind.ExportKeyword | SyntaxKind.ExtendsKeyword | SyntaxKind.FalseKeyword | SyntaxKind.FinallyKeyword | SyntaxKind.ForKeyword | SyntaxKind.FunctionKeyword | SyntaxKind.IfKeyword | SyntaxKind.ImportKeyword | SyntaxKind.InKeyword | SyntaxKind.InstanceOfKeyword | SyntaxKind.NewKeyword | SyntaxKind.NullKeyword | SyntaxKind.ReturnKeyword | SyntaxKind.SuperKeyword | SyntaxKind.SwitchKeyword | SyntaxKind.ThisKeyword | SyntaxKind.ThrowKeyword | SyntaxKind.TrueKeyword | SyntaxKind.TryKeyword | SyntaxKind.TypeOfKeyword | SyntaxKind.VarKeyword | SyntaxKind.VoidKeyword | SyntaxKind.WhileKeyword | SyntaxKind.WithKeyword | SyntaxKind.ImplementsKeyword | SyntaxKind.InterfaceKeyword | SyntaxKind.LetKeyword | SyntaxKind.PackageKeyword | SyntaxKind.PrivateKeyword | SyntaxKind.ProtectedKeyword | SyntaxKind.PublicKeyword | SyntaxKind.StaticKeyword | SyntaxKind.YieldKeyword | SyntaxKind.AbstractKeyword | SyntaxKind.AsKeyword | SyntaxKind.AnyKeyword | SyntaxKind.AsyncKeyword | SyntaxKind.AwaitKeyword | SyntaxKind.BooleanKeyword | SyntaxKind.ConstructorKeyword | SyntaxKind.DeclareKeyword | SyntaxKind.GetKeyword | SyntaxKind.IsKeyword | SyntaxKind.KeyOfKeyword | SyntaxKind.ModuleKeyword | SyntaxKind.NamespaceKeyword | SyntaxKind.NeverKeyword | SyntaxKind.ReadonlyKeyword | SyntaxKind.RequireKeyword | SyntaxKind.NumberKeyword | SyntaxKind.ObjectKeyword | SyntaxKind.SetKeyword | SyntaxKind.StringKeyword | SyntaxKind.SymbolKeyword | SyntaxKind.TypeKeyword | SyntaxKind.UndefinedKeyword | SyntaxKind.FromKeyword | SyntaxKind.GlobalKeyword | SyntaxKind.OfKeyword | SyntaxKind.QualifiedName | SyntaxKind.ComputedPropertyName | SyntaxKind.TypeParameter | SyntaxKind.Parameter | SyntaxKind.Decorator | SyntaxKind.PropertySignature | SyntaxKind.PropertyDeclaration | SyntaxKind.MethodSignature | SyntaxKind.MethodDeclaration | SyntaxKind.Constructor | SyntaxKind.GetAccessor | SyntaxKind.SetAccessor | SyntaxKind.CallSignature | SyntaxKind.ConstructSignature | SyntaxKind.IndexSignature | SyntaxKind.TypePredicate | SyntaxKind.TypeReference | SyntaxKind.FunctionType | SyntaxKind.ConstructorType | SyntaxKind.TypeQuery | SyntaxKind.TypeLiteral | SyntaxKind.ArrayType | SyntaxKind.TupleType | SyntaxKind.UnionType | SyntaxKind.IntersectionType | SyntaxKind.ParenthesizedType | SyntaxKind.ThisType | SyntaxKind.TypeOperator | SyntaxKind.IndexedAccessType | SyntaxKind.MappedType | SyntaxKind.LiteralType | SyntaxKind.ObjectBindingPattern | SyntaxKind.ArrayBindingPattern | SyntaxKind.BindingElement | SyntaxKind.ArrayLiteralExpression | SyntaxKind.ObjectLiteralExpression | SyntaxKind.PropertyAccessExpression | SyntaxKind.ElementAccessExpression | SyntaxKind.CallExpression | SyntaxKind.NewExpression | SyntaxKind.TaggedTemplateExpression | SyntaxKind.TypeAssertionExpression | SyntaxKind.ParenthesizedExpression | SyntaxKind.FunctionExpression | SyntaxKind.ArrowFunction | SyntaxKind.DeleteExpression | SyntaxKind.TypeOfExpression | SyntaxKind.VoidExpression | SyntaxKind.AwaitExpression | SyntaxKind.ConditionalExpression | SyntaxKind.TemplateExpression | SyntaxKind.YieldExpression | SyntaxKind.SpreadElement | SyntaxKind.ClassExpression | SyntaxKind.OmittedExpression | SyntaxKind.ExpressionWithTypeArguments | SyntaxKind.AsExpression | SyntaxKind.NonNullExpression | SyntaxKind.MetaProperty | SyntaxKind.TemplateSpan | SyntaxKind.SemicolonClassElement | SyntaxKind.Block | SyntaxKind.VariableStatement | SyntaxKind.EmptyStatement | SyntaxKind.ExpressionStatement | SyntaxKind.IfStatement | SyntaxKind.DoStatement | SyntaxKind.WhileStatement | SyntaxKind.ForStatement | SyntaxKind.ForInStatement | SyntaxKind.ForOfStatement | SyntaxKind.ContinueStatement | SyntaxKind.BreakStatement | SyntaxKind.ReturnStatement | SyntaxKind.WithStatement | SyntaxKind.SwitchStatement | SyntaxKind.LabeledStatement | SyntaxKind.ThrowStatement | SyntaxKind.TryStatement | SyntaxKind.DebuggerStatement | SyntaxKind.VariableDeclaration | SyntaxKind.VariableDeclarationList | SyntaxKind.FunctionDeclaration | SyntaxKind.ClassDeclaration | SyntaxKind.InterfaceDeclaration | SyntaxKind.TypeAliasDeclaration | SyntaxKind.EnumDeclaration | SyntaxKind.ModuleDeclaration | SyntaxKind.ModuleBlock | SyntaxKind.CaseBlock | SyntaxKind.NamespaceExportDeclaration | SyntaxKind.ImportEqualsDeclaration | SyntaxKind.ImportDeclaration | SyntaxKind.ImportClause | SyntaxKind.NamespaceImport | SyntaxKind.NamedImports | SyntaxKind.ImportSpecifier | SyntaxKind.ExportAssignment | SyntaxKind.ExportDeclaration | SyntaxKind.NamedExports | SyntaxKind.ExportSpecifier | SyntaxKind.MissingDeclaration | SyntaxKind.ExternalModuleReference | SyntaxKind.JsxElement | SyntaxKind.JsxSelfClosingElement | SyntaxKind.JsxOpeningElement | SyntaxKind.JsxClosingElement | SyntaxKind.JsxFragment | SyntaxKind.JsxOpeningFragment | SyntaxKind.JsxClosingFragment | SyntaxKind.JsxAttribute | SyntaxKind.JsxAttributes | SyntaxKind.JsxSpreadAttribute | SyntaxKind.JsxExpression | SyntaxKind.CaseClause | SyntaxKind.DefaultClause | SyntaxKind.HeritageClause | SyntaxKind.CatchClause | SyntaxKind.PropertyAssignment | SyntaxKind.ShorthandPropertyAssignment | SyntaxKind.SpreadAssignment | SyntaxKind.EnumMember | SyntaxKind.SourceFile | SyntaxKind.Bundle | SyntaxKind.JSDocTypeExpression | SyntaxKind.JSDocAllType | SyntaxKind.JSDocUnknownType | SyntaxKind.JSDocNullableType | SyntaxKind.JSDocNonNullableType | SyntaxKind.JSDocOptionalType | SyntaxKind.JSDocFunctionType | SyntaxKind.JSDocVariadicType | SyntaxKind.JSDocComment | SyntaxKind.JSDocTypeLiteral | SyntaxKind.JSDocTag | SyntaxKind.JSDocAugmentsTag | SyntaxKind.JSDocClassTag | SyntaxKind.JSDocParameterTag | SyntaxKind.JSDocReturnTag | SyntaxKind.JSDocTypeTag | SyntaxKind.JSDocTemplateTag | SyntaxKind.JSDocTypedefTag | SyntaxKind.JSDocPropertyTag | SyntaxKind.SyntaxList | SyntaxKind.NotEmittedStatement | SyntaxKind.PartiallyEmittedExpression | SyntaxKind.CommaListExpression | SyntaxKind.MergeDeclarationMarker | SyntaxKind.EndOfDeclarationMarker | SyntaxKind.Count;
    function getOperatorPrecedence(nodeKind: SyntaxKind, operatorKind: SyntaxKind, hasArguments?: boolean): 1 | -1 | 0 | 2 | 4 | 3 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5;
    function createDiagnosticCollection(): DiagnosticCollection;
    /**
     * Based heavily on the abstract 'Quote'/'QuoteJSONString' operation from ECMA-262 (24.3.2.2),
     * but augmented for a few select characters (e.g. lineSeparator, paragraphSeparator, nextLine)
     * Note that this doesn't actually wrap the input in double quotes.
     */
    function escapeString(s: string, quoteChar?: CharacterCodes.doubleQuote | CharacterCodes.singleQuote | CharacterCodes.backtick): string;
    function isIntrinsicJsxName(name: __String | string): boolean;
    function escapeNonAsciiString(s: string, quoteChar?: CharacterCodes.doubleQuote | CharacterCodes.singleQuote | CharacterCodes.backtick): string;
    function getIndentString(level: number): string;
    function getIndentSize(): number;
    function createTextWriter(newLine: string): EmitTextWriter;
    function getResolvedExternalModuleName(host: EmitHost, file: SourceFile): string;
    function getExternalModuleNameFromDeclaration(host: EmitHost, resolver: EmitResolver, declaration: ImportEqualsDeclaration | ImportDeclaration | ExportDeclaration | ModuleDeclaration): string;
    /**
     * Resolves a local path to a path which is absolute to the base of the emit
     */
    function getExternalModuleNameFromPath(host: EmitHost, fileName: string): string;
    function getOwnEmitOutputFilePath(sourceFile: SourceFile, host: EmitHost, extension: string): string;
    function getDeclarationEmitOutputFilePath(sourceFile: SourceFile, host: EmitHost): string;
    interface EmitFileNames {
        jsFilePath: string;
        sourceMapFilePath: string;
        declarationFilePath: string;
    }
    /**
     * Gets the source files that are expected to have an emit output.
     *
     * Originally part of `forEachExpectedEmitFile`, this functionality was extracted to support
     * transformations.
     *
     * @param host An EmitHost.
     * @param targetSourceFile An optional target source file to emit.
     */
    function getSourceFilesToEmit(host: EmitHost, targetSourceFile?: SourceFile): ReadonlyArray<SourceFile>;
    /** Don't call this for `--outFile`, just for `--outDir` or plain emit. `--outFile` needs additional checks. */
    function sourceFileMayBeEmitted(sourceFile: SourceFile, options: CompilerOptions, isSourceFileFromExternalLibrary: (file: SourceFile) => boolean): boolean;
    function getSourceFilePathInNewDir(sourceFile: SourceFile, host: EmitHost, newDirPath: string): string;
    function writeFile(host: EmitHost, diagnostics: DiagnosticCollection, fileName: string, data: string, writeByteOrderMark: boolean, sourceFiles?: ReadonlyArray<SourceFile>): void;
    function getLineOfLocalPosition(currentSourceFile: SourceFile, pos: number): number;
    function getLineOfLocalPositionFromLineMap(lineMap: ReadonlyArray<number>, pos: number): number;
    function getFirstConstructorWithBody(node: ClassLikeDeclaration): ConstructorDeclaration;
    /** Get the type annotation for the value parameter. */
    function getSetAccessorTypeAnnotationNode(accessor: SetAccessorDeclaration): TypeNode;
    function getThisParameter(signature: SignatureDeclaration): ParameterDeclaration | undefined;
    function parameterIsThisKeyword(parameter: ParameterDeclaration): boolean;
    function isThisIdentifier(node: Node | undefined): boolean;
    function identifierIsThisKeyword(id: Identifier): boolean;
    interface AllAccessorDeclarations {
        firstAccessor: AccessorDeclaration;
        secondAccessor: AccessorDeclaration;
        getAccessor: AccessorDeclaration;
        setAccessor: AccessorDeclaration;
    }
    function getAllAccessorDeclarations(declarations: NodeArray<Declaration>, accessor: AccessorDeclaration): AllAccessorDeclarations;
    /**
     * Gets the effective type annotation of a variable, parameter, or property. If the node was
     * parsed in a JavaScript file, gets the type annotation from JSDoc.
     */
    function getEffectiveTypeAnnotationNode(node: VariableLikeDeclaration, checkJSDoc?: boolean): TypeNode | undefined;
    /**
     * Gets the effective return type annotation of a signature. If the node was parsed in a
     * JavaScript file, gets the return type annotation from JSDoc.
     */
    function getEffectiveReturnTypeNode(node: SignatureDeclaration, checkJSDoc?: boolean): TypeNode | undefined;
    /**
     * Gets the effective type parameters. If the node was parsed in a
     * JavaScript file, gets the type parameters from the `@template` tag from JSDoc.
     */
    function getEffectiveTypeParameterDeclarations(node: DeclarationWithTypeParameters, checkJSDoc?: boolean): ReadonlyArray<TypeParameterDeclaration>;
    /**
     * Gets the effective type annotation of the value parameter of a set accessor. If the node
     * was parsed in a JavaScript file, gets the type annotation from JSDoc.
     */
    function getEffectiveSetAccessorTypeAnnotationNode(node: SetAccessorDeclaration, checkJSDoc?: boolean): TypeNode;
    function emitNewLineBeforeLeadingComments(lineMap: ReadonlyArray<number>, writer: EmitTextWriter, node: TextRange, leadingComments: ReadonlyArray<CommentRange>): void;
    function emitNewLineBeforeLeadingCommentsOfPosition(lineMap: ReadonlyArray<number>, writer: EmitTextWriter, pos: number, leadingComments: ReadonlyArray<CommentRange>): void;
    function emitNewLineBeforeLeadingCommentOfPosition(lineMap: ReadonlyArray<number>, writer: EmitTextWriter, pos: number, commentPos: number): void;
    function emitComments(text: string, lineMap: ReadonlyArray<number>, writer: EmitTextWriter, comments: ReadonlyArray<CommentRange>, leadingSeparator: boolean, trailingSeparator: boolean, newLine: string, writeComment: (text: string, lineMap: ReadonlyArray<number>, writer: EmitTextWriter, commentPos: number, commentEnd: number, newLine: string) => void): void;
    /**
     * Detached comment is a comment at the top of file or function body that is separated from
     * the next statement by space.
     */
    function emitDetachedComments(text: string, lineMap: ReadonlyArray<number>, writer: EmitTextWriter, writeComment: (text: string, lineMap: ReadonlyArray<number>, writer: EmitTextWriter, commentPos: number, commentEnd: number, newLine: string) => void, node: TextRange, newLine: string, removeComments: boolean): {
        nodePos: number;
        detachedCommentEndPos: number;
    };
    function writeCommentRange(text: string, lineMap: ReadonlyArray<number>, writer: EmitTextWriter, commentPos: number, commentEnd: number, newLine: string): void;
    function hasModifiers(node: Node): boolean;
    function hasModifier(node: Node, flags: ModifierFlags): boolean;
    function getSelectedModifierFlags(node: Node, flags: ModifierFlags): ModifierFlags;
    function getModifierFlags(node: Node): ModifierFlags;
    function getModifierFlagsNoCache(node: Node): ModifierFlags;
    function modifierToFlag(token: SyntaxKind): ModifierFlags;
    function isLogicalOperator(token: SyntaxKind): boolean;
    function isAssignmentOperator(token: SyntaxKind): boolean;
    /** Get `C` given `N` if `N` is in the position `class C extends N` where `N` is an ExpressionWithTypeArguments. */
    function tryGetClassExtendingExpressionWithTypeArguments(node: Node): ClassLikeDeclaration | undefined;
    function isAssignmentExpression(node: Node, excludeCompoundAssignment: true): node is AssignmentExpression<EqualsToken>;
    function isAssignmentExpression(node: Node, excludeCompoundAssignment?: false): node is AssignmentExpression<AssignmentOperatorToken>;
    function isDestructuringAssignment(node: Node): node is DestructuringAssignment;
    function isExpressionWithTypeArgumentsInClassExtendsClause(node: Node): boolean;
    function isExpressionWithTypeArgumentsInClassImplementsClause(node: Node): node is ExpressionWithTypeArguments;
    function isEntityNameExpression(node: Expression): node is EntityNameExpression;
    function isRightSideOfQualifiedNameOrPropertyAccess(node: Node): boolean;
    function isEmptyObjectLiteral(expression: Node): boolean;
    function isEmptyArrayLiteral(expression: Node): boolean;
    function getLocalSymbolForExportDefault(symbol: Symbol): Symbol;
    /** Return ".ts", ".d.ts", or ".tsx", if that is the extension. */
    function tryExtractTypeScriptExtension(fileName: string): string | undefined;
    /**
     * Converts a string to a base-64 encoded ASCII string.
     */
    function convertToBase64(input: string): string;
    function getNewLineCharacter(options: CompilerOptions | PrinterOptions, system?: {
        newLine: string;
    }): string;
    function formatSyntaxKind(kind: SyntaxKind): string;
    function formatModifierFlags(flags: ModifierFlags): string;
    function formatTransformFlags(flags: TransformFlags): string;
    function formatEmitFlags(flags: EmitFlags): string;
    function formatSymbolFlags(flags: SymbolFlags): string;
    function formatTypeFlags(flags: TypeFlags): string;
    function formatObjectFlags(flags: ObjectFlags): string;
    /**
     * Creates a new TextRange from the provided pos and end.
     *
     * @param pos The start position.
     * @param end The end position.
     */
    function createRange(pos: number, end: number): TextRange;
    /**
     * Creates a new TextRange from a provided range with a new end position.
     *
     * @param range A TextRange.
     * @param end The new end position.
     */
    function moveRangeEnd(range: TextRange, end: number): TextRange;
    /**
     * Creates a new TextRange from a provided range with a new start position.
     *
     * @param range A TextRange.
     * @param pos The new Start position.
     */
    function moveRangePos(range: TextRange, pos: number): TextRange;
    /**
     * Moves the start position of a range past any decorators.
     */
    function moveRangePastDecorators(node: Node): TextRange;
    /**
     * Moves the start position of a range past any decorators or modifiers.
     */
    function moveRangePastModifiers(node: Node): TextRange;
    /**
     * Determines whether a TextRange has the same start and end positions.
     *
     * @param range A TextRange.
     */
    function isCollapsedRange(range: TextRange): boolean;
    /**
     * Creates a new TextRange for a token at the provides start position.
     *
     * @param pos The start position.
     * @param token The token.
     */
    function createTokenRange(pos: number, token: SyntaxKind): TextRange;
    function rangeIsOnSingleLine(range: TextRange, sourceFile: SourceFile): boolean;
    function rangeStartPositionsAreOnSameLine(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function rangeEndPositionsAreOnSameLine(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function rangeStartIsOnSameLineAsRangeEnd(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function rangeEndIsOnSameLineAsRangeStart(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function positionsAreOnSameLine(pos1: number, pos2: number, sourceFile: SourceFile): boolean;
    function getStartPositionOfRange(range: TextRange, sourceFile: SourceFile): number;
    /**
     * Determines whether a name was originally the declaration name of an enum or namespace
     * declaration.
     */
    function isDeclarationNameOfEnumOrNamespace(node: Identifier): boolean;
    function getInitializedVariables(node: VariableDeclarationList): ReadonlyArray<VariableDeclaration>;
    function isWatchSet(options: CompilerOptions): boolean;
    function getCheckFlags(symbol: Symbol): CheckFlags;
    function getDeclarationModifierFlagsFromSymbol(s: Symbol): ModifierFlags;
    function levenshtein(s1: string, s2: string): number;
    function skipAlias(symbol: Symbol, checker: TypeChecker): Symbol;
    /** See comment on `declareModuleMember` in `binder.ts`. */
    function getCombinedLocalAndExportSymbolFlags(symbol: Symbol): SymbolFlags;
    function isWriteOnlyAccess(node: Node): boolean;
    function isWriteAccess(node: Node): boolean;
    function compareDataObjects(dst: any, src: any): boolean;
    /**
     * clears already present map by calling onDeleteExistingValue callback before deleting that key/value
     */
    function clearMap<T>(map: Map<T>, onDeleteValue: (valueInMap: T, key: string) => void): void;
    interface MutateMapOptions<T, U> {
        createNewValue(key: string, valueInNewMap: U): T;
        onDeleteValue(existingValue: T, key: string): void;
        /**
         * If present this is called with the key when there is value for that key both in new map as well as existing map provided
         * Caller can then decide to update or remove this key.
         * If the key is removed, caller will get callback of createNewValue for that key.
         * If this callback is not provided, the value of such keys is not updated.
         */
        onExistingValue?(existingValue: T, valueInNewMap: U, key: string): void;
    }
    /**
     * Mutates the map with newMap such that keys in map will be same as newMap.
     */
    function mutateMap<T, U>(map: Map<T>, newMap: ReadonlyMap<U>, options: MutateMapOptions<T, U>): void;
    /** Calls `callback` on `directory` and every ancestor directory it has, returning the first defined result. */
    function forEachAncestorDirectory<T>(directory: string, callback: (directory: string) => T | undefined): T | undefined;
}
declare namespace ts {
    function getDefaultLibFileName(options: CompilerOptions): string;
    function textSpanEnd(span: TextSpan): number;
    function textSpanIsEmpty(span: TextSpan): boolean;
    function textSpanContainsPosition(span: TextSpan, position: number): boolean;
    function textSpanContainsTextSpan(span: TextSpan, other: TextSpan): boolean;
    function textSpanOverlapsWith(span: TextSpan, other: TextSpan): boolean;
    function textSpanOverlap(span1: TextSpan, span2: TextSpan): TextSpan;
    function textSpanIntersectsWithTextSpan(span: TextSpan, other: TextSpan): boolean;
    function textSpanIntersectsWith(span: TextSpan, start: number, length: number): boolean;
    function decodedTextSpanIntersectsWith(start1: number, length1: number, start2: number, length2: number): boolean;
    function textSpanIntersectsWithPosition(span: TextSpan, position: number): boolean;
    function textSpanIntersection(span1: TextSpan, span2: TextSpan): TextSpan;
    function createTextSpan(start: number, length: number): TextSpan;
    function createTextSpanFromBounds(start: number, end: number): TextSpan;
    function textChangeRangeNewSpan(range: TextChangeRange): TextSpan;
    function textChangeRangeIsUnchanged(range: TextChangeRange): boolean;
    function createTextChangeRange(span: TextSpan, newLength: number): TextChangeRange;
    let unchangedTextChangeRange: TextChangeRange;
    /**
     * Called to merge all the changes that occurred across several versions of a script snapshot
     * into a single change.  i.e. if a user keeps making successive edits to a script we will
     * have a text change from V1 to V2, V2 to V3, ..., Vn.
     *
     * This function will then merge those changes into a single change range valid between V1 and
     * Vn.
     */
    function collapseTextChangeRangesAcrossMultipleVersions(changes: ReadonlyArray<TextChangeRange>): TextChangeRange;
    function getTypeParameterOwner(d: Declaration): Declaration;
    function isParameterPropertyDeclaration(node: Node): boolean;
    function isEmptyBindingPattern(node: BindingName): node is BindingPattern;
    function isEmptyBindingElement(node: BindingElement): boolean;
    function getCombinedModifierFlags(node: Node): ModifierFlags;
    function getCombinedNodeFlags(node: Node): NodeFlags;
    /**
     * Checks to see if the locale is in the appropriate format,
     * and if it is, attempts to set the appropriate language.
     */
    function validateLocaleAndSetLanguage(locale: string, sys: {
        getExecutingFilePath(): string;
        resolvePath(path: string): string;
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string | undefined;
    }, errors?: Push<Diagnostic>): void;
    function getOriginalNode(node: Node): Node;
    function getOriginalNode<T extends Node>(node: Node, nodeTest: (node: Node) => node is T): T;
    /**
     * Gets a value indicating whether a node originated in the parse tree.
     *
     * @param node The node to test.
     */
    function isParseTreeNode(node: Node): boolean;
    /**
     * Gets the original parse tree node for a node.
     *
     * @param node The original node.
     * @returns The original parse tree node if found; otherwise, undefined.
     */
    function getParseTreeNode(node: Node): Node;
    /**
     * Gets the original parse tree node for a node.
     *
     * @param node The original node.
     * @param nodeTest A callback used to ensure the correct type of parse tree node is returned.
     * @returns The original parse tree node if found; otherwise, undefined.
     */
    function getParseTreeNode<T extends Node>(node: Node, nodeTest?: (node: Node) => node is T): T;
    /**
     * Remove extra underscore from escaped identifier text content.
     *
     * @param identifier The escaped identifier text.
     * @returns The unescaped identifier text.
     */
    function unescapeLeadingUnderscores(identifier: __String): string;
    function idText(identifier: Identifier): string;
    function symbolName(symbol: Symbol): string;
    /**
     * Remove extra underscore from escaped identifier text content.
     * @deprecated Use `id.text` for the unescaped text.
     * @param identifier The escaped identifier text.
     * @returns The unescaped identifier text.
     */
    function unescapeIdentifier(id: string): string;
    function getNameOfJSDocTypedef(declaration: JSDocTypedefTag): Identifier | undefined;
    function getNameOfDeclaration(declaration: Declaration | Expression): DeclarationName | undefined;
    /**
     * Gets the JSDoc parameter tags for the node if present.
     *
     * @remarks Returns any JSDoc param tag that matches the provided
     * parameter, whether a param tag on a containing function
     * expression, or a param tag on a variable declaration whose
     * initializer is the containing function. The tags closest to the
     * node are returned first, so in the previous example, the param
     * tag on the containing function expression would be first.
     *
     * Does not return tags for binding patterns, because JSDoc matches
     * parameters by name and binding patterns do not have a name.
     */
    function getJSDocParameterTags(param: ParameterDeclaration): ReadonlyArray<JSDocParameterTag> | undefined;
    /**
     * Return true if the node has JSDoc parameter tags.
     *
     * @remarks Includes parameter tags that are not directly on the node,
     * for example on a variable declaration whose initializer is a function expression.
     */
    function hasJSDocParameterTags(node: FunctionLikeDeclaration | SignatureDeclaration): boolean;
    /** Gets the JSDoc augments tag for the node if present */
    function getJSDocAugmentsTag(node: Node): JSDocAugmentsTag | undefined;
    /** Gets the JSDoc class tag for the node if present */
    function getJSDocClassTag(node: Node): JSDocClassTag | undefined;
    /** Gets the JSDoc return tag for the node if present */
    function getJSDocReturnTag(node: Node): JSDocReturnTag | undefined;
    /** Gets the JSDoc template tag for the node if present */
    function getJSDocTemplateTag(node: Node): JSDocTemplateTag | undefined;
    /** Gets the JSDoc type tag for the node if present and valid */
    function getJSDocTypeTag(node: Node): JSDocTypeTag | undefined;
    /**
     * Gets the type node for the node if provided via JSDoc.
     *
     * @remarks The search includes any JSDoc param tag that relates
     * to the provided parameter, for example a type tag on the
     * parameter itself, or a param tag on a containing function
     * expression, or a param tag on a variable declaration whose
     * initializer is the containing function. The tags closest to the
     * node are examined first, so in the previous example, the type
     * tag directly on the node would be returned.
     */
    function getJSDocType(node: Node): TypeNode | undefined;
    /**
     * Gets the return type node for the node if provided via JSDoc's return tag.
     *
     * @remarks `getJSDocReturnTag` just gets the whole JSDoc tag. This function
     * gets the type from inside the braces.
     */
    function getJSDocReturnType(node: Node): TypeNode | undefined;
    /** Get all JSDoc tags related to a node, including those on parent nodes. */
    function getJSDocTags(node: Node): ReadonlyArray<JSDocTag> | undefined;
    /** Gets all JSDoc tags of a specified kind, or undefined if not present. */
    function getAllJSDocTagsOfKind(node: Node, kind: SyntaxKind): ReadonlyArray<JSDocTag> | undefined;
}
declare namespace ts {
    function isNumericLiteral(node: Node): node is NumericLiteral;
    function isStringLiteral(node: Node): node is StringLiteral;
    function isJsxText(node: Node): node is JsxText;
    function isRegularExpressionLiteral(node: Node): node is RegularExpressionLiteral;
    function isNoSubstitutionTemplateLiteral(node: Node): node is LiteralExpression;
    function isTemplateHead(node: Node): node is TemplateHead;
    function isTemplateMiddle(node: Node): node is TemplateMiddle;
    function isTemplateTail(node: Node): node is TemplateTail;
    function isIdentifier(node: Node): node is Identifier;
    function isQualifiedName(node: Node): node is QualifiedName;
    function isComputedPropertyName(node: Node): node is ComputedPropertyName;
    function isTypeParameterDeclaration(node: Node): node is TypeParameterDeclaration;
    function isParameter(node: Node): node is ParameterDeclaration;
    function isDecorator(node: Node): node is Decorator;
    function isPropertySignature(node: Node): node is PropertySignature;
    function isPropertyDeclaration(node: Node): node is PropertyDeclaration;
    function isMethodSignature(node: Node): node is MethodSignature;
    function isMethodDeclaration(node: Node): node is MethodDeclaration;
    function isConstructorDeclaration(node: Node): node is ConstructorDeclaration;
    function isGetAccessorDeclaration(node: Node): node is GetAccessorDeclaration;
    function isSetAccessorDeclaration(node: Node): node is SetAccessorDeclaration;
    function isCallSignatureDeclaration(node: Node): node is CallSignatureDeclaration;
    function isConstructSignatureDeclaration(node: Node): node is ConstructSignatureDeclaration;
    function isIndexSignatureDeclaration(node: Node): node is IndexSignatureDeclaration;
    function isTypePredicateNode(node: Node): node is TypePredicateNode;
    function isTypeReferenceNode(node: Node): node is TypeReferenceNode;
    function isFunctionTypeNode(node: Node): node is FunctionTypeNode;
    function isConstructorTypeNode(node: Node): node is ConstructorTypeNode;
    function isTypeQueryNode(node: Node): node is TypeQueryNode;
    function isTypeLiteralNode(node: Node): node is TypeLiteralNode;
    function isArrayTypeNode(node: Node): node is ArrayTypeNode;
    function isTupleTypeNode(node: Node): node is TupleTypeNode;
    function isUnionTypeNode(node: Node): node is UnionTypeNode;
    function isIntersectionTypeNode(node: Node): node is IntersectionTypeNode;
    function isParenthesizedTypeNode(node: Node): node is ParenthesizedTypeNode;
    function isThisTypeNode(node: Node): node is ThisTypeNode;
    function isTypeOperatorNode(node: Node): node is TypeOperatorNode;
    function isIndexedAccessTypeNode(node: Node): node is IndexedAccessTypeNode;
    function isMappedTypeNode(node: Node): node is MappedTypeNode;
    function isLiteralTypeNode(node: Node): node is LiteralTypeNode;
    function isObjectBindingPattern(node: Node): node is ObjectBindingPattern;
    function isArrayBindingPattern(node: Node): node is ArrayBindingPattern;
    function isBindingElement(node: Node): node is BindingElement;
    function isArrayLiteralExpression(node: Node): node is ArrayLiteralExpression;
    function isObjectLiteralExpression(node: Node): node is ObjectLiteralExpression;
    function isPropertyAccessExpression(node: Node): node is PropertyAccessExpression;
    function isElementAccessExpression(node: Node): node is ElementAccessExpression;
    function isCallExpression(node: Node): node is CallExpression;
    function isNewExpression(node: Node): node is NewExpression;
    function isTaggedTemplateExpression(node: Node): node is TaggedTemplateExpression;
    function isTypeAssertion(node: Node): node is TypeAssertion;
    function isParenthesizedExpression(node: Node): node is ParenthesizedExpression;
    function skipPartiallyEmittedExpressions(node: Expression): Expression;
    function skipPartiallyEmittedExpressions(node: Node): Node;
    function isFunctionExpression(node: Node): node is FunctionExpression;
    function isArrowFunction(node: Node): node is ArrowFunction;
    function isDeleteExpression(node: Node): node is DeleteExpression;
    function isTypeOfExpression(node: Node): node is TypeOfExpression;
    function isVoidExpression(node: Node): node is VoidExpression;
    function isAwaitExpression(node: Node): node is AwaitExpression;
    function isPrefixUnaryExpression(node: Node): node is PrefixUnaryExpression;
    function isPostfixUnaryExpression(node: Node): node is PostfixUnaryExpression;
    function isBinaryExpression(node: Node): node is BinaryExpression;
    function isConditionalExpression(node: Node): node is ConditionalExpression;
    function isTemplateExpression(node: Node): node is TemplateExpression;
    function isYieldExpression(node: Node): node is YieldExpression;
    function isSpreadElement(node: Node): node is SpreadElement;
    function isClassExpression(node: Node): node is ClassExpression;
    function isOmittedExpression(node: Node): node is OmittedExpression;
    function isExpressionWithTypeArguments(node: Node): node is ExpressionWithTypeArguments;
    function isAsExpression(node: Node): node is AsExpression;
    function isNonNullExpression(node: Node): node is NonNullExpression;
    function isMetaProperty(node: Node): node is MetaProperty;
    function isTemplateSpan(node: Node): node is TemplateSpan;
    function isSemicolonClassElement(node: Node): node is SemicolonClassElement;
    function isBlock(node: Node): node is Block;
    function isVariableStatement(node: Node): node is VariableStatement;
    function isEmptyStatement(node: Node): node is EmptyStatement;
    function isExpressionStatement(node: Node): node is ExpressionStatement;
    function isIfStatement(node: Node): node is IfStatement;
    function isDoStatement(node: Node): node is DoStatement;
    function isWhileStatement(node: Node): node is WhileStatement;
    function isForStatement(node: Node): node is ForStatement;
    function isForInStatement(node: Node): node is ForInStatement;
    function isForOfStatement(node: Node): node is ForOfStatement;
    function isContinueStatement(node: Node): node is ContinueStatement;
    function isBreakStatement(node: Node): node is BreakStatement;
    function isReturnStatement(node: Node): node is ReturnStatement;
    function isWithStatement(node: Node): node is WithStatement;
    function isSwitchStatement(node: Node): node is SwitchStatement;
    function isLabeledStatement(node: Node): node is LabeledStatement;
    function isThrowStatement(node: Node): node is ThrowStatement;
    function isTryStatement(node: Node): node is TryStatement;
    function isDebuggerStatement(node: Node): node is DebuggerStatement;
    function isVariableDeclaration(node: Node): node is VariableDeclaration;
    function isVariableDeclarationList(node: Node): node is VariableDeclarationList;
    function isFunctionDeclaration(node: Node): node is FunctionDeclaration;
    function isClassDeclaration(node: Node): node is ClassDeclaration;
    function isInterfaceDeclaration(node: Node): node is InterfaceDeclaration;
    function isTypeAliasDeclaration(node: Node): node is TypeAliasDeclaration;
    function isEnumDeclaration(node: Node): node is EnumDeclaration;
    function isModuleDeclaration(node: Node): node is ModuleDeclaration;
    function isModuleBlock(node: Node): node is ModuleBlock;
    function isCaseBlock(node: Node): node is CaseBlock;
    function isNamespaceExportDeclaration(node: Node): node is NamespaceExportDeclaration;
    function isImportEqualsDeclaration(node: Node): node is ImportEqualsDeclaration;
    function isImportDeclaration(node: Node): node is ImportDeclaration;
    function isImportClause(node: Node): node is ImportClause;
    function isNamespaceImport(node: Node): node is NamespaceImport;
    function isNamedImports(node: Node): node is NamedImports;
    function isImportSpecifier(node: Node): node is ImportSpecifier;
    function isExportAssignment(node: Node): node is ExportAssignment;
    function isExportDeclaration(node: Node): node is ExportDeclaration;
    function isNamedExports(node: Node): node is NamedExports;
    function isExportSpecifier(node: Node): node is ExportSpecifier;
    function isMissingDeclaration(node: Node): node is MissingDeclaration;
    function isExternalModuleReference(node: Node): node is ExternalModuleReference;
    function isJsxElement(node: Node): node is JsxElement;
    function isJsxSelfClosingElement(node: Node): node is JsxSelfClosingElement;
    function isJsxOpeningElement(node: Node): node is JsxOpeningElement;
    function isJsxClosingElement(node: Node): node is JsxClosingElement;
    function isJsxFragment(node: Node): node is JsxFragment;
    function isJsxOpeningFragment(node: Node): node is JsxOpeningFragment;
    function isJsxClosingFragment(node: Node): node is JsxClosingFragment;
    function isJsxAttribute(node: Node): node is JsxAttribute;
    function isJsxAttributes(node: Node): node is JsxAttributes;
    function isJsxSpreadAttribute(node: Node): node is JsxSpreadAttribute;
    function isJsxExpression(node: Node): node is JsxExpression;
    function isCaseClause(node: Node): node is CaseClause;
    function isDefaultClause(node: Node): node is DefaultClause;
    function isHeritageClause(node: Node): node is HeritageClause;
    function isCatchClause(node: Node): node is CatchClause;
    function isPropertyAssignment(node: Node): node is PropertyAssignment;
    function isShorthandPropertyAssignment(node: Node): node is ShorthandPropertyAssignment;
    function isSpreadAssignment(node: Node): node is SpreadAssignment;
    function isEnumMember(node: Node): node is EnumMember;
    function isSourceFile(node: Node): node is SourceFile;
    function isBundle(node: Node): node is Bundle;
    function isJSDocTypeExpression(node: Node): node is JSDocTypeExpression;
    function isJSDocAllType(node: JSDocAllType): node is JSDocAllType;
    function isJSDocUnknownType(node: Node): node is JSDocUnknownType;
    function isJSDocNullableType(node: Node): node is JSDocNullableType;
    function isJSDocNonNullableType(node: Node): node is JSDocNonNullableType;
    function isJSDocOptionalType(node: Node): node is JSDocOptionalType;
    function isJSDocFunctionType(node: Node): node is JSDocFunctionType;
    function isJSDocVariadicType(node: Node): node is JSDocVariadicType;
    function isJSDoc(node: Node): node is JSDoc;
    function isJSDocAugmentsTag(node: Node): node is JSDocAugmentsTag;
    function isJSDocParameterTag(node: Node): node is JSDocParameterTag;
    function isJSDocReturnTag(node: Node): node is JSDocReturnTag;
    function isJSDocTypeTag(node: Node): node is JSDocTypeTag;
    function isJSDocTemplateTag(node: Node): node is JSDocTemplateTag;
    function isJSDocTypedefTag(node: Node): node is JSDocTypedefTag;
    function isJSDocPropertyTag(node: Node): node is JSDocPropertyTag;
    function isJSDocPropertyLikeTag(node: Node): node is JSDocPropertyLikeTag;
    function isJSDocTypeLiteral(node: Node): node is JSDocTypeLiteral;
}
declare namespace ts {
    function isSyntaxList(n: Node): n is SyntaxList;
    function isNode(node: Node): boolean;
    function isNodeKind(kind: SyntaxKind): boolean;
    /**
     * True if node is of some token syntax kind.
     * For example, this is true for an IfKeyword but not for an IfStatement.
     */
    function isToken(n: Node): boolean;
    function isNodeArray<T extends Node>(array: ReadonlyArray<T>): array is NodeArray<T>;
    function isLiteralKind(kind: SyntaxKind): boolean;
    function isLiteralExpression(node: Node): node is LiteralExpression;
    function isTemplateLiteralKind(kind: SyntaxKind): boolean;
    function isTemplateMiddleOrTemplateTail(node: Node): node is TemplateMiddle | TemplateTail;
    function isStringTextContainingNode(node: Node): boolean;
    function isGeneratedIdentifier(node: Node): node is GeneratedIdentifier;
    function isModifierKind(token: SyntaxKind): boolean;
    function isModifier(node: Node): node is Modifier;
    function isEntityName(node: Node): node is EntityName;
    function isPropertyName(node: Node): node is PropertyName;
    function isBindingName(node: Node): node is BindingName;
    function isFunctionLike(node: Node): node is FunctionLike;
    function isFunctionLikeDeclaration(node: Node): node is FunctionLikeDeclaration;
    function isFunctionLikeKind(kind: SyntaxKind): boolean;
    function isFunctionOrModuleBlock(node: Node): boolean;
    function isClassElement(node: Node): node is ClassElement;
    function isClassLike(node: Node): node is ClassLikeDeclaration;
    function isAccessor(node: Node): node is AccessorDeclaration;
    function isTypeElement(node: Node): node is TypeElement;
    function isObjectLiteralElementLike(node: Node): node is ObjectLiteralElementLike;
    /**
     * Node test that determines whether a node is a valid type node.
     * This differs from the `isPartOfTypeNode` function which determines whether a node is *part*
     * of a TypeNode.
     */
    function isTypeNode(node: Node): node is TypeNode;
    function isFunctionOrConstructorTypeNode(node: Node): node is FunctionTypeNode | ConstructorTypeNode;
    function isBindingPattern(node: Node): node is BindingPattern;
    function isAssignmentPattern(node: Node): node is AssignmentPattern;
    function isArrayBindingElement(node: Node): node is ArrayBindingElement;
    /**
     * Determines whether the BindingOrAssignmentElement is a BindingElement-like declaration
     */
    function isDeclarationBindingElement(bindingElement: BindingOrAssignmentElement): bindingElement is VariableDeclaration | ParameterDeclaration | BindingElement;
    /**
     * Determines whether a node is a BindingOrAssignmentPattern
     */
    function isBindingOrAssignmentPattern(node: BindingOrAssignmentElementTarget): node is BindingOrAssignmentPattern;
    /**
     * Determines whether a node is an ObjectBindingOrAssignmentPattern
     */
    function isObjectBindingOrAssignmentPattern(node: BindingOrAssignmentElementTarget): node is ObjectBindingOrAssignmentPattern;
    /**
     * Determines whether a node is an ArrayBindingOrAssignmentPattern
     */
    function isArrayBindingOrAssignmentPattern(node: BindingOrAssignmentElementTarget): node is ArrayBindingOrAssignmentPattern;
    function isPropertyAccessOrQualifiedName(node: Node): node is PropertyAccessExpression | QualifiedName;
    function isCallLikeExpression(node: Node): node is CallLikeExpression;
    function isCallOrNewExpression(node: Node): node is CallExpression | NewExpression;
    function isTemplateLiteral(node: Node): node is TemplateLiteral;
    function isLeftHandSideExpression(node: Node): node is LeftHandSideExpression;
    function isUnaryExpression(node: Node): node is UnaryExpression;
    function isUnaryExpressionWithWrite(expr: Node): expr is PrefixUnaryExpression | PostfixUnaryExpression;
    /**
     * Determines whether a node is an expression based only on its kind.
     * Use `isExpressionNode` if not in transforms.
     */
    function isExpression(node: Node): node is Expression;
    function isAssertionExpression(node: Node): node is AssertionExpression;
    function isPartiallyEmittedExpression(node: Node): node is PartiallyEmittedExpression;
    function isNotEmittedStatement(node: Node): node is NotEmittedStatement;
    function isNotEmittedOrPartiallyEmittedNode(node: Node): node is NotEmittedStatement | PartiallyEmittedExpression;
    function isIterationStatement(node: Node, lookInLabeledStatements: boolean): node is IterationStatement;
    function isForInOrOfStatement(node: Node): node is ForInOrOfStatement;
    function isConciseBody(node: Node): node is ConciseBody;
    function isFunctionBody(node: Node): node is FunctionBody;
    function isForInitializer(node: Node): node is ForInitializer;
    function isModuleBody(node: Node): node is ModuleBody;
    function isNamespaceBody(node: Node): node is NamespaceBody;
    function isJSDocNamespaceBody(node: Node): node is JSDocNamespaceBody;
    function isNamedImportBindings(node: Node): node is NamedImportBindings;
    function isModuleOrEnumDeclaration(node: Node): node is ModuleDeclaration | EnumDeclaration;
    function isDeclaration(node: Node): node is NamedDeclaration;
    function isDeclarationStatement(node: Node): node is DeclarationStatement;
    /**
     * Determines whether the node is a statement that is not also a declaration
     */
    function isStatementButNotDeclaration(node: Node): node is Statement;
    function isStatement(node: Node): node is Statement;
    function isModuleReference(node: Node): node is ModuleReference;
    function isJsxTagNameExpression(node: Node): node is JsxTagNameExpression;
    function isJsxChild(node: Node): node is JsxChild;
    function isJsxAttributeLike(node: Node): node is JsxAttributeLike;
    function isStringLiteralOrJsxExpression(node: Node): node is StringLiteral | JsxExpression;
    function isJsxOpeningLikeElement(node: Node): node is JsxOpeningLikeElement;
    function isCaseOrDefaultClause(node: Node): node is CaseOrDefaultClause;
    /** True if node is of some JSDoc syntax kind. */
    function isJSDocNode(node: Node): boolean;
    /** True if node is of a kind that may contain comment text. */
    function isJSDocCommentContainingNode(node: Node): boolean;
    function isJSDocTag(node: Node): boolean;
    function isSetAccessor(node: Node): node is SetAccessorDeclaration;
    function isGetAccessor(node: Node): node is GetAccessorDeclaration;
    /** True if has jsdoc nodes attached to it. */
    function hasJSDocNodes(node: Node): node is HasJSDoc;
}
declare namespace ts {
    const Diagnostics: {
        Unterminated_string_literal: DiagnosticMessage;
        Identifier_expected: DiagnosticMessage;
        _0_expected: DiagnosticMessage;
        A_file_cannot_have_a_reference_to_itself: DiagnosticMessage;
        Trailing_comma_not_allowed: DiagnosticMessage;
        Asterisk_Slash_expected: DiagnosticMessage;
        Unexpected_token: DiagnosticMessage;
        A_rest_parameter_must_be_last_in_a_parameter_list: DiagnosticMessage;
        Parameter_cannot_have_question_mark_and_initializer: DiagnosticMessage;
        A_required_parameter_cannot_follow_an_optional_parameter: DiagnosticMessage;
        An_index_signature_cannot_have_a_rest_parameter: DiagnosticMessage;
        An_index_signature_parameter_cannot_have_an_accessibility_modifier: DiagnosticMessage;
        An_index_signature_parameter_cannot_have_a_question_mark: DiagnosticMessage;
        An_index_signature_parameter_cannot_have_an_initializer: DiagnosticMessage;
        An_index_signature_must_have_a_type_annotation: DiagnosticMessage;
        An_index_signature_parameter_must_have_a_type_annotation: DiagnosticMessage;
        An_index_signature_parameter_type_must_be_string_or_number: DiagnosticMessage;
        readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature: DiagnosticMessage;
        Accessibility_modifier_already_seen: DiagnosticMessage;
        _0_modifier_must_precede_1_modifier: DiagnosticMessage;
        _0_modifier_already_seen: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_class_element: DiagnosticMessage;
        super_must_be_followed_by_an_argument_list_or_member_access: DiagnosticMessage;
        Only_ambient_modules_can_use_quoted_names: DiagnosticMessage;
        Statements_are_not_allowed_in_ambient_contexts: DiagnosticMessage;
        A_declare_modifier_cannot_be_used_in_an_already_ambient_context: DiagnosticMessage;
        Initializers_are_not_allowed_in_ambient_contexts: DiagnosticMessage;
        _0_modifier_cannot_be_used_in_an_ambient_context: DiagnosticMessage;
        _0_modifier_cannot_be_used_with_a_class_declaration: DiagnosticMessage;
        _0_modifier_cannot_be_used_here: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_data_property: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_module_or_namespace_element: DiagnosticMessage;
        A_0_modifier_cannot_be_used_with_an_interface_declaration: DiagnosticMessage;
        A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file: DiagnosticMessage;
        A_rest_parameter_cannot_be_optional: DiagnosticMessage;
        A_rest_parameter_cannot_have_an_initializer: DiagnosticMessage;
        A_set_accessor_must_have_exactly_one_parameter: DiagnosticMessage;
        A_set_accessor_cannot_have_an_optional_parameter: DiagnosticMessage;
        A_set_accessor_parameter_cannot_have_an_initializer: DiagnosticMessage;
        A_set_accessor_cannot_have_rest_parameter: DiagnosticMessage;
        A_get_accessor_cannot_have_parameters: DiagnosticMessage;
        Type_0_is_not_a_valid_async_function_return_type_in_ES5_SlashES3_because_it_does_not_refer_to_a_Promise_compatible_constructor_value: DiagnosticMessage;
        Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher: DiagnosticMessage;
        An_async_function_or_method_must_have_a_valid_awaitable_return_type: DiagnosticMessage;
        The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: DiagnosticMessage;
        A_promise_must_have_a_then_method: DiagnosticMessage;
        The_first_parameter_of_the_then_method_of_a_promise_must_be_a_callback: DiagnosticMessage;
        Enum_member_must_have_initializer: DiagnosticMessage;
        Type_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method: DiagnosticMessage;
        An_export_assignment_cannot_be_used_in_a_namespace: DiagnosticMessage;
        The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type: DiagnosticMessage;
        In_ambient_enum_declarations_member_initializer_must_be_constant_expression: DiagnosticMessage;
        Unexpected_token_A_constructor_method_accessor_or_property_was_expected: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_type_member: DiagnosticMessage;
        _0_modifier_cannot_appear_on_an_index_signature: DiagnosticMessage;
        A_0_modifier_cannot_be_used_with_an_import_declaration: DiagnosticMessage;
        Invalid_reference_directive_syntax: DiagnosticMessage;
        Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher_Use_the_syntax_0: DiagnosticMessage;
        An_accessor_cannot_be_declared_in_an_ambient_context: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_constructor_declaration: DiagnosticMessage;
        _0_modifier_cannot_appear_on_a_parameter: DiagnosticMessage;
        Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement: DiagnosticMessage;
        Type_parameters_cannot_appear_on_a_constructor_declaration: DiagnosticMessage;
        Type_annotation_cannot_appear_on_a_constructor_declaration: DiagnosticMessage;
        An_accessor_cannot_have_type_parameters: DiagnosticMessage;
        A_set_accessor_cannot_have_a_return_type_annotation: DiagnosticMessage;
        An_index_signature_must_have_exactly_one_parameter: DiagnosticMessage;
        _0_list_cannot_be_empty: DiagnosticMessage;
        Type_parameter_list_cannot_be_empty: DiagnosticMessage;
        Type_argument_list_cannot_be_empty: DiagnosticMessage;
        Invalid_use_of_0_in_strict_mode: DiagnosticMessage;
        with_statements_are_not_allowed_in_strict_mode: DiagnosticMessage;
        delete_cannot_be_called_on_an_identifier_in_strict_mode: DiagnosticMessage;
        A_for_await_of_statement_is_only_allowed_within_an_async_function_or_async_generator: DiagnosticMessage;
        A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement: DiagnosticMessage;
        A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement: DiagnosticMessage;
        Jump_target_cannot_cross_function_boundary: DiagnosticMessage;
        A_return_statement_can_only_be_used_within_a_function_body: DiagnosticMessage;
        Expression_expected: DiagnosticMessage;
        Type_expected: DiagnosticMessage;
        A_default_clause_cannot_appear_more_than_once_in_a_switch_statement: DiagnosticMessage;
        Duplicate_label_0: DiagnosticMessage;
        A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement: DiagnosticMessage;
        A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement: DiagnosticMessage;
        An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode: DiagnosticMessage;
        An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name: DiagnosticMessage;
        An_object_literal_cannot_have_property_and_accessor_with_the_same_name: DiagnosticMessage;
        An_export_assignment_cannot_have_modifiers: DiagnosticMessage;
        Octal_literals_are_not_allowed_in_strict_mode: DiagnosticMessage;
        A_tuple_type_element_list_cannot_be_empty: DiagnosticMessage;
        Variable_declaration_list_cannot_be_empty: DiagnosticMessage;
        Digit_expected: DiagnosticMessage;
        Hexadecimal_digit_expected: DiagnosticMessage;
        Unexpected_end_of_text: DiagnosticMessage;
        Invalid_character: DiagnosticMessage;
        Declaration_or_statement_expected: DiagnosticMessage;
        Statement_expected: DiagnosticMessage;
        case_or_default_expected: DiagnosticMessage;
        Property_or_signature_expected: DiagnosticMessage;
        Enum_member_expected: DiagnosticMessage;
        Variable_declaration_expected: DiagnosticMessage;
        Argument_expression_expected: DiagnosticMessage;
        Property_assignment_expected: DiagnosticMessage;
        Expression_or_comma_expected: DiagnosticMessage;
        Parameter_declaration_expected: DiagnosticMessage;
        Type_parameter_declaration_expected: DiagnosticMessage;
        Type_argument_expected: DiagnosticMessage;
        String_literal_expected: DiagnosticMessage;
        Line_break_not_permitted_here: DiagnosticMessage;
        or_expected: DiagnosticMessage;
        Declaration_expected: DiagnosticMessage;
        Import_declarations_in_a_namespace_cannot_reference_a_module: DiagnosticMessage;
        Cannot_use_imports_exports_or_module_augmentations_when_module_is_none: DiagnosticMessage;
        File_name_0_differs_from_already_included_file_name_1_only_in_casing: DiagnosticMessage;
        new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead: DiagnosticMessage;
        const_declarations_must_be_initialized: DiagnosticMessage;
        const_declarations_can_only_be_declared_inside_a_block: DiagnosticMessage;
        let_declarations_can_only_be_declared_inside_a_block: DiagnosticMessage;
        Unterminated_template_literal: DiagnosticMessage;
        Unterminated_regular_expression_literal: DiagnosticMessage;
        An_object_member_cannot_be_declared_optional: DiagnosticMessage;
        A_yield_expression_is_only_allowed_in_a_generator_body: DiagnosticMessage;
        Computed_property_names_are_not_allowed_in_enums: DiagnosticMessage;
        A_computed_property_name_in_an_ambient_context_must_directly_refer_to_a_built_in_symbol: DiagnosticMessage;
        A_computed_property_name_in_a_class_property_declaration_must_directly_refer_to_a_built_in_symbol: DiagnosticMessage;
        A_computed_property_name_in_a_method_overload_must_directly_refer_to_a_built_in_symbol: DiagnosticMessage;
        A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol: DiagnosticMessage;
        A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol: DiagnosticMessage;
        A_comma_expression_is_not_allowed_in_a_computed_property_name: DiagnosticMessage;
        extends_clause_already_seen: DiagnosticMessage;
        extends_clause_must_precede_implements_clause: DiagnosticMessage;
        Classes_can_only_extend_a_single_class: DiagnosticMessage;
        implements_clause_already_seen: DiagnosticMessage;
        Interface_declaration_cannot_have_implements_clause: DiagnosticMessage;
        Binary_digit_expected: DiagnosticMessage;
        Octal_digit_expected: DiagnosticMessage;
        Unexpected_token_expected: DiagnosticMessage;
        Property_destructuring_pattern_expected: DiagnosticMessage;
        Array_element_destructuring_pattern_expected: DiagnosticMessage;
        A_destructuring_declaration_must_have_an_initializer: DiagnosticMessage;
        An_implementation_cannot_be_declared_in_ambient_contexts: DiagnosticMessage;
        Modifiers_cannot_appear_here: DiagnosticMessage;
        Merge_conflict_marker_encountered: DiagnosticMessage;
        A_rest_element_cannot_have_an_initializer: DiagnosticMessage;
        A_parameter_property_may_not_be_declared_using_a_binding_pattern: DiagnosticMessage;
        Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement: DiagnosticMessage;
        The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer: DiagnosticMessage;
        The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer: DiagnosticMessage;
        An_import_declaration_cannot_have_modifiers: DiagnosticMessage;
        Module_0_has_no_default_export: DiagnosticMessage;
        An_export_declaration_cannot_have_modifiers: DiagnosticMessage;
        Export_declarations_are_not_permitted_in_a_namespace: DiagnosticMessage;
        Catch_clause_variable_cannot_have_a_type_annotation: DiagnosticMessage;
        Catch_clause_variable_cannot_have_an_initializer: DiagnosticMessage;
        An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive: DiagnosticMessage;
        Unterminated_Unicode_escape_sequence: DiagnosticMessage;
        Line_terminator_not_permitted_before_arrow: DiagnosticMessage;
        Import_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead: DiagnosticMessage;
        Export_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_export_default_or_another_module_format_instead: DiagnosticMessage;
        Cannot_re_export_a_type_when_the_isolatedModules_flag_is_provided: DiagnosticMessage;
        Decorators_are_not_valid_here: DiagnosticMessage;
        Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name: DiagnosticMessage;
        Cannot_compile_namespaces_when_the_isolatedModules_flag_is_provided: DiagnosticMessage;
        Ambient_const_enums_are_not_allowed_when_the_isolatedModules_flag_is_provided: DiagnosticMessage;
        Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode: DiagnosticMessage;
        A_class_declaration_without_the_default_modifier_must_have_a_name: DiagnosticMessage;
        Identifier_expected_0_is_a_reserved_word_in_strict_mode: DiagnosticMessage;
        Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode: DiagnosticMessage;
        Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode: DiagnosticMessage;
        Invalid_use_of_0_Modules_are_automatically_in_strict_mode: DiagnosticMessage;
        Identifier_expected_esModule_is_reserved_as_an_exported_marker_when_transforming_ECMAScript_modules: DiagnosticMessage;
        Export_assignment_is_not_supported_when_module_flag_is_system: DiagnosticMessage;
        Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_to_remove_this_warning: DiagnosticMessage;
        Generators_are_only_available_when_targeting_ECMAScript_2015_or_higher: DiagnosticMessage;
        Generators_are_not_allowed_in_an_ambient_context: DiagnosticMessage;
        An_overload_signature_cannot_be_declared_as_a_generator: DiagnosticMessage;
        _0_tag_already_specified: DiagnosticMessage;
        Signature_0_must_be_a_type_predicate: DiagnosticMessage;
        Cannot_find_parameter_0: DiagnosticMessage;
        Type_predicate_0_is_not_assignable_to_1: DiagnosticMessage;
        Parameter_0_is_not_in_the_same_position_as_parameter_1: DiagnosticMessage;
        A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods: DiagnosticMessage;
        A_type_predicate_cannot_reference_a_rest_parameter: DiagnosticMessage;
        A_type_predicate_cannot_reference_element_0_in_a_binding_pattern: DiagnosticMessage;
        An_export_assignment_can_only_be_used_in_a_module: DiagnosticMessage;
        An_import_declaration_can_only_be_used_in_a_namespace_or_module: DiagnosticMessage;
        An_export_declaration_can_only_be_used_in_a_module: DiagnosticMessage;
        An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file: DiagnosticMessage;
        A_namespace_declaration_is_only_allowed_in_a_namespace_or_module: DiagnosticMessage;
        The_return_type_of_a_property_decorator_function_must_be_either_void_or_any: DiagnosticMessage;
        The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any: DiagnosticMessage;
        Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression: DiagnosticMessage;
        Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression: DiagnosticMessage;
        Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression: DiagnosticMessage;
        Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression: DiagnosticMessage;
        abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration: DiagnosticMessage;
        _0_modifier_cannot_be_used_with_1_modifier: DiagnosticMessage;
        Abstract_methods_can_only_appear_within_an_abstract_class: DiagnosticMessage;
        Method_0_cannot_have_an_implementation_because_it_is_marked_abstract: DiagnosticMessage;
        An_interface_property_cannot_have_an_initializer: DiagnosticMessage;
        A_type_literal_property_cannot_have_an_initializer: DiagnosticMessage;
        A_class_member_cannot_have_the_0_keyword: DiagnosticMessage;
        A_decorator_can_only_decorate_a_method_implementation_not_an_overload: DiagnosticMessage;
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5: DiagnosticMessage;
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_definitions_are_automatically_in_strict_mode: DiagnosticMessage;
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_are_automatically_in_strict_mode: DiagnosticMessage;
        _0_tag_cannot_be_used_independently_as_a_top_level_JSDoc_tag: DiagnosticMessage;
        A_const_initializer_in_an_ambient_context_must_be_a_string_or_numeric_literal: DiagnosticMessage;
        with_statements_are_not_allowed_in_an_async_function_block: DiagnosticMessage;
        await_expression_is_only_allowed_within_an_async_function: DiagnosticMessage;
        can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment: DiagnosticMessage;
        The_body_of_an_if_statement_cannot_be_the_empty_statement: DiagnosticMessage;
        Global_module_exports_may_only_appear_in_module_files: DiagnosticMessage;
        Global_module_exports_may_only_appear_in_declaration_files: DiagnosticMessage;
        Global_module_exports_may_only_appear_at_top_level: DiagnosticMessage;
        A_parameter_property_cannot_be_declared_using_a_rest_parameter: DiagnosticMessage;
        An_abstract_accessor_cannot_have_an_implementation: DiagnosticMessage;
        A_default_export_can_only_be_used_in_an_ECMAScript_style_module: DiagnosticMessage;
        Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: DiagnosticMessage;
        Type_of_yield_operand_in_an_async_generator_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: DiagnosticMessage;
        Type_of_iterated_elements_of_a_yield_Asterisk_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: DiagnosticMessage;
        Dynamic_import_cannot_be_used_when_targeting_ECMAScript_2015_modules: DiagnosticMessage;
        Dynamic_import_must_have_one_specifier_as_an_argument: DiagnosticMessage;
        Specifier_of_dynamic_import_cannot_be_spread_element: DiagnosticMessage;
        Dynamic_import_cannot_have_type_arguments: DiagnosticMessage;
        String_literal_with_double_quotes_expected: DiagnosticMessage;
        Property_value_can_only_be_string_literal_numeric_literal_true_false_null_object_literal_or_array_literal: DiagnosticMessage;
        _0_accepts_too_few_arguments_to_be_used_as_a_decorator_here_Did_you_mean_to_call_it_first_and_write_0: DiagnosticMessage;
        Duplicate_identifier_0: DiagnosticMessage;
        Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: DiagnosticMessage;
        Static_members_cannot_reference_class_type_parameters: DiagnosticMessage;
        Circular_definition_of_import_alias_0: DiagnosticMessage;
        Cannot_find_name_0: DiagnosticMessage;
        Module_0_has_no_exported_member_1: DiagnosticMessage;
        File_0_is_not_a_module: DiagnosticMessage;
        Cannot_find_module_0: DiagnosticMessage;
        Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity: DiagnosticMessage;
        An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements: DiagnosticMessage;
        Type_0_recursively_references_itself_as_a_base_type: DiagnosticMessage;
        A_class_may_only_extend_another_class: DiagnosticMessage;
        An_interface_may_only_extend_a_class_or_another_interface: DiagnosticMessage;
        Type_parameter_0_has_a_circular_constraint: DiagnosticMessage;
        Generic_type_0_requires_1_type_argument_s: DiagnosticMessage;
        Type_0_is_not_generic: DiagnosticMessage;
        Global_type_0_must_be_a_class_or_interface_type: DiagnosticMessage;
        Global_type_0_must_have_1_type_parameter_s: DiagnosticMessage;
        Cannot_find_global_type_0: DiagnosticMessage;
        Named_property_0_of_types_1_and_2_are_not_identical: DiagnosticMessage;
        Interface_0_cannot_simultaneously_extend_types_1_and_2: DiagnosticMessage;
        Excessive_stack_depth_comparing_types_0_and_1: DiagnosticMessage;
        Type_0_is_not_assignable_to_type_1: DiagnosticMessage;
        Cannot_redeclare_exported_variable_0: DiagnosticMessage;
        Property_0_is_missing_in_type_1: DiagnosticMessage;
        Property_0_is_private_in_type_1_but_not_in_type_2: DiagnosticMessage;
        Types_of_property_0_are_incompatible: DiagnosticMessage;
        Property_0_is_optional_in_type_1_but_required_in_type_2: DiagnosticMessage;
        Types_of_parameters_0_and_1_are_incompatible: DiagnosticMessage;
        Index_signature_is_missing_in_type_0: DiagnosticMessage;
        Index_signatures_are_incompatible: DiagnosticMessage;
        this_cannot_be_referenced_in_a_module_or_namespace_body: DiagnosticMessage;
        this_cannot_be_referenced_in_current_location: DiagnosticMessage;
        this_cannot_be_referenced_in_constructor_arguments: DiagnosticMessage;
        this_cannot_be_referenced_in_a_static_property_initializer: DiagnosticMessage;
        super_can_only_be_referenced_in_a_derived_class: DiagnosticMessage;
        super_cannot_be_referenced_in_constructor_arguments: DiagnosticMessage;
        Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors: DiagnosticMessage;
        super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class: DiagnosticMessage;
        Property_0_does_not_exist_on_type_1: DiagnosticMessage;
        Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword: DiagnosticMessage;
        Property_0_is_private_and_only_accessible_within_class_1: DiagnosticMessage;
        An_index_expression_argument_must_be_of_type_string_number_symbol_or_any: DiagnosticMessage;
        This_syntax_requires_an_imported_helper_named_1_but_module_0_has_no_exported_member_1: DiagnosticMessage;
        Type_0_does_not_satisfy_the_constraint_1: DiagnosticMessage;
        Argument_of_type_0_is_not_assignable_to_parameter_of_type_1: DiagnosticMessage;
        Call_target_does_not_contain_any_signatures: DiagnosticMessage;
        Untyped_function_calls_may_not_accept_type_arguments: DiagnosticMessage;
        Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: DiagnosticMessage;
        Cannot_invoke_an_expression_whose_type_lacks_a_call_signature_Type_0_has_no_compatible_call_signatures: DiagnosticMessage;
        Only_a_void_function_can_be_called_with_the_new_keyword: DiagnosticMessage;
        Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature: DiagnosticMessage;
        Type_0_cannot_be_converted_to_type_1: DiagnosticMessage;
        Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1: DiagnosticMessage;
        This_syntax_requires_an_imported_helper_but_module_0_cannot_be_found: DiagnosticMessage;
        A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value: DiagnosticMessage;
        An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type: DiagnosticMessage;
        The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: DiagnosticMessage;
        The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type: DiagnosticMessage;
        The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol: DiagnosticMessage;
        The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: DiagnosticMessage;
        The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: DiagnosticMessage;
        The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: DiagnosticMessage;
        The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        Operator_0_cannot_be_applied_to_types_1_and_2: DiagnosticMessage;
        Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined: DiagnosticMessage;
        Type_parameter_name_cannot_be_0: DiagnosticMessage;
        A_parameter_property_is_only_allowed_in_a_constructor_implementation: DiagnosticMessage;
        A_rest_parameter_must_be_of_an_array_type: DiagnosticMessage;
        A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation: DiagnosticMessage;
        Parameter_0_cannot_be_referenced_in_its_initializer: DiagnosticMessage;
        Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it: DiagnosticMessage;
        Duplicate_string_index_signature: DiagnosticMessage;
        Duplicate_number_index_signature: DiagnosticMessage;
        A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties: DiagnosticMessage;
        Constructors_for_derived_classes_must_contain_a_super_call: DiagnosticMessage;
        A_get_accessor_must_return_a_value: DiagnosticMessage;
        Getter_and_setter_accessors_do_not_agree_in_visibility: DiagnosticMessage;
        get_and_set_accessor_must_have_the_same_type: DiagnosticMessage;
        A_signature_with_an_implementation_cannot_use_a_string_literal_type: DiagnosticMessage;
        Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature: DiagnosticMessage;
        Overload_signatures_must_all_be_exported_or_non_exported: DiagnosticMessage;
        Overload_signatures_must_all_be_ambient_or_non_ambient: DiagnosticMessage;
        Overload_signatures_must_all_be_public_private_or_protected: DiagnosticMessage;
        Overload_signatures_must_all_be_optional_or_required: DiagnosticMessage;
        Function_overload_must_be_static: DiagnosticMessage;
        Function_overload_must_not_be_static: DiagnosticMessage;
        Function_implementation_name_must_be_0: DiagnosticMessage;
        Constructor_implementation_is_missing: DiagnosticMessage;
        Function_implementation_is_missing_or_not_immediately_following_the_declaration: DiagnosticMessage;
        Multiple_constructor_implementations_are_not_allowed: DiagnosticMessage;
        Duplicate_function_implementation: DiagnosticMessage;
        Overload_signature_is_not_compatible_with_function_implementation: DiagnosticMessage;
        Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local: DiagnosticMessage;
        Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters: DiagnosticMessage;
        Declaration_name_conflicts_with_built_in_global_identifier_0: DiagnosticMessage;
        Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference: DiagnosticMessage;
        Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference: DiagnosticMessage;
        Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference: DiagnosticMessage;
        Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference: DiagnosticMessage;
        Subsequent_variable_declarations_must_have_the_same_type_Variable_0_has_type_1_at_2_but_here_has_type_3: DiagnosticMessage;
        The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation: DiagnosticMessage;
        The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any: DiagnosticMessage;
        The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter: DiagnosticMessage;
        Setters_cannot_return_a_value: DiagnosticMessage;
        Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class: DiagnosticMessage;
        The_with_statement_is_not_supported_All_symbols_in_a_with_block_will_have_type_any: DiagnosticMessage;
        Property_0_of_type_1_is_not_assignable_to_string_index_type_2: DiagnosticMessage;
        Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2: DiagnosticMessage;
        Numeric_index_type_0_is_not_assignable_to_string_index_type_1: DiagnosticMessage;
        Class_name_cannot_be_0: DiagnosticMessage;
        Class_0_incorrectly_extends_base_class_1: DiagnosticMessage;
        Class_static_side_0_incorrectly_extends_base_class_static_side_1: DiagnosticMessage;
        Class_0_incorrectly_implements_interface_1: DiagnosticMessage;
        A_class_may_only_implement_another_class_or_interface: DiagnosticMessage;
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor: DiagnosticMessage;
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property: DiagnosticMessage;
        Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function: DiagnosticMessage;
        Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function: DiagnosticMessage;
        Interface_name_cannot_be_0: DiagnosticMessage;
        All_declarations_of_0_must_have_identical_type_parameters: DiagnosticMessage;
        Interface_0_incorrectly_extends_interface_1: DiagnosticMessage;
        Enum_name_cannot_be_0: DiagnosticMessage;
        In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element: DiagnosticMessage;
        A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged: DiagnosticMessage;
        A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged: DiagnosticMessage;
        Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces: DiagnosticMessage;
        Ambient_module_declaration_cannot_specify_relative_module_name: DiagnosticMessage;
        Module_0_is_hidden_by_a_local_declaration_with_the_same_name: DiagnosticMessage;
        Import_name_cannot_be_0: DiagnosticMessage;
        Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relative_module_name: DiagnosticMessage;
        Import_declaration_conflicts_with_local_declaration_of_0: DiagnosticMessage;
        Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module: DiagnosticMessage;
        Types_have_separate_declarations_of_a_private_property_0: DiagnosticMessage;
        Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2: DiagnosticMessage;
        Property_0_is_protected_in_type_1_but_public_in_type_2: DiagnosticMessage;
        Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses: DiagnosticMessage;
        Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1: DiagnosticMessage;
        The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead: DiagnosticMessage;
        Block_scoped_variable_0_used_before_its_declaration: DiagnosticMessage;
        Class_0_used_before_its_declaration: DiagnosticMessage;
        Enum_0_used_before_its_declaration: DiagnosticMessage;
        Cannot_redeclare_block_scoped_variable_0: DiagnosticMessage;
        An_enum_member_cannot_have_a_numeric_name: DiagnosticMessage;
        The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly: DiagnosticMessage;
        Variable_0_is_used_before_being_assigned: DiagnosticMessage;
        Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0: DiagnosticMessage;
        Type_alias_0_circularly_references_itself: DiagnosticMessage;
        Type_alias_name_cannot_be_0: DiagnosticMessage;
        An_AMD_module_cannot_have_multiple_name_assignments: DiagnosticMessage;
        Type_0_has_no_property_1_and_no_string_index_signature: DiagnosticMessage;
        Type_0_has_no_property_1: DiagnosticMessage;
        Type_0_is_not_an_array_type: DiagnosticMessage;
        A_rest_element_must_be_last_in_a_destructuring_pattern: DiagnosticMessage;
        A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature: DiagnosticMessage;
        A_computed_property_name_must_be_of_type_string_number_symbol_or_any: DiagnosticMessage;
        this_cannot_be_referenced_in_a_computed_property_name: DiagnosticMessage;
        super_cannot_be_referenced_in_a_computed_property_name: DiagnosticMessage;
        A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type: DiagnosticMessage;
        Cannot_find_global_value_0: DiagnosticMessage;
        The_0_operator_cannot_be_applied_to_type_symbol: DiagnosticMessage;
        Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object: DiagnosticMessage;
        A_computed_property_name_of_the_form_0_must_be_of_type_symbol: DiagnosticMessage;
        Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher: DiagnosticMessage;
        Enum_declarations_must_all_be_const_or_non_const: DiagnosticMessage;
        In_const_enum_declarations_member_initializer_must_be_constant_expression: DiagnosticMessage;
        const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment: DiagnosticMessage;
        A_const_enum_member_can_only_be_accessed_using_a_string_literal: DiagnosticMessage;
        const_enum_member_initializer_was_evaluated_to_a_non_finite_value: DiagnosticMessage;
        const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN: DiagnosticMessage;
        Property_0_does_not_exist_on_const_enum_1: DiagnosticMessage;
        let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations: DiagnosticMessage;
        Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1: DiagnosticMessage;
        The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation: DiagnosticMessage;
        Export_declaration_conflicts_with_exported_declaration_of_0: DiagnosticMessage;
        The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        Type_must_have_a_Symbol_iterator_method_that_returns_an_iterator: DiagnosticMessage;
        An_iterator_must_have_a_next_method: DiagnosticMessage;
        The_type_returned_by_the_next_method_of_an_iterator_must_have_a_value_property: DiagnosticMessage;
        The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern: DiagnosticMessage;
        Cannot_redeclare_identifier_0_in_catch_clause: DiagnosticMessage;
        Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2: DiagnosticMessage;
        Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher: DiagnosticMessage;
        Type_0_is_not_an_array_type_or_a_string_type: DiagnosticMessage;
        The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_standard_function_expression: DiagnosticMessage;
        Module_0_resolves_to_a_non_module_entity_and_cannot_be_imported_using_this_construct: DiagnosticMessage;
        Module_0_uses_export_and_cannot_be_used_with_export_Asterisk: DiagnosticMessage;
        An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments: DiagnosticMessage;
        A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments: DiagnosticMessage;
        A_rest_element_cannot_contain_a_binding_pattern: DiagnosticMessage;
        _0_is_referenced_directly_or_indirectly_in_its_own_type_annotation: DiagnosticMessage;
        Cannot_find_namespace_0: DiagnosticMessage;
        Type_must_have_a_Symbol_asyncIterator_method_that_returns_an_async_iterator: DiagnosticMessage;
        A_generator_cannot_have_a_void_type_annotation: DiagnosticMessage;
        _0_is_referenced_directly_or_indirectly_in_its_own_base_expression: DiagnosticMessage;
        Type_0_is_not_a_constructor_function_type: DiagnosticMessage;
        No_base_constructor_has_the_specified_number_of_type_arguments: DiagnosticMessage;
        Base_constructor_return_type_0_is_not_a_class_or_interface_type: DiagnosticMessage;
        Base_constructors_must_all_have_the_same_return_type: DiagnosticMessage;
        Cannot_create_an_instance_of_the_abstract_class_0: DiagnosticMessage;
        Overload_signatures_must_all_be_abstract_or_non_abstract: DiagnosticMessage;
        Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression: DiagnosticMessage;
        Classes_containing_abstract_methods_must_be_marked_abstract: DiagnosticMessage;
        Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2: DiagnosticMessage;
        All_declarations_of_an_abstract_method_must_be_consecutive: DiagnosticMessage;
        Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type: DiagnosticMessage;
        A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard: DiagnosticMessage;
        An_async_iterator_must_have_a_next_method: DiagnosticMessage;
        Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions: DiagnosticMessage;
        Expression_resolves_to_variable_declaration_0_that_compiler_uses_to_support_async_functions: DiagnosticMessage;
        The_arguments_object_cannot_be_referenced_in_an_async_function_or_method_in_ES3_and_ES5_Consider_using_a_standard_function_or_method: DiagnosticMessage;
        yield_expressions_cannot_be_used_in_a_parameter_initializer: DiagnosticMessage;
        await_expressions_cannot_be_used_in_a_parameter_initializer: DiagnosticMessage;
        Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value: DiagnosticMessage;
        A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface: DiagnosticMessage;
        The_inferred_type_of_0_references_an_inaccessible_this_type_A_type_annotation_is_necessary: DiagnosticMessage;
        A_module_cannot_have_multiple_default_exports: DiagnosticMessage;
        Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_functions: DiagnosticMessage;
        Property_0_is_incompatible_with_index_signature: DiagnosticMessage;
        Object_is_possibly_null: DiagnosticMessage;
        Object_is_possibly_undefined: DiagnosticMessage;
        Object_is_possibly_null_or_undefined: DiagnosticMessage;
        A_function_returning_never_cannot_have_a_reachable_end_point: DiagnosticMessage;
        Enum_type_0_has_members_with_initializers_that_are_not_literals: DiagnosticMessage;
        Type_0_cannot_be_used_to_index_type_1: DiagnosticMessage;
        Type_0_has_no_matching_index_signature_for_type_1: DiagnosticMessage;
        Type_0_cannot_be_used_as_an_index_type: DiagnosticMessage;
        Cannot_assign_to_0_because_it_is_not_a_variable: DiagnosticMessage;
        Cannot_assign_to_0_because_it_is_a_constant_or_a_read_only_property: DiagnosticMessage;
        The_target_of_an_assignment_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        Index_signature_in_type_0_only_permits_reading: DiagnosticMessage;
        Duplicate_identifier_newTarget_Compiler_uses_variable_declaration_newTarget_to_capture_new_target_meta_property_reference: DiagnosticMessage;
        Expression_resolves_to_variable_declaration_newTarget_that_compiler_uses_to_capture_new_target_meta_property_reference: DiagnosticMessage;
        A_mixin_class_must_have_a_constructor_with_a_single_rest_parameter_of_type_any: DiagnosticMessage;
        Property_0_has_conflicting_declarations_and_is_inaccessible_in_type_1: DiagnosticMessage;
        The_type_returned_by_the_next_method_of_an_async_iterator_must_be_a_promise_for_a_type_with_a_value_property: DiagnosticMessage;
        Type_0_is_not_an_array_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator: DiagnosticMessage;
        Type_0_is_not_an_array_type_or_a_string_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator: DiagnosticMessage;
        Generic_type_instantiation_is_excessively_deep_and_possibly_infinite: DiagnosticMessage;
        Property_0_does_not_exist_on_type_1_Did_you_mean_2: DiagnosticMessage;
        Cannot_find_name_0_Did_you_mean_1: DiagnosticMessage;
        Computed_values_are_not_permitted_in_an_enum_with_string_valued_members: DiagnosticMessage;
        Expected_0_arguments_but_got_1: DiagnosticMessage;
        Expected_at_least_0_arguments_but_got_1: DiagnosticMessage;
        Expected_0_arguments_but_got_a_minimum_of_1: DiagnosticMessage;
        Expected_at_least_0_arguments_but_got_a_minimum_of_1: DiagnosticMessage;
        Expected_0_type_arguments_but_got_1: DiagnosticMessage;
        Type_0_has_no_properties_in_common_with_type_1: DiagnosticMessage;
        Value_of_type_0_has_no_properties_in_common_with_type_1_Did_you_mean_to_call_it: DiagnosticMessage;
        Object_literal_may_only_specify_known_properties_but_0_does_not_exist_in_type_1_Did_you_mean_to_write_2: DiagnosticMessage;
        Base_class_expressions_cannot_reference_class_type_parameters: DiagnosticMessage;
        The_containing_function_or_module_body_is_too_large_for_control_flow_analysis: DiagnosticMessage;
        JSX_element_attributes_type_0_may_not_be_a_union_type: DiagnosticMessage;
        The_return_type_of_a_JSX_element_constructor_must_return_an_object_type: DiagnosticMessage;
        JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist: DiagnosticMessage;
        Property_0_in_type_1_is_not_assignable_to_type_2: DiagnosticMessage;
        JSX_element_type_0_does_not_have_any_construct_or_call_signatures: DiagnosticMessage;
        JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements: DiagnosticMessage;
        Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property: DiagnosticMessage;
        JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property: DiagnosticMessage;
        The_global_type_JSX_0_may_not_have_more_than_one_property: DiagnosticMessage;
        JSX_spread_child_must_be_an_array_type: DiagnosticMessage;
        Cannot_augment_module_0_with_value_exports_because_it_resolves_to_a_non_module_entity: DiagnosticMessage;
        A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums: DiagnosticMessage;
        Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_default_0_declaration_instead: DiagnosticMessage;
        Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1: DiagnosticMessage;
        Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_package_author_to_update_the_package_definition: DiagnosticMessage;
        Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_the_package_definition: DiagnosticMessage;
        JSX_expressions_must_have_one_parent_element: DiagnosticMessage;
        Type_0_provides_no_match_for_the_signature_1: DiagnosticMessage;
        super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_higher: DiagnosticMessage;
        super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions: DiagnosticMessage;
        Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module: DiagnosticMessage;
        Cannot_find_name_0_Did_you_mean_the_static_member_1_0: DiagnosticMessage;
        Cannot_find_name_0_Did_you_mean_the_instance_member_this_0: DiagnosticMessage;
        Invalid_module_name_in_augmentation_module_0_cannot_be_found: DiagnosticMessage;
        Invalid_module_name_in_augmentation_Module_0_resolves_to_an_untyped_module_at_1_which_cannot_be_augmented: DiagnosticMessage;
        Exports_and_export_assignments_are_not_permitted_in_module_augmentations: DiagnosticMessage;
        Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_module: DiagnosticMessage;
        export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always_visible: DiagnosticMessage;
        Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations: DiagnosticMessage;
        Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambient_context: DiagnosticMessage;
        Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity: DiagnosticMessage;
        Cannot_assign_a_0_constructor_type_to_a_1_constructor_type: DiagnosticMessage;
        Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration: DiagnosticMessage;
        Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration: DiagnosticMessage;
        Cannot_extend_a_class_0_Class_constructor_is_marked_as_private: DiagnosticMessage;
        Accessors_must_both_be_abstract_or_non_abstract: DiagnosticMessage;
        A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type: DiagnosticMessage;
        Type_0_is_not_comparable_to_type_1: DiagnosticMessage;
        A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void: DiagnosticMessage;
        A_0_parameter_must_be_the_first_parameter: DiagnosticMessage;
        A_constructor_cannot_have_a_this_parameter: DiagnosticMessage;
        get_and_set_accessor_must_have_the_same_this_type: DiagnosticMessage;
        this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation: DiagnosticMessage;
        The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1: DiagnosticMessage;
        The_this_types_of_each_signature_are_incompatible: DiagnosticMessage;
        _0_refers_to_a_UMD_global_but_the_current_file_is_a_module_Consider_adding_an_import_instead: DiagnosticMessage;
        All_declarations_of_0_must_have_identical_modifiers: DiagnosticMessage;
        Cannot_find_type_definition_file_for_0: DiagnosticMessage;
        Cannot_extend_an_interface_0_Did_you_mean_implements: DiagnosticMessage;
        An_import_path_cannot_end_with_a_0_extension_Consider_importing_1_instead: DiagnosticMessage;
        _0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible: DiagnosticMessage;
        _0_only_refers_to_a_type_but_is_being_used_as_a_value_here: DiagnosticMessage;
        Namespace_0_has_no_exported_member_1: DiagnosticMessage;
        Left_side_of_comma_operator_is_unused_and_has_no_side_effects: DiagnosticMessage;
        The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead: DiagnosticMessage;
        An_async_function_or_method_must_return_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option: DiagnosticMessage;
        Spread_types_may_only_be_created_from_object_types: DiagnosticMessage;
        Static_property_0_conflicts_with_built_in_property_Function_0_of_constructor_function_1: DiagnosticMessage;
        Rest_types_may_only_be_created_from_object_types: DiagnosticMessage;
        The_target_of_an_object_rest_assignment_must_be_a_variable_or_a_property_access: DiagnosticMessage;
        _0_only_refers_to_a_type_but_is_being_used_as_a_namespace_here: DiagnosticMessage;
        The_operand_of_a_delete_operator_must_be_a_property_reference: DiagnosticMessage;
        The_operand_of_a_delete_operator_cannot_be_a_read_only_property: DiagnosticMessage;
        An_async_function_or_method_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declaration_for_the_Promise_constructor_or_include_ES2015_in_your_lib_option: DiagnosticMessage;
        Required_type_parameters_may_not_follow_optional_type_parameters: DiagnosticMessage;
        Generic_type_0_requires_between_1_and_2_type_arguments: DiagnosticMessage;
        Cannot_use_namespace_0_as_a_value: DiagnosticMessage;
        Cannot_use_namespace_0_as_a_type: DiagnosticMessage;
        _0_are_specified_twice_The_attribute_named_0_will_be_overwritten: DiagnosticMessage;
        A_dynamic_import_call_returns_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option: DiagnosticMessage;
        A_dynamic_import_call_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declaration_for_the_Promise_constructor_or_include_ES2015_in_your_lib_option: DiagnosticMessage;
        Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_property_1_in_0_with_0_1: DiagnosticMessage;
        The_expression_of_an_export_assignment_must_be_an_identifier_or_qualified_name_in_an_ambient_context: DiagnosticMessage;
        Abstract_property_0_in_class_1_cannot_be_accessed_in_the_constructor: DiagnosticMessage;
        Type_parameter_0_has_a_circular_default: DiagnosticMessage;
        Import_declaration_0_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Type_parameter_0_of_exported_function_has_or_is_using_private_name_1: DiagnosticMessage;
        Implements_clause_of_exported_class_0_has_or_is_using_private_name_1: DiagnosticMessage;
        extends_clause_of_exported_class_0_has_or_is_using_private_name_1: DiagnosticMessage;
        extends_clause_of_exported_interface_0_has_or_is_using_private_name_1: DiagnosticMessage;
        Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Exported_variable_0_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Exported_variable_0_has_or_is_using_private_name_1: DiagnosticMessage;
        Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Public_static_property_0_of_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Public_property_0_of_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Property_0_of_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: DiagnosticMessage;
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: DiagnosticMessage;
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: DiagnosticMessage;
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: DiagnosticMessage;
        Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0: DiagnosticMessage;
        Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: DiagnosticMessage;
        Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1: DiagnosticMessage;
        Return_type_of_exported_function_has_or_is_using_private_name_0: DiagnosticMessage;
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: DiagnosticMessage;
        Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_exported_function_has_or_is_using_private_name_1: DiagnosticMessage;
        Exported_type_alias_0_has_or_is_using_private_name_1: DiagnosticMessage;
        Default_export_of_the_module_has_or_is_using_private_name_0: DiagnosticMessage;
        Type_parameter_0_of_exported_type_alias_has_or_is_using_private_name_1: DiagnosticMessage;
        Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_library_to_resolve_the_conflict: DiagnosticMessage;
        Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: DiagnosticMessage;
        Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_private_name_1: DiagnosticMessage;
        Property_0_of_exported_class_expression_may_not_be_private_or_protected: DiagnosticMessage;
        The_current_host_does_not_support_the_0_option: DiagnosticMessage;
        Cannot_find_the_common_subdirectory_path_for_the_input_files: DiagnosticMessage;
        File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: DiagnosticMessage;
        File_specification_cannot_contain_multiple_recursive_directory_wildcards_Asterisk_Asterisk_Colon_0: DiagnosticMessage;
        Cannot_read_file_0_Colon_1: DiagnosticMessage;
        Failed_to_parse_file_0_Colon_1: DiagnosticMessage;
        Unknown_compiler_option_0: DiagnosticMessage;
        Compiler_option_0_requires_a_value_of_type_1: DiagnosticMessage;
        Could_not_write_file_0_Colon_1: DiagnosticMessage;
        Option_project_cannot_be_mixed_with_source_files_on_a_command_line: DiagnosticMessage;
        Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES2015_or_higher: DiagnosticMessage;
        Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided: DiagnosticMessage;
        Option_0_cannot_be_specified_without_specifying_option_1: DiagnosticMessage;
        Option_0_cannot_be_specified_with_option_1: DiagnosticMessage;
        A_tsconfig_json_file_is_already_defined_at_Colon_0: DiagnosticMessage;
        Cannot_write_file_0_because_it_would_overwrite_input_file: DiagnosticMessage;
        Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files: DiagnosticMessage;
        Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0: DiagnosticMessage;
        The_specified_path_does_not_exist_Colon_0: DiagnosticMessage;
        Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier: DiagnosticMessage;
        Option_paths_cannot_be_used_without_specifying_baseUrl_option: DiagnosticMessage;
        Pattern_0_can_have_at_most_one_Asterisk_character: DiagnosticMessage;
        Substitution_0_in_pattern_1_in_can_have_at_most_one_Asterisk_character: DiagnosticMessage;
        Substitutions_for_pattern_0_should_be_an_array: DiagnosticMessage;
        Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2: DiagnosticMessage;
        File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: DiagnosticMessage;
        Substitutions_for_pattern_0_shouldn_t_be_an_empty_array: DiagnosticMessage;
        Invalid_value_for_jsxFactory_0_is_not_a_valid_identifier_or_qualified_name: DiagnosticMessage;
        Concatenate_and_emit_output_to_single_file: DiagnosticMessage;
        Generates_corresponding_d_ts_file: DiagnosticMessage;
        Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations: DiagnosticMessage;
        Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations: DiagnosticMessage;
        Watch_input_files: DiagnosticMessage;
        Redirect_output_structure_to_the_directory: DiagnosticMessage;
        Do_not_erase_const_enum_declarations_in_generated_code: DiagnosticMessage;
        Do_not_emit_outputs_if_any_errors_were_reported: DiagnosticMessage;
        Do_not_emit_comments_to_output: DiagnosticMessage;
        Do_not_emit_outputs: DiagnosticMessage;
        Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typechecking: DiagnosticMessage;
        Skip_type_checking_of_declaration_files: DiagnosticMessage;
        Do_not_resolve_the_real_path_of_symlinks: DiagnosticMessage;
        Specify_ECMAScript_target_version_Colon_ES3_default_ES5_ES2015_ES2016_ES2017_or_ESNEXT: DiagnosticMessage;
        Specify_module_code_generation_Colon_none_commonjs_amd_system_umd_es2015_or_ESNext: DiagnosticMessage;
        Print_this_message: DiagnosticMessage;
        Print_the_compiler_s_version: DiagnosticMessage;
        Compile_the_project_given_the_path_to_its_configuration_file_or_to_a_folder_with_a_tsconfig_json: DiagnosticMessage;
        Syntax_Colon_0: DiagnosticMessage;
        options: DiagnosticMessage;
        file: DiagnosticMessage;
        Examples_Colon_0: DiagnosticMessage;
        Options_Colon: DiagnosticMessage;
        Version_0: DiagnosticMessage;
        Insert_command_line_options_and_files_from_a_file: DiagnosticMessage;
        File_change_detected_Starting_incremental_compilation: DiagnosticMessage;
        KIND: DiagnosticMessage;
        FILE: DiagnosticMessage;
        VERSION: DiagnosticMessage;
        LOCATION: DiagnosticMessage;
        DIRECTORY: DiagnosticMessage;
        STRATEGY: DiagnosticMessage;
        FILE_OR_DIRECTORY: DiagnosticMessage;
        Compilation_complete_Watching_for_file_changes: DiagnosticMessage;
        Generates_corresponding_map_file: DiagnosticMessage;
        Compiler_option_0_expects_an_argument: DiagnosticMessage;
        Unterminated_quoted_string_in_response_file_0: DiagnosticMessage;
        Argument_for_0_option_must_be_Colon_1: DiagnosticMessage;
        Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1: DiagnosticMessage;
        Unsupported_locale_0: DiagnosticMessage;
        Unable_to_open_file_0: DiagnosticMessage;
        Corrupted_locale_file_0: DiagnosticMessage;
        Raise_error_on_expressions_and_declarations_with_an_implied_any_type: DiagnosticMessage;
        File_0_not_found: DiagnosticMessage;
        File_0_has_unsupported_extension_The_only_supported_extensions_are_1: DiagnosticMessage;
        Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures: DiagnosticMessage;
        Do_not_emit_declarations_for_code_that_has_an_internal_annotation: DiagnosticMessage;
        Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir: DiagnosticMessage;
        File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files: DiagnosticMessage;
        Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix: DiagnosticMessage;
        NEWLINE: DiagnosticMessage;
        Option_0_can_only_be_specified_in_tsconfig_json_file: DiagnosticMessage;
        Enables_experimental_support_for_ES7_decorators: DiagnosticMessage;
        Enables_experimental_support_for_emitting_type_metadata_for_decorators: DiagnosticMessage;
        Enables_experimental_support_for_ES7_async_functions: DiagnosticMessage;
        Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6: DiagnosticMessage;
        Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file: DiagnosticMessage;
        Successfully_created_a_tsconfig_json_file: DiagnosticMessage;
        Suppress_excess_property_checks_for_object_literals: DiagnosticMessage;
        Stylize_errors_and_messages_using_color_and_context_experimental: DiagnosticMessage;
        Do_not_report_errors_on_unused_labels: DiagnosticMessage;
        Report_error_when_not_all_code_paths_in_function_return_a_value: DiagnosticMessage;
        Report_errors_for_fallthrough_cases_in_switch_statement: DiagnosticMessage;
        Do_not_report_errors_on_unreachable_code: DiagnosticMessage;
        Disallow_inconsistently_cased_references_to_the_same_file: DiagnosticMessage;
        Specify_library_files_to_be_included_in_the_compilation_Colon: DiagnosticMessage;
        Specify_JSX_code_generation_Colon_preserve_react_native_or_react: DiagnosticMessage;
        File_0_has_an_unsupported_extension_so_skipping_it: DiagnosticMessage;
        Only_amd_and_system_modules_are_supported_alongside_0: DiagnosticMessage;
        Base_directory_to_resolve_non_absolute_module_names: DiagnosticMessage;
        Deprecated_Use_jsxFactory_instead_Specify_the_object_invoked_for_createElement_when_targeting_react_JSX_emit: DiagnosticMessage;
        Enable_tracing_of_the_name_resolution_process: DiagnosticMessage;
        Resolving_module_0_from_1: DiagnosticMessage;
        Explicitly_specified_module_resolution_kind_Colon_0: DiagnosticMessage;
        Module_resolution_kind_is_not_specified_using_0: DiagnosticMessage;
        Module_name_0_was_successfully_resolved_to_1: DiagnosticMessage;
        Module_name_0_was_not_resolved: DiagnosticMessage;
        paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0: DiagnosticMessage;
        Module_name_0_matched_pattern_1: DiagnosticMessage;
        Trying_substitution_0_candidate_module_location_Colon_1: DiagnosticMessage;
        Resolving_module_name_0_relative_to_base_url_1_2: DiagnosticMessage;
        Loading_module_as_file_Slash_folder_candidate_module_location_0_target_file_type_1: DiagnosticMessage;
        File_0_does_not_exist: DiagnosticMessage;
        File_0_exist_use_it_as_a_name_resolution_result: DiagnosticMessage;
        Loading_module_0_from_node_modules_folder_target_file_type_1: DiagnosticMessage;
        Found_package_json_at_0: DiagnosticMessage;
        package_json_does_not_have_a_0_field: DiagnosticMessage;
        package_json_has_0_field_1_that_references_2: DiagnosticMessage;
        Allow_javascript_files_to_be_compiled: DiagnosticMessage;
        Option_0_should_have_array_of_strings_as_a_value: DiagnosticMessage;
        Checking_if_0_is_the_longest_matching_prefix_for_1_2: DiagnosticMessage;
        Expected_type_of_0_field_in_package_json_to_be_string_got_1: DiagnosticMessage;
        baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1: DiagnosticMessage;
        rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0: DiagnosticMessage;
        Longest_matching_prefix_for_0_is_1: DiagnosticMessage;
        Loading_0_from_the_root_dir_1_candidate_location_2: DiagnosticMessage;
        Trying_other_entries_in_rootDirs: DiagnosticMessage;
        Module_resolution_using_rootDirs_has_failed: DiagnosticMessage;
        Do_not_emit_use_strict_directives_in_module_output: DiagnosticMessage;
        Enable_strict_null_checks: DiagnosticMessage;
        Unknown_option_excludes_Did_you_mean_exclude: DiagnosticMessage;
        Raise_error_on_this_expressions_with_an_implied_any_type: DiagnosticMessage;
        Resolving_type_reference_directive_0_containing_file_1_root_directory_2: DiagnosticMessage;
        Resolving_using_primary_search_paths: DiagnosticMessage;
        Resolving_from_node_modules_folder: DiagnosticMessage;
        Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2: DiagnosticMessage;
        Type_reference_directive_0_was_not_resolved: DiagnosticMessage;
        Resolving_with_primary_search_path_0: DiagnosticMessage;
        Root_directory_cannot_be_determined_skipping_primary_search_paths: DiagnosticMessage;
        Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set: DiagnosticMessage;
        Type_declaration_files_to_be_included_in_compilation: DiagnosticMessage;
        Looking_up_in_node_modules_folder_initial_location_0: DiagnosticMessage;
        Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_modules_folder: DiagnosticMessage;
        Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1: DiagnosticMessage;
        Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set: DiagnosticMessage;
        Resolving_real_path_for_0_result_1: DiagnosticMessage;
        Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system: DiagnosticMessage;
        File_name_0_has_a_1_extension_stripping_it: DiagnosticMessage;
        _0_is_declared_but_its_value_is_never_read: DiagnosticMessage;
        Report_errors_on_unused_locals: DiagnosticMessage;
        Report_errors_on_unused_parameters: DiagnosticMessage;
        The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files: DiagnosticMessage;
        Cannot_import_type_declaration_files_Consider_importing_0_instead_of_1: DiagnosticMessage;
        Property_0_is_declared_but_its_value_is_never_read: DiagnosticMessage;
        Import_emit_helpers_from_tslib: DiagnosticMessage;
        Auto_discovery_for_typings_is_enabled_in_project_0_Running_extra_resolution_pass_for_module_1_using_cache_location_2: DiagnosticMessage;
        Parse_in_strict_mode_and_emit_use_strict_for_each_source_file: DiagnosticMessage;
        Module_0_was_resolved_to_1_but_jsx_is_not_set: DiagnosticMessage;
        Module_0_was_resolved_as_locally_declared_ambient_module_in_file_1: DiagnosticMessage;
        Module_0_was_resolved_as_ambient_module_declared_in_1_since_this_file_was_not_modified: DiagnosticMessage;
        Specify_the_JSX_factory_function_to_use_when_targeting_react_JSX_emit_e_g_React_createElement_or_h: DiagnosticMessage;
        Resolution_for_module_0_was_found_in_cache: DiagnosticMessage;
        Directory_0_does_not_exist_skipping_all_lookups_in_it: DiagnosticMessage;
        Show_diagnostic_information: DiagnosticMessage;
        Show_verbose_diagnostic_information: DiagnosticMessage;
        Emit_a_single_file_with_source_maps_instead_of_having_a_separate_file: DiagnosticMessage;
        Emit_the_source_alongside_the_sourcemaps_within_a_single_file_requires_inlineSourceMap_or_sourceMap_to_be_set: DiagnosticMessage;
        Transpile_each_file_as_a_separate_module_similar_to_ts_transpileModule: DiagnosticMessage;
        Print_names_of_generated_files_part_of_the_compilation: DiagnosticMessage;
        Print_names_of_files_part_of_the_compilation: DiagnosticMessage;
        The_locale_used_when_displaying_messages_to_the_user_e_g_en_us: DiagnosticMessage;
        Do_not_generate_custom_helper_functions_like_extends_in_compiled_output: DiagnosticMessage;
        Do_not_include_the_default_library_file_lib_d_ts: DiagnosticMessage;
        Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files: DiagnosticMessage;
        Deprecated_Use_skipLibCheck_instead_Skip_type_checking_of_default_library_declaration_files: DiagnosticMessage;
        List_of_folders_to_include_type_definitions_from: DiagnosticMessage;
        Disable_size_limitations_on_JavaScript_projects: DiagnosticMessage;
        The_character_set_of_the_input_files: DiagnosticMessage;
        Emit_a_UTF_8_Byte_Order_Mark_BOM_in_the_beginning_of_output_files: DiagnosticMessage;
        Do_not_truncate_error_messages: DiagnosticMessage;
        Output_directory_for_generated_declaration_files: DiagnosticMessage;
        A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl: DiagnosticMessage;
        List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime: DiagnosticMessage;
        Show_all_compiler_options: DiagnosticMessage;
        Deprecated_Use_outFile_instead_Concatenate_and_emit_output_to_single_file: DiagnosticMessage;
        Command_line_Options: DiagnosticMessage;
        Basic_Options: DiagnosticMessage;
        Strict_Type_Checking_Options: DiagnosticMessage;
        Module_Resolution_Options: DiagnosticMessage;
        Source_Map_Options: DiagnosticMessage;
        Additional_Checks: DiagnosticMessage;
        Experimental_Options: DiagnosticMessage;
        Advanced_Options: DiagnosticMessage;
        Provide_full_support_for_iterables_in_for_of_spread_and_destructuring_when_targeting_ES5_or_ES3: DiagnosticMessage;
        Enable_all_strict_type_checking_options: DiagnosticMessage;
        List_of_language_service_plugins: DiagnosticMessage;
        Scoped_package_detected_looking_in_0: DiagnosticMessage;
        Reusing_resolution_of_module_0_to_file_1_from_old_program: DiagnosticMessage;
        Reusing_module_resolutions_originating_in_0_since_resolutions_are_unchanged_from_old_program: DiagnosticMessage;
        Disable_strict_checking_of_generic_signatures_in_function_types: DiagnosticMessage;
        Enable_strict_checking_of_function_types: DiagnosticMessage;
        Variable_0_implicitly_has_an_1_type: DiagnosticMessage;
        Parameter_0_implicitly_has_an_1_type: DiagnosticMessage;
        Member_0_implicitly_has_an_1_type: DiagnosticMessage;
        new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type: DiagnosticMessage;
        _0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type: DiagnosticMessage;
        Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type: DiagnosticMessage;
        Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: DiagnosticMessage;
        Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number: DiagnosticMessage;
        Could_not_find_a_declaration_file_for_module_0_1_implicitly_has_an_any_type: DiagnosticMessage;
        Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature: DiagnosticMessage;
        Object_literal_s_property_0_implicitly_has_an_1_type: DiagnosticMessage;
        Rest_parameter_0_implicitly_has_an_any_type: DiagnosticMessage;
        Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: DiagnosticMessage;
        _0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer: DiagnosticMessage;
        _0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: DiagnosticMessage;
        Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: DiagnosticMessage;
        Generator_implicitly_has_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_type: DiagnosticMessage;
        JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists: DiagnosticMessage;
        Unreachable_code_detected: DiagnosticMessage;
        Unused_label: DiagnosticMessage;
        Fallthrough_case_in_switch: DiagnosticMessage;
        Not_all_code_paths_return_a_value: DiagnosticMessage;
        Binding_element_0_implicitly_has_an_1_type: DiagnosticMessage;
        Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_parameter_type_annotation: DiagnosticMessage;
        Property_0_implicitly_has_type_any_because_its_get_accessor_lacks_a_return_type_annotation: DiagnosticMessage;
        Variable_0_implicitly_has_type_1_in_some_locations_where_its_type_cannot_be_determined: DiagnosticMessage;
        Try_npm_install_types_Slash_0_if_it_exists_or_add_a_new_declaration_d_ts_file_containing_declare_module_0: DiagnosticMessage;
        Dynamic_import_s_specifier_must_be_of_type_string_but_here_has_type_0: DiagnosticMessage;
        You_cannot_rename_this_element: DiagnosticMessage;
        You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library: DiagnosticMessage;
        import_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        export_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        type_parameter_declarations_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        implements_clauses_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        interface_declarations_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        module_declarations_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        type_aliases_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        _0_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        types_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        type_arguments_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        parameter_modifiers_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        non_null_assertions_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        enum_declarations_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        type_assertion_expressions_can_only_be_used_in_a_ts_file: DiagnosticMessage;
        Octal_literal_types_must_use_ES2015_syntax_Use_the_syntax_0: DiagnosticMessage;
        Octal_literals_are_not_allowed_in_enums_members_initializer_Use_the_syntax_0: DiagnosticMessage;
        Report_errors_in_js_files: DiagnosticMessage;
        JSDoc_types_can_only_be_used_inside_documentation_comments: DiagnosticMessage;
        JSDoc_typedef_tag_should_either_have_a_type_annotation_or_be_followed_by_property_or_member_tags: DiagnosticMessage;
        JSDoc_0_is_not_attached_to_a_class: DiagnosticMessage;
        JSDoc_0_1_does_not_match_the_extends_2_clause: DiagnosticMessage;
        JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name: DiagnosticMessage;
        Class_declarations_cannot_have_more_than_one_augments_or_extends_tag: DiagnosticMessage;
        Expected_0_type_arguments_provide_these_with_an_extends_tag: DiagnosticMessage;
        Expected_0_1_type_arguments_provide_these_with_an_extends_tag: DiagnosticMessage;
        Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_class_extends_clause: DiagnosticMessage;
        class_expressions_are_not_currently_supported: DiagnosticMessage;
        Language_service_is_disabled: DiagnosticMessage;
        JSX_attributes_must_only_be_assigned_a_non_empty_expression: DiagnosticMessage;
        JSX_elements_cannot_have_multiple_attributes_with_the_same_name: DiagnosticMessage;
        Expected_corresponding_JSX_closing_tag_for_0: DiagnosticMessage;
        JSX_attribute_expected: DiagnosticMessage;
        Cannot_use_JSX_unless_the_jsx_flag_is_provided: DiagnosticMessage;
        A_constructor_cannot_contain_a_super_call_when_its_class_extends_null: DiagnosticMessage;
        An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: DiagnosticMessage;
        A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: DiagnosticMessage;
        JSX_element_0_has_no_corresponding_closing_tag: DiagnosticMessage;
        super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class: DiagnosticMessage;
        Unknown_type_acquisition_option_0: DiagnosticMessage;
        super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class: DiagnosticMessage;
        _0_is_not_a_valid_meta_property_for_keyword_1_Did_you_mean_2: DiagnosticMessage;
        Meta_property_0_is_only_allowed_in_the_body_of_a_function_declaration_function_expression_or_constructor: DiagnosticMessage;
        JSX_fragment_has_no_corresponding_closing_tag: DiagnosticMessage;
        Expected_corresponding_closing_tag_for_JSX_fragment: DiagnosticMessage;
        JSX_fragment_is_not_supported_when_using_jsxFactory: DiagnosticMessage;
        Circularity_detected_while_resolving_configuration_Colon_0: DiagnosticMessage;
        A_path_in_an_extends_option_must_be_relative_or_rooted_but_0_is_not: DiagnosticMessage;
        The_files_list_in_config_file_0_is_empty: DiagnosticMessage;
        No_inputs_were_found_in_config_file_0_Specified_include_paths_were_1_and_exclude_paths_were_2: DiagnosticMessage;
        Add_missing_super_call: DiagnosticMessage;
        Make_super_call_the_first_statement_in_the_constructor: DiagnosticMessage;
        Change_extends_to_implements: DiagnosticMessage;
        Remove_declaration_for_Colon_0: DiagnosticMessage;
        Implement_interface_0: DiagnosticMessage;
        Implement_inherited_abstract_class: DiagnosticMessage;
        Add_this_to_unresolved_variable: DiagnosticMessage;
        Adding_a_tsconfig_json_file_will_help_organize_projects_that_contain_both_TypeScript_and_JavaScript_files_Learn_more_at_https_Colon_Slash_Slashaka_ms_Slashtsconfig: DiagnosticMessage;
        Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated: DiagnosticMessage;
        Import_0_from_1: DiagnosticMessage;
        Change_0_to_1: DiagnosticMessage;
        Add_0_to_existing_import_declaration_from_1: DiagnosticMessage;
        Declare_property_0: DiagnosticMessage;
        Add_index_signature_for_property_0: DiagnosticMessage;
        Disable_checking_for_this_file: DiagnosticMessage;
        Ignore_this_error_message: DiagnosticMessage;
        Initialize_property_0_in_the_constructor: DiagnosticMessage;
        Initialize_static_property_0: DiagnosticMessage;
        Change_spelling_to_0: DiagnosticMessage;
        Declare_method_0: DiagnosticMessage;
        Declare_static_method_0: DiagnosticMessage;
        Prefix_0_with_an_underscore: DiagnosticMessage;
        Rewrite_as_the_indexed_access_type_0: DiagnosticMessage;
        Declare_static_property_0: DiagnosticMessage;
        Call_decorator_expression: DiagnosticMessage;
        Convert_function_to_an_ES2015_class: DiagnosticMessage;
        Convert_function_0_to_class: DiagnosticMessage;
        Extract_symbol: DiagnosticMessage;
        Extract_to_0_in_1: DiagnosticMessage;
        Extract_function: DiagnosticMessage;
        Extract_constant: DiagnosticMessage;
        Extract_to_0_in_enclosing_scope: DiagnosticMessage;
        Extract_to_0_in_1_scope: DiagnosticMessage;
        Annotate_with_type_from_JSDoc: DiagnosticMessage;
        Annotate_with_types_from_JSDoc: DiagnosticMessage;
        Infer_type_of_0_from_usage: DiagnosticMessage;
        Infer_parameter_types_from_usage: DiagnosticMessage;
        Convert_to_default_import: DiagnosticMessage;
        Install_0: DiagnosticMessage;
    };
}
declare namespace ts {
    type ErrorCallback = (message: DiagnosticMessage, length: number) => void;
    function tokenIsIdentifierOrKeyword(token: SyntaxKind): boolean;
    function tokenIsIdentifierOrKeywordOrGreaterThan(token: SyntaxKind): boolean;
    interface Scanner {
        getStartPos(): number;
        getToken(): SyntaxKind;
        getTextPos(): number;
        getTokenPos(): number;
        getTokenText(): string;
        getTokenValue(): string;
        hasExtendedUnicodeEscape(): boolean;
        hasPrecedingLineBreak(): boolean;
        isIdentifier(): boolean;
        isReservedWord(): boolean;
        isUnterminated(): boolean;
        getNumericLiteralFlags(): NumericLiteralFlags;
        reScanGreaterToken(): SyntaxKind;
        reScanSlashToken(): SyntaxKind;
        reScanTemplateToken(): SyntaxKind;
        scanJsxIdentifier(): SyntaxKind;
        scanJsxAttributeValue(): SyntaxKind;
        reScanJsxToken(): SyntaxKind;
        scanJsxToken(): SyntaxKind;
        scanJSDocToken(): SyntaxKind;
        scan(): SyntaxKind;
        getText(): string;
        setText(text: string, start?: number, length?: number): void;
        setOnError(onError: ErrorCallback): void;
        setScriptTarget(scriptTarget: ScriptTarget): void;
        setLanguageVariant(variant: LanguageVariant): void;
        setTextPos(textPos: number): void;
        lookAhead<T>(callback: () => T): T;
        scanRange<T>(start: number, length: number, callback: () => T): T;
        tryScan<T>(callback: () => T): T;
    }
    function isUnicodeIdentifierStart(code: number, languageVersion: ScriptTarget): boolean;
    function tokenToString(t: SyntaxKind): string | undefined;
    function stringToToken(s: string): SyntaxKind;
    function computeLineStarts(text: string): number[];
    function getPositionOfLineAndCharacter(sourceFile: SourceFile, line: number, character: number): number;
    function computePositionOfLineAndCharacter(lineStarts: ReadonlyArray<number>, line: number, character: number, debugText?: string): number;
    function getLineStarts(sourceFile: SourceFileLike): ReadonlyArray<number>;
    /**
     * We assume the first line starts at position 0 and 'position' is non-negative.
     */
    function computeLineAndCharacterOfPosition(lineStarts: ReadonlyArray<number>, position: number): LineAndCharacter;
    function getLineAndCharacterOfPosition(sourceFile: SourceFileLike, position: number): LineAndCharacter;
    function isWhiteSpaceLike(ch: number): boolean;
    /** Does not include line breaks. For that, see isWhiteSpaceLike. */
    function isWhiteSpaceSingleLine(ch: number): boolean;
    function isLineBreak(ch: number): boolean;
    function isOctalDigit(ch: number): boolean;
    function couldStartTrivia(text: string, pos: number): boolean;
    function skipTrivia(text: string, pos: number, stopAfterLineBreak?: boolean, stopAtComments?: boolean): number;
    function forEachLeadingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T) => U, state?: T): U | undefined;
    function forEachTrailingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T) => U, state?: T): U | undefined;
    function reduceEachLeadingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T, memo: U) => U, state: T, initial: U): U;
    function reduceEachTrailingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: CommentKind, hasTrailingNewLine: boolean, state: T, memo: U) => U, state: T, initial: U): U;
    function getLeadingCommentRanges(text: string, pos: number): CommentRange[] | undefined;
    function getTrailingCommentRanges(text: string, pos: number): CommentRange[] | undefined;
    /** Optionally, get the shebang */
    function getShebang(text: string): string | undefined;
    function isIdentifierStart(ch: number, languageVersion: ScriptTarget): boolean;
    function isIdentifierPart(ch: number, languageVersion: ScriptTarget): boolean;
    function isIdentifierText(name: string, languageVersion: ScriptTarget): boolean;
    function createScanner(languageVersion: ScriptTarget, skipTrivia: boolean, languageVariant?: LanguageVariant, text?: string, onError?: ErrorCallback, start?: number, length?: number): Scanner;
}
declare namespace ts {
    function createNode(kind: SyntaxKind, pos?: number, end?: number): Node;
    /**
     * Invokes a callback for each child of the given node. The 'cbNode' callback is invoked for all child nodes
     * stored in properties. If a 'cbNodes' callback is specified, it is invoked for embedded arrays; otherwise,
     * embedded arrays are flattened and the 'cbNode' callback is invoked for each element. If a callback returns
     * a truthy value, iteration stops and that value is returned. Otherwise, undefined is returned.
     *
     * @param node a given node to visit its children
     * @param cbNode a callback to be invoked for all child nodes
     * @param cbNodes a callback to be invoked for embedded array
     *
     * @remarks `forEachChild` must visit the children of a node in the order
     * that they appear in the source code. The language service depends on this property to locate nodes by position.
     */
    function forEachChild<T>(node: Node, cbNode: (node: Node) => T | undefined, cbNodes?: (nodes: NodeArray<Node>) => T | undefined): T | undefined;
    function createSourceFile(fileName: string, sourceText: string, languageVersion: ScriptTarget, setParentNodes?: boolean, scriptKind?: ScriptKind): SourceFile;
    function parseIsolatedEntityName(text: string, languageVersion: ScriptTarget): EntityName;
    /**
     * Parse json text into SyntaxTree and return node and parse errors if any
     * @param fileName
     * @param sourceText
     */
    function parseJsonText(fileName: string, sourceText: string): JsonSourceFile;
    function isExternalModule(file: SourceFile): boolean;
    function updateSourceFile(sourceFile: SourceFile, newText: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean): SourceFile;
    function parseIsolatedJSDocComment(content: string, start?: number, length?: number): {
        jsDoc: JSDoc;
        diagnostics: Diagnostic[];
    };
    function parseJSDocTypeExpressionForTests(content: string, start?: number, length?: number): {
        jsDocTypeExpression: JSDocTypeExpression;
        diagnostics: Diagnostic[];
    };
}
declare namespace ts {
    enum ModuleInstanceState {
        NonInstantiated = 0,
        Instantiated = 1,
        ConstEnumOnly = 2,
    }
    function getModuleInstanceState(node: Node): ModuleInstanceState;
    function bindSourceFile(file: SourceFile, options: CompilerOptions): void;
    /**
     * Computes the transform flags for a node, given the transform flags of its subtree
     *
     * @param node The node to analyze
     * @param subtreeFlags Transform flags computed for this node's subtree
     */
    function computeTransformFlagsForNode(node: Node, subtreeFlags: TransformFlags): TransformFlags;
    /**
     * Gets the transform flags to exclude when unioning the transform flags of a subtree.
     *
     * NOTE: This needs to be kept up-to-date with the exclusions used in `computeTransformFlagsForNode`.
     *       For performance reasons, `computeTransformFlagsForNode` uses local constant values rather
     *       than calling this function.
     */
    function getTransformFlagsSubtreeExclusions(kind: SyntaxKind): TransformFlags;
}
declare namespace ts {
    function trace(host: ModuleResolutionHost, message: DiagnosticMessage, ...args: any[]): void;
    function isTraceEnabled(compilerOptions: CompilerOptions, host: ModuleResolutionHost): boolean;
    /** Array that is only intended to be pushed to, never read. */
    interface Push<T> {
        push(value: T): void;
    }
    interface GetEffectiveTypeRootsHost {
        directoryExists?(directoryName: string): boolean;
        getCurrentDirectory?(): string;
    }
    function getEffectiveTypeRoots(options: CompilerOptions, host: GetEffectiveTypeRootsHost): string[] | undefined;
    /**
     * @param {string | undefined} containingFile - file that contains type reference directive, can be undefined if containing file is unknown.
     * This is possible in case if resolution is performed for directives specified via 'types' parameter. In this case initial path for secondary lookups
     * is assumed to be the same as root directory of the project.
     */
    function resolveTypeReferenceDirective(typeReferenceDirectiveName: string, containingFile: string | undefined, options: CompilerOptions, host: ModuleResolutionHost): ResolvedTypeReferenceDirectiveWithFailedLookupLocations;
    /**
     * Given a set of options, returns the set of type directive names
     *   that should be included for this program automatically.
     * This list could either come from the config file,
     *   or from enumerating the types root + initial secondary types lookup location.
     * More type directives might appear in the program later as a result of loading actual source files;
     *   this list is only the set of defaults that are implicitly included.
     */
    function getAutomaticTypeDirectiveNames(options: CompilerOptions, host: ModuleResolutionHost): string[];
    /**
     * Cached module resolutions per containing directory.
     * This assumes that any module id will have the same resolution for sibling files located in the same folder.
     */
    interface ModuleResolutionCache extends NonRelativeModuleNameResolutionCache {
        getOrCreateCacheForDirectory(directoryName: string): Map<ResolvedModuleWithFailedLookupLocations>;
    }
    /**
     * Stored map from non-relative module name to a table: directory -> result of module lookup in this directory
     * We support only non-relative module names because resolution of relative module names is usually more deterministic and thus less expensive.
     */
    interface NonRelativeModuleNameResolutionCache {
        getOrCreateCacheForModuleName(nonRelativeModuleName: string): PerModuleNameCache;
    }
    interface PerModuleNameCache {
        get(directory: string): ResolvedModuleWithFailedLookupLocations;
        set(directory: string, result: ResolvedModuleWithFailedLookupLocations): void;
    }
    function createModuleResolutionCache(currentDirectory: string, getCanonicalFileName: (s: string) => string): ModuleResolutionCache;
    function resolveModuleName(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: ModuleResolutionCache): ResolvedModuleWithFailedLookupLocations;
    function nodeModuleNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: ModuleResolutionCache): ResolvedModuleWithFailedLookupLocations;
    /**
     * Expose resolution logic to allow us to use Node module resolution logic from arbitrary locations.
     * No way to do this with `require()`: https://github.com/nodejs/node/issues/5963
     * Throws an error if the module can't be resolved.
     */
    function resolveJavaScriptModule(moduleName: string, initialDir: string, host: ModuleResolutionHost): string;
    function directoryProbablyExists(directoryName: string, host: {
        directoryExists?: (directoryName: string) => boolean;
    }): boolean;
    function getPackageName(moduleName: string): {
        packageName: string;
        rest: string;
    };
    function getTypesPackageName(packageName: string): string;
    function getPackageNameFromAtTypesDirectory(mangledName: string): string;
    function classicNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, cache?: NonRelativeModuleNameResolutionCache): ResolvedModuleWithFailedLookupLocations;
    /**
     * LSHost may load a module from a global cache of typings.
     * This is the minumum code needed to expose that functionality; the rest is in LSHost.
     */
    function loadModuleFromGlobalCache(moduleName: string, projectName: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, globalCache: string): ResolvedModuleWithFailedLookupLocations;
}
/** @internal */
declare namespace ts {
    function createGetSymbolWalker(getRestTypeOfSignature: (sig: Signature) => Type, getReturnTypeOfSignature: (sig: Signature) => Type, getBaseTypes: (type: Type) => Type[], resolveStructuredTypeMembers: (type: ObjectType) => ResolvedType, getTypeOfSymbol: (sym: Symbol) => Type, getResolvedSymbol: (node: Node) => Symbol, getIndexTypeOfStructuredType: (type: Type, kind: IndexKind) => Type, getConstraintFromTypeParameter: (typeParameter: TypeParameter) => Type, getFirstIdentifier: (node: EntityNameOrEntityNameExpression) => Identifier): (accept?: (symbol: Symbol) => boolean) => SymbolWalker;
}
declare namespace ts {
    function getNodeId(node: Node): number;
    function getSymbolId(symbol: Symbol): number;
    function isInstantiatedModule(node: ModuleDeclaration, preserveConstEnums: boolean): boolean;
    function createTypeChecker(host: TypeCheckerHost, produceDiagnostics: boolean): TypeChecker;
}
declare namespace ts {
    function updateNode<T extends Node>(updated: T, original: T): T;
    function createNodeArray<T extends Node>(elements?: T[], hasTrailingComma?: boolean): MutableNodeArray<T>;
    function createNodeArray<T extends Node>(elements?: ReadonlyArray<T>, hasTrailingComma?: boolean): NodeArray<T>;
    /**
     * Creates a shallow, memberwise clone of a node with no source map location.
     */
    function getSynthesizedClone<T extends Node>(node: T | undefined): T | undefined;
    function createLiteral(value: string): StringLiteral;
    function createLiteral(value: number): NumericLiteral;
    function createLiteral(value: boolean): BooleanLiteral;
    /** Create a string literal whose source text is read from a source node during emit. */
    function createLiteral(sourceNode: StringLiteral | NumericLiteral | Identifier): StringLiteral;
    function createLiteral(value: string | number | boolean): PrimaryExpression;
    function createNumericLiteral(value: string): NumericLiteral;
    function createIdentifier(text: string): Identifier;
    function createIdentifier(text: string, typeArguments: ReadonlyArray<TypeNode>): Identifier;
    function updateIdentifier(node: Identifier, typeArguments: NodeArray<TypeNode> | undefined): Identifier;
    /** Create a unique temporary variable. */
    function createTempVariable(recordTempVariable: ((node: Identifier) => void) | undefined): Identifier;
    /** Create a unique temporary variable for use in a loop. */
    function createLoopVariable(): Identifier;
    /** Create a unique name based on the supplied text. */
    function createUniqueName(text: string): Identifier;
    /** Create a unique name generated for a node. */
    function getGeneratedNameForNode(node: Node): Identifier;
    function createToken<TKind extends SyntaxKind>(token: TKind): Token<TKind>;
    function createSuper(): SuperExpression;
    function createThis(): ThisExpression & Token<SyntaxKind.ThisKeyword>;
    function createNull(): NullLiteral & Token<SyntaxKind.NullKeyword>;
    function createTrue(): BooleanLiteral & Token<SyntaxKind.TrueKeyword>;
    function createFalse(): BooleanLiteral & Token<SyntaxKind.FalseKeyword>;
    function createQualifiedName(left: EntityName, right: string | Identifier): QualifiedName;
    function updateQualifiedName(node: QualifiedName, left: EntityName, right: Identifier): QualifiedName;
    function createComputedPropertyName(expression: Expression): ComputedPropertyName;
    function updateComputedPropertyName(node: ComputedPropertyName, expression: Expression): ComputedPropertyName;
    function createTypeParameterDeclaration(name: string | Identifier, constraint?: TypeNode, defaultType?: TypeNode): TypeParameterDeclaration;
    function updateTypeParameterDeclaration(node: TypeParameterDeclaration, name: Identifier, constraint: TypeNode | undefined, defaultType: TypeNode | undefined): TypeParameterDeclaration;
    function createParameter(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, dotDotDotToken: DotDotDotToken | undefined, name: string | BindingName, questionToken?: QuestionToken, type?: TypeNode, initializer?: Expression): ParameterDeclaration;
    function updateParameter(node: ParameterDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, dotDotDotToken: DotDotDotToken | undefined, name: string | BindingName, questionToken: QuestionToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): ParameterDeclaration;
    function createDecorator(expression: Expression): Decorator;
    function updateDecorator(node: Decorator, expression: Expression): Decorator;
    function createPropertySignature(modifiers: ReadonlyArray<Modifier> | undefined, name: PropertyName | string, questionToken: QuestionToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertySignature;
    function updatePropertySignature(node: PropertySignature, modifiers: ReadonlyArray<Modifier> | undefined, name: PropertyName, questionToken: QuestionToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertySignature;
    function createProperty(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: string | PropertyName, questionToken: QuestionToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertyDeclaration;
    function updateProperty(node: PropertyDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: string | PropertyName, questionToken: QuestionToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertyDeclaration;
    function createMethodSignature(typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, name: string | PropertyName, questionToken: QuestionToken | undefined): MethodSignature;
    function updateMethodSignature(node: MethodSignature, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined, name: PropertyName, questionToken: QuestionToken | undefined): MethodSignature;
    function createMethod(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, asteriskToken: AsteriskToken | undefined, name: string | PropertyName, questionToken: QuestionToken | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, body: Block | undefined): MethodDeclaration;
    function updateMethod(node: MethodDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, asteriskToken: AsteriskToken | undefined, name: PropertyName, questionToken: QuestionToken | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, body: Block | undefined): MethodDeclaration;
    function createConstructor(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, body: Block | undefined): ConstructorDeclaration;
    function updateConstructor(node: ConstructorDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, body: Block | undefined): ConstructorDeclaration;
    function createGetAccessor(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: string | PropertyName, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, body: Block | undefined): GetAccessorDeclaration;
    function updateGetAccessor(node: GetAccessorDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: PropertyName, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, body: Block | undefined): GetAccessorDeclaration;
    function createSetAccessor(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: string | PropertyName, parameters: ReadonlyArray<ParameterDeclaration>, body: Block | undefined): SetAccessorDeclaration;
    function updateSetAccessor(node: SetAccessorDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: PropertyName, parameters: ReadonlyArray<ParameterDeclaration>, body: Block | undefined): SetAccessorDeclaration;
    function createCallSignature(typeParameters: TypeParameterDeclaration[] | undefined, parameters: ParameterDeclaration[], type: TypeNode | undefined): CallSignatureDeclaration;
    function updateCallSignature(node: CallSignatureDeclaration, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): CallSignatureDeclaration;
    function createConstructSignature(typeParameters: TypeParameterDeclaration[] | undefined, parameters: ParameterDeclaration[], type: TypeNode | undefined): ConstructSignatureDeclaration;
    function updateConstructSignature(node: ConstructSignatureDeclaration, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): ConstructSignatureDeclaration;
    function createIndexSignature(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode): IndexSignatureDeclaration;
    function updateIndexSignature(node: IndexSignatureDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode): IndexSignatureDeclaration;
    function createSignatureDeclaration(kind: SyntaxKind, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined): SignatureDeclaration;
    function createKeywordTypeNode(kind: KeywordTypeNode["kind"]): KeywordTypeNode;
    function createTypePredicateNode(parameterName: Identifier | ThisTypeNode | string, type: TypeNode): TypePredicateNode;
    function updateTypePredicateNode(node: TypePredicateNode, parameterName: Identifier | ThisTypeNode, type: TypeNode): TypePredicateNode;
    function createTypeReferenceNode(typeName: string | EntityName, typeArguments: ReadonlyArray<TypeNode> | undefined): TypeReferenceNode;
    function updateTypeReferenceNode(node: TypeReferenceNode, typeName: EntityName, typeArguments: NodeArray<TypeNode> | undefined): TypeReferenceNode;
    function createFunctionTypeNode(typeParameters: TypeParameterDeclaration[] | undefined, parameters: ParameterDeclaration[], type: TypeNode | undefined): FunctionTypeNode;
    function updateFunctionTypeNode(node: FunctionTypeNode, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): FunctionTypeNode;
    function createConstructorTypeNode(typeParameters: TypeParameterDeclaration[] | undefined, parameters: ParameterDeclaration[], type: TypeNode | undefined): ConstructorTypeNode;
    function updateConstructorTypeNode(node: ConstructorTypeNode, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): ConstructorTypeNode;
    function createTypeQueryNode(exprName: EntityName): TypeQueryNode;
    function updateTypeQueryNode(node: TypeQueryNode, exprName: EntityName): TypeQueryNode;
    function createTypeLiteralNode(members: ReadonlyArray<TypeElement>): TypeLiteralNode;
    function updateTypeLiteralNode(node: TypeLiteralNode, members: NodeArray<TypeElement>): TypeLiteralNode;
    function createArrayTypeNode(elementType: TypeNode): ArrayTypeNode;
    function updateArrayTypeNode(node: ArrayTypeNode, elementType: TypeNode): ArrayTypeNode;
    function createTupleTypeNode(elementTypes: ReadonlyArray<TypeNode>): TupleTypeNode;
    function updateTypleTypeNode(node: TupleTypeNode, elementTypes: ReadonlyArray<TypeNode>): TupleTypeNode;
    function createUnionTypeNode(types: TypeNode[]): UnionTypeNode;
    function updateUnionTypeNode(node: UnionTypeNode, types: NodeArray<TypeNode>): UnionTypeNode;
    function createIntersectionTypeNode(types: TypeNode[]): IntersectionTypeNode;
    function updateIntersectionTypeNode(node: IntersectionTypeNode, types: NodeArray<TypeNode>): IntersectionTypeNode;
    function createUnionOrIntersectionTypeNode(kind: SyntaxKind.UnionType | SyntaxKind.IntersectionType, types: ReadonlyArray<TypeNode>): UnionOrIntersectionTypeNode;
    function createParenthesizedType(type: TypeNode): ParenthesizedTypeNode;
    function updateParenthesizedType(node: ParenthesizedTypeNode, type: TypeNode): ParenthesizedTypeNode;
    function createThisTypeNode(): ThisTypeNode;
    function createTypeOperatorNode(type: TypeNode): TypeOperatorNode;
    function updateTypeOperatorNode(node: TypeOperatorNode, type: TypeNode): TypeOperatorNode;
    function createIndexedAccessTypeNode(objectType: TypeNode, indexType: TypeNode): IndexedAccessTypeNode;
    function updateIndexedAccessTypeNode(node: IndexedAccessTypeNode, objectType: TypeNode, indexType: TypeNode): IndexedAccessTypeNode;
    function createMappedTypeNode(readonlyToken: ReadonlyToken | undefined, typeParameter: TypeParameterDeclaration, questionToken: QuestionToken | undefined, type: TypeNode | undefined): MappedTypeNode;
    function updateMappedTypeNode(node: MappedTypeNode, readonlyToken: ReadonlyToken | undefined, typeParameter: TypeParameterDeclaration, questionToken: QuestionToken | undefined, type: TypeNode | undefined): MappedTypeNode;
    function createLiteralTypeNode(literal: LiteralTypeNode["literal"]): LiteralTypeNode;
    function updateLiteralTypeNode(node: LiteralTypeNode, literal: LiteralTypeNode["literal"]): LiteralTypeNode;
    function createObjectBindingPattern(elements: ReadonlyArray<BindingElement>): ObjectBindingPattern;
    function updateObjectBindingPattern(node: ObjectBindingPattern, elements: ReadonlyArray<BindingElement>): ObjectBindingPattern;
    function createArrayBindingPattern(elements: ReadonlyArray<ArrayBindingElement>): ArrayBindingPattern;
    function updateArrayBindingPattern(node: ArrayBindingPattern, elements: ReadonlyArray<ArrayBindingElement>): ArrayBindingPattern;
    function createBindingElement(dotDotDotToken: DotDotDotToken | undefined, propertyName: string | PropertyName | undefined, name: string | BindingName, initializer?: Expression): BindingElement;
    function updateBindingElement(node: BindingElement, dotDotDotToken: DotDotDotToken | undefined, propertyName: PropertyName | undefined, name: BindingName, initializer: Expression | undefined): BindingElement;
    function createArrayLiteral(elements?: ReadonlyArray<Expression>, multiLine?: boolean): ArrayLiteralExpression;
    function updateArrayLiteral(node: ArrayLiteralExpression, elements: ReadonlyArray<Expression>): ArrayLiteralExpression;
    function createObjectLiteral(properties?: ReadonlyArray<ObjectLiteralElementLike>, multiLine?: boolean): ObjectLiteralExpression;
    function updateObjectLiteral(node: ObjectLiteralExpression, properties: ReadonlyArray<ObjectLiteralElementLike>): ObjectLiteralExpression;
    function createPropertyAccess(expression: Expression, name: string | Identifier): PropertyAccessExpression;
    function updatePropertyAccess(node: PropertyAccessExpression, expression: Expression, name: Identifier): PropertyAccessExpression;
    function createElementAccess(expression: Expression, index: number | Expression): ElementAccessExpression;
    function updateElementAccess(node: ElementAccessExpression, expression: Expression, argumentExpression: Expression): ElementAccessExpression;
    function createCall(expression: Expression, typeArguments: ReadonlyArray<TypeNode> | undefined, argumentsArray: ReadonlyArray<Expression>): CallExpression;
    function updateCall(node: CallExpression, expression: Expression, typeArguments: ReadonlyArray<TypeNode> | undefined, argumentsArray: ReadonlyArray<Expression>): CallExpression;
    function createNew(expression: Expression, typeArguments: ReadonlyArray<TypeNode> | undefined, argumentsArray: ReadonlyArray<Expression> | undefined): NewExpression;
    function updateNew(node: NewExpression, expression: Expression, typeArguments: ReadonlyArray<TypeNode> | undefined, argumentsArray: ReadonlyArray<Expression> | undefined): NewExpression;
    function createTaggedTemplate(tag: Expression, template: TemplateLiteral): TaggedTemplateExpression;
    function updateTaggedTemplate(node: TaggedTemplateExpression, tag: Expression, template: TemplateLiteral): TaggedTemplateExpression;
    function createTypeAssertion(type: TypeNode, expression: Expression): TypeAssertion;
    function updateTypeAssertion(node: TypeAssertion, type: TypeNode, expression: Expression): TypeAssertion;
    function createParen(expression: Expression): ParenthesizedExpression;
    function updateParen(node: ParenthesizedExpression, expression: Expression): ParenthesizedExpression;
    function createFunctionExpression(modifiers: ReadonlyArray<Modifier> | undefined, asteriskToken: AsteriskToken | undefined, name: string | Identifier | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, body: Block): FunctionExpression;
    function updateFunctionExpression(node: FunctionExpression, modifiers: ReadonlyArray<Modifier> | undefined, asteriskToken: AsteriskToken | undefined, name: Identifier | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, body: Block): FunctionExpression;
    function createArrowFunction(modifiers: ReadonlyArray<Modifier> | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, equalsGreaterThanToken: EqualsGreaterThanToken | undefined, body: ConciseBody): ArrowFunction;
    function updateArrowFunction(node: ArrowFunction, modifiers: ReadonlyArray<Modifier> | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, body: ConciseBody): ArrowFunction;
    function updateArrowFunction(node: ArrowFunction, modifiers: ReadonlyArray<Modifier> | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, equalsGreaterThanToken: Token<SyntaxKind.EqualsGreaterThanToken>, body: ConciseBody): ArrowFunction;
    function createDelete(expression: Expression): DeleteExpression;
    function updateDelete(node: DeleteExpression, expression: Expression): DeleteExpression;
    function createTypeOf(expression: Expression): TypeOfExpression;
    function updateTypeOf(node: TypeOfExpression, expression: Expression): TypeOfExpression;
    function createVoid(expression: Expression): VoidExpression;
    function updateVoid(node: VoidExpression, expression: Expression): VoidExpression;
    function createAwait(expression: Expression): AwaitExpression;
    function updateAwait(node: AwaitExpression, expression: Expression): AwaitExpression;
    function createPrefix(operator: PrefixUnaryOperator, operand: Expression): PrefixUnaryExpression;
    function updatePrefix(node: PrefixUnaryExpression, operand: Expression): PrefixUnaryExpression;
    function createPostfix(operand: Expression, operator: PostfixUnaryOperator): PostfixUnaryExpression;
    function updatePostfix(node: PostfixUnaryExpression, operand: Expression): PostfixUnaryExpression;
    function createBinary(left: Expression, operator: BinaryOperator | BinaryOperatorToken, right: Expression): BinaryExpression;
    function updateBinary(node: BinaryExpression, left: Expression, right: Expression, operator?: BinaryOperator | BinaryOperatorToken): BinaryExpression;
    function createConditional(condition: Expression, whenTrue: Expression, whenFalse: Expression): ConditionalExpression;
    function createConditional(condition: Expression, questionToken: QuestionToken, whenTrue: Expression, colonToken: ColonToken, whenFalse: Expression): ConditionalExpression;
    function updateConditional(node: ConditionalExpression, condition: Expression, whenTrue: Expression, whenFalse: Expression): ConditionalExpression;
    function updateConditional(node: ConditionalExpression, condition: Expression, questionToken: Token<SyntaxKind.QuestionToken>, whenTrue: Expression, colonToken: Token<SyntaxKind.ColonToken>, whenFalse: Expression): ConditionalExpression;
    function createTemplateExpression(head: TemplateHead, templateSpans: ReadonlyArray<TemplateSpan>): TemplateExpression;
    function updateTemplateExpression(node: TemplateExpression, head: TemplateHead, templateSpans: ReadonlyArray<TemplateSpan>): TemplateExpression;
    function createTemplateHead(text: string): TemplateHead;
    function createTemplateMiddle(text: string): TemplateMiddle;
    function createTemplateTail(text: string): TemplateTail;
    function createNoSubstitutionTemplateLiteral(text: string): NoSubstitutionTemplateLiteral;
    function createYield(expression?: Expression): YieldExpression;
    function createYield(asteriskToken: AsteriskToken, expression: Expression): YieldExpression;
    function updateYield(node: YieldExpression, asteriskToken: AsteriskToken | undefined, expression: Expression): YieldExpression;
    function createSpread(expression: Expression): SpreadElement;
    function updateSpread(node: SpreadElement, expression: Expression): SpreadElement;
    function createClassExpression(modifiers: ReadonlyArray<Modifier> | undefined, name: string | Identifier | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, heritageClauses: ReadonlyArray<HeritageClause>, members: ReadonlyArray<ClassElement>): ClassExpression;
    function updateClassExpression(node: ClassExpression, modifiers: ReadonlyArray<Modifier> | undefined, name: Identifier | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, heritageClauses: ReadonlyArray<HeritageClause>, members: ReadonlyArray<ClassElement>): ClassExpression;
    function createOmittedExpression(): OmittedExpression;
    function createExpressionWithTypeArguments(typeArguments: ReadonlyArray<TypeNode>, expression: Expression): ExpressionWithTypeArguments;
    function updateExpressionWithTypeArguments(node: ExpressionWithTypeArguments, typeArguments: ReadonlyArray<TypeNode>, expression: Expression): ExpressionWithTypeArguments;
    function createAsExpression(expression: Expression, type: TypeNode): AsExpression;
    function updateAsExpression(node: AsExpression, expression: Expression, type: TypeNode): AsExpression;
    function createNonNullExpression(expression: Expression): NonNullExpression;
    function updateNonNullExpression(node: NonNullExpression, expression: Expression): NonNullExpression;
    function createMetaProperty(keywordToken: MetaProperty["keywordToken"], name: Identifier): MetaProperty;
    function updateMetaProperty(node: MetaProperty, name: Identifier): MetaProperty;
    function createTemplateSpan(expression: Expression, literal: TemplateMiddle | TemplateTail): TemplateSpan;
    function updateTemplateSpan(node: TemplateSpan, expression: Expression, literal: TemplateMiddle | TemplateTail): TemplateSpan;
    function createSemicolonClassElement(): SemicolonClassElement;
    function createBlock(statements: ReadonlyArray<Statement>, multiLine?: boolean): Block;
    function updateBlock(node: Block, statements: ReadonlyArray<Statement>): Block;
    function createVariableStatement(modifiers: ReadonlyArray<Modifier> | undefined, declarationList: VariableDeclarationList | ReadonlyArray<VariableDeclaration>): VariableStatement;
    function updateVariableStatement(node: VariableStatement, modifiers: ReadonlyArray<Modifier> | undefined, declarationList: VariableDeclarationList): VariableStatement;
    function createEmptyStatement(): EmptyStatement;
    function createStatement(expression: Expression): ExpressionStatement;
    function updateStatement(node: ExpressionStatement, expression: Expression): ExpressionStatement;
    function createIf(expression: Expression, thenStatement: Statement, elseStatement?: Statement): IfStatement;
    function updateIf(node: IfStatement, expression: Expression, thenStatement: Statement, elseStatement: Statement | undefined): IfStatement;
    function createDo(statement: Statement, expression: Expression): DoStatement;
    function updateDo(node: DoStatement, statement: Statement, expression: Expression): DoStatement;
    function createWhile(expression: Expression, statement: Statement): WhileStatement;
    function updateWhile(node: WhileStatement, expression: Expression, statement: Statement): WhileStatement;
    function createFor(initializer: ForInitializer | undefined, condition: Expression | undefined, incrementor: Expression | undefined, statement: Statement): ForStatement;
    function updateFor(node: ForStatement, initializer: ForInitializer | undefined, condition: Expression | undefined, incrementor: Expression | undefined, statement: Statement): ForStatement;
    function createForIn(initializer: ForInitializer, expression: Expression, statement: Statement): ForInStatement;
    function updateForIn(node: ForInStatement, initializer: ForInitializer, expression: Expression, statement: Statement): ForInStatement;
    function createForOf(awaitModifier: AwaitKeywordToken, initializer: ForInitializer, expression: Expression, statement: Statement): ForOfStatement;
    function updateForOf(node: ForOfStatement, awaitModifier: AwaitKeywordToken, initializer: ForInitializer, expression: Expression, statement: Statement): ForOfStatement;
    function createContinue(label?: string | Identifier): ContinueStatement;
    function updateContinue(node: ContinueStatement, label: Identifier | undefined): ContinueStatement;
    function createBreak(label?: string | Identifier): BreakStatement;
    function updateBreak(node: BreakStatement, label: Identifier | undefined): BreakStatement;
    function createReturn(expression?: Expression): ReturnStatement;
    function updateReturn(node: ReturnStatement, expression: Expression | undefined): ReturnStatement;
    function createWith(expression: Expression, statement: Statement): WithStatement;
    function updateWith(node: WithStatement, expression: Expression, statement: Statement): WithStatement;
    function createSwitch(expression: Expression, caseBlock: CaseBlock): SwitchStatement;
    function updateSwitch(node: SwitchStatement, expression: Expression, caseBlock: CaseBlock): SwitchStatement;
    function createLabel(label: string | Identifier, statement: Statement): LabeledStatement;
    function updateLabel(node: LabeledStatement, label: Identifier, statement: Statement): LabeledStatement;
    function createThrow(expression: Expression): ThrowStatement;
    function updateThrow(node: ThrowStatement, expression: Expression): ThrowStatement;
    function createTry(tryBlock: Block, catchClause: CatchClause | undefined, finallyBlock: Block | undefined): TryStatement;
    function updateTry(node: TryStatement, tryBlock: Block, catchClause: CatchClause | undefined, finallyBlock: Block | undefined): TryStatement;
    function createDebuggerStatement(): DebuggerStatement;
    function createVariableDeclaration(name: string | BindingName, type?: TypeNode, initializer?: Expression): VariableDeclaration;
    function updateVariableDeclaration(node: VariableDeclaration, name: BindingName, type: TypeNode | undefined, initializer: Expression | undefined): VariableDeclaration;
    function createVariableDeclarationList(declarations: ReadonlyArray<VariableDeclaration>, flags?: NodeFlags): VariableDeclarationList;
    function updateVariableDeclarationList(node: VariableDeclarationList, declarations: ReadonlyArray<VariableDeclaration>): VariableDeclarationList;
    function createFunctionDeclaration(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, asteriskToken: AsteriskToken | undefined, name: string | Identifier | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, body: Block | undefined): FunctionDeclaration;
    function updateFunctionDeclaration(node: FunctionDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, asteriskToken: AsteriskToken | undefined, name: Identifier | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, type: TypeNode | undefined, body: Block | undefined): FunctionDeclaration;
    function createClassDeclaration(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: string | Identifier | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, heritageClauses: ReadonlyArray<HeritageClause>, members: ReadonlyArray<ClassElement>): ClassDeclaration;
    function updateClassDeclaration(node: ClassDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: Identifier | undefined, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, heritageClauses: ReadonlyArray<HeritageClause>, members: ReadonlyArray<ClassElement>): ClassDeclaration;
    function createInterfaceDeclaration(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: string | Identifier, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, heritageClauses: ReadonlyArray<HeritageClause> | undefined, members: ReadonlyArray<TypeElement>): InterfaceDeclaration;
    function updateInterfaceDeclaration(node: InterfaceDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: Identifier, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, heritageClauses: ReadonlyArray<HeritageClause> | undefined, members: ReadonlyArray<TypeElement>): InterfaceDeclaration;
    function createTypeAliasDeclaration(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: string | Identifier, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, type: TypeNode): TypeAliasDeclaration;
    function updateTypeAliasDeclaration(node: TypeAliasDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: Identifier, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, type: TypeNode): TypeAliasDeclaration;
    function createEnumDeclaration(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: string | Identifier, members: ReadonlyArray<EnumMember>): EnumDeclaration;
    function updateEnumDeclaration(node: EnumDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: Identifier, members: ReadonlyArray<EnumMember>): EnumDeclaration;
    function createModuleDeclaration(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: ModuleName, body: ModuleBody | undefined, flags?: NodeFlags): ModuleDeclaration;
    function updateModuleDeclaration(node: ModuleDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: ModuleName, body: ModuleBody | undefined): ModuleDeclaration;
    function createModuleBlock(statements: ReadonlyArray<Statement>): ModuleBlock;
    function updateModuleBlock(node: ModuleBlock, statements: ReadonlyArray<Statement>): ModuleBlock;
    function createCaseBlock(clauses: ReadonlyArray<CaseOrDefaultClause>): CaseBlock;
    function updateCaseBlock(node: CaseBlock, clauses: ReadonlyArray<CaseOrDefaultClause>): CaseBlock;
    function createNamespaceExportDeclaration(name: string | Identifier): NamespaceExportDeclaration;
    function updateNamespaceExportDeclaration(node: NamespaceExportDeclaration, name: Identifier): NamespaceExportDeclaration;
    function createImportEqualsDeclaration(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: string | Identifier, moduleReference: ModuleReference): ImportEqualsDeclaration;
    function updateImportEqualsDeclaration(node: ImportEqualsDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, name: Identifier, moduleReference: ModuleReference): ImportEqualsDeclaration;
    function createImportDeclaration(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, importClause: ImportClause | undefined, moduleSpecifier?: Expression): ImportDeclaration;
    function updateImportDeclaration(node: ImportDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, importClause: ImportClause | undefined, moduleSpecifier: Expression | undefined): ImportDeclaration;
    function createImportClause(name: Identifier | undefined, namedBindings: NamedImportBindings | undefined): ImportClause;
    function updateImportClause(node: ImportClause, name: Identifier | undefined, namedBindings: NamedImportBindings | undefined): ImportClause;
    function createNamespaceImport(name: Identifier): NamespaceImport;
    function updateNamespaceImport(node: NamespaceImport, name: Identifier): NamespaceImport;
    function createNamedImports(elements: ReadonlyArray<ImportSpecifier>): NamedImports;
    function updateNamedImports(node: NamedImports, elements: ReadonlyArray<ImportSpecifier>): NamedImports;
    function createImportSpecifier(propertyName: Identifier | undefined, name: Identifier): ImportSpecifier;
    function updateImportSpecifier(node: ImportSpecifier, propertyName: Identifier | undefined, name: Identifier): ImportSpecifier;
    function createExportAssignment(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, isExportEquals: boolean, expression: Expression): ExportAssignment;
    function updateExportAssignment(node: ExportAssignment, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, expression: Expression): ExportAssignment;
    function createExportDeclaration(decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, exportClause: NamedExports | undefined, moduleSpecifier?: Expression): ExportDeclaration;
    function updateExportDeclaration(node: ExportDeclaration, decorators: ReadonlyArray<Decorator> | undefined, modifiers: ReadonlyArray<Modifier> | undefined, exportClause: NamedExports | undefined, moduleSpecifier: Expression | undefined): ExportDeclaration;
    function createNamedExports(elements: ReadonlyArray<ExportSpecifier>): NamedExports;
    function updateNamedExports(node: NamedExports, elements: ReadonlyArray<ExportSpecifier>): NamedExports;
    function createExportSpecifier(propertyName: string | Identifier | undefined, name: string | Identifier): ExportSpecifier;
    function updateExportSpecifier(node: ExportSpecifier, propertyName: Identifier | undefined, name: Identifier): ExportSpecifier;
    function createExternalModuleReference(expression: Expression): ExternalModuleReference;
    function updateExternalModuleReference(node: ExternalModuleReference, expression: Expression): ExternalModuleReference;
    function createJsxElement(openingElement: JsxOpeningElement, children: ReadonlyArray<JsxChild>, closingElement: JsxClosingElement): JsxElement;
    function updateJsxElement(node: JsxElement, openingElement: JsxOpeningElement, children: ReadonlyArray<JsxChild>, closingElement: JsxClosingElement): JsxElement;
    function createJsxSelfClosingElement(tagName: JsxTagNameExpression, attributes: JsxAttributes): JsxSelfClosingElement;
    function updateJsxSelfClosingElement(node: JsxSelfClosingElement, tagName: JsxTagNameExpression, attributes: JsxAttributes): JsxSelfClosingElement;
    function createJsxOpeningElement(tagName: JsxTagNameExpression, attributes: JsxAttributes): JsxOpeningElement;
    function updateJsxOpeningElement(node: JsxOpeningElement, tagName: JsxTagNameExpression, attributes: JsxAttributes): JsxOpeningElement;
    function createJsxClosingElement(tagName: JsxTagNameExpression): JsxClosingElement;
    function updateJsxClosingElement(node: JsxClosingElement, tagName: JsxTagNameExpression): JsxClosingElement;
    function createJsxFragment(openingFragment: JsxOpeningFragment, children: ReadonlyArray<JsxChild>, closingFragment: JsxClosingFragment): JsxFragment;
    function updateJsxFragment(node: JsxFragment, openingFragment: JsxOpeningFragment, children: ReadonlyArray<JsxChild>, closingFragment: JsxClosingFragment): JsxFragment;
    function createJsxAttribute(name: Identifier, initializer: StringLiteral | JsxExpression): JsxAttribute;
    function updateJsxAttribute(node: JsxAttribute, name: Identifier, initializer: StringLiteral | JsxExpression): JsxAttribute;
    function createJsxAttributes(properties: ReadonlyArray<JsxAttributeLike>): JsxAttributes;
    function updateJsxAttributes(node: JsxAttributes, properties: ReadonlyArray<JsxAttributeLike>): JsxAttributes;
    function createJsxSpreadAttribute(expression: Expression): JsxSpreadAttribute;
    function updateJsxSpreadAttribute(node: JsxSpreadAttribute, expression: Expression): JsxSpreadAttribute;
    function createJsxExpression(dotDotDotToken: DotDotDotToken | undefined, expression: Expression | undefined): JsxExpression;
    function updateJsxExpression(node: JsxExpression, expression: Expression | undefined): JsxExpression;
    function createCaseClause(expression: Expression, statements: ReadonlyArray<Statement>): CaseClause;
    function updateCaseClause(node: CaseClause, expression: Expression, statements: ReadonlyArray<Statement>): CaseClause;
    function createDefaultClause(statements: ReadonlyArray<Statement>): DefaultClause;
    function updateDefaultClause(node: DefaultClause, statements: ReadonlyArray<Statement>): DefaultClause;
    function createHeritageClause(token: HeritageClause["token"], types: ReadonlyArray<ExpressionWithTypeArguments>): HeritageClause;
    function updateHeritageClause(node: HeritageClause, types: ReadonlyArray<ExpressionWithTypeArguments>): HeritageClause;
    function createCatchClause(variableDeclaration: string | VariableDeclaration | undefined, block: Block): CatchClause;
    function updateCatchClause(node: CatchClause, variableDeclaration: VariableDeclaration | undefined, block: Block): CatchClause;
    function createPropertyAssignment(name: string | PropertyName, initializer: Expression): PropertyAssignment;
    function updatePropertyAssignment(node: PropertyAssignment, name: PropertyName, initializer: Expression): PropertyAssignment;
    function createShorthandPropertyAssignment(name: string | Identifier, objectAssignmentInitializer?: Expression): ShorthandPropertyAssignment;
    function updateShorthandPropertyAssignment(node: ShorthandPropertyAssignment, name: Identifier, objectAssignmentInitializer: Expression | undefined): ShorthandPropertyAssignment;
    function createSpreadAssignment(expression: Expression): SpreadAssignment;
    function updateSpreadAssignment(node: SpreadAssignment, expression: Expression): SpreadAssignment;
    function createEnumMember(name: string | PropertyName, initializer?: Expression): EnumMember;
    function updateEnumMember(node: EnumMember, name: PropertyName, initializer: Expression | undefined): EnumMember;
    function updateSourceFileNode(node: SourceFile, statements: ReadonlyArray<Statement>): SourceFile;
    /**
     * Creates a shallow, memberwise clone of a node for mutation.
     */
    function getMutableClone<T extends Node>(node: T): T;
    /**
     * Creates a synthetic statement to act as a placeholder for a not-emitted statement in
     * order to preserve comments.
     *
     * @param original The original statement.
     */
    function createNotEmittedStatement(original: Node): NotEmittedStatement;
    /**
     * Creates a synthetic element to act as a placeholder for the end of an emitted declaration in
     * order to properly emit exports.
     */
    function createEndOfDeclarationMarker(original: Node): EndOfDeclarationMarker;
    /**
     * Creates a synthetic element to act as a placeholder for the beginning of a merged declaration in
     * order to properly emit exports.
     */
    function createMergeDeclarationMarker(original: Node): MergeDeclarationMarker;
    /**
     * Creates a synthetic expression to act as a placeholder for a not-emitted expression in
     * order to preserve comments or sourcemap positions.
     *
     * @param expression The inner expression to emit.
     * @param original The original outer expression.
     * @param location The location for the expression. Defaults to the positions from "original" if provided.
     */
    function createPartiallyEmittedExpression(expression: Expression, original?: Node): PartiallyEmittedExpression;
    function updatePartiallyEmittedExpression(node: PartiallyEmittedExpression, expression: Expression): PartiallyEmittedExpression;
    function createCommaList(elements: ReadonlyArray<Expression>): CommaListExpression;
    function updateCommaList(node: CommaListExpression, elements: ReadonlyArray<Expression>): CommaListExpression;
    function createBundle(sourceFiles: ReadonlyArray<SourceFile>): Bundle;
    function updateBundle(node: Bundle, sourceFiles: ReadonlyArray<SourceFile>): Bundle;
    function createImmediatelyInvokedFunctionExpression(statements: Statement[]): CallExpression;
    function createImmediatelyInvokedFunctionExpression(statements: Statement[], param: ParameterDeclaration, paramValue: Expression): CallExpression;
    function createImmediatelyInvokedArrowFunction(statements: Statement[]): CallExpression;
    function createImmediatelyInvokedArrowFunction(statements: Statement[], param: ParameterDeclaration, paramValue: Expression): CallExpression;
    function createComma(left: Expression, right: Expression): Expression;
    function createLessThan(left: Expression, right: Expression): Expression;
    function createAssignment(left: ObjectLiteralExpression | ArrayLiteralExpression, right: Expression): DestructuringAssignment;
    function createAssignment(left: Expression, right: Expression): BinaryExpression;
    function createStrictEquality(left: Expression, right: Expression): BinaryExpression;
    function createStrictInequality(left: Expression, right: Expression): BinaryExpression;
    function createAdd(left: Expression, right: Expression): BinaryExpression;
    function createSubtract(left: Expression, right: Expression): BinaryExpression;
    function createPostfixIncrement(operand: Expression): PostfixUnaryExpression;
    function createLogicalAnd(left: Expression, right: Expression): BinaryExpression;
    function createLogicalOr(left: Expression, right: Expression): BinaryExpression;
    function createLogicalNot(operand: Expression): PrefixUnaryExpression;
    function createVoidZero(): VoidExpression;
    function createExportDefault(expression: Expression): ExportAssignment;
    function createExternalModuleExport(exportName: Identifier): ExportDeclaration;
    /**
     * Clears any EmitNode entries from parse-tree nodes.
     * @param sourceFile A source file.
     */
    function disposeEmitNodes(sourceFile: SourceFile): void;
    /**
     * Associates a node with the current transformation, initializing
     * various transient transformation properties.
     */
    function getOrCreateEmitNode(node: Node): EmitNode;
    function setTextRange<T extends TextRange>(range: T, location: TextRange | undefined): T;
    /**
     * Sets flags that control emit behavior of a node.
     */
    function setEmitFlags<T extends Node>(node: T, emitFlags: EmitFlags): T;
    /**
     * Sets flags that control emit behavior of a node.
     */
    function addEmitFlags<T extends Node>(node: T, emitFlags: EmitFlags): T;
    /**
     * Gets a custom text range to use when emitting source maps.
     */
    function getSourceMapRange(node: Node): SourceMapRange;
    /**
     * Sets a custom text range to use when emitting source maps.
     */
    function setSourceMapRange<T extends Node>(node: T, range: SourceMapRange | undefined): T;
    /**
     * Create an external source map source file reference
     */
    function createSourceMapSource(fileName: string, text: string, skipTrivia?: (pos: number) => number): SourceMapSource;
    /**
     * Gets the TextRange to use for source maps for a token of a node.
     */
    function getTokenSourceMapRange(node: Node, token: SyntaxKind): SourceMapRange | undefined;
    /**
     * Sets the TextRange to use for source maps for a token of a node.
     */
    function setTokenSourceMapRange<T extends Node>(node: T, token: SyntaxKind, range: SourceMapRange | undefined): T;
    /**
     * Gets a custom text range to use when emitting comments.
     */
    function getCommentRange(node: Node): TextRange;
    /**
     * Sets a custom text range to use when emitting comments.
     */
    function setCommentRange<T extends Node>(node: T, range: TextRange): T;
    function getSyntheticLeadingComments(node: Node): SynthesizedComment[] | undefined;
    function setSyntheticLeadingComments<T extends Node>(node: T, comments: SynthesizedComment[]): T;
    function addSyntheticLeadingComment<T extends Node>(node: T, kind: SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia, text: string, hasTrailingNewLine?: boolean): T;
    function getSyntheticTrailingComments(node: Node): SynthesizedComment[] | undefined;
    function setSyntheticTrailingComments<T extends Node>(node: T, comments: SynthesizedComment[]): T;
    function addSyntheticTrailingComment<T extends Node>(node: T, kind: SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia, text: string, hasTrailingNewLine?: boolean): T;
    /**
     * Gets the constant value to emit for an expression.
     */
    function getConstantValue(node: PropertyAccessExpression | ElementAccessExpression): string | number;
    /**
     * Sets the constant value to emit for an expression.
     */
    function setConstantValue(node: PropertyAccessExpression | ElementAccessExpression, value: string | number): PropertyAccessExpression | ElementAccessExpression;
    /**
     * Adds an EmitHelper to a node.
     */
    function addEmitHelper<T extends Node>(node: T, helper: EmitHelper): T;
    /**
     * Add EmitHelpers to a node.
     */
    function addEmitHelpers<T extends Node>(node: T, helpers: EmitHelper[] | undefined): T;
    /**
     * Removes an EmitHelper from a node.
     */
    function removeEmitHelper(node: Node, helper: EmitHelper): boolean;
    /**
     * Gets the EmitHelpers of a node.
     */
    function getEmitHelpers(node: Node): EmitHelper[] | undefined;
    /**
     * Moves matching emit helpers from a source node to a target node.
     */
    function moveEmitHelpers(source: Node, target: Node, predicate: (helper: EmitHelper) => boolean): void;
    function compareEmitHelpers(x: EmitHelper, y: EmitHelper): Comparison;
    function setOriginalNode<T extends Node>(node: T, original: Node | undefined): T;
}
declare namespace ts {
    const nullTransformationContext: TransformationContext;
    type TypeOfTag = "undefined" | "number" | "boolean" | "string" | "symbol" | "object" | "function";
    function createTypeCheck(value: Expression, tag: TypeOfTag): BinaryExpression;
    function createMemberAccessForPropertyName(target: Expression, memberName: PropertyName, location?: TextRange): MemberExpression;
    function createFunctionCall(func: Expression, thisArg: Expression, argumentsList: ReadonlyArray<Expression>, location?: TextRange): CallExpression;
    function createFunctionApply(func: Expression, thisArg: Expression, argumentsExpression: Expression, location?: TextRange): CallExpression;
    function createArraySlice(array: Expression, start?: number | Expression): CallExpression;
    function createArrayConcat(array: Expression, values: Expression[]): CallExpression;
    function createMathPow(left: Expression, right: Expression, location?: TextRange): CallExpression;
    function createExpressionForJsxElement(jsxFactoryEntity: EntityName, reactNamespace: string, tagName: Expression, props: Expression, children: Expression[], parentElement: JsxOpeningLikeElement, location: TextRange): LeftHandSideExpression;
    function createExpressionForJsxFragment(jsxFactoryEntity: EntityName, reactNamespace: string, children: Expression[], parentElement: JsxOpeningFragment, location: TextRange): LeftHandSideExpression;
    function getHelperName(name: string): Identifier;
    function createValuesHelper(context: TransformationContext, expression: Expression, location?: TextRange): CallExpression;
    function createReadHelper(context: TransformationContext, iteratorRecord: Expression, count: number | undefined, location?: TextRange): CallExpression;
    function createSpreadHelper(context: TransformationContext, argumentList: Expression[], location?: TextRange): CallExpression;
    function createForOfBindingStatement(node: ForInitializer, boundValue: Expression): Statement;
    function insertLeadingStatement(dest: Statement, source: Statement): Block;
    function restoreEnclosingLabel(node: Statement, outermostLabeledStatement: LabeledStatement, afterRestoreLabelCallback?: (node: LabeledStatement) => void): Statement;
    interface CallBinding {
        target: LeftHandSideExpression;
        thisArg: Expression;
    }
    function createCallBinding(expression: Expression, recordTempVariable: (temp: Identifier) => void, languageVersion?: ScriptTarget, cacheIdentifiers?: boolean): CallBinding;
    function inlineExpressions(expressions: Expression[]): Expression;
    function createExpressionFromEntityName(node: EntityName | Expression): Expression;
    function createExpressionForPropertyName(memberName: PropertyName): Expression;
    function createExpressionForObjectLiteralElementLike(node: ObjectLiteralExpression, property: ObjectLiteralElementLike, receiver: Expression): Expression;
    /**
     * Gets the internal name of a declaration. This is primarily used for declarations that can be
     * referred to by name in the body of an ES5 class function body. An internal name will *never*
     * be prefixed with an module or namespace export modifier like "exports." when emitted as an
     * expression. An internal name will also *never* be renamed due to a collision with a block
     * scoped variable.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getInternalName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets whether an identifier should only be referred to by its internal name.
     */
    function isInternalName(node: Identifier): boolean;
    /**
     * Gets the local name of a declaration. This is primarily used for declarations that can be
     * referred to by name in the declaration's immediate scope (classes, enums, namespaces). A
     * local name will *never* be prefixed with an module or namespace export modifier like
     * "exports." when emitted as an expression.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getLocalName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets whether an identifier should only be referred to by its local name.
     */
    function isLocalName(node: Identifier): boolean;
    /**
     * Gets the export name of a declaration. This is primarily used for declarations that can be
     * referred to by name in the declaration's immediate scope (classes, enums, namespaces). An
     * export name will *always* be prefixed with an module or namespace export modifier like
     * `"exports."` when emitted as an expression if the name points to an exported symbol.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getExportName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets whether an identifier should only be referred to by its export representation if the
     * name points to an exported symbol.
     */
    function isExportName(node: Identifier): boolean;
    /**
     * Gets the name of a declaration for use in declarations.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getDeclarationName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets the exported name of a declaration for use in expressions.
     *
     * An exported name will *always* be prefixed with an module or namespace export modifier like
     * "exports." if the name points to an exported symbol.
     *
     * @param ns The namespace identifier.
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getExternalModuleOrNamespaceExportName(ns: Identifier | undefined, node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier | PropertyAccessExpression;
    /**
     * Gets a namespace-qualified name for use in expressions.
     *
     * @param ns The namespace identifier.
     * @param name The name.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getNamespaceMemberName(ns: Identifier, name: Identifier, allowComments?: boolean, allowSourceMaps?: boolean): PropertyAccessExpression;
    function convertToFunctionBody(node: ConciseBody, multiLine?: boolean): Block;
    function convertFunctionDeclarationToExpression(node: FunctionDeclaration): FunctionExpression;
    /**
     * Add any necessary prologue-directives into target statement-array.
     * The function needs to be called during each transformation step.
     * This function needs to be called whenever we transform the statement
     * list of a source file, namespace, or function-like body.
     *
     * @param target: result statements array
     * @param source: origin statements array
     * @param ensureUseStrict: boolean determining whether the function need to add prologue-directives
     * @param visitor: Optional callback used to visit any custom prologue directives.
     */
    function addPrologue(target: Statement[], source: ReadonlyArray<Statement>, ensureUseStrict?: boolean, visitor?: (node: Node) => VisitResult<Node>): number;
    /**
     * Add just the standard (string-expression) prologue-directives into target statement-array.
     * The function needs to be called during each transformation step.
     * This function needs to be called whenever we transform the statement
     * list of a source file, namespace, or function-like body.
     */
    function addStandardPrologue(target: Statement[], source: ReadonlyArray<Statement>, ensureUseStrict?: boolean): number;
    /**
     * Add just the custom prologue-directives into target statement-array.
     * The function needs to be called during each transformation step.
     * This function needs to be called whenever we transform the statement
     * list of a source file, namespace, or function-like body.
     */
    function addCustomPrologue(target: Statement[], source: ReadonlyArray<Statement>, statementOffset: number, visitor?: (node: Node) => VisitResult<Node>): number;
    function startsWithUseStrict(statements: ReadonlyArray<Statement>): boolean;
    /**
     * Ensures "use strict" directive is added
     *
     * @param statements An array of statements
     */
    function ensureUseStrict(statements: NodeArray<Statement>): NodeArray<Statement>;
    /**
     * Wraps the operand to a BinaryExpression in parentheses if they are needed to preserve the intended
     * order of operations.
     *
     * @param binaryOperator The operator for the BinaryExpression.
     * @param operand The operand for the BinaryExpression.
     * @param isLeftSideOfBinary A value indicating whether the operand is the left side of the
     *                           BinaryExpression.
     */
    function parenthesizeBinaryOperand(binaryOperator: SyntaxKind, operand: Expression, isLeftSideOfBinary: boolean, leftOperand?: Expression): Expression;
    function parenthesizeForConditionalHead(condition: Expression): Expression;
    function parenthesizeSubexpressionOfConditionalExpression(e: Expression): Expression;
    /**
     *  [Per the spec](https://tc39.github.io/ecma262/#prod-ExportDeclaration), `export default` accepts _AssigmentExpression_ but
     *  has a lookahead restriction for `function`, `async function`, and `class`.
     *
     * Basically, that means we need to parenthesize in the following cases:
     *
     * - BinaryExpression of CommaToken
     * - CommaList (synthetic list of multiple comma expressions)
     * - FunctionExpression
     * - ClassExpression
     */
    function parenthesizeDefaultExpression(e: Expression): Expression;
    /**
     * Wraps an expression in parentheses if it is needed in order to use the expression
     * as the expression of a NewExpression node.
     *
     * @param expression The Expression node.
     */
    function parenthesizeForNew(expression: Expression): LeftHandSideExpression;
    /**
     * Wraps an expression in parentheses if it is needed in order to use the expression for
     * property or element access.
     *
     * @param expr The expression node.
     */
    function parenthesizeForAccess(expression: Expression): LeftHandSideExpression;
    function parenthesizePostfixOperand(operand: Expression): LeftHandSideExpression;
    function parenthesizePrefixOperand(operand: Expression): UnaryExpression;
    function parenthesizeListElements(elements: NodeArray<Expression>): NodeArray<Expression>;
    function parenthesizeExpressionForList(expression: Expression): Expression;
    function parenthesizeExpressionForExpressionStatement(expression: Expression): Expression;
    function parenthesizeElementTypeMember(member: TypeNode): TypeNode;
    function parenthesizeArrayTypeMember(member: TypeNode): TypeNode;
    function parenthesizeElementTypeMembers(members: ReadonlyArray<TypeNode>): NodeArray<TypeNode>;
    function parenthesizeTypeParameters(typeParameters: ReadonlyArray<TypeNode>): MutableNodeArray<TypeNode>;
    function parenthesizeConciseBody(body: ConciseBody): ConciseBody;
    enum OuterExpressionKinds {
        Parentheses = 1,
        Assertions = 2,
        PartiallyEmittedExpressions = 4,
        All = 7,
    }
    type OuterExpression = ParenthesizedExpression | TypeAssertion | AsExpression | NonNullExpression | PartiallyEmittedExpression;
    function isOuterExpression(node: Node, kinds?: OuterExpressionKinds): node is OuterExpression;
    function skipOuterExpressions(node: Expression, kinds?: OuterExpressionKinds): Expression;
    function skipOuterExpressions(node: Node, kinds?: OuterExpressionKinds): Node;
    function skipParentheses(node: Expression): Expression;
    function skipParentheses(node: Node): Node;
    function skipAssertions(node: Expression): Expression;
    function skipAssertions(node: Node): Node;
    function recreateOuterExpressions(outerExpression: Expression | undefined, innerExpression: Expression, kinds?: OuterExpressionKinds): Expression;
    function startOnNewLine<T extends Node>(node: T): T;
    function getExternalHelpersModuleName(node: SourceFile): Identifier;
    function getOrCreateExternalHelpersModuleNameIfNeeded(node: SourceFile, compilerOptions: CompilerOptions, hasExportStarsToExportValues?: boolean): Identifier;
    /**
     * Get the name of that target module from an import or export declaration
     */
    function getLocalNameForExternalImport(node: ImportDeclaration | ExportDeclaration | ImportEqualsDeclaration, sourceFile: SourceFile): Identifier;
    /**
     * Get the name of a target module from an import/export declaration as should be written in the emitted output.
     * The emitted output name can be different from the input if:
     *  1. The module has a /// <amd-module name="<new name>" />
     *  2. --out or --outFile is used, making the name relative to the rootDir
     *  3- The containing SourceFile has an entry in renamedDependencies for the import as requested by some module loaders (e.g. System).
     * Otherwise, a new StringLiteral node representing the module name will be returned.
     */
    function getExternalModuleNameLiteral(importNode: ImportDeclaration | ExportDeclaration | ImportEqualsDeclaration, sourceFile: SourceFile, host: EmitHost, resolver: EmitResolver, compilerOptions: CompilerOptions): StringLiteral;
    /**
     * Get the name of a module as should be written in the emitted output.
     * The emitted output name can be different from the input if:
     *  1. The module has a /// <amd-module name="<new name>" />
     *  2. --out or --outFile is used, making the name relative to the rootDir
     * Otherwise, a new StringLiteral node representing the module name will be returned.
     */
    function tryGetModuleNameFromFile(file: SourceFile, host: EmitHost, options: CompilerOptions): StringLiteral;
    /**
     * Gets the initializer of an BindingOrAssignmentElement.
     */
    function getInitializerOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): Expression | undefined;
    /**
     * Gets the name of an BindingOrAssignmentElement.
     */
    function getTargetOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): BindingOrAssignmentElementTarget;
    /**
     * Determines whether an BindingOrAssignmentElement is a rest element.
     */
    function getRestIndicatorOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): BindingOrAssignmentElementRestIndicator;
    /**
     * Gets the property name of a BindingOrAssignmentElement
     */
    function getPropertyNameOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): PropertyName;
    /**
     * Gets the elements of a BindingOrAssignmentPattern
     */
    function getElementsOfBindingOrAssignmentPattern(name: BindingOrAssignmentPattern): ReadonlyArray<BindingOrAssignmentElement>;
    function convertToArrayAssignmentElement(element: BindingOrAssignmentElement): Expression;
    function convertToObjectAssignmentElement(element: BindingOrAssignmentElement): ObjectLiteralElementLike;
    function convertToAssignmentPattern(node: BindingOrAssignmentPattern): AssignmentPattern;
    function convertToObjectAssignmentPattern(node: ObjectBindingOrAssignmentPattern): ObjectLiteralExpression;
    function convertToArrayAssignmentPattern(node: ArrayBindingOrAssignmentPattern): ArrayLiteralExpression;
    function convertToAssignmentElementTarget(node: BindingOrAssignmentElementTarget): Expression;
}
declare namespace ts {
    /**
     * Visits a Node using the supplied visitor, possibly returning a new Node in its place.
     *
     * @param node The Node to visit.
     * @param visitor The callback used to visit the Node.
     * @param test A callback to execute to verify the Node is valid.
     * @param lift An optional callback to execute to lift a NodeArray into a valid Node.
     */
    function visitNode<T extends Node>(node: T, visitor: Visitor, test?: (node: Node) => boolean, lift?: (node: NodeArray<Node>) => T): T;
    /**
     * Visits a Node using the supplied visitor, possibly returning a new Node in its place.
     *
     * @param node The Node to visit.
     * @param visitor The callback used to visit the Node.
     * @param test A callback to execute to verify the Node is valid.
     * @param lift An optional callback to execute to lift a NodeArray into a valid Node.
     */
    function visitNode<T extends Node>(node: T | undefined, visitor: Visitor, test?: (node: Node) => boolean, lift?: (node: NodeArray<Node>) => T): T | undefined;
    /**
     * Visits a NodeArray using the supplied visitor, possibly returning a new NodeArray in its place.
     *
     * @param nodes The NodeArray to visit.
     * @param visitor The callback used to visit a Node.
     * @param test A node test to execute for each node.
     * @param start An optional value indicating the starting offset at which to start visiting.
     * @param count An optional value indicating the maximum number of nodes to visit.
     */
    function visitNodes<T extends Node>(nodes: NodeArray<T>, visitor: Visitor, test?: (node: Node) => boolean, start?: number, count?: number): NodeArray<T>;
    /**
     * Visits a NodeArray using the supplied visitor, possibly returning a new NodeArray in its place.
     *
     * @param nodes The NodeArray to visit.
     * @param visitor The callback used to visit a Node.
     * @param test A node test to execute for each node.
     * @param start An optional value indicating the starting offset at which to start visiting.
     * @param count An optional value indicating the maximum number of nodes to visit.
     */
    function visitNodes<T extends Node>(nodes: NodeArray<T> | undefined, visitor: Visitor, test?: (node: Node) => boolean, start?: number, count?: number): NodeArray<T> | undefined;
    /**
     * Starts a new lexical environment and visits a statement list, ending the lexical environment
     * and merging hoisted declarations upon completion.
     */
    function visitLexicalEnvironment(statements: NodeArray<Statement>, visitor: Visitor, context: TransformationContext, start?: number, ensureUseStrict?: boolean): NodeArray<Statement>;
    /**
     * Starts a new lexical environment and visits a parameter list, suspending the lexical
     * environment upon completion.
     */
    function visitParameterList(nodes: NodeArray<ParameterDeclaration>, visitor: Visitor, context: TransformationContext, nodesVisitor?: typeof visitNodes): NodeArray<ParameterDeclaration>;
    /**
     * Resumes a suspended lexical environment and visits a function body, ending the lexical
     * environment and merging hoisted declarations upon completion.
     */
    function visitFunctionBody(node: FunctionBody, visitor: Visitor, context: TransformationContext): FunctionBody;
    /**
     * Resumes a suspended lexical environment and visits a function body, ending the lexical
     * environment and merging hoisted declarations upon completion.
     */
    function visitFunctionBody(node: FunctionBody | undefined, visitor: Visitor, context: TransformationContext): FunctionBody | undefined;
    /**
     * Resumes a suspended lexical environment and visits a concise body, ending the lexical
     * environment and merging hoisted declarations upon completion.
     */
    function visitFunctionBody(node: ConciseBody, visitor: Visitor, context: TransformationContext): ConciseBody;
    /**
     * Visits each child of a Node using the supplied visitor, possibly returning a new Node of the same kind in its place.
     *
     * @param node The Node whose children will be visited.
     * @param visitor The callback used to visit each child.
     * @param context A lexical environment context for the visitor.
     */
    function visitEachChild<T extends Node>(node: T, visitor: Visitor, context: TransformationContext): T;
    /**
     * Visits each child of a Node using the supplied visitor, possibly returning a new Node of the same kind in its place.
     *
     * @param node The Node whose children will be visited.
     * @param visitor The callback used to visit each child.
     * @param context A lexical environment context for the visitor.
     */
    function visitEachChild<T extends Node>(node: T | undefined, visitor: Visitor, context: TransformationContext, nodesVisitor?: typeof visitNodes, tokenVisitor?: Visitor): T | undefined;
}
declare namespace ts {
    /**
     * Similar to `reduceLeft`, performs a reduction against each child of a node.
     * NOTE: Unlike `forEachChild`, this does *not* visit every node.
     *
     * @param node The node containing the children to reduce.
     * @param initial The initial value to supply to the reduction.
     * @param f The callback function
     */
    function reduceEachChild<T>(node: Node, initial: T, cbNode: (memo: T, node: Node) => T, cbNodeArray?: (memo: T, nodes: NodeArray<Node>) => T): T;
    /**
     * Merges generated lexical declarations into a new statement list.
     */
    function mergeLexicalEnvironment(statements: NodeArray<Statement>, declarations: ReadonlyArray<Statement>): NodeArray<Statement>;
    /**
     * Appends generated lexical declarations to an array of statements.
     */
    function mergeLexicalEnvironment(statements: Statement[], declarations: ReadonlyArray<Statement>): Statement[];
    /**
     * Lifts a NodeArray containing only Statement nodes to a block.
     *
     * @param nodes The NodeArray.
     */
    function liftToBlock(nodes: ReadonlyArray<Node>): Statement;
    /**
     * Aggregates the TransformFlags for a Node and its subtree.
     */
    function aggregateTransformFlags<T extends Node>(node: T): T;
    namespace Debug {
        const failBadSyntaxKind: (node: Node, message?: string) => void;
        const assertEachNode: (nodes: Node[], test: (node: Node) => boolean, message?: string) => void;
        const assertNode: (node: Node, test: (node: Node) => boolean, message?: string) => void;
        const assertOptionalNode: (node: Node, test: (node: Node) => boolean, message?: string) => void;
        const assertOptionalToken: (node: Node, kind: SyntaxKind, message?: string) => void;
        const assertMissingNode: (node: Node, message?: string) => void;
        /**
         * Injects debug information into frequently used types.
         */
        function enableDebugInfo(): void;
    }
}
declare namespace ts {
    function getOriginalNodeId(node: Node): number;
    interface ExternalModuleInfo {
        externalImports: (ImportDeclaration | ImportEqualsDeclaration | ExportDeclaration)[];
        externalHelpersImportDeclaration: ImportDeclaration | undefined;
        exportSpecifiers: Map<ExportSpecifier[]>;
        exportedBindings: Identifier[][];
        exportedNames: Identifier[];
        exportEquals: ExportAssignment | undefined;
        hasExportStarsToExportValues: boolean;
    }
    function collectExternalModuleInfo(sourceFile: SourceFile, resolver: EmitResolver, compilerOptions: CompilerOptions): ExternalModuleInfo;
    /**
     * Used in the module transformer to check if an expression is reasonably without sideeffect,
     *  and thus better to copy into multiple places rather than to cache in a temporary variable
     *  - this is mostly subjective beyond the requirement that the expression not be sideeffecting
     */
    function isSimpleCopiableExpression(expression: Expression): boolean;
}
declare namespace ts {
    enum FlattenLevel {
        All = 0,
        ObjectRest = 1,
    }
    /**
     * Flattens a DestructuringAssignment or a VariableDeclaration to an expression.
     *
     * @param node The node to flatten.
     * @param visitor An optional visitor used to visit initializers.
     * @param context The transformation context.
     * @param level Indicates the extent to which flattening should occur.
     * @param needsValue An optional value indicating whether the value from the right-hand-side of
     * the destructuring assignment is needed as part of a larger expression.
     * @param createAssignmentCallback An optional callback used to create the assignment expression.
     */
    function flattenDestructuringAssignment(node: VariableDeclaration | DestructuringAssignment, visitor: ((node: Node) => VisitResult<Node>) | undefined, context: TransformationContext, level: FlattenLevel, needsValue?: boolean, createAssignmentCallback?: (name: Identifier, value: Expression, location?: TextRange) => Expression): Expression;
    /**
     * Flattens a VariableDeclaration or ParameterDeclaration to one or more variable declarations.
     *
     * @param node The node to flatten.
     * @param visitor An optional visitor used to visit initializers.
     * @param context The transformation context.
     * @param boundValue The value bound to the declaration.
     * @param skipInitializer A value indicating whether to ignore the initializer of `node`.
     * @param hoistTempVariables Indicates whether temporary variables should not be recorded in-line.
     * @param level Indicates the extent to which flattening should occur.
     */
    function flattenDestructuringBinding(node: VariableDeclaration | ParameterDeclaration, visitor: (node: Node) => VisitResult<Node>, context: TransformationContext, level: FlattenLevel, rval?: Expression, hoistTempVariables?: boolean, skipInitializer?: boolean): VariableDeclaration[];
}
declare namespace ts {
    function transformTypeScript(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformES2017(context: TransformationContext): (node: SourceFile) => SourceFile;
    const asyncSuperHelper: EmitHelper;
    const advancedAsyncSuperHelper: EmitHelper;
}
declare namespace ts {
    function transformESNext(context: TransformationContext): (node: SourceFile) => SourceFile;
    function createAssignHelper(context: TransformationContext, attributesSegments: Expression[]): CallExpression;
}
declare namespace ts {
    function transformJsx(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformES2016(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformES2015(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformGenerators(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    /**
     * Transforms ES5 syntax into ES3 syntax.
     *
     * @param context Context and state information for the transformation.
     */
    function transformES5(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformModule(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformSystemModule(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformES2015Module(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function getTransformers(compilerOptions: CompilerOptions, customTransformers?: CustomTransformers): TransformerFactory<SourceFile>[];
    /**
     * Transforms an array of SourceFiles by passing them through each transformer.
     *
     * @param resolver The emit resolver provided by the checker.
     * @param host The emit host object used to interact with the file system.
     * @param options Compiler options to surface in the `TransformationContext`.
     * @param nodes An array of nodes to transform.
     * @param transforms An array of `TransformerFactory` callbacks.
     * @param allowDtsFiles A value indicating whether to allow the transformation of .d.ts files.
     */
    function transformNodes<T extends Node>(resolver: EmitResolver, host: EmitHost, options: CompilerOptions, nodes: ReadonlyArray<T>, transformers: ReadonlyArray<TransformerFactory<T>>, allowDtsFiles: boolean): TransformationResult<T>;
}
declare namespace ts {
    function getDeclarationDiagnostics(host: EmitHost, resolver: EmitResolver, targetSourceFile: SourceFile): Diagnostic[];
    function writeDeclarationFile(declarationFilePath: string, sourceFileOrBundle: SourceFile | Bundle, host: EmitHost, resolver: EmitResolver, emitterDiagnostics: DiagnosticCollection, emitOnlyDtsFiles: boolean): boolean;
}
declare namespace ts {
    interface SourceMapWriter {
        /**
         * Initialize the SourceMapWriter for a new output file.
         *
         * @param filePath The path to the generated output file.
         * @param sourceMapFilePath The path to the output source map file.
         * @param sourceFileOrBundle The input source file or bundle for the program.
         */
        initialize(filePath: string, sourceMapFilePath: string, sourceFileOrBundle: SourceFile | Bundle): void;
        /**
         * Reset the SourceMapWriter to an empty state.
         */
        reset(): void;
        /**
         * Set the current source file.
         *
         * @param sourceFile The source file.
         */
        setSourceFile(sourceFile: SourceMapSource): void;
        /**
         * Emits a mapping.
         *
         * If the position is synthetic (undefined or a negative value), no mapping will be
         * created.
         *
         * @param pos The position.
         */
        emitPos(pos: number): void;
        /**
         * Emits a node with possible leading and trailing source maps.
         *
         * @param hint The current emit context
         * @param node The node to emit.
         * @param emitCallback The callback used to emit the node.
         */
        emitNodeWithSourceMap(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;
        /**
         * Emits a token of a node node with possible leading and trailing source maps.
         *
         * @param node The node containing the token.
         * @param token The token to emit.
         * @param tokenStartPos The start pos of the token.
         * @param emitCallback The callback used to emit the token.
         */
        emitTokenWithSourceMap(node: Node, token: SyntaxKind, tokenStartPos: number, emitCallback: (token: SyntaxKind, tokenStartPos: number) => number): number;
        /**
         * Gets the text for the source map.
         */
        getText(): string;
        /**
         * Gets the SourceMappingURL for the source map.
         */
        getSourceMappingURL(): string;
        /**
         * Gets test data for source maps.
         */
        getSourceMapData(): SourceMapData;
    }
    function createSourceMapWriter(host: EmitHost, writer: EmitTextWriter): SourceMapWriter;
}
declare namespace ts {
    interface CommentWriter {
        reset(): void;
        setSourceFile(sourceFile: SourceFile): void;
        setWriter(writer: EmitTextWriter): void;
        emitNodeWithComments(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;
        emitBodyWithDetachedComments(node: Node, detachedRange: TextRange, emitCallback: (node: Node) => void): void;
        emitTrailingCommentsOfPosition(pos: number, prefixSpace?: boolean): void;
        emitLeadingCommentsOfPosition(pos: number): void;
    }
    function createCommentWriter(printerOptions: PrinterOptions, emitPos: ((pos: number) => void) | undefined): CommentWriter;
}
declare namespace ts {
    /**
     * Iterates over the source files that are expected to have an emit output.
     *
     * @param host An EmitHost.
     * @param action The action to execute.
     * @param sourceFilesOrTargetSourceFile
     *   If an array, the full list of source files to emit.
     *   Else, calls `getSourceFilesToEmit` with the (optional) target source file to determine the list of source files to emit.
     */
    function forEachEmittedFile(host: EmitHost, action: (emitFileNames: EmitFileNames, sourceFileOrBundle: SourceFile | Bundle, emitOnlyDtsFiles: boolean) => void, sourceFilesOrTargetSourceFile?: SourceFile[] | SourceFile, emitOnlyDtsFiles?: boolean): void;
    function emitFiles(resolver: EmitResolver, host: EmitHost, targetSourceFile: SourceFile, emitOnlyDtsFiles?: boolean, transformers?: TransformerFactory<SourceFile>[]): EmitResult;
    function createPrinter(printerOptions?: PrinterOptions, handlers?: PrintHandlers): Printer;
}
declare namespace ts {
    function findConfigFile(searchPath: string, fileExists: (fileName: string) => boolean, configName?: string): string;
    function resolveTripleslashReference(moduleName: string, containingFile: string): string;
    function computeCommonSourceDirectoryOfFilenames(fileNames: string[], currentDirectory: string, getCanonicalFileName: (fileName: string) => string): string;
    function createCompilerHost(options: CompilerOptions, setParentNodes?: boolean): CompilerHost;
    function getPreEmitDiagnostics(program: Program, sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
    interface FormatDiagnosticsHost {
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        getNewLine(): string;
    }
    function formatDiagnostics(diagnostics: ReadonlyArray<Diagnostic>, host: FormatDiagnosticsHost): string;
    function formatDiagnostic(diagnostic: Diagnostic, host: FormatDiagnosticsHost): string;
    function formatDiagnosticsWithColorAndContext(diagnostics: ReadonlyArray<Diagnostic>, host: FormatDiagnosticsHost): string;
    function flattenDiagnosticMessageText(messageText: string | DiagnosticMessageChain, newLine: string): string;
    /**
     * Determines if program structure is upto date or needs to be recreated
     */
    function isProgramUptoDate(program: Program | undefined, rootFileNames: string[], newOptions: CompilerOptions, getSourceVersion: (path: Path) => string, fileExists: (fileName: string) => boolean, hasInvalidatedResolution: HasInvalidatedResolution, hasChangedAutomaticTypeDirectiveNames: boolean): boolean;
    /**
     * Create a new 'Program' instance. A Program is an immutable collection of 'SourceFile's and a 'CompilerOptions'
     * that represent a compilation unit.
     *
     * Creating a program proceeds from a set of root files, expanding the set of inputs by following imports and
     * triple-slash-reference-path directives transitively. '@types' and triple-slash-reference-types are also pulled in.
     *
     * @param rootNames - A set of root files.
     * @param options - The compiler options which should be used.
     * @param host - The host interacts with the underlying file system.
     * @param oldProgram - Reuses an old program structure.
     * @returns A 'Program' object.
     */
    function createProgram(rootNames: ReadonlyArray<string>, options: CompilerOptions, host?: CompilerHost, oldProgram?: Program): Program;
    /**
     * Returns a DiagnosticMessage if we won't include a resolved module due to its extension.
     * The DiagnosticMessage's parameters are the imported module name, and the filename it resolved to.
     * This returns a diagnostic even if the module will be an untyped module.
     */
    function getResolutionDiagnostic(options: CompilerOptions, {extension}: ResolvedModuleFull): DiagnosticMessage | undefined;
}
declare namespace ts {
    interface EmitOutput {
        outputFiles: OutputFile[];
        emitSkipped: boolean;
    }
    interface OutputFile {
        name: string;
        writeByteOrderMark: boolean;
        text: string;
    }
}
declare namespace ts {
    function getFileEmitOutput(program: Program, sourceFile: SourceFile, emitOnlyDtsFiles: boolean, cancellationToken?: CancellationToken, customTransformers?: CustomTransformers): EmitOutput;
    interface Builder {
        /** Called to inform builder about new program */
        updateProgram(newProgram: Program): void;
        /** Gets the files affected by the file path */
        getFilesAffectedBy(program: Program, path: Path): ReadonlyArray<SourceFile>;
        /** Emit the changed files and clear the cache of the changed files */
        emitChangedFiles(program: Program, writeFileCallback: WriteFileCallback): ReadonlyArray<EmitResult>;
        /** When called gets the semantic diagnostics for the program. It also caches the diagnostics and manage them */
        getSemanticDiagnostics(program: Program, cancellationToken?: CancellationToken): ReadonlyArray<Diagnostic>;
        /** Called to reset the status of the builder */
        clear(): void;
    }
    interface BuilderOptions {
        getCanonicalFileName: (fileName: string) => string;
        computeHash: (data: string) => string;
    }
    function createBuilder(options: BuilderOptions): Builder;
}
declare namespace ts {
    const compileOnSaveCommandLineOption: CommandLineOption;
    const optionDeclarations: CommandLineOption[];
    const typeAcquisitionDeclarations: CommandLineOption[];
    interface OptionNameMap {
        optionNameMap: Map<CommandLineOption>;
        shortOptionNames: Map<string>;
    }
    const defaultInitCompilerOptions: CompilerOptions;
    function convertEnableAutoDiscoveryToEnable(typeAcquisition: TypeAcquisition): TypeAcquisition;
    function createCompilerDiagnosticForInvalidCustomType(opt: CommandLineOptionOfCustomType): Diagnostic;
    function parseCustomTypeOption(opt: CommandLineOptionOfCustomType, value: string, errors: Push<Diagnostic>): string | number;
    function parseListTypeOption(opt: CommandLineOptionOfListType, value: string, errors: Push<Diagnostic>): (string | number)[] | undefined;
    function parseCommandLine(commandLine: ReadonlyArray<string>, readFile?: (path: string) => string | undefined): ParsedCommandLine;
    /**
     * Read tsconfig.json file
     * @param fileName The path to the config file
     */
    function readConfigFile(fileName: string, readFile: (path: string) => string | undefined): {
        config?: any;
        error?: Diagnostic;
    };
    /**
     * Parse the text of the tsconfig.json file
     * @param fileName The path to the config file
     * @param jsonText The text of the config file
     */
    function parseConfigFileTextToJson(fileName: string, jsonText: string): {
        config?: any;
        error?: Diagnostic;
    };
    /**
     * Read tsconfig.json file
     * @param fileName The path to the config file
     */
    function readJsonConfigFile(fileName: string, readFile: (path: string) => string | undefined): JsonSourceFile;
    /**
     * Convert the json syntax tree into the json value
     */
    function convertToObject(sourceFile: JsonSourceFile, errors: Push<Diagnostic>): any;
    /**
     * Generate tsconfig configuration when running command line "--init"
     * @param options commandlineOptions to be generated into tsconfig.json
     * @param fileNames array of filenames to be generated into tsconfig.json
     */
    function generateTSConfig(options: CompilerOptions, fileNames: ReadonlyArray<string>, newLine: string): string;
    /**
     * Parse the contents of a config file (tsconfig.json).
     * @param json The contents of the config file to parse
     * @param host Instance of ParseConfigHost used to enumerate files in folder.
     * @param basePath A root directory to resolve relative path entries in the config
     *    file to. e.g. outDir
     */
    function parseJsonConfigFileContent(json: any, host: ParseConfigHost, basePath: string, existingOptions?: CompilerOptions, configFileName?: string, resolutionStack?: Path[], extraFileExtensions?: ReadonlyArray<JsFileExtensionInfo>): ParsedCommandLine;
    /**
     * Parse the contents of a config file (tsconfig.json).
     * @param jsonNode The contents of the config file to parse
     * @param host Instance of ParseConfigHost used to enumerate files in folder.
     * @param basePath A root directory to resolve relative path entries in the config
     *    file to. e.g. outDir
     */
    function parseJsonSourceFileConfigFileContent(sourceFile: JsonSourceFile, host: ParseConfigHost, basePath: string, existingOptions?: CompilerOptions, configFileName?: string, resolutionStack?: Path[], extraFileExtensions?: ReadonlyArray<JsFileExtensionInfo>): ParsedCommandLine;
    function setConfigFileInOptions(options: CompilerOptions, configFile: JsonSourceFile): void;
    function isErrorNoInputFiles(error: Diagnostic): boolean;
    function getErrorForNoInputFiles({includeSpecs, excludeSpecs}: ConfigFileSpecs, configFileName: string | undefined): Diagnostic;
    function convertCompilerOptionsFromJson(jsonOptions: any, basePath: string, configFileName?: string): {
        options: CompilerOptions;
        errors: Diagnostic[];
    };
    function convertTypeAcquisitionFromJson(jsonOptions: any, basePath: string, configFileName?: string): {
        options: TypeAcquisition;
        errors: Diagnostic[];
    };
    /**
     * Gets the file names from the provided config file specs that contain, files, include, exclude and
     * other properties needed to resolve the file names
     * @param spec The config file specs extracted with file names to include, wildcards to include/exclude and other details
     * @param basePath The base path for any relative file specifications.
     * @param options Compiler options.
     * @param host The host used to resolve files and directories.
     * @param extraFileExtensions optionaly file extra file extension information from host
     */
    function getFileNamesFromConfigSpecs(spec: ConfigFileSpecs, basePath: string, options: CompilerOptions, host: ParseConfigHost, extraFileExtensions?: ReadonlyArray<JsFileExtensionInfo>): ExpandResult;
    /**
     * Produces a cleaned version of compiler options with personally identifiying info (aka, paths) removed.
     * Also converts enum values back to strings.
     */
    function convertCompilerOptionsForTelemetry(opts: ts.CompilerOptions): ts.CompilerOptions;
}
declare namespace ts {
    /**
     * Updates the existing missing file watches with the new set of missing files after new program is created
     */
    function updateMissingFilePathsWatch(program: Program, missingFileWatches: Map<FileWatcher>, createMissingFileWatch: (missingFilePath: Path) => FileWatcher): void;
    interface WildcardDirectoryWatcher {
        watcher: FileWatcher;
        flags: WatchDirectoryFlags;
    }
    /**
     * Updates the existing wild card directory watches with the new set of wild card directories from the config file
     * after new program is created because the config file was reloaded or program was created first time from the config file
     * Note that there is no need to call this function when the program is updated with additional files without reloading config files,
     * as wildcard directories wont change unless reloading config file
     */
    function updateWatchingWildcardDirectories(existingWatchedForWildcards: Map<WildcardDirectoryWatcher>, wildcardDirectories: Map<WatchDirectoryFlags>, watchDirectory: (directory: string, flags: WatchDirectoryFlags) => FileWatcher): void;
    function addFileWatcher(host: System, file: string, cb: FileWatcherCallback): FileWatcher;
    function addFileWatcherWithLogging(host: System, file: string, cb: FileWatcherCallback, log: (s: string) => void): FileWatcher;
    function addFileWatcherWithOnlyTriggerLogging(host: System, file: string, cb: FileWatcherCallback, log: (s: string) => void): FileWatcher;
    type FilePathWatcherCallback = (fileName: string, eventKind: FileWatcherEventKind, filePath: Path) => void;
    function addFilePathWatcher(host: System, file: string, cb: FilePathWatcherCallback, path: Path): FileWatcher;
    function addFilePathWatcherWithLogging(host: System, file: string, cb: FilePathWatcherCallback, path: Path, log: (s: string) => void): FileWatcher;
    function addFilePathWatcherWithOnlyTriggerLogging(host: System, file: string, cb: FilePathWatcherCallback, path: Path, log: (s: string) => void): FileWatcher;
    function addDirectoryWatcher(host: System, directory: string, cb: DirectoryWatcherCallback, flags: WatchDirectoryFlags): FileWatcher;
    function addDirectoryWatcherWithLogging(host: System, directory: string, cb: DirectoryWatcherCallback, flags: WatchDirectoryFlags, log: (s: string) => void): FileWatcher;
    function addDirectoryWatcherWithOnlyTriggerLogging(host: System, directory: string, cb: DirectoryWatcherCallback, flags: WatchDirectoryFlags, log: (s: string) => void): FileWatcher;
    function closeFileWatcher(watcher: FileWatcher): void;
    function closeFileWatcherOf<T extends {
        watcher: FileWatcher;
    }>(objWithWatcher: T): void;
}
declare namespace ts {
    /** This is the cache of module/typedirectives resolution that can be retained across program */
    interface ResolutionCache {
        startRecordingFilesWithChangedResolutions(): void;
        finishRecordingFilesWithChangedResolutions(): Path[];
        resolveModuleNames(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, logChanges: boolean): ResolvedModuleFull[];
        resolveTypeReferenceDirectives(typeDirectiveNames: string[], containingFile: string): ResolvedTypeReferenceDirective[];
        invalidateResolutionOfFile(filePath: Path): void;
        removeResolutionsOfFile(filePath: Path): void;
        createHasInvalidatedResolution(): HasInvalidatedResolution;
        startCachingPerDirectoryResolution(): void;
        finishCachingPerDirectoryResolution(): void;
        updateTypeRootsWatch(): void;
        closeTypeRootsWatch(): void;
        clear(): void;
    }
    interface ResolutionCacheHost extends ModuleResolutionHost {
        toPath(fileName: string): Path;
        getCompilationSettings(): CompilerOptions;
        watchDirectoryOfFailedLookupLocation(directory: string, cb: DirectoryWatcherCallback, flags: WatchDirectoryFlags): FileWatcher;
        onInvalidatedResolution(): void;
        watchTypeRootsDirectory(directory: string, cb: DirectoryWatcherCallback, flags: WatchDirectoryFlags): FileWatcher;
        onChangedAutomaticTypeDirectiveNames(): void;
        getCachedDirectoryStructureHost?(): CachedDirectoryStructureHost;
        projectName?: string;
        getGlobalCache?(): string | undefined;
        writeLog(s: string): void;
        maxNumberOfFilesToIterateForInvalidation?: number;
    }
    const maxNumberOfFilesToIterateForInvalidation = 256;
    function createResolutionCache(resolutionHost: ResolutionCacheHost, rootDirForResolution: string): ResolutionCache;
}
declare namespace ts {
    type DiagnosticReporter = (diagnostic: Diagnostic) => void;
    type ParseConfigFile = (configFileName: string, optionsToExtend: CompilerOptions, system: DirectoryStructureHost, reportDiagnostic: DiagnosticReporter, reportWatchDiagnostic: DiagnosticReporter) => ParsedCommandLine;
    interface WatchingSystemHost {
        system: System;
        parseConfigFile: ParseConfigFile;
        reportDiagnostic: DiagnosticReporter;
        reportWatchDiagnostic: DiagnosticReporter;
        beforeCompile(compilerOptions: CompilerOptions): void;
        afterCompile(host: DirectoryStructureHost, program: Program, builder: Builder): void;
    }
    function createDiagnosticReporter(system?: System, worker?: typeof reportDiagnosticSimply, formatDiagnosticsHost?: FormatDiagnosticsHost): DiagnosticReporter;
    function createWatchDiagnosticReporter(system?: System): DiagnosticReporter;
    function reportDiagnostics(diagnostics: Diagnostic[], reportDiagnostic: DiagnosticReporter): void;
    function reportDiagnosticSimply(diagnostic: Diagnostic, host: FormatDiagnosticsHost, system: System): void;
    function reportDiagnosticWithColorAndContext(diagnostic: Diagnostic, host: FormatDiagnosticsHost, system: System): void;
    function parseConfigFile(configFileName: string, optionsToExtend: CompilerOptions, system: DirectoryStructureHost, reportDiagnostic: DiagnosticReporter, reportWatchDiagnostic: DiagnosticReporter): ParsedCommandLine;
    function handleEmitOutputAndReportErrors(system: DirectoryStructureHost, program: Program, emittedFiles: string[], emitSkipped: boolean, diagnostics: Diagnostic[], reportDiagnostic: DiagnosticReporter): ExitStatus;
    function createWatchingSystemHost(pretty?: DiagnosticStyle, system?: System, parseConfigFile?: ParseConfigFile, reportDiagnostic?: DiagnosticReporter, reportWatchDiagnostic?: DiagnosticReporter): WatchingSystemHost;
    function createWatchModeWithConfigFile(configParseResult: ParsedCommandLine, optionsToExtend?: CompilerOptions, watchingHost?: WatchingSystemHost): () => Program;
    function createWatchModeWithoutConfigFile(rootFileNames: string[], compilerOptions: CompilerOptions, watchingHost?: WatchingSystemHost): () => Program;
}
declare namespace ts {
    function executeCommandLine(args: string[]): void;
}
declare namespace ts {
    interface Node {
        getSourceFile(): SourceFile;
        getChildCount(sourceFile?: SourceFile): number;
        getChildAt(index: number, sourceFile?: SourceFile): Node;
        getChildren(sourceFile?: SourceFile): Node[];
        getChildren(sourceFile?: SourceFileLike): Node[];
        getStart(sourceFile?: SourceFile, includeJsDocComment?: boolean): number;
        getStart(sourceFile?: SourceFileLike, includeJsDocComment?: boolean): number;
        getFullStart(): number;
        getEnd(): number;
        getWidth(sourceFile?: SourceFile): number;
        getFullWidth(): number;
        getLeadingTriviaWidth(sourceFile?: SourceFile): number;
        getFullText(sourceFile?: SourceFile): string;
        getText(sourceFile?: SourceFile): string;
        getFirstToken(sourceFile?: SourceFile): Node;
        getLastToken(sourceFile?: SourceFile): Node;
        forEachChild<T>(cbNode: (node: Node) => T | undefined, cbNodeArray?: (nodes: NodeArray<Node>) => T | undefined): T | undefined;
    }
    interface Identifier {
        readonly text: string;
    }
    interface Symbol {
        readonly name: string;
        getFlags(): SymbolFlags;
        getEscapedName(): __String;
        getName(): string;
        getDeclarations(): Declaration[] | undefined;
        getDocumentationComment(): SymbolDisplayPart[];
        getJsDocTags(): JSDocTagInfo[];
    }
    interface Type {
        getFlags(): TypeFlags;
        getSymbol(): Symbol | undefined;
        getProperties(): Symbol[];
        getProperty(propertyName: string): Symbol | undefined;
        getApparentProperties(): Symbol[];
        getCallSignatures(): Signature[];
        getConstructSignatures(): Signature[];
        getStringIndexType(): Type | undefined;
        getNumberIndexType(): Type | undefined;
        getBaseTypes(): BaseType[] | undefined;
        getNonNullableType(): Type;
    }
    interface Signature {
        getDeclaration(): SignatureDeclaration;
        getTypeParameters(): TypeParameter[] | undefined;
        getParameters(): Symbol[];
        getReturnType(): Type;
        getDocumentationComment(): SymbolDisplayPart[];
        getJsDocTags(): JSDocTagInfo[];
    }
    interface SourceFile {
        version: string;
        scriptSnapshot: IScriptSnapshot;
        nameTable: UnderscoreEscapedMap<number>;
        getNamedDeclarations(): Map<Declaration[]>;
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
        getLineEndOfPosition(pos: number): number;
        getLineStarts(): ReadonlyArray<number>;
        getPositionOfLineAndCharacter(line: number, character: number): number;
        update(newText: string, textChangeRange: TextChangeRange): SourceFile;
    }
    interface SourceFileLike {
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
    }
    interface SourceMapSource {
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
    }
    /**
     * Represents an immutable snapshot of a script at a specified time.Once acquired, the
     * snapshot is observably immutable. i.e. the same calls with the same parameters will return
     * the same values.
     */
    interface IScriptSnapshot {
        /** Gets a portion of the script snapshot specified by [start, end). */
        getText(start: number, end: number): string;
        /** Gets the length of this script snapshot. */
        getLength(): number;
        /**
         * Gets the TextChangeRange that describe how the text changed between this text and
         * an older version.  This information is used by the incremental parser to determine
         * what sections of the script need to be re-parsed.  'undefined' can be returned if the
         * change range cannot be determined.  However, in that case, incremental parsing will
         * not happen and the entire document will be re - parsed.
         */
        getChangeRange(oldSnapshot: IScriptSnapshot): TextChangeRange | undefined;
        /** Releases all resources held by this script snapshot */
        dispose?(): void;
    }
    namespace ScriptSnapshot {
        function fromString(text: string): IScriptSnapshot;
    }
    interface PreProcessedFileInfo {
        referencedFiles: FileReference[];
        typeReferenceDirectives: FileReference[];
        importedFiles: FileReference[];
        ambientExternalModules: string[];
        isLibFile: boolean;
    }
    interface HostCancellationToken {
        isCancellationRequested(): boolean;
    }
    interface InstallPackageOptions {
        fileName: Path;
        packageName: string;
    }
    interface LanguageServiceHost extends GetEffectiveTypeRootsHost {
        getCompilationSettings(): CompilerOptions;
        getNewLine?(): string;
        getProjectVersion?(): string;
        getScriptFileNames(): string[];
        getScriptKind?(fileName: string): ScriptKind;
        getScriptVersion(fileName: string): string;
        getScriptSnapshot(fileName: string): IScriptSnapshot | undefined;
        getLocalizedDiagnosticMessages?(): any;
        getCancellationToken?(): HostCancellationToken;
        getCurrentDirectory(): string;
        getDefaultLibFileName(options: CompilerOptions): string;
        log?(s: string): void;
        trace?(s: string): void;
        error?(s: string): void;
        useCaseSensitiveFileNames?(): boolean;
        readDirectory?(path: string, extensions?: ReadonlyArray<string>, exclude?: ReadonlyArray<string>, include?: ReadonlyArray<string>, depth?: number): string[];
        readFile?(path: string, encoding?: string): string | undefined;
        fileExists?(path: string): boolean;
        getTypeRootsVersion?(): number;
        resolveModuleNames?(moduleNames: string[], containingFile: string, reusedNames?: string[]): ResolvedModule[];
        resolveTypeReferenceDirectives?(typeDirectiveNames: string[], containingFile: string): ResolvedTypeReferenceDirective[];
        hasInvalidatedResolution?: HasInvalidatedResolution;
        hasChangedAutomaticTypeDirectiveNames?: boolean;
        getDirectories?(directoryName: string): string[];
        /**
         * Gets a set of custom transformers to use during emit.
         */
        getCustomTransformers?(): CustomTransformers | undefined;
        isKnownTypesPackageName?(name: string): boolean;
        installPackage?(options: InstallPackageOptions): Promise<ApplyCodeActionCommandResult>;
    }
    interface LanguageService {
        cleanupSemanticCache(): void;
        getSyntacticDiagnostics(fileName: string): Diagnostic[];
        getSemanticDiagnostics(fileName: string): Diagnostic[];
        getCompilerOptionsDiagnostics(): Diagnostic[];
        /**
         * @deprecated Use getEncodedSyntacticClassifications instead.
         */
        getSyntacticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];
        /**
         * @deprecated Use getEncodedSemanticClassifications instead.
         */
        getSemanticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];
        getEncodedSyntacticClassifications(fileName: string, span: TextSpan): Classifications;
        getEncodedSemanticClassifications(fileName: string, span: TextSpan): Classifications;
        getCompletionsAtPosition(fileName: string, position: number, options: GetCompletionsAtPositionOptions | undefined): CompletionInfo;
        getCompletionEntryDetails(fileName: string, position: number, name: string, options: FormatCodeOptions | FormatCodeSettings | undefined, source: string | undefined): CompletionEntryDetails;
        getCompletionEntrySymbol(fileName: string, position: number, name: string, source: string | undefined): Symbol;
        getQuickInfoAtPosition(fileName: string, position: number): QuickInfo;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): TextSpan;
        getBreakpointStatementAtPosition(fileName: string, position: number): TextSpan;
        getSignatureHelpItems(fileName: string, position: number): SignatureHelpItems;
        getRenameInfo(fileName: string, position: number): RenameInfo;
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean): RenameLocation[];
        getDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getDefinitionAndBoundSpan(fileName: string, position: number): DefinitionInfoAndBoundSpan;
        getTypeDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getImplementationAtPosition(fileName: string, position: number): ImplementationLocation[];
        getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        findReferences(fileName: string, position: number): ReferencedSymbol[];
        getDocumentHighlights(fileName: string, position: number, filesToSearch: string[]): DocumentHighlights[];
        /** @deprecated */
        getOccurrencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        getNavigateToItems(searchValue: string, maxResultCount?: number, fileName?: string, excludeDtsFiles?: boolean): NavigateToItem[];
        getNavigationBarItems(fileName: string): NavigationBarItem[];
        getNavigationTree(fileName: string): NavigationTree;
        getOutliningSpans(fileName: string): OutliningSpan[];
        getTodoComments(fileName: string, descriptors: TodoCommentDescriptor[]): TodoComment[];
        getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[];
        getIndentationAtPosition(fileName: string, position: number, options: EditorOptions | EditorSettings): number;
        getFormattingEditsForRange(fileName: string, start: number, end: number, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getFormattingEditsForDocument(fileName: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getDocCommentTemplateAtPosition(fileName: string, position: number): TextInsertion;
        isValidBraceCompletionAtPosition(fileName: string, position: number, openingBrace: number): boolean;
        getSpanOfEnclosingComment(fileName: string, position: number, onlyMultiLine: boolean): TextSpan;
        getCodeFixesAtPosition(fileName: string, start: number, end: number, errorCodes: number[], formatOptions: FormatCodeSettings): CodeAction[];
        applyCodeActionCommand(fileName: string, action: CodeActionCommand): Promise<ApplyCodeActionCommandResult>;
        getApplicableRefactors(fileName: string, positionOrRaneg: number | TextRange): ApplicableRefactorInfo[];
        getEditsForRefactor(fileName: string, formatOptions: FormatCodeSettings, positionOrRange: number | TextRange, refactorName: string, actionName: string): RefactorEditInfo | undefined;
        getEmitOutput(fileName: string, emitOnlyDtsFiles?: boolean): EmitOutput;
        getProgram(): Program;
        getNonBoundSourceFile(fileName: string): SourceFile;
        /**
         * @internal
         * @deprecated Use ts.createSourceFile instead.
         */
        getSourceFile(fileName: string): SourceFile;
        dispose(): void;
    }
    interface GetCompletionsAtPositionOptions {
        includeExternalModuleExports: boolean;
    }
    interface ApplyCodeActionCommandResult {
        successMessage: string;
    }
    interface Classifications {
        spans: number[];
        endOfLineState: EndOfLineState;
    }
    interface ClassifiedSpan {
        textSpan: TextSpan;
        classificationType: ClassificationTypeNames;
    }
    /**
     * Navigation bar interface designed for visual studio's dual-column layout.
     * This does not form a proper tree.
     * The navbar is returned as a list of top-level items, each of which has a list of child items.
     * Child items always have an empty array for their `childItems`.
     */
    interface NavigationBarItem {
        text: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        spans: TextSpan[];
        childItems: NavigationBarItem[];
        indent: number;
        bolded: boolean;
        grayed: boolean;
    }
    /**
     * Node in a tree of nested declarations in a file.
     * The top node is always a script or module node.
     */
    interface NavigationTree {
        /** Name of the declaration, or a short description, e.g. "<class>". */
        text: string;
        kind: ScriptElementKind;
        /** ScriptElementKindModifier separated by commas, e.g. "public,abstract" */
        kindModifiers: string;
        /**
         * Spans of the nodes that generated this declaration.
         * There will be more than one if this is the result of merging.
         */
        spans: TextSpan[];
        /** Present if non-empty */
        childItems?: NavigationTree[];
    }
    interface TodoCommentDescriptor {
        text: string;
        priority: number;
    }
    interface TodoComment {
        descriptor: TodoCommentDescriptor;
        message: string;
        position: number;
    }
    class TextChange {
        span: TextSpan;
        newText: string;
    }
    interface FileTextChanges {
        fileName: string;
        textChanges: TextChange[];
    }
    interface CodeAction {
        /** Description of the code action to display in the UI of the editor */
        description: string;
        /** Text changes to apply to each file as part of the code action */
        changes: FileTextChanges[];
        /**
         * If the user accepts the code fix, the editor should send the action back in a `applyAction` request.
         * This allows the language service to have side effects (e.g. installing dependencies) upon a code fix.
         */
        commands?: CodeActionCommand[];
    }
    type CodeActionCommand = InstallPackageAction;
    interface InstallPackageAction {
        type: "install package";
        packageName: string;
    }
    /**
     * A set of one or more available refactoring actions, grouped under a parent refactoring.
     */
    interface ApplicableRefactorInfo {
        /**
         * The programmatic name of the refactoring
         */
        name: string;
        /**
         * A description of this refactoring category to show to the user.
         * If the refactoring gets inlined (see below), this text will not be visible.
         */
        description: string;
        /**
         * Inlineable refactorings can have their actions hoisted out to the top level
         * of a context menu. Non-inlineanable refactorings should always be shown inside
         * their parent grouping.
         *
         * If not specified, this value is assumed to be 'true'
         */
        inlineable?: boolean;
        actions: RefactorActionInfo[];
    }
    /**
     * Represents a single refactoring action - for example, the "Extract Method..." refactor might
     * offer several actions, each corresponding to a surround class or closure to extract into.
     */
    interface RefactorActionInfo {
        /**
         * The programmatic name of the refactoring action
         */
        name: string;
        /**
         * A description of this refactoring action to show to the user.
         * If the parent refactoring is inlined away, this will be the only text shown,
         * so this description should make sense by itself if the parent is inlineable=true
         */
        description: string;
    }
    /**
     * A set of edits to make in response to a refactor action, plus an optional
     * location where renaming should be invoked from
     */
    interface RefactorEditInfo {
        edits: FileTextChanges[];
        renameFilename: string | undefined;
        renameLocation: number | undefined;
        commands?: CodeActionCommand[];
    }
    interface TextInsertion {
        newText: string;
        /** The position in newText the caret should point to after the insertion. */
        caretOffset: number;
    }
    interface DocumentSpan {
        textSpan: TextSpan;
        fileName: string;
    }
    interface RenameLocation extends DocumentSpan {
    }
    interface ReferenceEntry extends DocumentSpan {
        isWriteAccess: boolean;
        isDefinition: boolean;
        isInString?: true;
    }
    interface ImplementationLocation extends DocumentSpan {
        kind: ScriptElementKind;
        displayParts: SymbolDisplayPart[];
    }
    interface DocumentHighlights {
        fileName: string;
        highlightSpans: HighlightSpan[];
    }
    enum HighlightSpanKind {
        none = "none",
        definition = "definition",
        reference = "reference",
        writtenReference = "writtenReference",
    }
    interface HighlightSpan {
        fileName?: string;
        isInString?: true;
        textSpan: TextSpan;
        kind: HighlightSpanKind;
    }
    interface NavigateToItem {
        name: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        matchKind: string;
        isCaseSensitive: boolean;
        fileName: string;
        textSpan: TextSpan;
        containerName: string;
        containerKind: ScriptElementKind;
    }
    enum IndentStyle {
        None = 0,
        Block = 1,
        Smart = 2,
    }
    interface EditorOptions {
        BaseIndentSize?: number;
        IndentSize: number;
        TabSize: number;
        NewLineCharacter: string;
        ConvertTabsToSpaces: boolean;
        IndentStyle: IndentStyle;
    }
    interface EditorSettings {
        baseIndentSize?: number;
        indentSize?: number;
        tabSize?: number;
        newLineCharacter?: string;
        convertTabsToSpaces?: boolean;
        indentStyle?: IndentStyle;
    }
    interface FormatCodeOptions extends EditorOptions {
        InsertSpaceAfterCommaDelimiter: boolean;
        InsertSpaceAfterSemicolonInForStatements: boolean;
        InsertSpaceBeforeAndAfterBinaryOperators: boolean;
        InsertSpaceAfterConstructor?: boolean;
        InsertSpaceAfterKeywordsInControlFlowStatements: boolean;
        InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBraces?: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?: boolean;
        InsertSpaceAfterTypeAssertion?: boolean;
        InsertSpaceBeforeFunctionParenthesis?: boolean;
        PlaceOpenBraceOnNewLineForFunctions: boolean;
        PlaceOpenBraceOnNewLineForControlBlocks: boolean;
    }
    interface FormatCodeSettings extends EditorSettings {
        insertSpaceAfterCommaDelimiter?: boolean;
        insertSpaceAfterSemicolonInForStatements?: boolean;
        insertSpaceBeforeAndAfterBinaryOperators?: boolean;
        insertSpaceAfterConstructor?: boolean;
        insertSpaceAfterKeywordsInControlFlowStatements?: boolean;
        insertSpaceAfterFunctionKeywordForAnonymousFunctions?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?: boolean;
        insertSpaceAfterTypeAssertion?: boolean;
        insertSpaceBeforeFunctionParenthesis?: boolean;
        placeOpenBraceOnNewLineForFunctions?: boolean;
        placeOpenBraceOnNewLineForControlBlocks?: boolean;
    }
    interface DefinitionInfo {
        fileName: string;
        textSpan: TextSpan;
        kind: ScriptElementKind;
        name: string;
        containerKind: ScriptElementKind;
        containerName: string;
    }
    interface DefinitionInfoAndBoundSpan {
        definitions: ReadonlyArray<DefinitionInfo>;
        textSpan: TextSpan;
    }
    interface ReferencedSymbolDefinitionInfo extends DefinitionInfo {
        displayParts: SymbolDisplayPart[];
    }
    interface ReferencedSymbol {
        definition: ReferencedSymbolDefinitionInfo;
        references: ReferenceEntry[];
    }
    enum SymbolDisplayPartKind {
        aliasName = 0,
        className = 1,
        enumName = 2,
        fieldName = 3,
        interfaceName = 4,
        keyword = 5,
        lineBreak = 6,
        numericLiteral = 7,
        stringLiteral = 8,
        localName = 9,
        methodName = 10,
        moduleName = 11,
        operator = 12,
        parameterName = 13,
        propertyName = 14,
        punctuation = 15,
        space = 16,
        text = 17,
        typeParameterName = 18,
        enumMemberName = 19,
        functionName = 20,
        regularExpressionLiteral = 21,
    }
    interface SymbolDisplayPart {
        text: string;
        kind: string;
    }
    interface JSDocTagInfo {
        name: string;
        text?: string;
    }
    interface QuickInfo {
        kind: ScriptElementKind;
        kindModifiers: string;
        textSpan: TextSpan;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
        tags: JSDocTagInfo[];
    }
    interface RenameInfo {
        canRename: boolean;
        localizedErrorMessage: string;
        displayName: string;
        fullDisplayName: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        triggerSpan: TextSpan;
    }
    interface SignatureHelpParameter {
        name: string;
        documentation: SymbolDisplayPart[];
        displayParts: SymbolDisplayPart[];
        isOptional: boolean;
    }
    /**
     * Represents a single signature to show in signature help.
     * The id is used for subsequent calls into the language service to ask questions about the
     * signature help item in the context of any documents that have been updated.  i.e. after
     * an edit has happened, while signature help is still active, the host can ask important
     * questions like 'what parameter is the user currently contained within?'.
     */
    interface SignatureHelpItem {
        isVariadic: boolean;
        prefixDisplayParts: SymbolDisplayPart[];
        suffixDisplayParts: SymbolDisplayPart[];
        separatorDisplayParts: SymbolDisplayPart[];
        parameters: SignatureHelpParameter[];
        documentation: SymbolDisplayPart[];
        tags: JSDocTagInfo[];
    }
    /**
     * Represents a set of signature help items, and the preferred item that should be selected.
     */
    interface SignatureHelpItems {
        items: SignatureHelpItem[];
        applicableSpan: TextSpan;
        selectedItemIndex: number;
        argumentIndex: number;
        argumentCount: number;
    }
    interface CompletionInfo {
        isGlobalCompletion: boolean;
        isMemberCompletion: boolean;
        /**
         * true when the current location also allows for a new identifier
         */
        isNewIdentifierLocation: boolean;
        entries: CompletionEntry[];
    }
    interface CompletionEntry {
        name: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        sortText: string;
        /**
         * An optional span that indicates the text to be replaced by this completion item. It will be
         * set if the required span differs from the one generated by the default replacement behavior and should
         * be used in that case
         */
        replacementSpan?: TextSpan;
        hasAction?: true;
        source?: string;
    }
    interface CompletionEntryDetails {
        name: string;
        kind: ScriptElementKind;
        kindModifiers: string;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
        tags: JSDocTagInfo[];
        codeActions?: CodeAction[];
        source?: SymbolDisplayPart[];
    }
    interface OutliningSpan {
        /** The span of the document to actually collapse. */
        textSpan: TextSpan;
        /** The span of the document to display when the user hovers over the collapsed span. */
        hintSpan: TextSpan;
        /** The text to display in the editor for the collapsed region. */
        bannerText: string;
        /**
         * Whether or not this region should be automatically collapsed when
         * the 'Collapse to Definitions' command is invoked.
         */
        autoCollapse: boolean;
    }
    enum OutputFileType {
        JavaScript = 0,
        SourceMap = 1,
        Declaration = 2,
    }
    enum EndOfLineState {
        None = 0,
        InMultiLineCommentTrivia = 1,
        InSingleQuoteStringLiteral = 2,
        InDoubleQuoteStringLiteral = 3,
        InTemplateHeadOrNoSubstitutionTemplate = 4,
        InTemplateMiddleOrTail = 5,
        InTemplateSubstitutionPosition = 6,
    }
    enum TokenClass {
        Punctuation = 0,
        Keyword = 1,
        Operator = 2,
        Comment = 3,
        Whitespace = 4,
        Identifier = 5,
        NumberLiteral = 6,
        StringLiteral = 7,
        RegExpLiteral = 8,
    }
    interface ClassificationResult {
        finalLexState: EndOfLineState;
        entries: ClassificationInfo[];
    }
    interface ClassificationInfo {
        length: number;
        classification: TokenClass;
    }
    interface Classifier {
        /**
         * Gives lexical classifications of tokens on a line without any syntactic context.
         * For instance, a token consisting of the text 'string' can be either an identifier
         * named 'string' or the keyword 'string', however, because this classifier is not aware,
         * it relies on certain heuristics to give acceptable results. For classifications where
         * speed trumps accuracy, this function is preferable; however, for true accuracy, the
         * syntactic classifier is ideal. In fact, in certain editing scenarios, combining the
         * lexical, syntactic, and semantic classifiers may issue the best user experience.
         *
         * @param text                      The text of a line to classify.
         * @param lexState                  The state of the lexical classifier at the end of the previous line.
         * @param syntacticClassifierAbsent Whether the client is *not* using a syntactic classifier.
         *                                  If there is no syntactic classifier (syntacticClassifierAbsent=true),
         *                                  certain heuristics may be used in its place; however, if there is a
         *                                  syntactic classifier (syntacticClassifierAbsent=false), certain
         *                                  classifications which may be incorrectly categorized will be given
         *                                  back as Identifiers in order to allow the syntactic classifier to
         *                                  subsume the classification.
         * @deprecated Use getLexicalClassifications instead.
         */
        getClassificationsForLine(text: string, lexState: EndOfLineState, syntacticClassifierAbsent: boolean): ClassificationResult;
        getEncodedLexicalClassifications(text: string, endOfLineState: EndOfLineState, syntacticClassifierAbsent: boolean): Classifications;
    }
    enum ScriptElementKind {
        unknown = "",
        warning = "warning",
        /** predefined type (void) or keyword (class) */
        keyword = "keyword",
        /** top level script node */
        scriptElement = "script",
        /** module foo {} */
        moduleElement = "module",
        /** class X {} */
        classElement = "class",
        /** var x = class X {} */
        localClassElement = "local class",
        /** interface Y {} */
        interfaceElement = "interface",
        /** type T = ... */
        typeElement = "type",
        /** enum E */
        enumElement = "enum",
        enumMemberElement = "enum member",
        /**
         * Inside module and script only
         * const v = ..
         */
        variableElement = "var",
        /** Inside function */
        localVariableElement = "local var",
        /**
         * Inside module and script only
         * function f() { }
         */
        functionElement = "function",
        /** Inside function */
        localFunctionElement = "local function",
        /** class X { [public|private]* foo() {} } */
        memberFunctionElement = "method",
        /** class X { [public|private]* [get|set] foo:number; } */
        memberGetAccessorElement = "getter",
        memberSetAccessorElement = "setter",
        /**
         * class X { [public|private]* foo:number; }
         * interface Y { foo:number; }
         */
        memberVariableElement = "property",
        /** class X { constructor() { } } */
        constructorImplementationElement = "constructor",
        /** interface Y { ():number; } */
        callSignatureElement = "call",
        /** interface Y { []:number; } */
        indexSignatureElement = "index",
        /** interface Y { new():Y; } */
        constructSignatureElement = "construct",
        /** function foo(*Y*: string) */
        parameterElement = "parameter",
        typeParameterElement = "type parameter",
        primitiveType = "primitive type",
        label = "label",
        alias = "alias",
        constElement = "const",
        letElement = "let",
        directory = "directory",
        externalModuleName = "external module name",
        /**
         * <JsxTagName attribute1 attribute2={0} />
         */
        jsxAttribute = "JSX attribute",
    }
    enum ScriptElementKindModifier {
        none = "",
        publicMemberModifier = "public",
        privateMemberModifier = "private",
        protectedMemberModifier = "protected",
        exportedModifier = "export",
        ambientModifier = "declare",
        staticModifier = "static",
        abstractModifier = "abstract",
    }
    enum ClassificationTypeNames {
        comment = "comment",
        identifier = "identifier",
        keyword = "keyword",
        numericLiteral = "number",
        operator = "operator",
        stringLiteral = "string",
        whiteSpace = "whitespace",
        text = "text",
        punctuation = "punctuation",
        className = "class name",
        enumName = "enum name",
        interfaceName = "interface name",
        moduleName = "module name",
        typeParameterName = "type parameter name",
        typeAliasName = "type alias name",
        parameterName = "parameter name",
        docCommentTagName = "doc comment tag name",
        jsxOpenTagName = "jsx open tag name",
        jsxCloseTagName = "jsx close tag name",
        jsxSelfClosingTagName = "jsx self closing tag name",
        jsxAttribute = "jsx attribute",
        jsxText = "jsx text",
        jsxAttributeStringLiteralValue = "jsx attribute string literal value",
    }
    enum ClassificationType {
        comment = 1,
        identifier = 2,
        keyword = 3,
        numericLiteral = 4,
        operator = 5,
        stringLiteral = 6,
        regularExpressionLiteral = 7,
        whiteSpace = 8,
        text = 9,
        punctuation = 10,
        className = 11,
        enumName = 12,
        interfaceName = 13,
        moduleName = 14,
        typeParameterName = 15,
        typeAliasName = 16,
        parameterName = 17,
        docCommentTagName = 18,
        jsxOpenTagName = 19,
        jsxCloseTagName = 20,
        jsxSelfClosingTagName = 21,
        jsxAttribute = 22,
        jsxText = 23,
        jsxAttributeStringLiteralValue = 24,
    }
}
interface PromiseConstructor {
    new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
    reject(reason: any): Promise<never>;
}
declare var Promise: PromiseConstructor;
declare namespace ts {
    const scanner: Scanner;
    enum SemanticMeaning {
        None = 0,
        Value = 1,
        Type = 2,
        Namespace = 4,
        All = 7,
    }
    function getMeaningFromDeclaration(node: Node): SemanticMeaning;
    function getMeaningFromLocation(node: Node): SemanticMeaning;
    function isInRightSideOfInternalImportEqualsDeclaration(node: Node): boolean;
    function isCallExpressionTarget(node: Node): boolean;
    function isNewExpressionTarget(node: Node): boolean;
    function climbPastPropertyAccess(node: Node): Node;
    function getTargetLabel(referenceNode: Node, labelName: string): Identifier;
    function isJumpStatementTarget(node: Node): boolean;
    function isLabelName(node: Node): boolean;
    function isRightSideOfQualifiedName(node: Node): boolean;
    function isRightSideOfPropertyAccess(node: Node): boolean;
    function isNameOfModuleDeclaration(node: Node): boolean;
    function isNameOfFunctionDeclaration(node: Node): boolean;
    function isLiteralNameOfPropertyDeclarationOrIndexAccess(node: StringLiteral | NumericLiteral): boolean;
    function isExpressionOfExternalModuleImportEqualsDeclaration(node: Node): boolean;
    function getContainerNode(node: Node): Declaration;
    function getNodeKind(node: Node): ScriptElementKind;
    function isThis(node: Node): boolean;
    interface ListItemInfo {
        listItemIndex: number;
        list: Node;
    }
    function getLineStartPositionForPosition(position: number, sourceFile: SourceFileLike): number;
    function rangeContainsRange(r1: TextRange, r2: TextRange): boolean;
    function startEndContainsRange(start: number, end: number, range: TextRange): boolean;
    function rangeContainsStartEnd(range: TextRange, start: number, end: number): boolean;
    function rangeOverlapsWithStartEnd(r1: TextRange, start: number, end: number): boolean;
    function startEndOverlapsWithStartEnd(start1: number, end1: number, start2: number, end2: number): boolean;
    /**
     * Assumes `candidate.start <= position` holds.
     */
    function positionBelongsToNode(candidate: Node, position: number, sourceFile: SourceFile): boolean;
    function isCompletedNode(n: Node, sourceFile: SourceFile): boolean;
    function findListItemInfo(node: Node): ListItemInfo;
    function hasChildOfKind(n: Node, kind: SyntaxKind, sourceFile?: SourceFile): boolean;
    function findChildOfKind(n: Node, kind: SyntaxKind, sourceFile?: SourceFileLike): Node | undefined;
    function findContainingList(node: Node): SyntaxList | undefined;
    function getTouchingWord(sourceFile: SourceFile, position: number, includeJsDocComment: boolean): Node;
    function getTouchingPropertyName(sourceFile: SourceFile, position: number, includeJsDocComment: boolean): Node;
    /**
     * Returns the token if position is in [start, end).
     * If position === end, returns the preceding token if includeItemAtEndPosition(previousToken) === true
     */
    function getTouchingToken(sourceFile: SourceFile, position: number, includeJsDocComment: boolean, includePrecedingTokenAtEndPosition?: (n: Node) => boolean): Node;
    /** Returns a token if position is in [start-of-leading-trivia, end) */
    function getTokenAtPosition(sourceFile: SourceFile, position: number, includeJsDocComment: boolean, includeEndPosition?: boolean): Node;
    /**
     * The token on the left of the position is the token that strictly includes the position
     * or sits to the left of the cursor if it is on a boundary. For example
     *
     *   fo|o               -> will return foo
     *   foo <comment> |bar -> will return foo
     *
     */
    function findTokenOnLeftOfPosition(file: SourceFile, position: number): Node;
    function findNextToken(previousToken: Node, parent: Node): Node;
    /**
     * Finds the rightmost token satisfying `token.end <= position`,
     * excluding `JsxText` tokens containing only whitespace.
     */
    function findPrecedingToken(position: number, sourceFile: SourceFile, startNode?: Node, includeJsDoc?: boolean): Node | undefined;
    function isInString(sourceFile: SourceFile, position: number): boolean;
    /**
     * returns true if the position is in between the open and close elements of an JSX expression.
     */
    function isInsideJsxElementOrAttribute(sourceFile: SourceFile, position: number): boolean;
    function isWhiteSpaceOnlyJsxText(node: Node): node is JsxText;
    function isInTemplateString(sourceFile: SourceFile, position: number): boolean;
    /**
     * Returns true if the cursor at position in sourceFile is within a comment.
     *
     * @param tokenAtPosition Must equal `getTokenAtPosition(sourceFile, position)
     * @param predicate Additional predicate to test on the comment range.
     */
    function isInComment(sourceFile: SourceFile, position: number, tokenAtPosition?: Node, predicate?: (c: CommentRange) => boolean): boolean;
    function hasDocComment(sourceFile: SourceFile, position: number): boolean;
    function getNodeModifiers(node: Node): string;
    function getTypeArgumentOrTypeParameterList(node: Node): NodeArray<Node>;
    function isWord(kind: SyntaxKind): boolean;
    function isComment(kind: SyntaxKind): boolean;
    function isStringOrRegularExpressionOrTemplateLiteral(kind: SyntaxKind): boolean;
    function isPunctuation(kind: SyntaxKind): boolean;
    function isInsideTemplateLiteral(node: LiteralExpression, position: number): boolean;
    function isAccessibilityModifier(kind: SyntaxKind): boolean;
    function cloneCompilerOptions(options: CompilerOptions): CompilerOptions;
    function isArrayLiteralOrObjectLiteralDestructuringPattern(node: Node): boolean;
    function hasTrailingDirectorySeparator(path: string): boolean;
    function isInReferenceComment(sourceFile: SourceFile, position: number): boolean;
    function isInNonReferenceComment(sourceFile: SourceFile, position: number): boolean;
    function createTextSpanFromNode(node: Node, sourceFile?: SourceFile): TextSpan;
    function createTextSpanFromRange(range: TextRange): TextSpan;
    function isTypeKeyword(kind: SyntaxKind): boolean;
    /** True if the symbol is for an external module, as opposed to a namespace. */
    function isExternalModuleSymbol(moduleSymbol: Symbol): boolean;
    /** Returns `true` the first time it encounters a node and `false` afterwards. */
    function nodeSeenTracker<T extends Node>(): (node: T) => boolean;
}
declare namespace ts {
    function isFirstDeclarationOfSymbolParameter(symbol: Symbol): boolean;
    function symbolPart(text: string, symbol: Symbol): SymbolDisplayPart;
    function displayPart(text: string, kind: SymbolDisplayPartKind): SymbolDisplayPart;
    function spacePart(): SymbolDisplayPart;
    function keywordPart(kind: SyntaxKind): SymbolDisplayPart;
    function punctuationPart(kind: SyntaxKind): SymbolDisplayPart;
    function operatorPart(kind: SyntaxKind): SymbolDisplayPart;
    function textOrKeywordPart(text: string): SymbolDisplayPart;
    function textPart(text: string): SymbolDisplayPart;
    /**
     * The default is CRLF.
     */
    function getNewLineOrDefaultFromHost(host: LanguageServiceHost | LanguageServiceShimHost): string;
    function lineBreakPart(): SymbolDisplayPart;
    function mapToDisplayParts(writeDisplayParts: (writer: DisplayPartsSymbolWriter) => void): SymbolDisplayPart[];
    function typeToDisplayParts(typechecker: TypeChecker, type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): SymbolDisplayPart[];
    function symbolToDisplayParts(typeChecker: TypeChecker, symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): SymbolDisplayPart[];
    function signatureToDisplayParts(typechecker: TypeChecker, signature: Signature, enclosingDeclaration?: Node, flags?: TypeFormatFlags): SymbolDisplayPart[];
    function getDeclaredName(typeChecker: TypeChecker, symbol: Symbol, location: Node): string;
    function isImportOrExportSpecifierName(location: Node): location is Identifier;
    /**
     * Strip off existed single quotes or double quotes from a given string
     *
     * @return non-quoted string
     */
    function stripQuotes(name: string): string;
    function scriptKindIs(fileName: string, host: LanguageServiceHost, ...scriptKinds: ScriptKind[]): boolean;
    function getScriptKind(fileName: string, host?: LanguageServiceHost): ScriptKind;
    function getUniqueSymbolId(symbol: Symbol, checker: TypeChecker): number;
    function getFirstNonSpaceCharacterPosition(text: string, position: number): number;
    function getOpenBrace(constructor: ConstructorDeclaration, sourceFile: SourceFile): Node;
    function getOpenBraceOfClassLike(declaration: ClassLikeDeclaration, sourceFile: SourceFile): Node;
    function getSourceFileImportLocation(node: SourceFile): number;
    /**
     * Creates a deep, memberwise clone of a node with no source map location.
     *
     * WARNING: This is an expensive operation and is only intended to be used in refactorings
     * and code fixes (because those are triggered by explicit user actions).
     */
    function getSynthesizedDeepClone<T extends Node>(node: T | undefined): T | undefined;
    /**
     * Sets EmitFlags to suppress leading and trailing trivia on the node.
     */
    function suppressLeadingAndTrailingTrivia(node: Node): void;
}
declare namespace ts {
    function createClassifier(): Classifier;
    function getSemanticClassifications(typeChecker: TypeChecker, cancellationToken: CancellationToken, sourceFile: SourceFile, classifiableNames: UnderscoreEscapedMap<true>, span: TextSpan): ClassifiedSpan[];
    function getEncodedSemanticClassifications(typeChecker: TypeChecker, cancellationToken: CancellationToken, sourceFile: SourceFile, classifiableNames: UnderscoreEscapedMap<true>, span: TextSpan): Classifications;
    function getSyntacticClassifications(cancellationToken: CancellationToken, sourceFile: SourceFile, span: TextSpan): ClassifiedSpan[];
    function getEncodedSyntacticClassifications(cancellationToken: CancellationToken, sourceFile: SourceFile, span: TextSpan): Classifications;
}
declare namespace ts.Completions.PathCompletions {
    function getStringLiteralCompletionsFromModuleNames(node: StringLiteral, compilerOptions: CompilerOptions, host: LanguageServiceHost, typeChecker: TypeChecker): CompletionEntry[];
    function getTripleSlashReferenceCompletion(sourceFile: SourceFile, position: number, compilerOptions: CompilerOptions, host: LanguageServiceHost): CompletionEntry[] | undefined;
}
declare namespace ts.Completions {
    type Log = (message: string) => void;
    function getCompletionsAtPosition(host: LanguageServiceHost, typeChecker: TypeChecker, log: Log, compilerOptions: CompilerOptions, sourceFile: SourceFile, position: number, allSourceFiles: ReadonlyArray<SourceFile>, options: GetCompletionsAtPositionOptions): CompletionInfo | undefined;
    interface CompletionEntryIdentifier {
        name: string;
        source?: string;
    }
    function getCompletionEntryDetails(typeChecker: TypeChecker, log: (message: string) => void, compilerOptions: CompilerOptions, sourceFile: SourceFile, position: number, entryId: CompletionEntryIdentifier, allSourceFiles: ReadonlyArray<SourceFile>, host: LanguageServiceHost, rulesProvider: formatting.RulesProvider): CompletionEntryDetails;
    function getCompletionEntrySymbol(typeChecker: TypeChecker, log: (message: string) => void, compilerOptions: CompilerOptions, sourceFile: SourceFile, position: number, entryId: CompletionEntryIdentifier, allSourceFiles: ReadonlyArray<SourceFile>): Symbol | undefined;
}
declare namespace ts.DocumentHighlights {
    function getDocumentHighlights(program: Program, cancellationToken: CancellationToken, sourceFile: SourceFile, position: number, sourceFilesToSearch: SourceFile[]): DocumentHighlights[] | undefined;
}
declare namespace ts {
    /**
     * The document registry represents a store of SourceFile objects that can be shared between
     * multiple LanguageService instances. A LanguageService instance holds on the SourceFile (AST)
     * of files in the context.
     * SourceFile objects account for most of the memory usage by the language service. Sharing
     * the same DocumentRegistry instance between different instances of LanguageService allow
     * for more efficient memory utilization since all projects will share at least the library
     * file (lib.d.ts).
     *
     * A more advanced use of the document registry is to serialize sourceFile objects to disk
     * and re-hydrate them when needed.
     *
     * To create a default DocumentRegistry, use createDocumentRegistry to create one, and pass it
     * to all subsequent createLanguageService calls.
     */
    interface DocumentRegistry {
        /**
         * Request a stored SourceFile with a given fileName and compilationSettings.
         * The first call to acquire will call createLanguageServiceSourceFile to generate
         * the SourceFile if was not found in the registry.
         *
         * @param fileName The name of the file requested
         * @param compilationSettings Some compilation settings like target affects the
         * shape of a the resulting SourceFile. This allows the DocumentRegistry to store
         * multiple copies of the same file for different compilation settings.
         * @parm scriptSnapshot Text of the file. Only used if the file was not found
         * in the registry and a new one was created.
         * @parm version Current version of the file. Only used if the file was not found
         * in the registry and a new one was created.
         */
        acquireDocument(fileName: string, compilationSettings: CompilerOptions, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind): SourceFile;
        acquireDocumentWithKey(fileName: string, path: Path, compilationSettings: CompilerOptions, key: DocumentRegistryBucketKey, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind): SourceFile;
        /**
         * Request an updated version of an already existing SourceFile with a given fileName
         * and compilationSettings. The update will in-turn call updateLanguageServiceSourceFile
         * to get an updated SourceFile.
         *
         * @param fileName The name of the file requested
         * @param compilationSettings Some compilation settings like target affects the
         * shape of a the resulting SourceFile. This allows the DocumentRegistry to store
         * multiple copies of the same file for different compilation settings.
         * @param scriptSnapshot Text of the file.
         * @param version Current version of the file.
         */
        updateDocument(fileName: string, compilationSettings: CompilerOptions, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind): SourceFile;
        updateDocumentWithKey(fileName: string, path: Path, compilationSettings: CompilerOptions, key: DocumentRegistryBucketKey, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind): SourceFile;
        getKeyForCompilationSettings(settings: CompilerOptions): DocumentRegistryBucketKey;
        /**
         * Informs the DocumentRegistry that a file is not needed any longer.
         *
         * Note: It is not allowed to call release on a SourceFile that was not acquired from
         * this registry originally.
         *
         * @param fileName The name of the file to be released
         * @param compilationSettings The compilation settings used to acquire the file
         */
        releaseDocument(fileName: string, compilationSettings: CompilerOptions): void;
        releaseDocumentWithKey(path: Path, key: DocumentRegistryBucketKey): void;
        reportStats(): string;
    }
    type DocumentRegistryBucketKey = string & {
        __bucketKey: any;
    };
    function createDocumentRegistry(useCaseSensitiveFileNames?: boolean, currentDirectory?: string): DocumentRegistry;
}
declare namespace ts.FindAllReferences {
    interface ImportsResult {
        /** For every import of the symbol, the location and local symbol for the import. */
        importSearches: [Identifier, Symbol][];
        /** For rename imports/exports `{ foo as bar }`, `foo` is not a local, so it may be added as a reference immediately without further searching. */
        singleReferences: Identifier[];
        /** List of source files that may (or may not) use the symbol via a namespace. (For UMD modules this is every file.) */
        indirectUsers: ReadonlyArray<SourceFile>;
    }
    type ImportTracker = (exportSymbol: Symbol, exportInfo: ExportInfo, isForRename: boolean) => ImportsResult;
    /** Creates the imports map and returns an ImportTracker that uses it. Call this lazily to avoid calling `getDirectImportsMap` unnecessarily.  */
    function createImportTracker(sourceFiles: ReadonlyArray<SourceFile>, checker: TypeChecker, cancellationToken: CancellationToken): ImportTracker;
    /** Info about an exported symbol to perform recursive search on. */
    interface ExportInfo {
        exportingModuleSymbol: Symbol;
        exportKind: ExportKind;
    }
    enum ExportKind {
        Named = 0,
        Default = 1,
        ExportEquals = 2,
    }
    enum ImportExport {
        Import = 0,
        Export = 1,
    }
    type ModuleReference = {
        kind: "import";
        literal: StringLiteral;
    } | {
        kind: "reference";
        referencingFile: SourceFile;
        ref: FileReference;
    };
    function findModuleReferences(program: Program, sourceFiles: ReadonlyArray<SourceFile>, searchModuleSymbol: Symbol): ModuleReference[];
    interface ImportedSymbol {
        kind: ImportExport.Import;
        symbol: Symbol;
        isNamedImport: boolean;
    }
    interface ExportedSymbol {
        kind: ImportExport.Export;
        symbol: Symbol;
        exportInfo: ExportInfo;
    }
    /**
     * Given a local reference, we might notice that it's an import/export and recursively search for references of that.
     * If at an import, look locally for the symbol it imports.
     * If an an export, look for all imports of it.
     * This doesn't handle export specifiers; that is done in `getReferencesAtExportSpecifier`.
     * @param comingFromExport If we are doing a search for all exports, don't bother looking backwards for the imported symbol, since that's the reason we're here.
     */
    function getImportOrExportSymbol(node: Node, symbol: Symbol, checker: TypeChecker, comingFromExport: boolean): ImportedSymbol | ExportedSymbol | undefined;
    function getExportInfo(exportSymbol: Symbol, exportKind: ExportKind, checker: TypeChecker): ExportInfo | undefined;
}
declare namespace ts.FindAllReferences {
    interface SymbolAndEntries {
        definition: Definition | undefined;
        references: Entry[];
    }
    type Definition = {
        type: "symbol";
        symbol: Symbol;
        node: Node;
    } | {
        type: "label";
        node: Identifier;
    } | {
        type: "keyword";
        node: ts.Node;
    } | {
        type: "this";
        node: ts.Node;
    } | {
        type: "string";
        node: ts.StringLiteral;
    };
    type Entry = NodeEntry | SpanEntry;
    interface NodeEntry {
        type: "node";
        node: Node;
        isInString?: true;
    }
    interface SpanEntry {
        type: "span";
        fileName: string;
        textSpan: TextSpan;
    }
    function nodeEntry(node: ts.Node, isInString?: true): NodeEntry;
    interface Options {
        readonly findInStrings?: boolean;
        readonly findInComments?: boolean;
        /**
         * True if we are renaming the symbol.
         * If so, we will find fewer references -- if it is referenced by several different names, we sill only find references for the original name.
         */
        readonly isForRename?: boolean;
        /** True if we are searching for implementations. We will have a different method of adding references if so. */
        readonly implementations?: boolean;
    }
    function findReferencedSymbols(program: Program, cancellationToken: CancellationToken, sourceFiles: ReadonlyArray<SourceFile>, sourceFile: SourceFile, position: number): ReferencedSymbol[] | undefined;
    function getImplementationsAtPosition(program: Program, cancellationToken: CancellationToken, sourceFiles: ReadonlyArray<SourceFile>, sourceFile: SourceFile, position: number): ImplementationLocation[];
    function findReferencedEntries(program: Program, cancellationToken: CancellationToken, sourceFiles: ReadonlyArray<SourceFile>, sourceFile: SourceFile, position: number, options?: Options): ReferenceEntry[] | undefined;
    function getReferenceEntriesForNode(node: Node, program: Program, sourceFiles: ReadonlyArray<SourceFile>, cancellationToken: CancellationToken, options?: Options): Entry[] | undefined;
    function toHighlightSpan(entry: FindAllReferences.Entry): {
        fileName: string;
        span: HighlightSpan;
    };
}
/** Encapsulates the core find-all-references algorithm. */
declare namespace ts.FindAllReferences.Core {
    /** Core find-all-references algorithm. Handles special cases before delegating to `getReferencedSymbolsForSymbol`. */
    function getReferencedSymbolsForNode(node: Node, program: Program, sourceFiles: ReadonlyArray<SourceFile>, cancellationToken: CancellationToken, options?: Options): SymbolAndEntries[] | undefined;
    function getReferenceEntriesForShorthandPropertyAssignment(node: Node, checker: TypeChecker, addReference: (node: Node) => void): void;
}
declare namespace ts.GoToDefinition {
    function getDefinitionAtPosition(program: Program, sourceFile: SourceFile, position: number): DefinitionInfo[];
    function getTypeDefinitionAtPosition(typeChecker: TypeChecker, sourceFile: SourceFile, position: number): DefinitionInfo[];
    function getDefinitionAndBoundSpan(program: Program, sourceFile: SourceFile, position: number): DefinitionInfoAndBoundSpan;
}
declare namespace ts.JsDoc {
    function getJsDocCommentsFromDeclarations(declarations?: Declaration[]): SymbolDisplayPart[];
    function getJsDocTagsFromDeclarations(declarations?: Declaration[]): JSDocTagInfo[];
    function getJSDocTagNameCompletions(): CompletionEntry[];
    const getJSDocTagNameCompletionDetails: typeof getJSDocTagCompletionDetails;
    function getJSDocTagCompletions(): CompletionEntry[];
    function getJSDocTagCompletionDetails(name: string): CompletionEntryDetails;
    function getJSDocParameterNameCompletions(tag: JSDocParameterTag): CompletionEntry[];
    function getJSDocParameterNameCompletionDetails(name: string): CompletionEntryDetails;
    /**
     * Checks if position points to a valid position to add JSDoc comments, and if so,
     * returns the appropriate template. Otherwise returns an empty string.
     * Valid positions are
     *      - outside of comments, statements, and expressions, and
     *      - preceding a:
     *          - function/constructor/method declaration
     *          - class declarations
     *          - variable statements
     *          - namespace declarations
     *
     * Hosts should ideally check that:
     * - The line is all whitespace up to 'position' before performing the insertion.
     * - If the keystroke sequence "/\*\*" induced the call, we also check that the next
     * non-whitespace character is '*', which (approximately) indicates whether we added
     * the second '*' to complete an existing (JSDoc) comment.
     * @param fileName The file in which to perform the check.
     * @param position The (character-indexed) position in the file where the check should
     * be performed.
     */
    function getDocCommentTemplateAtPosition(newLine: string, sourceFile: SourceFile, position: number): TextInsertion;
}
declare namespace ts.JsTyping {
    interface TypingResolutionHost {
        directoryExists(path: string): boolean;
        fileExists(fileName: string): boolean;
        readFile(path: string, encoding?: string): string | undefined;
        readDirectory(rootDir: string, extensions: ReadonlyArray<string>, excludes: ReadonlyArray<string>, includes: ReadonlyArray<string>, depth?: number): string[];
    }
    const nodeCoreModuleList: ReadonlyArray<string>;
    /**
     * A map of loose file names to library names that we are confident require typings
     */
    type SafeList = ReadonlyMap<string>;
    function loadSafeList(host: TypingResolutionHost, safeListPath: Path): SafeList;
    function loadTypesMap(host: TypingResolutionHost, typesMapPath: Path): SafeList | undefined;
    /**
     * @param host is the object providing I/O related operations.
     * @param fileNames are the file names that belong to the same project
     * @param projectRootPath is the path to the project root directory
     * @param safeListPath is the path used to retrieve the safe list
     * @param packageNameToTypingLocation is the map of package names to their cached typing locations
     * @param typeAcquisition is used to customize the typing acquisition process
     * @param compilerOptions are used as a source for typing inference
     */
    function discoverTypings(host: TypingResolutionHost, log: ((message: string) => void) | undefined, fileNames: string[], projectRootPath: Path, safeList: SafeList, packageNameToTypingLocation: ReadonlyMap<string>, typeAcquisition: TypeAcquisition, unresolvedImports: ReadonlyArray<string>): {
        cachedTypingPaths: string[];
        newTypingNames: string[];
        filesToWatch: string[];
    };
    enum PackageNameValidationResult {
        Ok = 0,
        ScopedPackagesNotSupported = 1,
        EmptyName = 2,
        NameTooLong = 3,
        NameStartsWithDot = 4,
        NameStartsWithUnderscore = 5,
        NameContainsNonURISafeCharacters = 6,
    }
    /**
     * Validates package name using rules defined at https://docs.npmjs.com/files/package.json
     */
    function validatePackageName(packageName: string): PackageNameValidationResult;
    function renderPackageNameValidationFailure(result: PackageNameValidationResult, typing: string): string;
}
declare namespace ts.NavigateTo {
    function getNavigateToItems(sourceFiles: ReadonlyArray<SourceFile>, checker: TypeChecker, cancellationToken: CancellationToken, searchValue: string, maxResultCount: number, excludeDtsFiles: boolean): NavigateToItem[];
}
declare namespace ts.NavigationBar {
    function getNavigationBarItems(sourceFile: SourceFile, cancellationToken: CancellationToken): NavigationBarItem[];
    function getNavigationTree(sourceFile: SourceFile, cancellationToken: CancellationToken): NavigationTree;
}
declare namespace ts.OutliningElementsCollector {
    function collectElements(sourceFile: SourceFile, cancellationToken: CancellationToken): OutliningSpan[];
}
declare namespace ts {
    enum PatternMatchKind {
        exact = 0,
        prefix = 1,
        substring = 2,
        camelCase = 3,
    }
    interface PatternMatch {
        kind: PatternMatchKind;
        camelCaseWeight?: number;
        isCaseSensitive: boolean;
        punctuationStripped: boolean;
    }
    interface PatternMatcher {
        getMatchesForLastSegmentOfPattern(candidate: string): PatternMatch[];
        getMatches(candidateContainers: string[], candidate: string): PatternMatch[] | undefined;
        patternContainsDots: boolean;
    }
    function createPatternMatcher(pattern: string): PatternMatcher;
    function breakIntoCharacterSpans(identifier: string): TextSpan[];
    function breakIntoWordSpans(identifier: string): TextSpan[];
}
declare namespace ts {
    function preProcessFile(sourceText: string, readImportFiles?: boolean, detectJavaScriptImports?: boolean): PreProcessedFileInfo;
}
declare namespace ts.Rename {
    function getRenameInfo(typeChecker: TypeChecker, defaultLibFileName: string, getCanonicalFileName: (fileName: string) => string, sourceFile: SourceFile, position: number): RenameInfo;
}
declare namespace ts.SignatureHelp {
    enum ArgumentListKind {
        TypeArguments = 0,
        CallArguments = 1,
        TaggedTemplateArguments = 2,
        JSXAttributesArguments = 3,
    }
    interface ArgumentListInfo {
        kind: ArgumentListKind;
        invocation: CallLikeExpression;
        argumentsSpan: TextSpan;
        argumentIndex?: number;
        /** argumentCount is the *apparent* number of arguments. */
        argumentCount: number;
    }
    function getSignatureHelpItems(program: Program, sourceFile: SourceFile, position: number, cancellationToken: CancellationToken): SignatureHelpItems;
    /**
     * Returns relevant information for the argument list and the current argument if we are
     * in the argument of an invocation; returns undefined otherwise.
     */
    function getImmediatelyContainingArgumentInfo(node: Node, position: number, sourceFile: SourceFile): ArgumentListInfo;
    function getContainingArgumentInfo(node: Node, position: number, sourceFile: SourceFile): ArgumentListInfo;
}
declare namespace ts.SymbolDisplay {
    function getSymbolKind(typeChecker: TypeChecker, symbol: Symbol, location: Node): ScriptElementKind;
    function getSymbolModifiers(symbol: Symbol): string;
    interface SymbolDisplayPartsDocumentationAndSymbolKind {
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
        symbolKind: ScriptElementKind;
        tags: JSDocTagInfo[];
    }
    function getSymbolDisplayPartsDocumentationAndSymbolKind(typeChecker: TypeChecker, symbol: Symbol, sourceFile: SourceFile, enclosingDeclaration: Node, location: Node, semanticMeaning?: SemanticMeaning): SymbolDisplayPartsDocumentationAndSymbolKind;
}
declare namespace ts {
    interface TranspileOptions {
        compilerOptions?: CompilerOptions;
        fileName?: string;
        reportDiagnostics?: boolean;
        moduleName?: string;
        renamedDependencies?: MapLike<string>;
        transformers?: CustomTransformers;
    }
    interface TranspileOutput {
        outputText: string;
        diagnostics?: Diagnostic[];
        sourceMapText?: string;
    }
    function transpileModule(input: string, transpileOptions: TranspileOptions): TranspileOutput;
    function transpile(input: string, compilerOptions?: CompilerOptions, fileName?: string, diagnostics?: Diagnostic[], moduleName?: string): string;
    /** JS users may pass in string values for enum compiler options (such as ModuleKind), so convert. */
    function fixupCompilerOptions(options: CompilerOptions, diagnostics: Diagnostic[]): CompilerOptions;
}
declare namespace ts.formatting {
    interface FormattingScanner {
        advance(): void;
        isOnToken(): boolean;
        readTokenInfo(n: Node): TokenInfo;
        getCurrentLeadingTrivia(): TextRangeWithKind[];
        lastTrailingTriviaWasNewLine(): boolean;
        skipToEndOf(node: Node): void;
    }
    function getFormattingScanner<T>(text: string, languageVariant: LanguageVariant, startPos: number, endPos: number, cb: (scanner: FormattingScanner) => T): T;
}
declare namespace ts.formatting {
    class FormattingContext {
        readonly sourceFile: SourceFileLike;
        formattingRequestKind: FormattingRequestKind;
        options: ts.FormatCodeSettings;
        currentTokenSpan: TextRangeWithKind;
        nextTokenSpan: TextRangeWithKind;
        contextNode: Node;
        currentTokenParent: Node;
        nextTokenParent: Node;
        private contextNodeAllOnSameLine;
        private nextNodeAllOnSameLine;
        private tokensAreOnSameLine;
        private contextNodeBlockIsOnOneLine;
        private nextNodeBlockIsOnOneLine;
        constructor(sourceFile: SourceFileLike, formattingRequestKind: FormattingRequestKind, options: ts.FormatCodeSettings);
        updateContext(currentRange: TextRangeWithKind, currentTokenParent: Node, nextRange: TextRangeWithKind, nextTokenParent: Node, commonParent: Node): void;
        ContextNodeAllOnSameLine(): boolean;
        NextNodeAllOnSameLine(): boolean;
        TokensAreOnSameLine(): boolean;
        ContextNodeBlockIsOnOneLine(): boolean;
        NextNodeBlockIsOnOneLine(): boolean;
        private NodeIsOnOneLine(node);
        private BlockIsOnOneLine(node);
    }
}
declare namespace ts.formatting {
    enum FormattingRequestKind {
        FormatDocument = 0,
        FormatSelection = 1,
        FormatOnEnter = 2,
        FormatOnSemicolon = 3,
        FormatOnOpeningCurlyBrace = 4,
        FormatOnClosingCurlyBrace = 5,
    }
}
declare namespace ts.formatting {
    class Rule {
        readonly Descriptor: RuleDescriptor;
        readonly Operation: RuleOperation;
        readonly Flag: RuleFlags;
        debugName?: string;
        constructor(Descriptor: RuleDescriptor, Operation: RuleOperation, Flag?: RuleFlags);
    }
}
declare namespace ts.formatting {
    enum RuleAction {
        Ignore = 1,
        Space = 2,
        NewLine = 4,
        Delete = 8,
    }
}
declare namespace ts.formatting {
    class RuleDescriptor {
        LeftTokenRange: Shared.TokenRange;
        RightTokenRange: Shared.TokenRange;
        constructor(LeftTokenRange: Shared.TokenRange, RightTokenRange: Shared.TokenRange);
        toString(): string;
        static create1(left: SyntaxKind, right: SyntaxKind): RuleDescriptor;
        static create2(left: Shared.TokenRange, right: SyntaxKind): RuleDescriptor;
        static create3(left: SyntaxKind, right: Shared.TokenRange): RuleDescriptor;
        static create4(left: Shared.TokenRange, right: Shared.TokenRange): RuleDescriptor;
    }
}
declare namespace ts.formatting {
    enum RuleFlags {
        None = 0,
        CanDeleteNewLines = 1,
    }
}
declare namespace ts.formatting {
    class RuleOperation {
        Context: RuleOperationContext;
        Action: RuleAction;
        constructor(Context: RuleOperationContext, Action: RuleAction);
        toString(): string;
        static create1(action: RuleAction): RuleOperation;
        static create2(context: RuleOperationContext, action: RuleAction): RuleOperation;
    }
}
declare namespace ts.formatting {
    class RuleOperationContext {
        private readonly customContextChecks;
        constructor(...funcs: ((context: FormattingContext) => boolean)[]);
        static readonly Any: RuleOperationContext;
        IsAny(): boolean;
        InContext(context: FormattingContext): boolean;
    }
}
declare namespace ts.formatting {
    class Rules {
        IgnoreBeforeComment: Rule;
        IgnoreAfterLineComment: Rule;
        NoSpaceBeforeSemicolon: Rule;
        NoSpaceBeforeColon: Rule;
        NoSpaceBeforeQuestionMark: Rule;
        SpaceAfterColon: Rule;
        SpaceAfterQuestionMarkInConditionalOperator: Rule;
        NoSpaceAfterQuestionMark: Rule;
        SpaceAfterSemicolon: Rule;
        SpaceAfterCloseBrace: Rule;
        SpaceBetweenCloseBraceAndElse: Rule;
        SpaceBetweenCloseBraceAndWhile: Rule;
        NoSpaceAfterCloseBrace: Rule;
        NoSpaceBeforeDot: Rule;
        NoSpaceAfterDot: Rule;
        NoSpaceBeforeOpenBracket: Rule;
        NoSpaceAfterCloseBracket: Rule;
        SpaceAfterOpenBrace: Rule;
        SpaceBeforeCloseBrace: Rule;
        NoSpaceAfterOpenBrace: Rule;
        NoSpaceBeforeCloseBrace: Rule;
        NoSpaceBetweenEmptyBraceBrackets: Rule;
        NewLineAfterOpenBraceInBlockContext: Rule;
        NewLineBeforeCloseBraceInBlockContext: Rule;
        NoSpaceAfterUnaryPrefixOperator: Rule;
        NoSpaceAfterUnaryPreincrementOperator: Rule;
        NoSpaceAfterUnaryPredecrementOperator: Rule;
        NoSpaceBeforeUnaryPostincrementOperator: Rule;
        NoSpaceBeforeUnaryPostdecrementOperator: Rule;
        SpaceAfterPostincrementWhenFollowedByAdd: Rule;
        SpaceAfterAddWhenFollowedByUnaryPlus: Rule;
        SpaceAfterAddWhenFollowedByPreincrement: Rule;
        SpaceAfterPostdecrementWhenFollowedBySubtract: Rule;
        SpaceAfterSubtractWhenFollowedByUnaryMinus: Rule;
        SpaceAfterSubtractWhenFollowedByPredecrement: Rule;
        NoSpaceBeforeComma: Rule;
        SpaceAfterCertainKeywords: Rule;
        NoSpaceAfterNewKeywordOnConstructorSignature: Rule;
        SpaceAfterLetConstInVariableDeclaration: Rule;
        NoSpaceBeforeOpenParenInFuncCall: Rule;
        SpaceAfterFunctionInFuncDecl: Rule;
        SpaceBeforeOpenParenInFuncDecl: Rule;
        NoSpaceBeforeOpenParenInFuncDecl: Rule;
        SpaceAfterVoidOperator: Rule;
        NoSpaceBetweenReturnAndSemicolon: Rule;
        SpaceBetweenStatements: Rule;
        SpaceAfterTryFinally: Rule;
        SpaceAfterGetSetInMember: Rule;
        SpaceBeforeBinaryKeywordOperator: Rule;
        SpaceAfterBinaryKeywordOperator: Rule;
        SpaceAfterConstructor: Rule;
        NoSpaceAfterConstructor: Rule;
        NoSpaceAfterModuleImport: Rule;
        SpaceAfterCertainTypeScriptKeywords: Rule;
        SpaceBeforeCertainTypeScriptKeywords: Rule;
        SpaceAfterModuleName: Rule;
        SpaceBeforeArrow: Rule;
        SpaceAfterArrow: Rule;
        NoSpaceAfterEllipsis: Rule;
        NoSpaceAfterOptionalParameters: Rule;
        NoSpaceBeforeOpenAngularBracket: Rule;
        NoSpaceBetweenCloseParenAndAngularBracket: Rule;
        NoSpaceAfterOpenAngularBracket: Rule;
        NoSpaceBeforeCloseAngularBracket: Rule;
        NoSpaceAfterCloseAngularBracket: Rule;
        NoSpaceBetweenEmptyInterfaceBraceBrackets: Rule;
        HighPriorityCommonRules: Rule[];
        UserConfigurableRules: Rule[];
        LowPriorityCommonRules: Rule[];
        SpaceAfterComma: Rule;
        NoSpaceAfterComma: Rule;
        SpaceBeforeBinaryOperator: Rule;
        SpaceAfterBinaryOperator: Rule;
        NoSpaceBeforeBinaryOperator: Rule;
        NoSpaceAfterBinaryOperator: Rule;
        SpaceAfterKeywordInControl: Rule;
        NoSpaceAfterKeywordInControl: Rule;
        FunctionOpenBraceLeftTokenRange: Shared.TokenRange;
        SpaceBeforeOpenBraceInFunction: Rule;
        NewLineBeforeOpenBraceInFunction: Rule;
        TypeScriptOpenBraceLeftTokenRange: Shared.TokenRange;
        SpaceBeforeOpenBraceInTypeScriptDeclWithBlock: Rule;
        NewLineBeforeOpenBraceInTypeScriptDeclWithBlock: Rule;
        ControlOpenBraceLeftTokenRange: Shared.TokenRange;
        SpaceBeforeOpenBraceInControl: Rule;
        NewLineBeforeOpenBraceInControl: Rule;
        SpaceAfterSemicolonInFor: Rule;
        NoSpaceAfterSemicolonInFor: Rule;
        SpaceAfterOpenParen: Rule;
        SpaceBeforeCloseParen: Rule;
        SpaceBetweenOpenParens: Rule;
        NoSpaceBetweenParens: Rule;
        NoSpaceAfterOpenParen: Rule;
        NoSpaceBeforeCloseParen: Rule;
        SpaceAfterOpenBracket: Rule;
        SpaceBeforeCloseBracket: Rule;
        NoSpaceBetweenBrackets: Rule;
        NoSpaceAfterOpenBracket: Rule;
        NoSpaceBeforeCloseBracket: Rule;
        SpaceAfterAnonymousFunctionKeyword: Rule;
        NoSpaceAfterAnonymousFunctionKeyword: Rule;
        SpaceBeforeAt: Rule;
        NoSpaceAfterAt: Rule;
        SpaceAfterDecorator: Rule;
        NoSpaceBetweenFunctionKeywordAndStar: Rule;
        SpaceAfterStarInGeneratorDeclaration: Rule;
        NoSpaceBetweenYieldKeywordAndStar: Rule;
        SpaceBetweenYieldOrYieldStarAndOperand: Rule;
        SpaceBetweenAsyncAndOpenParen: Rule;
        SpaceBetweenAsyncAndFunctionKeyword: Rule;
        NoSpaceBetweenTagAndTemplateString: Rule;
        NoSpaceAfterTemplateHeadAndMiddle: Rule;
        SpaceAfterTemplateHeadAndMiddle: Rule;
        NoSpaceBeforeTemplateMiddleAndTail: Rule;
        SpaceBeforeTemplateMiddleAndTail: Rule;
        NoSpaceAfterOpenBraceInJsxExpression: Rule;
        SpaceAfterOpenBraceInJsxExpression: Rule;
        NoSpaceBeforeCloseBraceInJsxExpression: Rule;
        SpaceBeforeCloseBraceInJsxExpression: Rule;
        SpaceBeforeJsxAttribute: Rule;
        SpaceBeforeSlashInJsxOpeningElement: Rule;
        NoSpaceBeforeGreaterThanTokenInJsxOpeningElement: Rule;
        NoSpaceBeforeEqualInJsxAttribute: Rule;
        NoSpaceAfterEqualInJsxAttribute: Rule;
        NoSpaceAfterTypeAssertion: Rule;
        SpaceAfterTypeAssertion: Rule;
        NoSpaceBeforeNonNullAssertionOperator: Rule;
        constructor();
        static IsOptionEnabled(optionName: keyof FormatCodeSettings): (context: FormattingContext) => boolean;
        static IsOptionDisabled(optionName: keyof FormatCodeSettings): (context: FormattingContext) => boolean;
        static IsOptionDisabledOrUndefined(optionName: keyof FormatCodeSettings): (context: FormattingContext) => boolean;
        static isOptionDisabledOrUndefinedOrTokensOnSameLine(optionName: keyof FormatCodeSettings): (context: FormattingContext) => boolean;
        static IsOptionEnabledOrUndefined(optionName: keyof FormatCodeSettings): (context: FormattingContext) => boolean;
        static IsForContext(context: FormattingContext): boolean;
        static IsNotForContext(context: FormattingContext): boolean;
        static IsBinaryOpContext(context: FormattingContext): boolean;
        static IsNotBinaryOpContext(context: FormattingContext): boolean;
        static IsConditionalOperatorContext(context: FormattingContext): boolean;
        static IsSameLineTokenOrBeforeBlockContext(context: FormattingContext): boolean;
        static IsBraceWrappedContext(context: FormattingContext): boolean;
        static IsBeforeMultilineBlockContext(context: FormattingContext): boolean;
        static IsMultilineBlockContext(context: FormattingContext): boolean;
        static IsSingleLineBlockContext(context: FormattingContext): boolean;
        static IsBlockContext(context: FormattingContext): boolean;
        static IsBeforeBlockContext(context: FormattingContext): boolean;
        static NodeIsBlockContext(node: Node): boolean;
        static IsFunctionDeclContext(context: FormattingContext): boolean;
        static IsFunctionDeclarationOrFunctionExpressionContext(context: FormattingContext): boolean;
        static IsTypeScriptDeclWithBlockContext(context: FormattingContext): boolean;
        static NodeIsTypeScriptDeclWithBlockContext(node: Node): boolean;
        static IsAfterCodeBlockContext(context: FormattingContext): boolean;
        static IsControlDeclContext(context: FormattingContext): boolean;
        static IsObjectContext(context: FormattingContext): boolean;
        static IsFunctionCallContext(context: FormattingContext): boolean;
        static IsNewContext(context: FormattingContext): boolean;
        static IsFunctionCallOrNewContext(context: FormattingContext): boolean;
        static IsPreviousTokenNotComma(context: FormattingContext): boolean;
        static IsNextTokenNotCloseBracket(context: FormattingContext): boolean;
        static IsArrowFunctionContext(context: FormattingContext): boolean;
        static IsNonJsxSameLineTokenContext(context: FormattingContext): boolean;
        static IsNonJsxElementContext(context: FormattingContext): boolean;
        static IsJsxExpressionContext(context: FormattingContext): boolean;
        static IsNextTokenParentJsxAttribute(context: FormattingContext): boolean;
        static IsJsxAttributeContext(context: FormattingContext): boolean;
        static IsJsxSelfClosingElementContext(context: FormattingContext): boolean;
        static IsNotBeforeBlockInFunctionDeclarationContext(context: FormattingContext): boolean;
        static IsEndOfDecoratorContextOnSameLine(context: FormattingContext): boolean;
        static NodeIsInDecoratorContext(node: Node): boolean;
        static IsStartOfVariableDeclarationList(context: FormattingContext): boolean;
        static IsNotFormatOnEnter(context: FormattingContext): boolean;
        static IsModuleDeclContext(context: FormattingContext): boolean;
        static IsObjectTypeContext(context: FormattingContext): boolean;
        static IsConstructorSignatureContext(context: FormattingContext): boolean;
        static IsTypeArgumentOrParameterOrAssertion(token: TextRangeWithKind, parent: Node): boolean;
        static IsTypeArgumentOrParameterOrAssertionContext(context: FormattingContext): boolean;
        static IsTypeAssertionContext(context: FormattingContext): boolean;
        static IsVoidOpContext(context: FormattingContext): boolean;
        static IsYieldOrYieldStarWithOperand(context: FormattingContext): boolean;
        static IsNonNullAssertionContext(context: FormattingContext): boolean;
    }
}
declare namespace ts.formatting {
    class RulesMap {
        map: RulesBucket[];
        mapRowLength: number;
        constructor(rules: ReadonlyArray<Rule>);
        private GetRuleBucketIndex(row, column);
        private FillRule(rule, rulesBucketConstructionStateList);
        GetRule(context: FormattingContext): Rule | undefined;
    }
    enum RulesPosition {
        IgnoreRulesSpecific = 0,
        IgnoreRulesAny,
        ContextRulesSpecific,
        ContextRulesAny,
        NoContextRulesSpecific,
        NoContextRulesAny,
    }
    class RulesBucketConstructionState {
        private rulesInsertionIndexBitmap;
        constructor();
        GetInsertionIndex(maskPosition: RulesPosition): number;
        IncreaseInsertionIndex(maskPosition: RulesPosition): void;
    }
    class RulesBucket {
        private rules;
        constructor();
        Rules(): Rule[];
        AddRule(rule: Rule, specificTokens: boolean, constructionState: RulesBucketConstructionState[], rulesBucketIndex: number): void;
    }
}
declare namespace ts.formatting {
    namespace Shared {
        interface TokenRange {
            GetTokens(): SyntaxKind[];
            Contains(token: SyntaxKind): boolean;
            isSpecific(): boolean;
        }
        namespace TokenRange {
            function FromToken(token: SyntaxKind): TokenRange;
            function FromTokens(tokens: SyntaxKind[]): TokenRange;
            function FromRange(from: SyntaxKind, to: SyntaxKind, except?: SyntaxKind[]): TokenRange;
            function AnyExcept(token: SyntaxKind): TokenRange;
            const Any: TokenRange;
            const AnyIncludingMultilineComments: TokenRange;
            const Keywords: TokenRange;
            const BinaryOperators: TokenRange;
            const BinaryKeywordOperators: TokenRange;
            const UnaryPrefixOperators: TokenRange;
            const UnaryPrefixExpressions: TokenRange;
            const UnaryPreincrementExpressions: TokenRange;
            const UnaryPostincrementExpressions: TokenRange;
            const UnaryPredecrementExpressions: TokenRange;
            const UnaryPostdecrementExpressions: TokenRange;
            const Comments: TokenRange;
            const TypeNames: TokenRange;
        }
    }
}
declare namespace ts.formatting {
    class RulesProvider {
        private globalRules;
        private options;
        private rulesMap;
        constructor();
        getRulesMap(): RulesMap;
        getFormatOptions(): Readonly<ts.FormatCodeSettings>;
        ensureUpToDate(options: ts.FormatCodeSettings): void;
    }
}
declare namespace ts.formatting {
    interface TextRangeWithKind extends TextRange {
        kind: SyntaxKind;
    }
    interface TokenInfo {
        leadingTrivia: TextRangeWithKind[];
        token: TextRangeWithKind;
        trailingTrivia: TextRangeWithKind[];
    }
    function formatOnEnter(position: number, sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function formatOnSemicolon(position: number, sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function formatOnOpeningCurly(position: number, sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function formatOnClosingCurly(position: number, sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function formatDocument(sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function formatSelection(start: number, end: number, sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function formatNodeGivenIndentation(node: Node, sourceFileLike: SourceFileLike, languageVariant: LanguageVariant, initialIndentation: number, delta: number, rulesProvider: RulesProvider): TextChange[];
    /**
     * @param precedingToken pass `null` if preceding token was already computed and result was `undefined`.
     */
    function getRangeOfEnclosingComment(sourceFile: SourceFile, position: number, onlyMultiLine: boolean, precedingToken?: Node | null, tokenAtPosition?: Node, predicate?: (c: CommentRange) => boolean): CommentRange | undefined;
    function getIndentationString(indentation: number, options: EditorSettings): string;
}
declare namespace ts.formatting {
    namespace SmartIndenter {
        /**
         * @param assumeNewLineBeforeCloseBrace
         * `false` when called on text from a real source file.
         * `true` when we need to assume `position` is on a newline.
         *
         * This is useful for codefixes. Consider
         * ```
         * function f() {
         * |}
         * ```
         * with `position` at `|`.
         *
         * When inserting some text after an open brace, we would like to get indentation as if a newline was already there.
         * By default indentation at `position` will be 0 so 'assumeNewLineBeforeCloseBrace' overrides this behavior.
         */
        function getIndentation(position: number, sourceFile: SourceFile, options: EditorSettings, assumeNewLineBeforeCloseBrace?: boolean): number;
        function getIndentationForNode(n: Node, ignoreActualIndentationRange: TextRange, sourceFile: SourceFile, options: EditorSettings): number;
        function getBaseIndentation(options: EditorSettings): number;
        function isArgumentAndStartLineOverlapsExpressionBeingCalled(parent: Node, child: Node, childStartLine: number, sourceFile: SourceFileLike): boolean;
        function childStartsOnTheSameLineWithElseInIfStatement(parent: Node, child: TextRangeWithKind, childStartLine: number, sourceFile: SourceFileLike): boolean;
        function getContainingList(node: Node, sourceFile: SourceFile): NodeArray<Node>;
        /**
         * Character is the actual index of the character since the beginning of the line.
         * Column - position of the character after expanding tabs to spaces.
         * "0\t2$"
         * value of 'character' for '$' is 3
         * value of 'column' for '$' is 6 (assuming that tab size is 4)
         */
        function findFirstNonWhitespaceCharacterAndColumn(startPos: number, endPos: number, sourceFile: SourceFileLike, options: EditorSettings): {
            column: number;
            character: number;
        };
        function findFirstNonWhitespaceColumn(startPos: number, endPos: number, sourceFile: SourceFileLike, options: EditorSettings): number;
        function nodeWillIndentChild(parent: TextRangeWithKind, child: TextRangeWithKind, indentByDefault: boolean): boolean;
        function shouldIndentChildNode(parent: TextRangeWithKind, child?: TextRangeWithKind): boolean;
    }
}
declare namespace ts.textChanges {
    interface ConfigurableStart {
        useNonAdjustedStartPosition?: boolean;
    }
    interface ConfigurableEnd {
        useNonAdjustedEndPosition?: boolean;
    }
    enum Position {
        FullStart = 0,
        Start = 1,
    }
    /**
     * Usually node.pos points to a position immediately after the previous token.
     * If this position is used as a beginning of the span to remove - it might lead to removing the trailing trivia of the previous node, i.e:
     * const x; // this is x
     *        ^ - pos for the next variable declaration will point here
     * const y; // this is y
     *        ^ - end for previous variable declaration
     * Usually leading trivia of the variable declaration 'y' should not include trailing trivia (whitespace, comment 'this is x' and newline) from the preceding
     * variable declaration and trailing trivia for 'y' should include (whitespace, comment 'this is y', newline).
     * By default when removing nodes we adjust start and end positions to respect specification of the trivia above.
     * If pos\end should be interpreted literally 'useNonAdjustedStartPosition' or 'useNonAdjustedEndPosition' should be set to true
     */
    type ConfigurableStartEnd = ConfigurableStart & ConfigurableEnd;
    interface InsertNodeOptions {
        /**
         * Text to be inserted before the new node
         */
        prefix?: string;
        /**
         * Text to be inserted after the new node
         */
        suffix?: string;
        /**
         * Text of inserted node will be formatted with this indentation, otherwise indentation will be inferred from the old node
         */
        indentation?: number;
        /**
         * Text of inserted node will be formatted with this delta, otherwise delta will be inferred from the new node kind
         */
        delta?: number;
    }
    interface ChangeNodeOptions extends ConfigurableStartEnd, InsertNodeOptions {
        readonly useIndentationFromFile?: boolean;
    }
    interface ChangeMultipleNodesOptions extends ChangeNodeOptions {
        nodeSeparator: string;
    }
    function getSeparatorCharacter(separator: Token<SyntaxKind.CommaToken | SyntaxKind.SemicolonToken>): string;
    function getAdjustedStartPosition(sourceFile: SourceFile, node: Node, options: ConfigurableStart, position: Position): number;
    function getAdjustedEndPosition(sourceFile: SourceFile, node: Node, options: ConfigurableEnd): number;
    interface TextChangesContext {
        newLineCharacter: string;
        rulesProvider: formatting.RulesProvider;
    }
    class ChangeTracker {
        private readonly newLine;
        private readonly rulesProvider;
        private readonly validator;
        private changes;
        private readonly newLineCharacter;
        static fromContext(context: TextChangesContext): ChangeTracker;
        static with(context: TextChangesContext, cb: (tracker: ChangeTracker) => void): FileTextChanges[];
        constructor(newLine: NewLineKind, rulesProvider: formatting.RulesProvider, validator?: (text: NonFormattedText) => void);
        deleteRange(sourceFile: SourceFile, range: TextRange): this;
        deleteNode(sourceFile: SourceFile, node: Node, options?: ConfigurableStartEnd): this;
        deleteNodeRange(sourceFile: SourceFile, startNode: Node, endNode: Node, options?: ConfigurableStartEnd): this;
        deleteNodeInList(sourceFile: SourceFile, node: Node): this;
        replaceRange(sourceFile: SourceFile, range: TextRange, newNode: Node, options?: InsertNodeOptions): this;
        replaceNode(sourceFile: SourceFile, oldNode: Node, newNode: Node, options?: ChangeNodeOptions): this;
        replaceNodeRange(sourceFile: SourceFile, startNode: Node, endNode: Node, newNode: Node, options?: ChangeNodeOptions): this;
        private replaceWithSingle(sourceFile, startPosition, endPosition, newNode, options);
        private replaceWithMultiple(sourceFile, startPosition, endPosition, newNodes, options);
        replaceNodeWithNodes(sourceFile: SourceFile, oldNode: Node, newNodes: ReadonlyArray<Node>, options: ChangeMultipleNodesOptions): this;
        replaceNodesWithNodes(sourceFile: SourceFile, oldNodes: ReadonlyArray<Node>, newNodes: ReadonlyArray<Node>, options: ChangeMultipleNodesOptions): this;
        replaceRangeWithNodes(sourceFile: SourceFile, range: TextRange, newNodes: ReadonlyArray<Node>, options: ChangeMultipleNodesOptions): this;
        replaceNodeRangeWithNodes(sourceFile: SourceFile, startNode: Node, endNode: Node, newNodes: ReadonlyArray<Node>, options: ChangeMultipleNodesOptions): this;
        insertNodeAt(sourceFile: SourceFile, pos: number, newNode: Node, options?: InsertNodeOptions): this;
        insertNodeBefore(sourceFile: SourceFile, before: Node, newNode: Node, options?: InsertNodeOptions & ConfigurableStart): this;
        insertNodeAfter(sourceFile: SourceFile, after: Node, newNode: Node, options?: InsertNodeOptions & ConfigurableEnd): this;
        /**
         * This function should be used to insert nodes in lists when nodes don't carry separators as the part of the node range,
         * i.e. arguments in arguments lists, parameters in parameter lists etc.
         * Note that separators are part of the node in statements and class elements.
         */
        insertNodeInListAfter(sourceFile: SourceFile, after: Node, newNode: Node): this;
        getChanges(): FileTextChanges[];
        private computeSpan(change, _sourceFile);
        private computeNewText(change, sourceFile);
        private getFormattedTextOfNode(node, sourceFile, pos, options);
        private static normalize(changes);
    }
    interface NonFormattedText {
        readonly text: string;
        readonly node: Node;
    }
    function applyChanges(text: string, changes: TextChange[]): string;
}
declare namespace ts {
    interface CodeFix {
        errorCodes: number[];
        getCodeActions(context: CodeFixContext): CodeAction[] | undefined;
    }
    interface CodeFixContext extends textChanges.TextChangesContext {
        errorCode: number;
        sourceFile: SourceFile;
        span: TextSpan;
        program: Program;
        host: LanguageServiceHost;
        cancellationToken: CancellationToken;
    }
    namespace codefix {
        function registerCodeFix(codeFix: CodeFix): void;
        function getSupportedErrorCodes(): string[];
        function getFixes(context: CodeFixContext): CodeAction[];
    }
}
declare namespace ts {
    interface Refactor {
        /** An unique code associated with each refactor */
        name: string;
        /** Description of the refactor to display in the UI of the editor */
        description: string;
        /** Compute the associated code actions */
        getEditsForAction(context: RefactorContext, actionName: string): RefactorEditInfo | undefined;
        /** Compute (quickly) which actions are available here */
        getAvailableActions(context: RefactorContext): ApplicableRefactorInfo[] | undefined;
    }
    interface RefactorContext extends textChanges.TextChangesContext {
        file: SourceFile;
        startPosition: number;
        endPosition?: number;
        program: Program;
        host: LanguageServiceHost;
        cancellationToken?: CancellationToken;
    }
    namespace refactor {
        function registerRefactor(refactor: Refactor): void;
        function getApplicableRefactors(context: RefactorContext): ApplicableRefactorInfo[];
        function getEditsForRefactor(context: RefactorContext, refactorName: string, actionName: string): RefactorEditInfo | undefined;
    }
    function getRefactorContextLength(context: RefactorContext): number;
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
    function tryGetCodeActionForInstallPackageTypes(host: LanguageServiceHost, moduleName: string): CodeAction | undefined;
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
    type ImportCodeActionKind = "CodeChange" | "InsertingIntoExistingImport" | "NewImport";
    type ImportDeclarationMap = AnyImportSyntax[][];
    interface ImportCodeAction extends CodeAction {
        kind: ImportCodeActionKind;
        moduleSpecifier?: string;
    }
    interface SymbolContext extends textChanges.TextChangesContext {
        sourceFile: SourceFile;
        symbolName: string;
    }
    interface SymbolAndTokenContext extends SymbolContext {
        symbolToken: Node | undefined;
    }
    interface ImportCodeFixContext extends SymbolAndTokenContext {
        host: LanguageServiceHost;
        checker: TypeChecker;
        compilerOptions: CompilerOptions;
        getCanonicalFileName(fileName: string): string;
        cachedImportDeclarations?: ImportDeclarationMap;
    }
    interface ImportCodeFixOptions extends ImportCodeFixContext {
        kind: ImportKind;
    }
    enum ImportKind {
        Named = 0,
        Default = 1,
        Namespace = 2,
    }
    function getCodeActionForImport(moduleSymbol: Symbol, context: ImportCodeFixOptions): ImportCodeAction[];
    function forEachExternalModule(checker: TypeChecker, allSourceFiles: ReadonlyArray<SourceFile>, cb: (module: Symbol) => void): void;
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
    function newNodesToChanges(newNodes: Node[], insertAfter: Node, context: CodeFixContext): FileTextChanges[];
    /**
     * Finds members of the resolved type that are missing in the class pointed to by class decl
     * and generates source code for the missing members.
     * @param possiblyMissingSymbols The collection of symbols to filter and then get insertions for.
     * @returns Empty string iff there are no member insertions.
     */
    function createMissingMemberNodes(classDeclaration: ClassLikeDeclaration, possiblyMissingSymbols: Symbol[], checker: TypeChecker): Node[];
    function createMethodFromCallExpression(callExpression: CallExpression, methodName: string, includeTypeScriptSyntax: boolean, makeStatic: boolean): MethodDeclaration;
    function createStubbedMethod(modifiers: ReadonlyArray<Modifier>, name: PropertyName, optional: boolean, typeParameters: ReadonlyArray<TypeParameterDeclaration> | undefined, parameters: ReadonlyArray<ParameterDeclaration>, returnType: TypeNode | undefined): MethodDeclaration;
}
declare namespace ts.codefix {
}
declare namespace ts.refactor.annotateWithTypeFromJSDoc {
}
declare namespace ts.refactor.convertFunctionToES6Class {
}
declare namespace ts.refactor.extractSymbol {
    /**
     * Compute the associated code actions
     * Exported for tests.
     */
    function getAvailableActions(context: RefactorContext): ApplicableRefactorInfo[] | undefined;
    function getEditsForAction(context: RefactorContext, actionName: string): RefactorEditInfo | undefined;
    namespace Messages {
        const CannotExtractRange: DiagnosticMessage;
        const CannotExtractImport: DiagnosticMessage;
        const CannotExtractSuper: DiagnosticMessage;
        const CannotExtractEmpty: DiagnosticMessage;
        const ExpressionExpected: DiagnosticMessage;
        const UselessConstantType: DiagnosticMessage;
        const StatementOrExpressionExpected: DiagnosticMessage;
        const CannotExtractRangeContainingConditionalBreakOrContinueStatements: DiagnosticMessage;
        const CannotExtractRangeContainingConditionalReturnStatement: DiagnosticMessage;
        const CannotExtractRangeContainingLabeledBreakOrContinueStatementWithTargetOutsideOfTheRange: DiagnosticMessage;
        const CannotExtractRangeThatContainsWritesToReferencesLocatedOutsideOfTheTargetRangeInGenerators: DiagnosticMessage;
        const TypeWillNotBeVisibleInTheNewScope: DiagnosticMessage;
        const FunctionWillNotBeVisibleInTheNewScope: DiagnosticMessage;
        const CannotExtractIdentifier: DiagnosticMessage;
        const CannotExtractExportedEntity: DiagnosticMessage;
        const CannotWriteInExpression: DiagnosticMessage;
        const CannotExtractReadonlyPropertyInitializerOutsideConstructor: DiagnosticMessage;
        const CannotExtractAmbientBlock: DiagnosticMessage;
        const CannotAccessVariablesFromNestedScopes: DiagnosticMessage;
        const CannotExtractToOtherFunctionLike: DiagnosticMessage;
        const CannotExtractToJSClass: DiagnosticMessage;
        const CannotExtractToExpressionArrowFunction: DiagnosticMessage;
    }
    enum RangeFacts {
        None = 0,
        HasReturn = 1,
        IsGenerator = 2,
        IsAsyncFunction = 4,
        UsesThis = 8,
        /**
         * The range is in a function which needs the 'static' modifier in a class
         */
        InStaticRegion = 16,
    }
    /**
     * Represents an expression or a list of statements that should be extracted with some extra information
     */
    interface TargetRange {
        readonly range: Expression | Statement[];
        readonly facts: RangeFacts;
        /**
         * A list of symbols that are declared in the selected range which are visible in the containing lexical scope
         * Used to ensure we don't turn something used outside the range free (or worse, resolve to a different entity).
         */
        readonly declarations: Symbol[];
    }
    /**
     * Result of 'getRangeToExtract' operation: contains either a range or a list of errors
     */
    type RangeToExtract = {
        readonly targetRange?: never;
        readonly errors: ReadonlyArray<Diagnostic>;
    } | {
        readonly targetRange: TargetRange;
        readonly errors?: never;
    };
    /**
     * getRangeToExtract takes a span inside a text file and returns either an expression or an array
     * of statements representing the minimum set of nodes needed to extract the entire span. This
     * process may fail, in which case a set of errors is returned instead (these are currently
     * not shown to the user, but can be used by us diagnostically)
     */
    function getRangeToExtract(sourceFile: SourceFile, span: TextSpan): RangeToExtract;
    enum Usage {
        Read = 1,
        Write = 2,
    }
}
declare namespace ts.refactor.installTypesForPackage {
}
declare namespace ts.refactor.installTypesForPackage {
}
declare namespace ts {
    /** The version of the language service API */
    const servicesVersion = "0.7";
    interface DisplayPartsSymbolWriter extends SymbolWriter {
        displayParts(): SymbolDisplayPart[];
    }
    function toEditorSettings(options: FormatCodeOptions | FormatCodeSettings): FormatCodeSettings;
    function toEditorSettings(options: EditorOptions | EditorSettings): EditorSettings;
    function displayPartsToString(displayParts: SymbolDisplayPart[]): string;
    function getDefaultCompilerOptions(): CompilerOptions;
    function getSupportedCodeFixes(): string[];
    function createLanguageServiceSourceFile(fileName: string, scriptSnapshot: IScriptSnapshot, scriptTarget: ScriptTarget, version: string, setNodeParents: boolean, scriptKind?: ScriptKind): SourceFile;
    let disableIncrementalParsing: boolean;
    function updateLanguageServiceSourceFile(sourceFile: SourceFile, scriptSnapshot: IScriptSnapshot, version: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean): SourceFile;
    /** A cancellation that throttles calls to the host */
    class ThrottledCancellationToken implements CancellationToken {
        private hostCancellationToken;
        private readonly throttleWaitMilliseconds;
        private lastCancellationCheckTime;
        constructor(hostCancellationToken: HostCancellationToken, throttleWaitMilliseconds?: number);
        isCancellationRequested(): boolean;
        throwIfCancellationRequested(): void;
    }
    function createLanguageService(host: LanguageServiceHost, documentRegistry?: DocumentRegistry): LanguageService;
    /** Names in the name table are escaped, so an identifier `__foo` will have a name table entry `___foo`. */
    function getNameTable(sourceFile: SourceFile): UnderscoreEscapedMap<number>;
    /**
     * Returns the containing object literal property declaration given a possible name node, e.g. "a" in x = { "a": 1 }
     */
    function getContainingObjectLiteralElement(node: Node): ObjectLiteralElement;
    function getPropertySymbolsFromContextualType(typeChecker: TypeChecker, node: ObjectLiteralElement): Symbol[];
    function getPropertySymbolsFromType(type: Type, propName: PropertyName): Symbol[];
    /**
     * Get the path of the default library files (lib.d.ts) as distributed with the typescript
     * node package.
     * The functionality is not supported if the ts module is consumed outside of a node module.
     */
    function getDefaultLibFilePath(options: CompilerOptions): string;
}
declare namespace ts.BreakpointResolver {
    /**
     * Get the breakpoint span in given sourceFile
     */
    function spanInSourceFileAtLocation(sourceFile: SourceFile, position: number): TextSpan;
}
declare let debugObjectHost: {
    CollectGarbage(): void;
};
declare namespace ts {
    interface ScriptSnapshotShim {
        /** Gets a portion of the script snapshot specified by [start, end). */
        getText(start: number, end: number): string;
        /** Gets the length of this script snapshot. */
        getLength(): number;
        /**
         * Returns a JSON-encoded value of the type:
         *   { span: { start: number; length: number }; newLength: number }
         *
         * Or undefined value if there was no change.
         */
        getChangeRange(oldSnapshot: ScriptSnapshotShim): string | undefined;
        /** Releases all resources held by this script snapshot */
        dispose?(): void;
    }
    interface Logger {
        log(s: string): void;
        trace(s: string): void;
        error(s: string): void;
    }
    /** Public interface of the host of a language service shim instance. */
    interface LanguageServiceShimHost extends Logger {
        getCompilationSettings(): string;
        /** Returns a JSON-encoded value of the type: string[] */
        getScriptFileNames(): string;
        getScriptKind?(fileName: string): ScriptKind;
        getScriptVersion(fileName: string): string;
        getScriptSnapshot(fileName: string): ScriptSnapshotShim;
        getLocalizedDiagnosticMessages(): string;
        getCancellationToken(): HostCancellationToken;
        getCurrentDirectory(): string;
        getDirectories(path: string): string;
        getDefaultLibFileName(options: string): string;
        getNewLine?(): string;
        getProjectVersion?(): string;
        useCaseSensitiveFileNames?(): boolean;
        getTypeRootsVersion?(): number;
        readDirectory(rootDir: string, extension: string, basePaths?: string, excludeEx?: string, includeFileEx?: string, includeDirEx?: string, depth?: number): string;
        readFile(path: string, encoding?: string): string | undefined;
        fileExists(path: string): boolean;
        getModuleResolutionsForFile?(fileName: string): string;
        getTypeReferenceDirectiveResolutionsForFile?(fileName: string): string;
        directoryExists(directoryName: string): boolean;
    }
    /** Public interface of the core-services host instance used in managed side */
    interface CoreServicesShimHost extends Logger {
        directoryExists(directoryName: string): boolean;
        fileExists(fileName: string): boolean;
        getCurrentDirectory(): string;
        getDirectories(path: string): string;
        /**
         * Returns a JSON-encoded value of the type: string[]
         *
         * @param exclude A JSON encoded string[] containing the paths to exclude
         *  when enumerating the directory.
         */
        readDirectory(rootDir: string, extension: string, basePaths?: string, excludeEx?: string, includeFileEx?: string, includeDirEx?: string, depth?: number): string;
        /**
         * Read arbitary text files on disk, i.e. when resolution procedure needs the content of 'package.json' to determine location of bundled typings for node modules
         */
        readFile(fileName: string): string | undefined;
        realpath?(path: string): string;
        trace(s: string): void;
        useCaseSensitiveFileNames?(): boolean;
    }
    interface ShimsFileReference {
        path: string;
        position: number;
        length: number;
    }
    /** Public interface of a language service instance shim. */
    interface ShimFactory {
        registerShim(shim: Shim): void;
        unregisterShim(shim: Shim): void;
    }
    interface Shim {
        dispose(_dummy: {}): void;
    }
    interface LanguageServiceShim extends Shim {
        languageService: LanguageService;
        dispose(_dummy: {}): void;
        refresh(throwOnError: boolean): void;
        cleanupSemanticCache(): void;
        getSyntacticDiagnostics(fileName: string): string;
        getSemanticDiagnostics(fileName: string): string;
        getCompilerOptionsDiagnostics(): string;
        getSyntacticClassifications(fileName: string, start: number, length: number): string;
        getSemanticClassifications(fileName: string, start: number, length: number): string;
        getEncodedSyntacticClassifications(fileName: string, start: number, length: number): string;
        getEncodedSemanticClassifications(fileName: string, start: number, length: number): string;
        getCompletionsAtPosition(fileName: string, position: number, options: GetCompletionsAtPositionOptions | undefined): string;
        getCompletionEntryDetails(fileName: string, position: number, entryName: string, options: string, source: string | undefined): string;
        getQuickInfoAtPosition(fileName: string, position: number): string;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): string;
        getBreakpointStatementAtPosition(fileName: string, position: number): string;
        getSignatureHelpItems(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { canRename: boolean, localizedErrorMessage: string, displayName: string, fullDisplayName: string, kind: string, kindModifiers: string, triggerSpan: { start; length } }
         */
        getRenameInfo(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string, textSpan: { start: number, length: number } }[]
         */
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string; textSpan: { start: number; length: number}; kind: string; name: string; containerKind: string; containerName: string }
         *
         * Or undefined value if no definition can be found.
         */
        getDefinitionAtPosition(fileName: string, position: number): string;
        getDefinitionAndBoundSpan(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string; textSpan: { start: number; length: number}; kind: string; name: string; containerKind: string; containerName: string }
         *
         * Or undefined value if no definition can be found.
         */
        getTypeDefinitionAtPosition(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string; textSpan: { start: number; length: number}; }[]
         */
        getImplementationAtPosition(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string; textSpan: { start: number; length: number}; isWriteAccess: boolean, isDefinition?: boolean }[]
         */
        getReferencesAtPosition(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { definition: <encoded>; references: <encoded>[] }[]
         */
        findReferences(fileName: string, position: number): string;
        /**
         * @deprecated
         * Returns a JSON-encoded value of the type:
         * { fileName: string; textSpan: { start: number; length: number}; isWriteAccess: boolean }[]
         */
        getOccurrencesAtPosition(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string; highlights: { start: number; length: number, isDefinition: boolean }[] }[]
         *
         * @param fileToSearch A JSON encoded string[] containing the file names that should be
         *  considered when searching.
         */
        getDocumentHighlights(fileName: string, position: number, filesToSearch: string): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { name: string; kind: string; kindModifiers: string; containerName: string; containerKind: string; matchKind: string; fileName: string; textSpan: { start: number; length: number}; } [] = [];
         */
        getNavigateToItems(searchValue: string, maxResultCount?: number, fileName?: string): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { text: string; kind: string; kindModifiers: string; bolded: boolean; grayed: boolean; indent: number; spans: { start: number; length: number; }[]; childItems: <recursive use of this type>[] } [] = [];
         */
        getNavigationBarItems(fileName: string): string;
        /** Returns a JSON-encoded value of the type ts.NavigationTree. */
        getNavigationTree(fileName: string): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { textSpan: { start: number, length: number }; hintSpan: { start: number, length: number }; bannerText: string; autoCollapse: boolean } [] = [];
         */
        getOutliningSpans(fileName: string): string;
        getTodoComments(fileName: string, todoCommentDescriptors: string): string;
        getBraceMatchingAtPosition(fileName: string, position: number): string;
        getIndentationAtPosition(fileName: string, position: number, options: string): string;
        getFormattingEditsForRange(fileName: string, start: number, end: number, options: string): string;
        getFormattingEditsForDocument(fileName: string, options: string): string;
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: string): string;
        /**
         * Returns JSON-encoded value of the type TextInsertion.
         */
        getDocCommentTemplateAtPosition(fileName: string, position: number): string;
        /**
         * Returns JSON-encoded boolean to indicate whether we should support brace location
         * at the current position.
         * E.g. we don't want brace completion inside string-literals, comments, etc.
         */
        isValidBraceCompletionAtPosition(fileName: string, position: number, openingBrace: number): string;
        /**
         * Returns a JSON-encoded TextSpan | undefined indicating the range of the enclosing comment, if it exists.
         */
        getSpanOfEnclosingComment(fileName: string, position: number, onlyMultiLine: boolean): string;
        getEmitOutput(fileName: string): string;
        getEmitOutputObject(fileName: string): EmitOutput;
    }
    interface ClassifierShim extends Shim {
        getEncodedLexicalClassifications(text: string, lexState: EndOfLineState, syntacticClassifierAbsent?: boolean): string;
        getClassificationsForLine(text: string, lexState: EndOfLineState, syntacticClassifierAbsent?: boolean): string;
    }
    interface CoreServicesShim extends Shim {
        getAutomaticTypeDirectiveNames(compilerOptionsJson: string): string;
        getPreProcessedFileInfo(fileName: string, sourceText: IScriptSnapshot): string;
        getTSConfigFileInfo(fileName: string, sourceText: IScriptSnapshot): string;
        getDefaultCompilationSettings(): string;
        discoverTypings(discoverTypingsJson: string): string;
    }
    class LanguageServiceShimHostAdapter implements LanguageServiceHost {
        private shimHost;
        private files;
        private loggingEnabled;
        private tracingEnabled;
        resolveModuleNames: (moduleName: string[], containingFile: string) => ResolvedModuleFull[];
        resolveTypeReferenceDirectives: (typeDirectiveNames: string[], containingFile: string) => ResolvedTypeReferenceDirective[];
        directoryExists: (directoryName: string) => boolean;
        constructor(shimHost: LanguageServiceShimHost);
        log(s: string): void;
        trace(s: string): void;
        error(s: string): void;
        getProjectVersion(): string;
        getTypeRootsVersion(): number;
        useCaseSensitiveFileNames(): boolean;
        getCompilationSettings(): CompilerOptions;
        getScriptFileNames(): string[];
        getScriptSnapshot(fileName: string): IScriptSnapshot;
        getScriptKind(fileName: string): ScriptKind;
        getScriptVersion(fileName: string): string;
        getLocalizedDiagnosticMessages(): any;
        getCancellationToken(): HostCancellationToken;
        getCurrentDirectory(): string;
        getDirectories(path: string): string[];
        getDefaultLibFileName(options: CompilerOptions): string;
        readDirectory(path: string, extensions?: ReadonlyArray<string>, exclude?: string[], include?: string[], depth?: number): string[];
        readFile(path: string, encoding?: string): string | undefined;
        fileExists(path: string): boolean;
    }
    class CoreServicesShimHostAdapter implements ParseConfigHost, ModuleResolutionHost, JsTyping.TypingResolutionHost {
        private shimHost;
        directoryExists: (directoryName: string) => boolean;
        realpath: (path: string) => string;
        useCaseSensitiveFileNames: boolean;
        constructor(shimHost: CoreServicesShimHost);
        readDirectory(rootDir: string, extensions: ReadonlyArray<string>, exclude: ReadonlyArray<string>, include: ReadonlyArray<string>, depth?: number): string[];
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string | undefined;
        getDirectories(path: string): string[];
    }
    interface RealizedDiagnostic {
        message: string;
        start: number;
        length: number;
        category: string;
        code: number;
    }
    function realizeDiagnostics(diagnostics: ReadonlyArray<Diagnostic>, newLine: string): RealizedDiagnostic[];
    class TypeScriptServicesFactory implements ShimFactory {
        private _shims;
        private documentRegistry;
        getServicesVersion(): string;
        createLanguageServiceShim(host: LanguageServiceShimHost): LanguageServiceShim;
        createClassifierShim(logger: Logger): ClassifierShim;
        createCoreServicesShim(host: CoreServicesShimHost): CoreServicesShim;
        close(): void;
        registerShim(shim: Shim): void;
        unregisterShim(shim: Shim): void;
    }
}
declare namespace TypeScript.Services {
    const TypeScriptServicesFactory: typeof ts.TypeScriptServicesFactory;
}
declare const toolsVersion = "2.7";
declare namespace ts {
    /**
     * Transform one or more nodes using the supplied transformers.
     * @param source A single `Node` or an array of `Node` objects.
     * @param transformers An array of `TransformerFactory` callbacks used to process the transformation.
     * @param compilerOptions Optional compiler options.
     */
    function transform<T extends Node>(source: T | T[], transformers: TransformerFactory<T>[], compilerOptions?: CompilerOptions): TransformationResult<T>;
}
