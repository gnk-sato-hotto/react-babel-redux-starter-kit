/* エラーメッセージ一覧 */
// エラーメッセージは改行して表示することもあるため, 配列として返す.

/* 全ページ共通 */
export const UNAUTHORIZATION  = {
  title: '認証に失敗しました',
  messages: ['認証に失敗しました. ログイン画面に戻ります.']
};

export const FORBIDDEN  = {
  title: '権限がありません',
  messages: ['本サービスへの権限がありません. ログイン画面に戻ります.']
};

export const UNEXPECTED_ERROR =  {
  title: '予期しないエラーが発生しました.',
  messages: ['予期しないエラーが発生しました.']
};

export const UNEXPECTED_ERROR_LOGOUT =  {
  title: '予期しないエラーが発生しました.',
  messages: ['予期しないエラーが発生しました. ログイン画面に戻ります.']
};

// 取得系のエラー
export const FETCH_ERROR = {
  currentUser: {
    title: 'ログインユーザの取得に失敗しました',
    messages: ['ログインしているユーザの取得に失敗しました. ログイン画面に戻ります.'],
  },

  something: (name) => {
    return {
      messages: [`${name}の取得に失敗しました`],
    };
  },
};

// フォーマット系のエラー
export const FORMAT_ERROR = {
  email: {
    messages: ['Email の形式が適切ではありません'],
  },
  password: {
    messages: (type) => {
      const base = 'パスワードの形式が適切ではありません';
      switch (type) {
        case 'current':
          return [`現在の${base}`];

        case 'temp':
          return [`仮${base}`];

        case 'new':
          return [`新しい${base}`];

        default:
          return [base];
        break;
      };
    },
  },

  requireInput: (name) => {
    return {
      messages: [`${name}を入力してください`],
    };
  },

  overUpperLimit: (name, limit) => {
    return {
      messages: [`${name}は ${limit} 文字以内で入力してください`],
    };
  },

  overUpperLimit: (name, limit) => {
    return {
      messages: [`${name}は ${limit} 文字以内で入力してください`],
    };
  },

  underLowerLimit: (name, limit) => {
    return {
      messages: [`${name}は ${limit} 文字以上で入力してください`],
    };
  },

  outOfRange: (name, min, max) => {
    return {
      messages: [`${name}は ${min} 以上 ${max} 以下で入力してください`],
    };
  },

  invalidEmoji: (name) => {
    name = name ? name + 'に' : '';
    return {
      messages: [`${name}絵文字は指定できません`],
    };
  },

  invalidSpecialChar: (name) => {
    name = name ? name + 'に' : '';
    return {
      messages: [`${name}特殊記号は指定できません`],
    };
  },

  requireHalfWidthDigit: (name) => {
    name = name ? name + 'は' : '';
    return {
      messages: [`${name}半角数字で入力してください`],
    };
  },
};

export const CUD = {
  failedToCreate: (name) => {
    return {
      messages: [`${name}の作成に失敗しました`],
    };
  },

  failedToUpdate: (name) => {
    return {
      messages: [`${name}の保存に失敗しました`],
    };
  },

  failedToDelete: (name) => {
    return {
      messages: [`${name}の廃止に失敗しました`],
    };
  },
}

/* ログイン */
export const FAILED_TO_LOGIN  = {
  title: '',
  messages: ['ログインに失敗しました.', 'Email またはパスワードが不正です.'],
};

/* パスワード初期設定 */
export const INITIALIZE_PASSWORD = {
  samePassword: {
    messages: ['新しいパスワードが仮パスワードと一致しています'],
  },

  failedToInitialize: {
    messages: ['パスワードの初期化に失敗しました'],
  },
};

/* パスワード忘れ */
export const FORGOT_PASSWORD = {
  requireVerificationCode: {
    messages: ['再設定コードを入力してください'],
  },

  failedToSendVerification: {
    messages: ['再設定コードの送信に失敗しました. しばらくしてから再度お試しください.'],
  },

  failedToResetPassword: {
    messages: ['パスワードのリセットに失敗しました.'],
  },
};

/* パスワード変更 */
export const CHANGE_PASSWORD = {
  differentNewAndConfirmed: {
    messages: ['新しいパスワードと確認用パスワードが一致しておりません'],
  },

  failedToChangePassword: {
    messages: ['パスワードの変更に失敗しました'],
  },
};

/* ユーザ新規作成 */
export const CREATE_USER = {
  unableCreateLeader: {
    messages: ['これ以上リーダーを作成できません'],
  },

  unableCreateMember: {
    messages: ['これ以上メンバーを作成できません'],
  },

  alreadyExist: {
    messages: ['既に登録されている Email です'],
  },
};


