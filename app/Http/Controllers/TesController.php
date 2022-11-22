<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class TesController extends Controller
{
    public function index($mulai = 1)
    {
        $soalJson = [
            [
                "id" => 1,
                "tipe" => "reading",
                "panduan" => "Baca Soal Dengan Teliti dan Pilihlh Jawaban Yang Menurut Anda Paling Benar",
                "soal" => "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, odit sit beatae consequuntur accusantium quasi pariatur veritatis officiis at aperiam.",
                "paragraf" => "",
                "a" => "Lorem ipsum dolor sit amet.",
                "b" => "Lorem ipsum dolor sit amet.",
                "c" => "Lorem ipsum dolor sit amet.",
                "d" => "Lorem ipsum dolor sit amet.",
                "jawaban" => "a",
                "skor" => 33
            ],
            [
                "id" => 2,
                "tipe" => "listening",
                "panduan" => "Dengarkan Audio yang disajikan secara seksama, audio hanya dapat diputar satu kali",
                "soal" => "storage/audio/katak-ketawa.wav",
                "paragraf" => "",
                "a" => "Lorem ipsum dolor sit amet.",
                "b" => "Lorem ipsum dolor sit amet.",
                "c" => "Lorem ipsum dolor sit amet.",
                "d" => "Lorem ipsum dolor sit amet.",
                "jawaban" => "d",
                "skor" => 33
            ],
            [
                "id" => 3,
                "tipe" => "Structure",
                "panduan" => "Bacalah Dengan Paragraf dengan seksama dan isilah jawaban yang menurut anda paling benar ",
                "soal" => "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, odit sit beatae consequuntur accusantium quasi pariatur veritatis officiis at aperiam.",
                "paragraf" => "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, animi fuga laudantium tempore reprehenderit cumque officiis, similique fugit quaerat saepe labore dolorum ullam id. Voluptatibus aut velit veniam rem ipsam similique fugiat ullam excepturi eligendi dolorem aliquid sunt maxime natus consequatur tempore id sit assumenda, aperiam nesciunt sequi praesentium cupiditate.",
                "a" => "Lorem ipsum dolor sit amet.",
                "b" => "Lorem ipsum dolor sit amet.",
                "c" => "Lorem ipsum dolor sit amet.",
                "d" => "Lorem ipsum dolor sit amet.",
                "jawaban" => "c",
                "skor" => 70
            ],
            [
                "id" => 4,
                "tipe" => "Structure",
                "panduan" => "Bacalah Dengan Paragraf dengan seksama dan isilah bagian yang kosong dengan jawaban paling benar ",
                "soal" => "",
                "paragraf" => "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, animi fuga laudantium tempore reprehenderit cumque officiis, similique fugit quaerat saepe labore dolorum ullam id. Voluptatibus aut velit veniam rem ipsam similique fugiat ullam excepturi eligendi dolorem aliquid sunt maxime natus consequatur tempore id sit assumenda, aperiam nesciunt sequi praesentium cupiditate.",
                "a" => "Lorem ipsum dolor sit amet.",
                "b" => "Lorem ipsum dolor sit amet.",
                "c" => "Lorem ipsum dolor sit amet.",
                "d" => "Lorem ipsum dolor sit amet.",
                "jawaban" => "b",
                "skor" => 70
            ]
        ];

        $dataTampil = $soalJson[($mulai - 1)];

        return Inertia::render('Tes', [
            'nomor' => $mulai,
            'data' => $dataTampil,
        ]);
    }
}
