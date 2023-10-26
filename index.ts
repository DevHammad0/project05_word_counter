import inquirer from 'inquirer'
import chalk from 'chalk';
import showBanner from 'node-banner'

async function main() {
    await showBanner('Word Counter', 'Welcome to our Word Counter Application!', 'blue', 'white');

    const answers: {
        sentence: string
    } = await inquirer.prompt([
        {
            type: "input",
            name: "sentence",
            message: chalk.cyan("Please enter your sentence to count the words:")
        }
    ])

    const words: string[] = answers.sentence.trim().split(/\s+/);
    console.log(chalk.green(`The word count of your sentence is ${chalk.magentaBright(words.length)}`));

    let characters: number = 0;
    for (let word of words) {
        characters += word.length;
    }
    console.log(chalk.green(`The character count of your sentence is ${chalk.magentaBright(characters)}`));

    const { askAgain } = await inquirer.prompt([
        {
            type: "confirm",
            name: "askAgain",
            message: chalk.cyan("Would you like to use our word counter again?")
        }
    ]);

    if (askAgain) {
        main();
    } else {
        console.log(chalk.yellow("Thank you for using our Word Counter application. Have a great day!"));
    }

}

main();
