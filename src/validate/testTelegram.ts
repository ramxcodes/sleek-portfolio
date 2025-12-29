// Quick test script to verify Telegram setup
// Uses Next.js environment variables (no dotenv needed)

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface TelegramBotInfo {
  ok: boolean;
  result?: {
    first_name: string;
    username: string;
  };
}

interface TelegramUpdate {
  ok: boolean;
  result: Array<{
    message: {
      chat: {
        id: number;
      };
    };
  }>;
}

interface TelegramSendResponse {
  ok: boolean;
  description?: string;
}

async function testTelegram(): Promise<void> {
  console.log('🔍 Testing Telegram Bot Setup...\n');

  // Check if environment variables are loaded
  if (!TELEGRAM_BOT_TOKEN) {
    console.log('❌ TELEGRAM_BOT_TOKEN not found in .env file!');
    console.log('   Please add TELEGRAM_BOT_TOKEN to your .env file');
    console.log('   Format: TELEGRAM_BOT_TOKEN="your-bot-token-here"\n');
    return;
  }

  // Test 1: Check bot info
  console.log('1️⃣ Checking bot status...');
  const botInfoResponse = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`,
  );
  const botInfo: TelegramBotInfo = await botInfoResponse.json();

  if (botInfo.ok && botInfo.result) {
    console.log('✅ Bot is active!');
    console.log(`   Name: ${botInfo.result.first_name}`);
    console.log(`   Username: @${botInfo.result.username}\n`);
  } else {
    console.log('❌ Bot token is invalid!\n');
    return;
  }

  // Test 2: Check for recent messages
  console.log('2️⃣ Checking for messages...');
  const updatesResponse = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`,
  );
  const updates: TelegramUpdate = await updatesResponse.json();

  if (updates.ok && updates.result.length > 0) {
    console.log('✅ Found messages!');
    const lastMessage = updates.result[updates.result.length - 1];
    const correctChatId = lastMessage.message.chat.id;
    console.log(`   Your correct Chat ID: ${correctChatId}`);

    if (correctChatId.toString() === TELEGRAM_CHAT_ID) {
      console.log('   ✅ Chat ID in .env is CORRECT!\n');
    } else {
      console.log(`   ⚠️  Chat ID in .env is WRONG!`);
      console.log(`   Current .env value: ${TELEGRAM_CHAT_ID}`);
      console.log(`   Should be: ${correctChatId}\n`);
    }
  } else {
    console.log('❌ No messages found!');
    if (botInfo.result) {
      console.log(
        `   👉 Go to Telegram and search for @${botInfo.result.username}`,
      );
    }
    console.log('   👉 Click START and send a message');
    console.log('   👉 Then run this script again\n');
    return;
  }

  // Test 3: Try sending a test message
  console.log('3️⃣ Sending test message...');
  const testMessage =
    '🎉 Contact form is working! This is a test message from your portfolio.';

  const sendResponse = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: testMessage,
      }),
    },
  );

  const sendResult: TelegramSendResponse = await sendResponse.json();

  if (sendResult.ok) {
    console.log('✅ Test message sent successfully!');
    console.log('   Check your Telegram - you should see the test message\n');
    console.log(
      '🎉 EVERYTHING IS WORKING! Your contact form should work now.\n',
    );
  } else {
    console.log('❌ Failed to send message!');
    console.log(`   Error: ${sendResult.description}\n`);
  }
}

testTelegram().catch(console.error);
