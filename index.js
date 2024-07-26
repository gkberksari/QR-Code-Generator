import inquirer from 'inquirer';
import QRcode from 'qrcode';

const questions = [
    {
        type: 'input',
        name: 'url',
        message: 'Type the URL.',
    },
];

inquirer.prompt(questions).then((answers) => {
    const url = answers.url;
    QRCode.toString(url, { type: 'terminal' }, (err, url) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(url);
  });

  // QR kodu bir dosyaya kaydetme
  QRCode.toFile('qrcode.png', url, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('QR code saved as qrcode.png in folder.');
  });
});