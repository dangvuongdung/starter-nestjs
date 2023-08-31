import { Wallet } from '@modules/wallet/domain/wallet.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ethers } from 'ethers';
import { Command, Hears, Help, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { Repository } from 'typeorm';

@Update()
@Injectable()
export class WalletService {
  constructor(@InjectRepository(Wallet) private wallet: Repository<Wallet>) { }

  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Welcome');
  }

  @Help()
  async helpCommand(ctx: Context) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async onSticker(ctx: Context) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hearsHi(ctx: Context) {
    await ctx.reply('Hey there');
  }

  @Command('wallet')
  async fetchWallet(ctx: Context) {
    const wallets = await this.wallet.find({
      where: { telegram_id: ctx.message.from.id },
    });

    let string = ''
    for (let i = 0; i < wallets.length; i++) {
      string += `address: ${wallets[i].address}`;
    }

    await ctx.reply(` ${string} 👇 Pick a chain we're interacting with:`);
  }
  @Command('newwallet')
  async newWallet(ctx: Context) {
    await ctx.reply(`👇 Pick a chain we're interacting with:`);
  }

  @Command('import')
  async import(ctx: Context) {
    const mnemonic = await ethers.Wallet.createRandom().mnemonic
    const walet = ethers.Wallet.fromMnemonic(mnemonic.phrase)

    const data = new Wallet()

    data.telegram_id = ctx.message.from.id
    data.address = walet.address
    data.priv_key = walet.privateKey
    data.name = mnemonic.phrase

    await this.wallet.save(data)

    await ctx.reply(`mnemonic: ${mnemonic.phrase} priv: ${walet.privateKey}, address: ${walet.address}`);
  }
}
