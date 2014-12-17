require_relative "../lib/atm"
require_relative "../lib/account"

describe ATM do  
	let(:atm) { ATM.new }
	let(:account) { Account.new }

	describe '.balance' do
		context "newly opened account" do
			it 'should show the balance of zero' do
				expect(atm.balance(account)).to eq(0)
			end
		end

		context "account with transaction equal to $100" do
			it "should show a balance of $100" do
				# pending 'working on Account class'
				# account = Account.new #account && atm defined on ln 5 & 6 let(:atm) { ATM.new }
				# atm = ATM.new
				account.deposit(100)
				expect(atm.balance(account)).to eq(100)
			end
		end
	end
end
