// Vercel Serverless Function - Form Submission Handler
// Sends data to Telegram and stores submission

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, company, needs, challenge, email } = req.body;

        // Validate required fields
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        // Format message for Telegram
        const timestamp = new Date().toISOString();
        const needsList = Array.isArray(needs) ? needs.join(', ') : needs || 'Not specified';
        
        const message = `
🌊 *New FATHOM Lead*
━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${name}
🏢 *Company:* ${company || 'Not specified'}
📧 *Email:* ${email}

🎯 *Interests:* ${needsList}

💬 *Challenge:*
${challenge || 'Not specified'}

⏰ *Submitted:* ${timestamp}
━━━━━━━━━━━━━━━━━━━━
        `.trim();

        // Send to Telegram
        const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
        const telegramChatId = process.env.TELEGRAM_CHAT_ID;

        if (telegramToken && telegramChatId) {
            const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
            
            const telegramResponse = await fetch(telegramUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: telegramChatId,
                    text: message,
                    parse_mode: 'Markdown'
                })
            });

            if (!telegramResponse.ok) {
                console.error('Telegram send failed:', await telegramResponse.text());
            }
        } else {
            console.log('Telegram not configured. Submission:', { name, company, email, needs, challenge });
        }

        // Log submission (you can replace this with database storage)
        console.log('Form submission received:', {
            name,
            company,
            email,
            needs: needsList,
            challenge,
            timestamp
        });

        return res.status(200).json({ 
            success: true, 
            message: 'Thank you! We\'ll be in touch within 24 hours.' 
        });

    } catch (error) {
        console.error('Submission error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
