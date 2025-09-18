import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";

const Attendance = () => {
    let [tryagain, setTryagain] = useState(false);
    let navigate = useNavigate();
    const videoRef = useRef(null);

    const [descriptor1, setDescriptor1] = useState([-0.14190642535686493, 0.09812208265066147, 0.10801038891077042, 0.028047088533639908, -0.06635131686925888, -0.05086112022399902, 0.0040534851141273975, -0.13823549449443817, 0.1625594198703766, -0.07760954648256302, 0.20284661650657654, 0.03932809457182884, -0.20408184826374054, -0.19131171703338623, 0.0011044597486034036, 0.11246424913406372, -0.1041717380285263, -0.20852278172969818, -0.03388839587569237, -0.09216076135635376, 0.028601132333278656, 0.03644811734557152, 0.0395837277173996, 0.05117930844426155, -0.09932027757167816, -0.37975582480430603, -0.05200284346938133, -0.10503123700618744, 0.030444230884313583, -0.11045537143945694, -0.024074319750070572, 0.07306131720542908, -0.1612466275691986, -0.02211260236799717, -0.03892112895846367, 0.08552494645118713, -0.0007919917698018253, -0.03542039915919304, 0.17212709784507751, 0.016650717705488205, -0.22544637322425842, -0.06753599643707275, 0.013551978394389153, 0.2708522379398346, 0.23018591105937958, -0.015322688035666943, 0.016177717596292496, -0.013932856731116772, 0.0935538038611412, -0.1484532505273819, -0.009951078332960606, 0.19698520004749298, 0.06535858660936356, 0.0018859489355236292, 0.051290955394506454, -0.14613460004329681, -0.03388209640979767, 0.011433239094913006, -0.10488971322774887, 0.00904072541743517, 0.007242604624480009, -0.12629207968711853, -0.029427845031023026, 0.02582527883350849, 0.19026528298854828, 0.029151150956749916, -0.06082114949822426, -0.11243875324726105, 0.17609378695487976, -0.1712343394756317, -0.06643044203519821, 0.04074976220726967, -0.15386946499347687, -0.14070171117782593, -0.2437300831079483, 0.05483074486255646, 0.4271825850009918, 0.05855581909418106, -0.15831664204597473,
        0.09819047152996063, -0.10980238020420074, -0.009812850505113602, 0.05582866445183754, 0.10112889111042023, -0.09429685026407242,
        0.05652006343007088, -0.1695982962846756, -0.0032617768738418818, 0.17331191897392273, 0.03284498304128647, -0.02305469661951065,
        0.20373620092868805, -0.027484983205795288, 0.05054757744073868, 0.10208483040332794, 0.010664389468729496, -0.06836102157831192,
        0.0533137284219265, -0.1229255273938179, -0.06999365985393524, 0.0882677361369133, -0.14679695665836334, 0.042473096400499344, 0.12809622287750244
        , -0.18599726259708405, 0.187338724732399, -0.0044374605640769005, -0.002369570778682828, 0.01225330401211977, 0.015549997799098492, -0.029608726501464844
        , -0.03425678610801697, 0.1745077222585678, -0.2580457329750061, 0.2810514271259308, 0.15416459739208221, 0.00894234050065279, 0.1265306919813156
        , 0.007870537228882313, 0.12459061294794083, -0.05543028190732002, -0.006337394006550312, -0.07219114899635315, -0.1195690780878067, 0.054715611040592194, -0.03984196111559868
        , 0.0030937069095671177, 0.0717499852180481]);
    const [descriptor, setDescriptor] = useState([]);

    const handleError = (err) =>
        toast.error(err, { position: "bottom-left" });
    const handleSuccess = (msg) =>
        toast.success(msg, { position: "bottom-right" });


    // Load models when component mounts
    useEffect(() => {
        const loadModels = async () => {
            await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
            await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
            await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
            startVideo();
        };
        loadModels();
    }, []);

    // Start webcam
    const startVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: {} })
            .then((stream) => {

                if (videoRef.current) {

                    videoRef.current.srcObject = stream;
                }
            })
            .catch((err) => console.error("Webcam error:", err));
    };
    // Stop webcam (attendance complete hone ke baad call karo)
    const stopVideo = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            let stream = videoRef.current.srcObject;
            let tracks = stream.getTracks();

            tracks.forEach((track) => track.stop()); // camera off
            videoRef.current.srcObject = null;
        }
    };

    // Detect face + get descriptor
    useEffect(() => {
        if (!videoRef.current) return;

        videoRef.current.addEventListener("play", () => {
            const interval = setInterval(async () => {
                 if (!videoRef.current) return; // safety check
                const detection = await faceapi
                    .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                    .withFaceLandmarks()
                    .withFaceDescriptor();

                if (detection) {
                    setDescriptor(Array.from(detection.descriptor)); // Convert Float32Array → normal array
                    const distance = faceapi.euclideanDistance(descriptor1, detection.descriptor);
                    if (distance < 0.58) { 
                        stopVideo();
                        handleSuccess("your attendance marked");
                        () => clearInterval(interval);
                        navigate("/Dashboard");

                    }
                    else {
                        setTryagain(!tryagain);
                        setTimeout(() => {
                            setTryagain(!tryagain);
                        }, 1000)

                    }
                }
            }, 3000); // check every 3 seconds

            return () => clearInterval(interval);
        });
    }, []);

    return (
        <div className="flex flex-col items-center p-5 m-5" >
            <div className="p-6 text-center attendance  m-5">
                <h1 className="text-2xl font-bold mb-2">try to face your at center</h1>
                {tryagain && <h1 className="text-2xl font-bold mb-2" style={{ color: "red" }}>Try Again !!!!!!!</h1>}

                <video ref={videoRef} width="720" height="560" autoPlay muted className="rounded-[40%]" />



            </div>
        </div>
    )
}

export default Attendance;