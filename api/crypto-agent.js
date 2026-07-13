export default function handler(req, res) {
  // XからMantle/BTC情報を取得する処理
  res.status(200).json({ 
    status: 'active', 
    message: 'Crypto info agent running',
    data: {
      mantle: 'Mantle network data here',
      btc: 'Bitcoin data here',
      timestamp: new Date().toISOString()
    }
  });
}
