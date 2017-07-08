class AddColumnToFacts < ActiveRecord::Migration[5.0]
  def change
    add_column :facts, :category, :string
  end
end
