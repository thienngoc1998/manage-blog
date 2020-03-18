<?php

use Illuminate\Database\Seeder;

class companies extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1 ; $i<=10 ;$i++)
        {
            DB::table('companies')->insert([
                'name' => Str::random(10). $i,
                'address' => 'Ha Noi',
                'website' => Str::random(5).'.com.vn',
                'email' => Str::random(10).'@gmail.com',
            ]);
        }
    }
}
