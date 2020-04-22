<?php

if ($_POST) {
    if (
        isset($_POST['name']) && !empty($_POST['name']) &&
        isset($_POST['number']) && !empty($_POST['number']) &&
        isset($_POST['email']) && !empty($_POST['email']) &&
        isset($_POST['content']) && !empty($_POST['content'])
    ) {
        $name = sanitizeString($_POST['name']);
        $number = sanitizeString($_POST['number']);
        $mail = sanitizeString($_POST['email']);
        $content = sanitizeString($_POST['content']);

        $to = 'sprzedaz@primonieruchomosci.pl';
        $subject = 'Formularz kontaktowy Apartamenty Chramcówki';
        $message = ("Wypełniono formularz kontaktowy na stronie apartamentychramcowki\n
                    nadawca: $name\n
                    mail: $mail\n
                    numer telefonu: $number\n
                    treść wiadomości: $content");
        $from = 'Apartamenty Chramcówki';
        $headers = 'Content-Type: text/plain; charset=UTF-8' . "\r\n" . 'From: ' . $from;

        mail($to, 'Apartamenty Chramcówki', $message, $headers);
        echo 'sent';

        header('Location: /');
    }
}

function sanitizeString($string)
{
    return strip_tags(trim($string));
}